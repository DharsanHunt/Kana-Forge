# Kana Forge — かなフォージ

A calm, focused Japanese learning platform built with React + Tailwind CSS and powered by Claude AI.

No leaderboards, no gamification pressure — just structured learning, AI conversation practice, and personal progress tracking.

![React](https://img.shields.io/badge/React-19-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8) ![Claude AI](https://img.shields.io/badge/Claude_AI-opus--4-blueviolet)

---

## ✨ Features

### 📚 Structured Lessons
- Organized by JLPT levels: N5 → N1
- Covers Hiragana, Katakana, Grammar, Vocabulary, and Kanji
- Rich explanations with cultural notes and example sentences (Japanese / Romaji / English)

### ✍️ Writing Systems
- Interactive character grids for Hiragana, Katakana, and Kanji
- Click any character to see readings, stroke order, and example words
- Built-in practice quizzes for each writing system

### 📝 Vocabulary Builder
- Words organized by topic: Food, Travel, Daily Life, Emotions, Work, Anime/Pop Culture
- Save words to your personal list for review
- Search across Japanese, romaji, and English

### 📖 Grammar Library
- Searchable grammar points tagged by JLPT level
- Structure breakdowns, example sentences, and usage notes
- Compare sections for commonly confused grammar (e.g., は vs が)

### ❓ Practice Quizzes
- Multiple choice and fill-in-the-blank formats
- Category filtering (Hiragana, Katakana, Vocabulary, Grammar, Kanji)
- Score tracking with wrong answers saved to a review list

### 🤖 AI Conversation Coach
- Chat with **Hana (はな先生)**, a patient AI Japanese tutor powered by Claude
- Choose conversation topics: Daily Life, Travel, Food, Hobbies, Free Chat
- Select language mode: Full Japanese, Mixed, or Romaji Support
- Inline grammar corrections with explanations
- Adjustable difficulty by JLPT level (N5–N1)

### 📊 Progress Dashboard
- Lessons completed, quizzes taken, average score
- Daily study streak counter
- Visual progress bars per JLPT level
- Weak spots analysis from quiz results
- Saved words summary

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19 + Vite |
| Styling | Tailwind CSS v4 |
| AI | Anthropic Claude API (`claude-opus-4-6`) |
| Routing | React Router v7 |
| State | useState / useContext |
| Storage | localStorage (no backend needed) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd japanese-learning-app

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be running at `http://localhost:5173`

### AI Chat Setup

To use the AI Conversation Coach, you need an Anthropic API key:

1. Get an API key from [console.anthropic.com](https://console.anthropic.com)
2. Either:
   - Enter it directly in the chat setup screen (stored in localStorage), **or**
   - Create a `.env` file in the project root:
     ```
     VITE_ANTHROPIC_API_KEY=your-api-key-here
     ```

---

## 📁 Project Structure

```
src/
├── components/         # Shared UI components
│   ├── Navbar.jsx
│   └── Footer.jsx
├── context/            # React Context providers
│   └── ProgressContext.jsx
├── data/               # Static data files
│   ├── lessons.js
│   ├── vocabulary.js
│   ├── grammar.js
│   ├── hiragana.js
│   ├── katakana.js
│   └── quizQuestions.js
├── pages/              # Route page components
│   ├── HomePage.jsx
│   ├── LessonsPage.jsx
│   ├── LessonDetailPage.jsx
│   ├── WritingPage.jsx
│   ├── QuizPage.jsx
│   ├── VocabularyPage.jsx
│   ├── GrammarPage.jsx
│   ├── ChatPage.jsx
│   └── ProgressPage.jsx
├── App.jsx             # Root component with routing
├── main.jsx            # Entry point
└── index.css           # Global styles & Tailwind config
```

---

## 🎨 Design

Inspired by Japanese aesthetics — calm, minimal, and focused:

- **Cream white** (`#FFFDF7`) — warm paper-like background
- **Deep navy** (`#1a2744`) — primary text and UI
- **Accent red** (`#C0392B`) — CTAs and highlights  
- **Sakura pink** (`#FFB7C5`) — cultural touches
- **Bamboo green** (`#7BA05B`) — success states

Fonts: [Inter](https://fonts.google.com/specimen/Inter) + [Noto Sans JP](https://fonts.google.com/noto/specimen/Noto+Sans+JP)

---

## 📄 License

MIT
