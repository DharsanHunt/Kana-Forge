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
        return [...qs].sort(() => Math.random() - 0.5).slice(0, 20);
        // eslint-disable-next-line
    }, [selectedCategory, quizStarted]);

    const currentQ = filteredQuestions[currentIndex];
    const correctSoFar = results.filter((r) => r.correct).length;
    const masteryPercent = filteredQuestions.length > 0
        ? Math.round(((correctSoFar + (showResult && isCorrect ? 1 : 0)) / filteredQuestions.length) * 100)
        : 0;

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
        const allResults = [...results, { ...currentQ, userAnswer: currentQ.type === 'multiple-choice' ? selectedAnswer : fillAnswer, correct: isCorrect }];
        const wrongAnswers = allResults.filter((r) => !r.correct);
        if (wrongAnswers.length > 0) {
            addToReviewList(wrongAnswers.map((w) => ({ id: w.id, question: w.question, correctAnswer: w.correctAnswer, category: w.category })));
        }
    };

    // Pre-quiz / Results screen
    if (!quizStarted || quizFinished) {
        const finalResults = quizFinished ? results : null;
        const score = finalResults ? finalResults.filter((r) => r.correct).length : 0;
        const total = finalResults ? filteredQuestions.length : 0;
        const finalPercent = total > 0 ? Math.round((score / total) * 100) : 0;

        return (
            <div className="fade-in min-h-screen">
                <div className="max-w-3xl mx-auto px-6 lg:px-8 py-12">
                    {quizFinished && (
                        <div className="text-center mb-12 fade-in-up">
                            <p className="text-xs text-neutral-warm/30 uppercase tracking-widest mb-4">Current Mastery Level</p>
                            <div className="flex items-baseline justify-center gap-1 mb-6">
                                <span className={`text-7xl font-bold ${finalPercent >= 80 ? 'text-success' : finalPercent >= 50 ? 'text-[#f1c40f]' : 'text-primary'}`}>
                                    {finalPercent}
                                </span>
                                <span className={`text-2xl ${finalPercent >= 80 ? 'text-success/60' : finalPercent >= 50 ? 'text-[#f1c40f]/60' : 'text-primary/60'}`}>%</span>
                            </div>
                            <p className="text-neutral-warm/40 text-sm mb-8">
                                {score} of {total} correct • {total - score > 0 ? `${total - score} added to review deck` : 'Perfect mastery!'}
                            </p>

                            {/* Review wrong answers */}
                            {finalResults.filter((r) => !r.correct).length > 0 && (
                                <div className="text-left mb-8">
                                    <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Review These</h3>
                                    <div className="space-y-2">
                                        {finalResults.filter((r) => !r.correct).map((r, i) => (
                                            <div key={i} className="bg-bg-card border border-neutral-warm/5 rounded p-4 text-sm flex gap-4">
                                                <div className="flex-1">
                                                    <div className="text-neutral-warm/60 font-jp mb-1">{r.question}</div>
                                                    <div className="text-error/60 text-xs">Your: {r.userAnswer || '(empty)'}</div>
                                                    <div className="text-success/60 text-xs">Correct: {r.correctAnswer}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Setup */}
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-neutral-warm mb-2">{quizFinished ? 'Try Again?' : 'Quiz'}</h1>
                        <p className="text-neutral-warm/40 text-sm">Select a category to begin testing.</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-5 py-2.5 text-sm font-medium rounded transition-all ${selectedCategory === cat
                                        ? 'bg-primary text-white'
                                        : 'border border-neutral-warm/10 text-neutral-warm/40 hover:border-neutral-warm/20'
                                    }`}
                            >
                                {cat === 'All' ? 'All Categories' : categoryLabels[cat]}
                            </button>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={startQuiz}
                            className="bg-primary text-white px-10 py-4 font-bold rounded shadow-lg shadow-primary/20 hover:bg-primary-light transition-all"
                        >
                            {quizFinished ? 'Next Question' : 'Start Quiz'}
                        </button>
                        {quizFinished && (
                            <button onClick={() => { setQuizFinished(false); setQuizStarted(false); }} className="border border-neutral-warm/10 text-neutral-warm/50 px-10 py-4 font-bold rounded hover:border-neutral-warm/20 transition-all">
                                Review Deck
                            </button>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // Active quiz
    return (
        <div className="fade-in min-h-screen">
            {/* Top bar */}
            <div className="border-b border-neutral-warm/5 bg-bg-dark/80 backdrop-blur-md px-6 py-3">
                <div className="max-w-3xl mx-auto flex items-center justify-between">
                    <div className="w-full bg-neutral-warm/5 rounded-full h-1 mr-6">
                        <div className="bg-primary h-1 rounded-full transition-all duration-500" style={{ width: `${((currentIndex + 1) / filteredQuestions.length) * 100}%` }}></div>
                    </div>
                    <div className="flex items-center gap-6 shrink-0">
                        <div className="text-right">
                            <div className="text-xs text-neutral-warm/30">Question</div>
                            <div className="text-sm font-bold text-neutral-warm">{currentIndex + 1} <span className="text-neutral-warm/30">/ {filteredQuestions.length}</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-6 lg:px-8 py-12">
                {/* Category label */}
                <div className="mb-2">
                    <span className="text-primary text-xs font-bold uppercase tracking-widest">
                        {categoryLabels[currentQ.category] || currentQ.category} Mastery
                    </span>
                </div>
                <h2 className="text-xl font-bold text-neutral-warm mb-2">Quiz Progress</h2>

                {/* Question Card */}
                <div className="bg-bg-card border border-neutral-warm/5 rounded-xl p-8 mt-8">
                    <div className="text-center mb-8">
                        <div className="font-jp text-5xl text-neutral-warm mb-4">{currentQ.question}</div>
                        <p className="text-neutral-warm/40 text-sm">Select the correct romaji for this character</p>
                    </div>

                    {currentQ.type === 'multiple-choice' ? (
                        <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto">
                            {currentQ.options.map((option, i) => {
                                let cls = 'bg-bg-elevated border border-neutral-warm/10 text-neutral-warm/70 hover:border-neutral-warm/30 cursor-pointer';
                                if (showResult) {
                                    if (option === currentQ.correctAnswer) {
                                        cls = 'bg-success/10 border-2 border-success text-success';
                                    } else if (option === selectedAnswer && !isCorrect) {
                                        cls = 'bg-error/10 border-2 border-error text-error';
                                    } else {
                                        cls = 'bg-bg-elevated border border-neutral-warm/5 text-neutral-warm/20';
                                    }
                                } else if (selectedAnswer === option) {
                                    cls = 'bg-neutral-warm/5 border-2 border-primary text-neutral-warm';
                                }

                                return (
                                    <button
                                        key={i}
                                        onClick={() => !showResult && setSelectedAnswer(option)}
                                        disabled={showResult}
                                        className={`px-5 py-4 rounded text-left font-medium transition-all flex items-center justify-between ${cls}`}
                                    >
                                        <span className="font-jp">{option}</span>
                                        {showResult && option === currentQ.correctAnswer && <span className="text-success">✓</span>}
                                        {showResult && option === selectedAnswer && !isCorrect && option !== currentQ.correctAnswer && <span className="text-error">✗</span>}
                                        {!showResult && selectedAnswer !== option && <span className="w-4 h-4 rounded-full border border-neutral-warm/20"></span>}
                                    </button>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="max-w-md mx-auto">
                            <input
                                type="text"
                                value={fillAnswer}
                                onChange={(e) => setFillAnswer(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && !showResult && checkAnswer()}
                                disabled={showResult}
                                placeholder="Type your answer..."
                                className="w-full px-5 py-4 bg-bg-elevated border-2 border-neutral-warm/10 rounded text-lg font-jp focus:outline-none focus:border-primary transition-colors disabled:border-neutral-warm/5 text-neutral-warm"
                                autoFocus
                            />
                        </div>
                    )}
                </div>

                {/* Feedback */}
                {showResult && (
                    <div className="grid grid-cols-2 gap-4 mt-6 fade-in">
                        <div className="border-l-4 border-l-success/50 bg-bg-card p-4 rounded-r">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-success text-xs">✓</span>
                                <span className="text-success text-xs font-bold uppercase tracking-wider">Correct Answer</span>
                            </div>
                            <p className="text-neutral-warm/60 text-sm">{currentQ.explanation}</p>
                        </div>
                        {!isCorrect && (
                            <div className="border-l-4 border-l-error/50 bg-bg-card p-4 rounded-r">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-error text-xs">!</span>
                                    <span className="text-error text-xs font-bold uppercase tracking-wider">Common Mistake</span>
                                </div>
                                <p className="text-neutral-warm/60 text-sm">Review this item in your practice deck.</p>
                            </div>
                        )}
                    </div>
                )}

                {/* Mastery */}
                <div className="text-center mt-10">
                    <p className="text-xs text-neutral-warm/30 uppercase tracking-widest mb-2">Current Mastery Level</p>
                    <div className="flex items-baseline justify-center gap-1 mb-6">
                        <span className={`text-5xl font-bold ${masteryPercent >= 80 ? 'text-success' : masteryPercent >= 50 ? 'text-[#f1c40f]' : 'text-primary'}`}>{masteryPercent}</span>
                        <span className="text-xl text-neutral-warm/30">%</span>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex justify-center gap-4">
                    {!showResult ? (
                        <button
                            onClick={checkAnswer}
                            disabled={currentQ.type === 'multiple-choice' ? !selectedAnswer : !fillAnswer.trim()}
                            className="bg-primary text-white px-10 py-4 font-bold rounded shadow-lg shadow-primary/20 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary-light transition-all"
                        >
                            Check Answer
                        </button>
                    ) : (
                        <>
                            <button onClick={nextQuestion} className="bg-primary text-white px-10 py-4 font-bold rounded shadow-lg shadow-primary/20 hover:bg-primary-light transition-all">
                                {currentIndex < filteredQuestions.length - 1 ? 'Next Question' : 'See Results'}
                            </button>
                            <button className="border border-neutral-warm/10 text-neutral-warm/50 px-10 py-4 font-bold rounded hover:border-neutral-warm/20 transition-all">
                                Review Deck
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
