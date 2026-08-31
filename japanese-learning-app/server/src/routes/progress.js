import express from 'express';
import { verifyFirebaseToken } from '../middleware/auth.js';
import { query, getClient } from '../config/db.js';

const router = express.Router();

// Get aggregated user progress
router.get('/', verifyFirebaseToken, async (req, res, next) => {
    try {
        const userId = req.user.id;

        // 1. Progress & Streak
        const progressRes = await query(
            'SELECT streak_count, last_study_date, selected_level FROM user_progress WHERE user_id = $1',
            [userId]
        );
        const progressRecord = progressRes.rows[0] || { streak_count: 0, last_study_date: null, selected_level: 'N5' };

        // 2. Completed Lessons
        const lessonsRes = await query(
            'SELECT lesson_id FROM user_lessons WHERE user_id = $1',
            [userId]
        );
        const completedLessons = lessonsRes.rows.map(r => r.lesson_id);

        // 3. Quiz Scores (History)
        const quizRes = await query(
            `SELECT category, score, total_questions as total, completed_at::date::text as date
             FROM quiz_attempts
             WHERE user_id = $1
             ORDER BY completed_at ASC`,
            [userId]
        );

        // 4. Saved Words
        const wordsRes = await query(
            `SELECT word_id as id, word, reading, romaji, meaning, topic
             FROM user_saved_words
             WHERE user_id = $1
             ORDER BY saved_at DESC`,
            [userId]
        );

        // 5. Wrong Answers / Review List
        const wrongRes = await query(
            `SELECT question_id as id, question, correct_answer as "correctAnswer", category, wrong_count as "wrongCount", in_review_list as "inReviewList"
             FROM user_wrong_answers
             WHERE user_id = $1
             ORDER BY updated_at DESC`,
            [userId]
        );

        const reviewList = wrongRes.rows
            .filter(r => r.inReviewList)
            .map(({ id, question, correctAnswer, category }) => ({ id, question, correctAnswer, category }));

        const weakSpots = wrongRes.rows.map(({ id, question, correctAnswer, category, wrongCount }) => ({
            id, question, correctAnswer, category, wrongCount,
        }));

        res.json({
            progress: {
                completedLessons,
                quizScores: quizRes.rows,
                savedWords: wordsRes.rows,
                reviewList,
                weakSpots,
                streak: {
                    count: progressRecord.streak_count,
                    lastStudyDate: progressRecord.last_study_date ? progressRecord.last_study_date.toISOString().split('T')[0] : null,
                },
                selectedLevel: progressRecord.selected_level || 'N5',
            },
        });
    } catch (error) {
        next(error);
    }
});

// Update JLPT level preference
router.put('/level', verifyFirebaseToken, async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { level } = req.body;

        if (!level) {
            return res.status(400).json({ error: 'Level is required' });
        }

        await query(
            `UPDATE user_progress
             SET selected_level = $1, updated_at = NOW()
             WHERE user_id = $2`,
            [level, userId]
        );

        res.json({ success: true, level });
    } catch (error) {
        next(error);
    }
});

// Bulk migration of localStorage data to PostgreSQL
router.post('/migrate', verifyFirebaseToken, async (req, res, next) => {
    const client = await getClient();
    try {
        const userId = req.user.id;
        const { localProgress } = req.body;

        if (!localProgress) {
            return res.status(400).json({ error: 'No progress payload provided for migration.' });
        }

        await client.query('BEGIN');

        // Migrate completed lessons
        if (Array.isArray(localProgress.completedLessons)) {
            for (const lessonId of localProgress.completedLessons) {
                await client.query(
                    `INSERT INTO user_lessons (user_id, lesson_id)
                     VALUES ($1, $2)
                     ON CONFLICT (user_id, lesson_id) DO NOTHING`,
                    [userId, lessonId]
                );
            }
        }

        // Migrate streak if greater than current
        if (localProgress.streak && typeof localProgress.streak.count === 'number') {
            await client.query(
                `INSERT INTO user_progress (user_id, streak_count, last_study_date)
                 VALUES ($1, $2, $3)
                 ON CONFLICT (user_id) DO UPDATE
                 SET streak_count = GREATEST(user_progress.streak_count, EXCLUDED.streak_count),
                     last_study_date = COALESCE(user_progress.last_study_date, EXCLUDED.last_study_date)`,
                [userId, localProgress.streak.count, localProgress.streak.lastStudyDate || null]
            );
        }

        // Migrate saved words
        if (Array.isArray(localProgress.savedWords)) {
            for (const w of localProgress.savedWords) {
                if (w && w.id && w.word) {
                    await client.query(
                        `INSERT INTO user_saved_words (user_id, word_id, word, reading, romaji, meaning, topic)
                         VALUES ($1, $2, $3, $4, $5, $6, $7)
                         ON CONFLICT (user_id, word_id) DO NOTHING`,
                        [userId, w.id, w.word, w.reading || '', w.romaji || '', w.meaning || '', w.topic || '']
                    );
                }
            }
        }

        // Migrate weak spots / review items
        if (Array.isArray(localProgress.weakSpots)) {
            for (const item of localProgress.weakSpots) {
                if (item && item.id && item.question) {
                    await client.query(
                        `INSERT INTO user_wrong_answers (user_id, question_id, question, correct_answer, category, wrong_count, in_review_list)
                         VALUES ($1, $2, $3, $4, $5, $6, TRUE)
                         ON CONFLICT (user_id, question_id) DO UPDATE
                         SET wrong_count = GREATEST(user_wrong_answers.wrong_count, EXCLUDED.wrong_count)`,
                        [userId, item.id, item.question, item.correctAnswer || '', item.category || 'general', item.wrongCount || 1]
                    );
                }
            }
        }

        await client.query('COMMIT');
        res.json({ success: true, message: 'LocalStorage progress successfully migrated to PostgreSQL.' });
    } catch (error) {
        await client.query('ROLLBACK');
        next(error);
    } finally {
        client.release();
    }
});

export default router;
