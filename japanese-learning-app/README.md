# Kana Forge — かなフォージ

> **Japanese Learning Platform** with **Firebase Authentication**, **PostgreSQL Persistence**, **Node.js/Express Backend**, and **AI Conversation & Stroke Evaluation**.

---

## 🏛 Architecture Overview

```
                    ┌────────────────────────────────────────┐
                    │               USER                     │
                    └───────────────────┬────────────────────┘
                                        │
                                        ▼
                    ┌────────────────────────────────────────┐
                    │          KANA-FORGE FRONTEND           │
                    │            (React 19 + Vite)           │
                    ├────────────────────────────────────────┤
                    │ • Lessons & Lesson Detail              │
                    │ • Hiragana / Katakana / Writing        │
                    │ • Vocabulary & Saved Words             │
                    │ • Grammar Library                      │
                    │ • Quizzes & Review Deck                │
                    │ • Progress Dashboard & Streaks         │
                    │ • AI Conversation (Hana Sensei)        │
                    │ • AI Stroke Order Checking             │
                    └───────────┬────────────────┬───────────┘
                                │                │
                   Firebase SDK │                │ Bearer Token / REST API
                                ▼                ▼
          ┌───────────────────────────┐    ┌───────────────────────────┐
          │   FIREBASE AUTHENTICATION │    │   EXPRESS BACKEND / API   │
          ├───────────────────────────┤    ├───────────────────────────┤
          │ • Sign Up / Email Auth    │    │ • Verify Firebase Token   │
          │ • Login / Session State   │    │ • Synchronize Users       │
          │ • Google Sign-In          │    │ • Progress & Streaks API  │
          │ • Password Reset          │    │ • Lessons Progress API    │
          │ • ID Token Issuance       │    │ • Quizzes & Attempts API  │
          └─────────────┬─────────────┘    │ • Wrong Answers & Review  │
                        │                  │ • Saved Vocabulary API    │
                        │ Firebase UID     │ • Writing Progress API    │
                        └─────────┐        │ • Secure AI Proxy API     │
                                  │        └─────────────┬─────────────┘
                                  ▼                      ▼
                        ┌────────────────────────────────────────┐
                        │          POSTGRESQL DATABASE           │
                        ├────────────────────────────────────────┤
                        │ • users (firebase_uid, email, name)    │
                        │ • user_progress (streak, level)        │
                        │ • user_lessons (completed lessons)     │
                        │ • quiz_attempts & quiz_answers         │
                        │ • user_wrong_answers (review list)     │
                        │ • user_saved_words (vocabulary)        │
                        │ • user_writing_progress (characters)   │
                        └────────────────────────────────────────┘

          Existing AI Integration (Protected Server-Side):
          React Frontend ──▶ Express Backend ──▶ Groq / Gemini APIs
```

---

## 🛠 System Separation of Concerns

* **Firebase Authentication**: Handles identity, password security, session persistence, Google OAuth, and ID token verification.
* **Node.js / Express Backend**: Verifies Firebase tokens, exposes secure REST APIs, manages database transactions, and safeguards server-side AI API keys.
* **PostgreSQL Database**: Relational source of truth for persistent user records, lesson completion, quiz attempts, answer histories, wrong-answer review decks, and saved vocabulary.
* **AI Features**: Powers Hana Sensei tutor chat and real-time handwriting stroke evaluation.

---

## 🗄 PostgreSQL Database Schema

The database is structured in normal form with strict foreign keys and cascading deletes:

1. `users`: Maps `firebase_uid` to internal UUID `id`.
2. `user_progress`: Tracks daily study streak count, last study date, and current JLPT level.
3. `user_lessons`: Records completed lesson IDs per user.
4. `quiz_attempts`: Tracks quiz category, score, total questions, and timestamp.
5. `quiz_answers`: Records individual answers per attempt (`user_answer`, `is_correct`).
6. `user_wrong_answers`: Manages review deck and weak spot frequencies (`wrong_count`).
7. `user_saved_words`: Manages saved vocabulary bookmarks per user.
8. `user_writing_progress`: Tracks character practice count, last score, and mastery flag.

---

## 🚀 Getting Started

### Prerequisites
* Node.js 18+ and npm
* PostgreSQL database (Local or Hosted, e.g. Neon, Supabase, Railway)
* Firebase Project with Authentication enabled (Email/Password & Google)

---

### 1. Backend Setup

```bash
cd server
npm install
```

Create `server/.env` (based on `server/.env.example`):

```env
PORT=5000
CORS_ORIGIN=http://localhost:5173
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/kanaforge

# Firebase Admin Credentials
FIREBASE_PROJECT_ID=kana-forge
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxx@kana-forge.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

# AI Keys (Server-Side)
GROQ_API_KEY=gsk_your_groq_key
GEMINI_API_KEY=AIzaSy_your_gemini_key
```

Run Database Migrations and Seed:

```bash
# Run schema migrations
npm run migrate

# (Optional) Seed sample data
npm run seed

# Start development server
npm run dev
```

---

### 2. Frontend Setup

In the root directory:

```bash
npm install
```

Create `.env` (based on `.env.example`):

```env
VITE_API_URL=http://localhost:5000/api
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

Start Vite development server:

```bash
npm run dev
```

The frontend will run at `http://localhost:5173`.

---

## 📡 REST API Reference

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `POST` | `/api/users/sync` | Sync / upsert Firebase user in PostgreSQL | Yes |
| `GET` | `/api/users/me` | Fetch user profile and progress summary | Yes |
| `GET` | `/api/progress` | Fetch aggregated user progress | Yes |
| `PUT` | `/api/progress/level` | Update JLPT level preference | Yes |
| `POST` | `/api/progress/migrate` | Bulk-migrate localStorage progress | Yes |
| `GET` | `/api/lessons/completed` | List completed lesson IDs | Yes |
| `POST` | `/api/lessons/complete` | Complete lesson & update streak | Yes |
| `GET` | `/api/quizzes/history` | List past quiz attempts | Yes |
| `POST` | `/api/quizzes/attempts` | Submit quiz attempt with answers | Yes |
| `GET` | `/api/wrong-answers` | Get review deck & weak spots | Yes |
| `DELETE` | `/api/wrong-answers/:id` | Remove item from review deck | Yes |
| `GET` | `/api/vocabulary/saved` | Get saved vocabulary words | Yes |
| `POST` | `/api/vocabulary/save` | Save vocabulary word | Yes |
| `DELETE` | `/api/vocabulary/:id` | Remove saved vocabulary word | Yes |
| `GET` | `/api/writing/progress` | Get writing practice progress | Yes |
| `POST` | `/api/writing/progress` | Record character writing score | Yes |
| `POST` | `/api/ai/chat` | AI tutor conversation (Hana) | Optional / Protected |
| `POST` | `/api/ai/check-stroke` | AI handwriting stroke check | Optional / Protected |

---

## 🔒 Security Best Practices

* **Zero Plaintext Passwords**: Authentication is managed securely through Firebase Authentication.
* **Token Verification**: Every protected backend route derives identity exclusively from the verified Firebase ID Token.
* **No Database Direct Access**: PostgreSQL credentials and connections are strictly confined to the backend server.
* **Protected AI Keys**: AI provider keys are kept server-side in the backend environment.

---

## 📦 Production Deployment

### Frontend (Vercel)
1. Deploy root project on Vercel.
2. Set Environment Variables: `VITE_API_URL` (pointing to your deployed backend API URL) and `VITE_FIREBASE_*`.

### Backend (Render / Railway / Fly.io / Heroku)
1. Deploy `server/` directory as a Node.js service.
2. Set Environment Variables: `DATABASE_URL`, `CORS_ORIGIN`, `FIREBASE_*`, `GROQ_API_KEY`, `GEMINI_API_KEY`.
3. Set build command: `npm install && npm run migrate`.
4. Set start command: `npm start`.

---

## 📄 License
MIT
