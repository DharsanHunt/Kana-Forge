import express from 'express';
import { verifyFirebaseToken } from '../middleware/auth.js';
import { query, getClient } from '../config/db.js';

const router = express.Router();

// Get quiz history for the authenticated user
router.get('/history', verifyFirebaseToken, async (req, res, next) => {
    try {
        const userId = req.user.id;
        const result = await query(
            `SELECT id, category, score, total_questions as "totalQuestions", completed_at as "completedAt"
             FROM quiz_attempts
             WHERE user_id = $1
             ORDER BY completed_at DESC
             LIMIT 50`,
            [userId]
        );
        res.json({ attempts: result.rows });
    } catch (error) {
        next(error);
    }
});

// Submit a completed quiz attempt with all individual answer records in a transaction
router.post('/attempts', verifyFirebaseToken, async (req, res, next) => {
    const client = await getClient();
    try {
        const userId = req.user.id;
        const { category, score, total, answers } = req.body;

        if (score === undefined || total === undefined) {
            return res.status(400).json({ error: 'score and total are required' });
        }

        await client.query('BEGIN');

        // 1. Insert quiz attempt
        const attemptRes = await client.query(
            `INSERT INTO quiz_attempts (user_id, category, score, total_questions)
             VALUES ($1, $2, $3, $4)
             RETURNING id, category, score, total_questions as total, completed_at`,
            [userId, category || 'All', score, total]
        );
        const attemptId = attemptRes.rows[0].id;

        // 2. Insert individual question answers if provided
        if (Array.isArray(answers)) {
            for (const ans of answers) {
                await client.query(
                    `INSERT INTO quiz_answers (attempt_id, question_id, user_answer, is_correct)
                     VALUES ($1, $2, $3, $4)`,
                    [attemptId, ans.id || ans.questionId, ans.userAnswer || '', !!ans.correct]
                );

                // If wrong answer, record or increment in user_wrong_answers (review deck)
                if (!ans.correct && ans.question && ans.correctAnswer) {
                    await client.query(
                        `INSERT INTO user_wrong_answers (user_id, question_id, question, correct_answer, category, wrong_count, in_review_list, updated_at)
                         VALUES ($1, $2, $3, $4, $5, 1, TRUE, NOW())
                         ON CONFLICT (user_id, question_id) DO UPDATE
                         SET wrong_count = user_wrong_answers.wrong_count + 1,
                             in_review_list = TRUE,
                             updated_at = NOW()`,
                        [userId, ans.id || ans.questionId, ans.question, ans.correctAnswer, category || 'general']
                    );
                }
            }
        }

        // 3. Update study streak
        const today = new Date().toISOString().split('T')[0];
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

        const progressRes = await client.query(
            'SELECT streak_count, last_study_date FROM user_progress WHERE user_id = $1 FOR UPDATE',
            [userId]
        );

        let streakCount = 1;
        if (progressRes.rows.length > 0) {
            const currentStreak = progressRes.rows[0].streak_count || 0;
            const lastDate = progressRes.rows[0].last_study_date
                ? progressRes.rows[0].last_study_date.toISOString().split('T')[0]
                : null;

            if (lastDate === today) {
                streakCount = currentStreak;
            } else if (lastDate === yesterday) {
                streakCount = currentStreak + 1;
            } else {
                streakCount = 1;
            }
        }

        await client.query(
            `INSERT INTO user_progress (user_id, streak_count, last_study_date, updated_at)
             VALUES ($1, $2, $3, NOW())
             ON CONFLICT (user_id) DO UPDATE
             SET streak_count = $2, last_study_date = $3, updated_at = NOW()`,
            [userId, streakCount, today]
        );

        await client.query('COMMIT');

        res.status(201).json({
            success: true,
            attempt: attemptRes.rows[0],
            streak: { count: streakCount, lastStudyDate: today },
        });
    } catch (error) {
        await client.query('ROLLBACK');
        next(error);
    } finally {
        client.release();
    }
});

export default router;
