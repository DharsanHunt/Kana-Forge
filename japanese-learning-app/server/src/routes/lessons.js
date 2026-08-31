import express from 'express';
import { verifyFirebaseToken } from '../middleware/auth.js';
import { query, getClient } from '../config/db.js';

const router = express.Router();

// Get list of completed lesson IDs
router.get('/completed', verifyFirebaseToken, async (req, res, next) => {
    try {
        const userId = req.user.id;
        const result = await query(
            'SELECT lesson_id, completed_at FROM user_lessons WHERE user_id = $1 ORDER BY completed_at ASC',
            [userId]
        );
        res.json({ completedLessons: result.rows.map(r => r.lesson_id) });
    } catch (error) {
        next(error);
    }
});

// Complete a lesson and update daily study streak
router.post('/complete', verifyFirebaseToken, async (req, res, next) => {
    const client = await getClient();
    try {
        const userId = req.user.id;
        const { lessonId } = req.body;

        if (!lessonId) {
            return res.status(400).json({ error: 'lessonId is required' });
        }

        await client.query('BEGIN');

        // 1. Insert lesson completion
        await client.query(
            `INSERT INTO user_lessons (user_id, lesson_id)
             VALUES ($1, $2)
             ON CONFLICT (user_id, lesson_id) DO NOTHING`,
            [userId, lessonId]
        );

        // 2. Calculate and update streak
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
                streakCount = currentStreak; // Already studied today
            } else if (lastDate === yesterday) {
                streakCount = currentStreak + 1; // Consecutive day streak
            } else {
                streakCount = 1; // Reset streak
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

        res.json({
            success: true,
            lessonId,
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
