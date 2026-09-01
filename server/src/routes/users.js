import express from 'express';
import { verifyFirebaseToken } from '../middleware/auth.js';
import { query, getClient } from '../config/db.js';
import { admin } from '../config/firebase.js';

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
                [name.trim(), user.id]
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

// Update Username / Display Name
router.put('/profile', verifyFirebaseToken, async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { name } = req.body;

        if (!name || typeof name !== 'string') {
            return res.status(400).json({ error: 'Username is required' });
        }

        const trimmedName = name.trim();
        if (trimmedName.length < 2) {
            return res.status(400).json({ error: 'Username must be at least 2 characters long' });
        }
        if (trimmedName.length > 50) {
            return res.status(400).json({ error: 'Username cannot exceed 50 characters' });
        }

        const updated = await query(
            'UPDATE users SET name = $1, updated_at = NOW() WHERE id = $2 RETURNING id, firebase_uid, email, name, created_at, updated_at',
            [trimmedName, userId]
        );

        if (updated.rows.length === 0) {
            return res.status(404).json({ error: 'User record not found' });
        }

        res.json({
            success: true,
            user: updated.rows[0],
            message: 'Username updated successfully',
        });
    } catch (error) {
        next(error);
    }
});

// Permanently Delete Account & Associated Learner Data
router.delete('/account', verifyFirebaseToken, async (req, res, next) => {
    const client = await getClient();
    try {
        const userId = req.user.id;
        const firebaseUid = req.user.firebase_uid;

        await client.query('BEGIN');

        // Delete user record from PostgreSQL (foreign keys configured with ON DELETE CASCADE will cleanly remove all child progress rows)
        await client.query('DELETE FROM users WHERE id = $1', [userId]);

        await client.query('COMMIT');

        // Delete from Firebase Auth if admin SDK is active
        try {
            if (admin && admin.auth) {
                await admin.auth().deleteUser(firebaseUid);
            }
        } catch (fbErr) {
            console.warn('Firebase Admin deleteUser notice (may have been deleted on client):', fbErr.message);
        }

        res.json({
            success: true,
            message: 'Account and associated learner data permanently deleted successfully.',
        });
    } catch (error) {
        await client.query('ROLLBACK');
        next(error);
    } finally {
        client.release();
    }
});

export default router;
