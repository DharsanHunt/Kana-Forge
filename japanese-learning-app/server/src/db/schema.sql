-- Kana-Forge Relational Database Schema (PostgreSQL)

-- Enable UUID extension if not already available
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 1. USERS TABLE
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    firebase_uid VARCHAR(128) UNIQUE NOT NULL,
    email VARCHAR(255) NOT NULL,
    name VARCHAR(255),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_users_firebase_uid ON users(firebase_uid);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- 2. USER PROGRESS & STREAKS
CREATE TABLE IF NOT EXISTS user_progress (
    user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    streak_count INT DEFAULT 0,
    last_study_date DATE,
    selected_level VARCHAR(10) DEFAULT 'N5',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. COMPLETED LESSONS
CREATE TABLE IF NOT EXISTS user_lessons (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    lesson_id VARCHAR(100) NOT NULL,
    completed_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT uq_user_lesson UNIQUE(user_id, lesson_id)
);

CREATE INDEX IF NOT EXISTS idx_user_lessons_user_id ON user_lessons(user_id);

-- 4. QUIZ ATTEMPTS
CREATE TABLE IF NOT EXISTS quiz_attempts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    category VARCHAR(50) NOT NULL,
    score INT NOT NULL,
    total_questions INT NOT NULL,
    completed_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_quiz_attempts_user_id ON quiz_attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_completed_at ON quiz_attempts(completed_at DESC);

-- 5. QUIZ ANSWERS
CREATE TABLE IF NOT EXISTS quiz_answers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    attempt_id UUID NOT NULL REFERENCES quiz_attempts(id) ON DELETE CASCADE,
    question_id VARCHAR(100) NOT NULL,
    user_answer TEXT,
    is_correct BOOLEAN NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_quiz_answers_attempt_id ON quiz_answers(attempt_id);

-- 6. USER WRONG ANSWERS & REVIEW DECK
CREATE TABLE IF NOT EXISTS user_wrong_answers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    question_id VARCHAR(100) NOT NULL,
    question TEXT NOT NULL,
    correct_answer TEXT NOT NULL,
    category VARCHAR(50),
    wrong_count INT DEFAULT 1,
    in_review_list BOOLEAN DEFAULT TRUE,
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT uq_user_wrong_question UNIQUE(user_id, question_id)
);

CREATE INDEX IF NOT EXISTS idx_user_wrong_answers_user_id ON user_wrong_answers(user_id);

-- 7. USER SAVED VOCABULARY
CREATE TABLE IF NOT EXISTS user_saved_words (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    word_id VARCHAR(100) NOT NULL,
    word VARCHAR(100) NOT NULL,
    reading VARCHAR(100),
    romaji VARCHAR(100),
    meaning TEXT,
    topic VARCHAR(100),
    saved_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT uq_user_saved_word UNIQUE(user_id, word_id)
);

CREATE INDEX IF NOT EXISTS idx_user_saved_words_user_id ON user_saved_words(user_id);

-- 8. USER WRITING PRACTICE
CREATE TABLE IF NOT EXISTS user_writing_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    character VARCHAR(10) NOT NULL,
    character_type VARCHAR(20) NOT NULL,
    last_score INT DEFAULT 0,
    practice_count INT DEFAULT 1,
    mastered BOOLEAN DEFAULT FALSE,
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT uq_user_writing_char UNIQUE(user_id, character)
);

CREATE INDEX IF NOT EXISTS idx_user_writing_progress_user_id ON user_writing_progress(user_id);
