import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProgressProvider } from './context/ProgressContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LessonsPage from './pages/LessonsPage';
import LessonDetailPage from './pages/LessonDetailPage';
import WritingPage from './pages/WritingPage';
import QuizPage from './pages/QuizPage';
import VocabularyPage from './pages/VocabularyPage';
import GrammarPage from './pages/GrammarPage';
import ChatPage from './pages/ChatPage';
import ProgressPage from './pages/ProgressPage';

export default function App() {
  return (
    <ProgressProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-cream">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/lessons" element={<LessonsPage />} />
              <Route path="/lessons/:id" element={<LessonDetailPage />} />
              <Route path="/writing" element={<WritingPage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/vocabulary" element={<VocabularyPage />} />
              <Route path="/grammar" element={<GrammarPage />} />
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/progress" element={<ProgressPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ProgressProvider>
  );
}
