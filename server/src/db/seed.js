import { pool } from '../config/db.js';

async function seed() {
    console.log('🌱 Seeding demo data into PostgreSQL for Kana-Forge...');
    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        // 1. Demo User
        const userRes = await client.query(`
            INSERT INTO users (firebase_uid, email, name)
            VALUES ('demo_user_uid_12345', 'learner@kanaforge.jp', 'Forge Apprentice')
            ON CONFLICT (firebase_uid) DO UPDATE
            SET email = EXCLUDED.email, name = EXCLUDED.name
            RETURNING id;
        `);
        const userId = userRes.rows[0].id;
        console.log(`- Created/Updated Demo User: ${userId}`);

        // 2. User Progress
        await client.query(`
            INSERT INTO user_progress (user_id, streak_count, last_study_date, selected_level)
            VALUES ($1, 5, CURRENT_DATE, 'N5')
            ON CONFLICT (user_id) DO UPDATE
            SET streak_count = 5, last_study_date = CURRENT_DATE, selected_level = 'N5';
        `, [userId]);
        console.log('- Seeded User Progress & Streak');

        // 3. Completed Lessons
        const demoLessons = ['n5-hiragana-1', 'n5-hiragana-2'];
        for (const lessonId of demoLessons) {
            await client.query(`
                INSERT INTO user_lessons (user_id, lesson_id)
                VALUES ($1, $2)
                ON CONFLICT (user_id, lesson_id) DO NOTHING;
            `, [userId, lessonId]);
        }
        console.log(`- Seeded ${demoLessons.length} Completed Lessons`);

        // 4. Quiz Attempt & Answers
        const attemptRes = await client.query(`
            INSERT INTO quiz_attempts (user_id, category, score, total_questions)
            VALUES ($1, 'hiragana', 4, 5)
            RETURNING id;
        `, [userId]);
        const attemptId = attemptRes.rows[0].id;

        const demoAnswers = [
            { qId: 'q1', ans: 'a', correct: true },
            { qId: 'q2', ans: 'ki', correct: true },
            { qId: 'q3', ans: 'su', correct: true },
            { qId: 'q4', ans: 'nu', correct: false }, // wrong answer
            { qId: 'q5', ans: 'wa', correct: true },
        ];

        for (const ans of demoAnswers) {
            await client.query(`
                INSERT INTO quiz_answers (attempt_id, question_id, user_answer, is_correct)
                VALUES ($1, $2, $3, $4);
            `, [attemptId, ans.qId, ans.ans, ans.correct]);
        }
        console.log('- Seeded Quiz Attempt and Answers');

        // 5. Wrong Answer / Review Deck
        await client.query(`
            INSERT INTO user_wrong_answers (user_id, question_id, question, correct_answer, category, wrong_count, in_review_list)
            VALUES ($1, 'q4', 'What is the romaji for ね?', 'ne', 'hiragana', 1, true)
            ON CONFLICT (user_id, question_id) DO UPDATE
            SET wrong_count = user_wrong_answers.wrong_count + 1;
        `, [userId]);
        console.log('- Seeded Wrong Answer & Weak Spot');

        // 6. Saved Vocabulary
        const demoWords = [
            { id: 'v1', word: 'ごはん', reading: 'ごはん', romaji: 'gohan', meaning: 'rice / meal', topic: 'Food' },
            { id: 'v4', word: 'さかな', reading: 'さかな', romaji: 'sakana', meaning: 'fish', topic: 'Food' },
        ];
        for (const word of demoWords) {
            await client.query(`
                INSERT INTO user_saved_words (user_id, word_id, word, reading, romaji, meaning, topic)
                VALUES ($1, $2, $3, $4, $5, $6, $7)
                ON CONFLICT (user_id, word_id) DO NOTHING;
            `, [userId, word.id, word.word, word.reading, word.romaji, word.meaning, word.topic]);
        }
        console.log(`- Seeded ${demoWords.length} Saved Vocabulary Words`);

        // 7. Writing Progress
        await client.query(`
            INSERT INTO user_writing_progress (user_id, character, character_type, last_score, practice_count, mastered)
            VALUES ($1, 'あ', 'hiragana', 9, 3, true)
            ON CONFLICT (user_id, character) DO UPDATE
            SET last_score = 9, practice_count = user_writing_progress.practice_count + 1, mastered = true;
        `, [userId]);
        console.log('- Seeded Writing Practice Progress');

        await client.query('COMMIT');
        console.log('✅ Seeding completed successfully!');
    } catch (error) {
        await client.query('ROLLBACK');
        console.error('❌ Seeding failed:', error.message);
        process.exit(1);
    } finally {
        client.release();
        await pool.end();
    }
}

seed();
