import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

import usersRouter from './routes/users.js';
import progressRouter from './routes/progress.js';
import lessonsRouter from './routes/lessons.js';
import quizzesRouter from './routes/quizzes.js';
import wrongAnswersRouter from './routes/wrongAnswers.js';
import vocabularyRouter from './routes/vocabulary.js';
import writingRouter from './routes/writing.js';
import aiRouter from './routes/ai.js';
import { errorHandler } from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:5173';

// Middlewares
app.use(cors({
    origin: CORS_ORIGIN,
    credentials: true,
}));
app.use(express.json({ limit: '15mb' })); // Support base64 canvas image data
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// Healthcheck Route
app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        service: 'Kana-Forge API',
        environment: process.env.NODE_ENV || 'development',
    });
});

// API Routes
app.use('/api/users', usersRouter);
app.use('/api/progress', progressRouter);
app.use('/api/lessons', lessonsRouter);
app.use('/api/quizzes', quizzesRouter);
app.use('/api/wrong-answers', wrongAnswersRouter);
app.use('/api/vocabulary', vocabularyRouter);
app.use('/api/writing', writingRouter);
app.use('/api/ai', aiRouter);

// Central Error Handler
app.use(errorHandler);

// Start server
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`🔥 Kana-Forge Express server listening on port ${PORT}`);
        console.log(`📡 Healthcheck: http://localhost:${PORT}/api/health`);
    });
}

export default app;
