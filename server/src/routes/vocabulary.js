import express from 'express';
import { verifyFirebaseToken } from '../middleware/auth.js';
import { query } from '../config/db.js';

const router = express.Router();

// Get all saved vocabulary words for the user
router.get('/saved', verifyFirebaseToken, async (req, res, next) => {
    try {
        const userId = req.user.id;
        const result = await query(
            `SELECT word_id as id, word, reading, romaji, meaning, topic, saved_at as "savedAt"
             FROM user_saved_words
             WHERE user_id = $1
             ORDER BY saved_at DESC`,
            [userId]
        );
        res.json({ savedWords: result.rows });
    } catch (error) {
        next(error);
    }
});

// Save a vocabulary word
router.post('/save', verifyFirebaseToken, async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { id, word, reading, romaji, meaning, topic } = req.body;

        if (!id || !word) {
            return res.status(400).json({ error: 'Word id and word are required' });
        }

        const result = await query(
            `INSERT INTO user_saved_words (user_id, word_id, word, reading, romaji, meaning, topic, saved_at)
             VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())
             ON CONFLICT (user_id, word_id) DO UPDATE
             SET word = EXCLUDED.word, reading = EXCLUDED.reading, romaji = EXCLUDED.romaji, meaning = EXCLUDED.meaning, topic = EXCLUDED.topic
             RETURNING word_id as id, word, reading, romaji, meaning, topic, saved_at as "savedAt"`,
            [userId, id, word, reading || '', romaji || '', meaning || '', topic || '']
        );

        res.status(201).json({ savedWord: result.rows[0] });
    } catch (error) {
        next(error);
    }
});

// Remove a saved vocabulary word
router.delete('/:wordId', verifyFirebaseToken, async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { wordId } = req.params;

        await query(
            'DELETE FROM user_saved_words WHERE user_id = $1 AND word_id = $2',
            [userId, wordId]
        );

        res.json({ success: true, removedWordId: wordId });
    } catch (error) {
        next(error);
    }
});

export default router;
