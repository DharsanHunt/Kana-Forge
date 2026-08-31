import express from 'express';
import { verifyFirebaseToken } from '../middleware/auth.js';
import { query } from '../config/db.js';

const router = express.Router();

// Get all wrong answers and weak spots
router.get('/', verifyFirebaseToken, async (req, res, next) => {
    try {
        const userId = req.user.id;
        const result = await query(
            `SELECT question_id as id, question, correct_answer as "correctAnswer", category, wrong_count as "wrongCount", in_review_list as "inReviewList", updated_at as "updatedAt"
             FROM user_wrong_answers
             WHERE user_id = $1
             ORDER BY wrong_count DESC, updated_at DESC`,
            [userId]
        );
        res.json({ wrongAnswers: result.rows });
    } catch (error) {
        next(error);
    }
});

// Add multiple items to review list / weak spots
router.post('/', verifyFirebaseToken, async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { items } = req.body;

        if (!Array.isArray(items) || items.length === 0) {
            return res.status(400).json({ error: 'items array is required' });
        }

        for (const item of items) {
            if (item.id && item.question && item.correctAnswer) {
                await query(
                    `INSERT INTO user_wrong_answers (user_id, question_id, question, correct_answer, category, wrong_count, in_review_list, updated_at)
                     VALUES ($1, $2, $3, $4, $5, 1, TRUE, NOW())
                     ON CONFLICT (user_id, question_id) DO UPDATE
                     SET wrong_count = user_wrong_answers.wrong_count + 1,
                         in_review_list = TRUE,
                         updated_at = NOW()`,
                    [userId, item.id, item.question, item.correctAnswer, item.category || 'general']
                );
            }
        }

        res.json({ success: true, count: items.length });
    } catch (error) {
        next(error);
    }
});

// Remove item from review list
router.delete('/:questionId', verifyFirebaseToken, async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { questionId } = req.params;

        await query(
            `UPDATE user_wrong_answers
             SET in_review_list = FALSE, updated_at = NOW()
             WHERE user_id = $1 AND question_id = $2`,
            [userId, questionId]
        );

        res.json({ success: true, removedId: questionId });
    } catch (error) {
        next(error);
    }
});

export default router;
