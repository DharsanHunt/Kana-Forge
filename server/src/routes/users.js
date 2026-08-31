import express from 'express';
import { verifyFirebaseToken } from '../middleware/auth.js';
import { query } from '../config/db.js';

const router = express.Router();

// Synchronize Firebase user with PostgreSQL database
router.post('/sync', verifyFirebaseToken, async (req, res, next) => {
    try {
        const user = req.user;
        const { name } = req.body;

        // Optionally update name if provided
        if (name && name !== user.name) {
            const updated = await query(
                'UPDATE users SET name = $1, updated_at = NOW() WHERE id = $2 RETURNING id, firebase_uid, email, name, created_at',
                [name, user.id]
            );
            return res.json({ user: updated.rows[0] });
        }

        res.json({ user });
    } catch (error) {
        next(error);
    }
});

// Get current authenticated user profile
router.get('/me', verifyFirebaseToken, async (req, res, next) => {
    try {
        const user = req.user;
        const progressRes = await query(
            'SELECT streak_count, last_study_date, selected_level FROM user_progress WHERE user_id = $1',
            [user.id]
        );

        res.json({
            user: {
                ...user,
                progress: progressRes.rows[0] || { streak_count: 0, selected_level: 'N5' },
            },
        });
    } catch (error) {
        next(error);
    }
});

export default router;
