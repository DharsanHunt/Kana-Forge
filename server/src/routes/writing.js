import express from 'express';
import { verifyFirebaseToken } from '../middleware/auth.js';
import { query } from '../config/db.js';

const router = express.Router();

// Get writing practice progress
router.get('/progress', verifyFirebaseToken, async (req, res, next) => {
    try {
        const userId = req.user.id;
        const result = await query(
            `SELECT character, character_type as "characterType", last_score as "lastScore", practice_count as "practiceCount", mastered, updated_at as "updatedAt"
             FROM user_writing_progress
             WHERE user_id = $1
             ORDER BY updated_at DESC`,
            [userId]
        );
        res.json({ writingProgress: result.rows });
    } catch (error) {
        next(error);
    }
});

// Record a writing practice attempt
router.post('/progress', verifyFirebaseToken, async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { character, characterType, score } = req.body;

        if (!character) {
            return res.status(400).json({ error: 'character is required' });
        }

        const mastered = typeof score === 'number' && score >= 8;

        const result = await query(
            `INSERT INTO user_writing_progress (user_id, character, character_type, last_score, practice_count, mastered, updated_at)
             VALUES ($1, $2, $3, $4, 1, $5, NOW())
             ON CONFLICT (user_id, character) DO UPDATE
             SET last_score = EXCLUDED.last_score,
                 practice_count = user_writing_progress.practice_count + 1,
                 mastered = user_writing_progress.mastered OR EXCLUDED.mastered,
                 updated_at = NOW()
             RETURNING character, character_type as "characterType", last_score as "lastScore", practice_count as "practiceCount", mastered, updated_at as "updatedAt"`,
            [userId, character, characterType || 'hiragana', score || 0, mastered]
        );

        res.json({ progress: result.rows[0] });
    } catch (error) {
        next(error);
    }
});

export default router;
