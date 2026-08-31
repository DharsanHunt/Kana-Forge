import { useState, useMemo, useEffect } from 'react';
import { quizQuestions } from '../data/quizQuestions';
import { mockTests } from '../data/mockTests';
import { useProgress } from '../context/ProgressContext';
import AudioPlayer from '../components/AudioPlayer';

const categories = ['All', 'hiragana', 'katakana', 'vocab', 'grammar', 'kanji', 'reading', 'listening'];
const categoryLabels = {
    hiragana: 'Hiragana',
    katakana: 'Katakana',
    vocab: 'Vocabulary',
    grammar: 'Grammar',
    kanji: 'Kanji',
    reading: 'Reading',
    listening: 'Listening'
};

export default function QuizPage() {
    const { addQuizScore, addToReviewList } = useProgress();

    // Mode: 'practice' or 'mock-exam'
    const [quizMode, setQuizMode] = useState('practice');

    // Practice Quiz State
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedLevel, setSelectedLevel] = useState('All');
    const [practiceStarted, setPracticeStarted] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [fillAnswer, setFillAnswer] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [results, setResults] = useState([]);
    const [practiceFinished, setPracticeFinished] = useState(false);

    // Mock Exam State
    const [selectedExamLevel, setSelectedExamLevel] = useState('N5');
    const [examStarted, setExamStarted] = useState(false);
    const [examSectionIndex, setExamSectionIndex] = useState(0);
    const [examQuestionIndex, setExamQuestionIndex] = useState(0);
    const [examAnswers, setExamAnswers] = useState({});
    const [examFinished, setExamFinished] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(0);

    const activeMockExam = useMemo(() => {
        return mockTests.find(m => m.level === selectedExamLevel) || mockTests[0];
    }, [selectedExamLevel]);

    const activeExamSection = activeMockExam.sections[examSectionIndex];
    const activeExamQuestion = activeExamSection?.questions[examQuestionIndex];

    // Timer effect for Mock Exam
    useEffect(() => {
        let timer = null;
        if (examStarted && !examFinished && timeRemaining > 0) {
            timer = setInterval(() => {
                setTimeRemaining(prev => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        finishMockExam();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(timer);
        // eslint-disable-next-line
    }, [examStarted, examFinished, timeRemaining]);

    const filteredPracticeQuestions = useMemo(() => {
        const qs = quizQuestions.filter((q) => {
            const matchCat = selectedCategory === 'All' || q.category === selectedCategory;
            const matchLvl = selectedLevel === 'All' || q.level === selectedLevel;
            return matchCat && matchLvl;
        });
        return [...qs].sort(() => Math.random() - 0.5).slice(0, 20);
        // eslint-disable-next-line
    }, [selectedCategory, selectedLevel, practiceStarted]);

    const currentPracticeQ = filteredPracticeQuestions[currentIndex];

    // Practice Quiz Handlers
    const startPracticeQuiz = () => {
        setPracticeStarted(true);
        setCurrentIndex(0);
        setResults([]);
        setPracticeFinished(false);
        setSelectedAnswer(null);
        setFillAnswer('');
        setShowResult(false);
    };

    const checkPracticeAnswer = () => {
        let correct = false;
        if (currentPracticeQ.type === 'multiple-choice' || currentPracticeQ.type === 'reading' || currentPracticeQ.type === 'listening') {
            correct = selectedAnswer === currentPracticeQ.correctAnswer;
        } else {
            correct = fillAnswer.trim().toLowerCase() === currentPracticeQ.correctAnswer.toLowerCase() ||
                fillAnswer.trim() === currentPracticeQ.correctAnswer;
        }
        setIsCorrect(correct);
        setShowResult(true);
        setResults((prev) => [...prev, { ...currentPracticeQ, userAnswer: selectedAnswer || fillAnswer, correct }]);
    };

    const nextPracticeQuestion = () => {
        if (currentIndex < filteredPracticeQuestions.length - 1) {
            setCurrentIndex((i) => i + 1);
            setSelectedAnswer(null);
            setFillAnswer('');
            setShowResult(false);
            setIsCorrect(false);
        } else {
            finishPracticeQuiz();
        }
    };

    const finishPracticeQuiz = () => {
        setPracticeFinished(true);
        const correctCount = results.filter((r) => r.correct).length;
        const total = filteredPracticeQuestions.length;
        const allResults = [...results];
        addQuizScore({ score: correctCount, total, category: selectedCategory }, allResults);
        const wrongAnswers = allResults.filter((r) => !r.correct);
        if (wrongAnswers.length > 0) {
            addToReviewList(wrongAnswers.map((w) => ({ id: w.id, question: w.question, correctAnswer: w.correctAnswer, category: w.category })));
        }
    };

    // Mock Exam Handlers
    const startMockExam = () => {
        setExamStarted(true);
        setExamFinished(false);
        setExamSectionIndex(0);
        setExamQuestionIndex(0);
        setExamAnswers({});
        setTimeRemaining((activeMockExam.timeLimitMinutes || 45) * 60);
    };

    const handleExamSelectOption = (questionId, option) => {
        setExamAnswers(prev => ({ ...prev, [questionId]: option }));
    };

    const nextExamQuestion = () => {
        if (examQuestionIndex < activeExamSection.questions.length - 1) {
            setExamQuestionIndex(prev => prev + 1);
        } else if (examSectionIndex < activeMockExam.sections.length - 1) {
            setExamSectionIndex(prev => prev + 1);
            setExamQuestionIndex(0);
        } else {
            finishMockExam();
        }
    };

    const prevExamQuestion = () => {
        if (examQuestionIndex > 0) {
            setExamQuestionIndex(prev => prev - 1);
        } else if (examSectionIndex > 0) {
            setExamSectionIndex(prev => prev - 1);
            setExamQuestionIndex(activeMockExam.sections[examSectionIndex - 1].questions.length - 1);
        }
    };

    const finishMockExam = () => {
        setExamFinished(true);
        // Calculate scores
        let totalScore = 0;
        let totalQuestions = 0;
        const recordedResults = [];

        activeMockExam.sections.forEach(sec => {
            sec.questions.forEach(q => {
                totalQuestions++;
                const userAns = examAnswers[q.id];
                const correct = userAns === q.correctAnswer;
                if (correct) totalScore++;
                recordedResults.push({ ...q, userAnswer: userAns, correct, section: sec.title });
            });
        });

        addQuizScore({ score: totalScore, total: totalQuestions, category: `Mock Exam (${selectedExamLevel})` }, recordedResults);
        const wrongList = recordedResults.filter(r => !r.correct);
        if (wrongList.length > 0) {
            addToReviewList(wrongList.map(w => ({ id: w.id, question: w.question, correctAnswer: w.correctAnswer, category: 'mock-exam' })));
        }
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="fade-in min-h-screen">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
                {/* Header & Mode Switcher */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-neutral-warm/10">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-xs font-bold uppercase tracking-widest text-primary">Testing & Examination Arena</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-neutral-warm">
                            Practice & Mock Exams
                        </h1>
                    </div>

                    {/* Mode Toggle Buttons */}
                    <div className="flex bg-bg-card p-1 rounded-xl border border-neutral-warm/10 shadow-sm">
                        <button
                            type="button"
                            onClick={() => { setQuizMode('practice'); setPracticeStarted(false); setPracticeFinished(false); }}
                            className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${quizMode === 'practice'
                                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                                    : 'text-neutral-warm/50 hover:text-neutral-warm'
                                }`}
                        >
                            Topic Practice
                        </button>
                        <button
                            type="button"
                            onClick={() => { setQuizMode('mock-exam'); setExamStarted(false); setExamFinished(false); }}
                            className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${quizMode === 'mock-exam'
                                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                                    : 'text-neutral-warm/50 hover:text-neutral-warm'
                                }`}
                        >
                            JLPT Mock Exams
                        </button>
                    </div>
                </div>

                {/* ========================================================= */}
                {/* MODE 1: TOPIC PRACTICE MODE */}
                {/* ========================================================= */}
                {quizMode === 'practice' && (
                    <>
                        {/* Setup Screen */}
                        {(!practiceStarted || practiceFinished) && (
                            <div className="fade-in">
                                {practiceFinished && (
                                    <div className="text-center py-10 bg-bg-card border border-neutral-warm/10 rounded-2xl mb-8 shadow-md">
                                        <p className="text-xs text-neutral-warm/40 uppercase tracking-widest mb-2">Practice Session Score</p>
                                        <div className="flex items-baseline justify-center gap-1 mb-4">
                                            <span className="text-6xl font-serif font-bold text-primary">
                                                {results.filter(r => r.correct).length}
                                            </span>
                                            <span className="text-2xl text-neutral-warm/40 font-mono">/ {filteredPracticeQuestions.length}</span>
                                        </div>
                                        <p className="text-xs text-neutral-warm/60 mb-6">
                                            {results.filter(r => !r.correct).length > 0
                                                ? `${results.filter(r => !r.correct).length} wrong answers saved to your Review Deck.`
                                                : 'Flawless score! All questions answered accurately.'}
                                        </p>
                                    </div>
                                )}

                                <div className="bg-bg-card border border-neutral-warm/10 rounded-2xl p-8 shadow-sm mb-8">
                                    <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Select Level & Topic</h3>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {['All', 'N5', 'N4'].map((lvl) => (
                                            <button
                                                key={lvl}
                                                type="button"
                                                onClick={() => setSelectedLevel(lvl)}
                                                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${selectedLevel === lvl
                                                        ? 'bg-primary text-white'
                                                        : 'bg-bg-elevated border border-neutral-warm/10 text-neutral-warm/50 hover:text-neutral-warm'
                                                    }`}
                                            >
                                                {lvl === 'All' ? 'All Levels' : `JLPT ${lvl}`}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {categories.map((cat) => (
                                            <button
                                                key={cat}
                                                type="button"
                                                onClick={() => setSelectedCategory(cat)}
                                                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all ${selectedCategory === cat
                                                        ? 'bg-neutral-warm/15 text-neutral-warm font-bold border border-neutral-warm/30'
                                                        : 'bg-bg-elevated border border-neutral-warm/10 text-neutral-warm/50 hover:text-neutral-warm'
                                                    }`}
                                            >
                                                {cat === 'All' ? 'All Categories' : categoryLabels[cat] || cat}
                                            </button>
                                        ))}
                                    </div>

                                    <button
                                        type="button"
                                        onClick={startPracticeQuiz}
                                        className="w-full bg-primary text-white py-4 rounded-xl font-bold text-sm tracking-wider uppercase shadow-lg shadow-primary/20 hover:bg-primary-light transition-all"
                                    >
                                        {practiceFinished ? 'Start Another Practice Session' : 'Begin Practice Quiz'}
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Active Practice Question */}
                        {practiceStarted && !practiceFinished && currentPracticeQ && (
                            <div className="fade-in">
                                {/* Progress Bar */}
                                <div className="flex items-center justify-between text-xs text-neutral-warm/40 mb-3 font-mono">
                                    <span>Question {currentIndex + 1} of {filteredPracticeQuestions.length}</span>
                                    <span>{currentPracticeQ.level} • {currentPracticeQ.category}</span>
                                </div>
                                <div className="w-full bg-neutral-warm/10 rounded-full h-1.5 mb-8 overflow-hidden">
                                    <div
                                        className="bg-primary h-full rounded-full transition-all duration-300"
                                        style={{ width: `${((currentIndex + 1) / filteredPracticeQuestions.length) * 100}%` }}
                                    ></div>
                                </div>

                                {/* Question Box */}
                                <div className="bg-bg-card border border-neutral-warm/10 rounded-2xl p-8 mb-6 shadow-md">
                                    {currentPracticeQ.audioText && (
                                        <div className="flex justify-center mb-6">
                                            <AudioPlayer text={currentPracticeQ.audioText} label="Listen to Audio Question" rate={0.85} />
                                        </div>
                                    )}

                                    <div className="font-jp text-2xl md:text-3xl text-neutral-warm font-bold text-center mb-8 leading-relaxed whitespace-pre-line">
                                        {currentPracticeQ.question}
                                    </div>

                                    {/* Options Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-xl mx-auto">
                                        {currentPracticeQ.options?.map((opt, i) => {
                                            const isSelected = selectedAnswer === opt;
                                            return (
                                                <button
                                                    key={i}
                                                    type="button"
                                                    disabled={showResult}
                                                    onClick={() => setSelectedAnswer(opt)}
                                                    className={`p-4 rounded-xl text-left text-sm font-jp transition-all border ${showResult
                                                            ? opt === currentPracticeQ.correctAnswer
                                                                ? 'bg-success/15 border-success text-success font-bold'
                                                                : isSelected
                                                                    ? 'bg-primary/15 border-primary text-primary font-bold'
                                                                    : 'bg-bg-elevated border-neutral-warm/5 text-neutral-warm/20'
                                                            : isSelected
                                                                ? 'bg-primary/10 border-2 border-primary text-primary font-bold shadow-sm'
                                                                : 'bg-bg-elevated border-neutral-warm/10 text-neutral-warm/80 hover:border-primary/40'
                                                        }`}
                                                >
                                                    {opt}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Explanation Panel */}
                                {showResult && (
                                    <div className={`p-5 rounded-xl border mb-6 fade-in ${isCorrect ? 'bg-success/10 border-success/30' : 'bg-primary/10 border-primary/30'}`}>
                                        <span className="font-bold text-sm block mb-1">
                                            {isCorrect ? '✓ Correct Answer!' : '✗ Needs Practice.'}
                                        </span>
                                        <p className="text-xs text-neutral-warm/80 leading-relaxed">{currentPracticeQ.explanation}</p>
                                    </div>
                                )}

                                {/* Action Buttons */}
                                <div className="flex justify-center gap-4">
                                    {!showResult ? (
                                        <button
                                            type="button"
                                            onClick={checkPracticeAnswer}
                                            disabled={!selectedAnswer}
                                            className="bg-primary text-white px-10 py-3.5 rounded-xl font-bold text-sm tracking-wider uppercase disabled:opacity-30 shadow-md shadow-primary/20 hover:bg-primary-light transition-all"
                                        >
                                            Submit Answer
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={nextPracticeQuestion}
                                            className="bg-primary text-white px-10 py-3.5 rounded-xl font-bold text-sm tracking-wider uppercase shadow-md shadow-primary/20 hover:bg-primary-light transition-all"
                                        >
                                            {currentIndex < filteredPracticeQuestions.length - 1 ? 'Next Question →' : 'See Results'}
                                        </button>
                                    )}
                                </div>
                            </div>
                        )}
                    </>
                )}

                {/* ========================================================= */}
                {/* MODE 2: JLPT MOCK EXAMS ARENA */}
                {/* ========================================================= */}
                {quizMode === 'mock-exam' && (
                    <>
                        {/* Exam Intro Screen */}
                        {(!examStarted || examFinished) && (
                            <div className="fade-in">
                                {examFinished && (
                                    <div className="bg-bg-card border border-neutral-warm/10 rounded-2xl p-8 mb-8 text-center shadow-lg">
                                        <div className="text-xs text-primary font-bold uppercase tracking-widest mb-2">
                                            Kana-Forge Practice Score
                                        </div>
                                        <h2 className="text-2xl font-serif font-bold text-neutral-warm mb-6">
                                            {activeMockExam.title} Results
                                        </h2>

                                        {/* Score Metric */}
                                        <div className="max-w-xs mx-auto p-6 rounded-2xl bg-bg-elevated/80 border border-neutral-warm/10 mb-6">
                                            <div className="text-5xl font-bold text-primary mb-1">
                                                {Object.keys(examAnswers).filter(qId => {
                                                    let isRight = false;
                                                    activeMockExam.sections.forEach(s => {
                                                        const matchQ = s.questions.find(q => q.id === qId);
                                                        if (matchQ && matchQ.correctAnswer === examAnswers[qId]) isRight = true;
                                                    });
                                                    return isRight;
                                                }).length}
                                                <span className="text-2xl text-neutral-warm/30 font-mono"> / {activeMockExam.totalQuestions}</span>
                                            </div>
                                            <p className="text-xs text-neutral-warm/50">
                                                Passing threshold: {activeMockExam.passingPercentage}%
                                            </p>
                                        </div>

                                        {/* Sectional Breakdown */}
                                        <div className="space-y-3 max-w-lg mx-auto text-left mb-8">
                                            {activeMockExam.sections.map((sec, i) => {
                                                const correctInSec = sec.questions.filter(q => examAnswers[q.id] === q.correctAnswer).length;
                                                return (
                                                    <div key={i} className="bg-bg-elevated p-3.5 rounded-xl flex items-center justify-between border border-neutral-warm/5">
                                                        <span className="text-xs font-semibold text-neutral-warm/80">{sec.title}</span>
                                                        <span className="text-xs font-mono font-bold text-primary">
                                                            {correctInSec} / {sec.questions.length}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}

                                <div className="bg-bg-card border border-neutral-warm/10 rounded-2xl p-8 shadow-sm">
                                    <h2 className="text-xl font-serif font-bold text-neutral-warm mb-2">
                                        Choose JLPT Practice Level
                                    </h2>
                                    <p className="text-xs text-neutral-warm/50 mb-6">
                                        Experience timed official test conditions across Language Knowledge, Grammar & Reading, and Listening.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                        {mockTests.map((exam) => (
                                            <div
                                                key={exam.id}
                                                onClick={() => setSelectedExamLevel(exam.level)}
                                                className={`p-6 rounded-xl border cursor-pointer transition-all ${selectedExamLevel === exam.level
                                                        ? 'bg-primary/10 border-2 border-primary shadow-md shadow-primary/20'
                                                        : 'bg-bg-elevated border-neutral-warm/10 hover:border-primary/40'
                                                    }`}
                                            >
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-primary text-white">
                                                        {exam.level}
                                                    </span>
                                                    <span className="text-xs text-neutral-warm/40 font-mono">
                                                        ⏱️ {exam.timeLimitMinutes} mins
                                                    </span>
                                                </div>
                                                <h3 className="text-base font-bold text-neutral-warm mb-1">{exam.title}</h3>
                                                <p className="text-xs text-neutral-warm/50 leading-relaxed">{exam.description}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        type="button"
                                        onClick={startMockExam}
                                        className="w-full bg-primary text-white py-4 rounded-xl font-bold text-sm tracking-wider uppercase shadow-lg shadow-primary/20 hover:bg-primary-light transition-all"
                                    >
                                        Start Timed {selectedExamLevel} Practice Exam
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Active Timed Mock Exam */}
                        {examStarted && !examFinished && activeExamQuestion && (
                            <div className="fade-in">
                                {/* Exam Status Bar */}
                                <div className="bg-bg-card border border-neutral-warm/10 rounded-xl p-4 mb-6 flex items-center justify-between shadow-sm">
                                    <div>
                                        <span className="text-[11px] font-bold text-primary uppercase tracking-wider block">
                                            {activeExamSection.title}
                                        </span>
                                        <span className="text-xs text-neutral-warm/50">
                                            Question {examQuestionIndex + 1} of {activeExamSection.questions.length}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="text-right">
                                            <span className="text-[10px] text-neutral-warm/40 uppercase block">Time Remaining</span>
                                            <span className="font-mono text-base font-bold text-primary">
                                                {formatTime(timeRemaining)}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Active Question Card */}
                                <div className="bg-bg-card border border-neutral-warm/10 rounded-2xl p-8 mb-6 shadow-md">
                                    {/* Reading Passage if present */}
                                    {activeExamQuestion.passage && (
                                        <div className="bg-bg-elevated p-4 rounded-xl mb-6 font-jp text-sm text-neutral-warm/90 leading-loose border border-neutral-warm/5">
                                            {activeExamQuestion.passage}
                                        </div>
                                    )}

                                    {/* Listening Audio if present */}
                                    {activeExamQuestion.audioText && (
                                        <div className="flex justify-center mb-6">
                                            <AudioPlayer text={activeExamQuestion.audioText} label="Listen to Audio Question" rate={0.85} />
                                        </div>
                                    )}

                                    <div className="font-jp text-xl md:text-2xl text-neutral-warm font-bold text-center mb-8 leading-relaxed">
                                        {activeExamQuestion.question}
                                    </div>

                                    {/* Options */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-xl mx-auto">
                                        {activeExamQuestion.options.map((opt, i) => {
                                            const isSelected = examAnswers[activeExamQuestion.id] === opt;
                                            return (
                                                <button
                                                    key={i}
                                                    type="button"
                                                    onClick={() => handleExamSelectOption(activeExamQuestion.id, opt)}
                                                    className={`p-4 rounded-xl text-left text-sm font-jp transition-all border ${isSelected
                                                            ? 'bg-primary/15 border-2 border-primary text-primary font-bold shadow-sm'
                                                            : 'bg-bg-elevated border-neutral-warm/10 text-neutral-warm/80 hover:border-primary/40'
                                                        }`}
                                                >
                                                    {opt}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Navigation & Submit */}
                                <div className="flex items-center justify-between">
                                    <button
                                        type="button"
                                        onClick={prevExamQuestion}
                                        disabled={examSectionIndex === 0 && examQuestionIndex === 0}
                                        className="px-6 py-3 rounded-xl border border-neutral-warm/10 text-xs font-bold uppercase tracking-wider text-neutral-warm/60 hover:text-neutral-warm disabled:opacity-20"
                                    >
                                        ← Previous
                                    </button>
                                    <button
                                        type="button"
                                        onClick={nextExamQuestion}
                                        className="px-8 py-3 bg-primary text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-md shadow-primary/20 hover:bg-primary-light transition-all"
                                    >
                                        {examSectionIndex === activeMockExam.sections.length - 1 &&
                                            examQuestionIndex === activeExamSection.questions.length - 1
                                            ? 'Finish Exam & Score'
                                            : 'Next Question →'}
                                    </button>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
