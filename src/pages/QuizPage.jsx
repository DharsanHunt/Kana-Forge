import { useState, useMemo } from 'react';
import { quizQuestions } from '../data/quizQuestions';
import { useProgress } from '../context/ProgressContext';

const categories = ['All', 'hiragana', 'katakana', 'vocab', 'grammar', 'kanji'];
const categoryLabels = { hiragana: 'Hiragana', katakana: 'Katakana', vocab: 'Vocabulary', grammar: 'Grammar', kanji: 'Kanji' };

export default function QuizPage() {
    const { addQuizScore, addToReviewList } = useProgress();
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [quizStarted, setQuizStarted] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [fillAnswer, setFillAnswer] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [results, setResults] = useState([]);
    const [quizFinished, setQuizFinished] = useState(false);

    const filteredQuestions = useMemo(() => {
        const qs = selectedCategory === 'All'
            ? quizQuestions
            : quizQuestions.filter((q) => q.category === selectedCategory);
        return [...qs].sort(() => Math.random() - 0.5).slice(0, 10);
    }, [selectedCategory, quizStarted]);

    const currentQ = filteredQuestions[currentIndex];

    const startQuiz = () => {
        setQuizStarted(true);
        setCurrentIndex(0);
        setResults([]);
        setQuizFinished(false);
        setSelectedAnswer(null);
        setFillAnswer('');
        setShowResult(false);
    };

    const checkAnswer = () => {
        let correct = false;
        if (currentQ.type === 'multiple-choice') {
            correct = selectedAnswer === currentQ.correctAnswer;
        } else {
            correct = fillAnswer.trim().toLowerCase() === currentQ.correctAnswer.toLowerCase() ||
                fillAnswer.trim() === currentQ.correctAnswer;
        }
        setIsCorrect(correct);
        setShowResult(true);
        setResults((prev) => [...prev, { ...currentQ, userAnswer: currentQ.type === 'multiple-choice' ? selectedAnswer : fillAnswer, correct }]);
    };

    const nextQuestion = () => {
        if (currentIndex < filteredQuestions.length - 1) {
            setCurrentIndex((i) => i + 1);
            setSelectedAnswer(null);
            setFillAnswer('');
            setShowResult(false);
            setIsCorrect(false);
        } else {
            finishQuiz();
        }
    };

    const finishQuiz = () => {
        setQuizFinished(true);
        const correctCount = results.filter((r) => r.correct).length + (isCorrect ? 1 : 0);
        const total = filteredQuestions.length;
        addQuizScore({ score: correctCount, total, category: selectedCategory });
        const wrongAnswers = [...results, { ...currentQ, userAnswer: currentQ.type === 'multiple-choice' ? selectedAnswer : fillAnswer, correct: isCorrect }]
            .filter((r) => !r.correct);
        if (wrongAnswers.length > 0) {
            addToReviewList(wrongAnswers.map((w) => ({ id: w.id, question: w.question, correctAnswer: w.correctAnswer, category: w.category })));
        }
    };

    // Pre-quiz screen
    if (!quizStarted || quizFinished) {
        const finalResults = quizFinished ? results : null;
        const score = finalResults ? finalResults.filter((r) => r.correct).length : 0;
        const total = finalResults ? filteredQuestions.length : 0;

        return (
            <div className="fade-in max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-navy mb-3">❓ Quiz</h1>
                    <p className="text-navy/50 text-lg">Test your knowledge and track what needs review.</p>
                </div>

                {quizFinished && (
                    <div className="bg-white rounded-2xl p-8 card-shadow border border-navy/5 mb-8 text-center fade-in-up">
                        <div className="text-5xl mb-4">{score >= total * 0.8 ? '🎉' : score >= total * 0.5 ? '👍' : '📚'}</div>
                        <h2 className="text-2xl font-bold text-navy mb-2">
                            {score >= total * 0.8 ? 'Excellent!' : score >= total * 0.5 ? 'Good effort!' : 'Keep practicing!'}
                        </h2>
                        <div className="text-4xl font-bold text-accent mb-4">{score} / {total}</div>
                        <p className="text-navy/50 text-sm mb-6">
                            {total - score > 0 ? `${total - score} question${total - score > 1 ? 's' : ''} added to your review list.` : 'Perfect score! Amazing work!'}
                        </p>

                        {/* Review wrong answers */}
                        {finalResults.filter((r) => !r.correct).length > 0 && (
                            <div className="text-left mb-6">
                                <h3 className="font-bold text-navy text-sm uppercase tracking-wider mb-3">Review These:</h3>
                                <div className="space-y-2">
                                    {finalResults.filter((r) => !r.correct).map((r, i) => (
                                        <div key={i} className="bg-accent/5 border border-accent/10 rounded-xl p-4 text-sm">
                                            <div className="text-navy/70 mb-1">{r.question}</div>
                                            <div className="text-accent text-xs">Your answer: {r.userAnswer || '(empty)'}</div>
                                            <div className="text-bamboo text-xs">Correct: {r.correctAnswer}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Category selection */}
                <div className="bg-white rounded-2xl p-6 card-shadow border border-navy/5">
                    <h3 className="font-bold text-navy mb-4">Choose a category:</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${selectedCategory === cat
                                        ? 'bg-navy text-cream'
                                        : 'bg-navy/5 text-navy/60 hover:bg-navy/10'
                                    }`}
                            >
                                {cat === 'All' ? '📦 All Categories' : `${categoryLabels[cat]}`}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={startQuiz}
                        id="start-quiz-btn"
                        className="w-full bg-accent text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-accent/20 hover:bg-accent-light hover:-translate-y-0.5 transition-all duration-300"
                    >
                        {quizFinished ? 'Try Again' : 'Start Quiz'} →
                    </button>
                </div>
            </div>
        );
    }

    // Active quiz
    return (
        <div className="fade-in max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Progress bar */}
            <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-navy/40">Question {currentIndex + 1} of {filteredQuestions.length}</span>
                    <span className="text-sm text-navy/40">{results.filter((r) => r.correct).length} correct</span>
                </div>
                <div className="w-full bg-navy/10 rounded-full h-2">
                    <div
                        className="bg-accent h-2 rounded-full transition-all duration-500"
                        style={{ width: `${((currentIndex + 1) / filteredQuestions.length) * 100}%` }}
                    ></div>
                </div>
            </div>

            {/* Question */}
            <div className="bg-white rounded-2xl p-8 card-shadow border border-navy/5">
                <div className="text-xs text-navy/40 uppercase tracking-wider mb-4">
                    {categoryLabels[currentQ.category] || currentQ.category} • {currentQ.level}
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-navy mb-6 font-jp">{currentQ.question}</h2>

                {currentQ.type === 'multiple-choice' ? (
                    <div className="space-y-3">
                        {currentQ.options.map((option, i) => {
                            let optionClass = 'bg-paper border-navy/8 hover:border-navy/20 text-navy cursor-pointer';
                            if (showResult) {
                                if (option === currentQ.correctAnswer) {
                                    optionClass = 'bg-bamboo/10 border-bamboo/30 text-bamboo';
                                } else if (option === selectedAnswer && !isCorrect) {
                                    optionClass = 'bg-accent/10 border-accent/30 text-accent';
                                } else {
                                    optionClass = 'bg-paper border-navy/5 text-navy/30';
                                }
                            } else if (selectedAnswer === option) {
                                optionClass = 'bg-navy/10 border-navy/30 text-navy ring-2 ring-navy/20';
                            }

                            return (
                                <button
                                    key={i}
                                    onClick={() => !showResult && setSelectedAnswer(option)}
                                    disabled={showResult}
                                    className={`w-full text-left px-5 py-4 rounded-xl border-2 font-medium transition-all duration-200 font-jp ${optionClass}`}
                                >
                                    <span className="text-sm opacity-50 mr-3">{String.fromCharCode(65 + i)}</span>
                                    {option}
                                </button>
                            );
                        })}
                    </div>
                ) : (
                    <div>
                        <input
                            type="text"
                            value={fillAnswer}
                            onChange={(e) => setFillAnswer(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && !showResult && checkAnswer()}
                            disabled={showResult}
                            placeholder="Type your answer..."
                            className="w-full px-5 py-4 border-2 border-navy/15 rounded-xl text-lg font-jp focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent disabled:bg-paper"
                            autoFocus
                        />
                    </div>
                )}

                {/* Explanation */}
                {showResult && (
                    <div className={`mt-6 p-4 rounded-xl fade-in ${isCorrect ? 'bg-bamboo/10 border border-bamboo/20' : 'bg-accent/5 border border-accent/10'}`}>
                        <div className={`font-bold mb-1 ${isCorrect ? 'text-bamboo' : 'text-accent'}`}>
                            {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
                        </div>
                        <p className="text-navy/60 text-sm">{currentQ.explanation}</p>
                    </div>
                )}

                {/* Action buttons */}
                <div className="mt-6 flex gap-3">
                    {!showResult ? (
                        <button
                            onClick={checkAnswer}
                            disabled={currentQ.type === 'multiple-choice' ? !selectedAnswer : !fillAnswer.trim()}
                            className="flex-1 bg-navy text-cream py-3.5 rounded-xl font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-navy-light transition-all"
                        >
                            Check Answer
                        </button>
                    ) : (
                        <button
                            onClick={nextQuestion}
                            className="flex-1 bg-accent text-white py-3.5 rounded-xl font-semibold hover:bg-accent-light transition-all"
                        >
                            {currentIndex < filteredQuestions.length - 1 ? 'Next Question →' : 'See Results'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
