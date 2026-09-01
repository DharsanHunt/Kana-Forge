import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { calculateOverallStats } from '../services/progressCalculator';

export default function ProgressPage() {
    const { progress, removeWord } = useProgress();

    // Deterministically compute all progress metrics from actual application state
    const stats = useMemo(() => {
        return calculateOverallStats(progress);
    }, [progress]);

    const levelColors = {
        N5: '#2ecc71',
        N4: '#3498db',
        N3: '#f1c40f',
        N2: '#e63746'
    };

    const levelNames = {
        N5: 'Beginner Curriculum',
        N4: 'Elementary Curriculum',
        N3: 'Intermediate (Upcoming)',
        N2: 'Pre-Advanced (Upcoming)'
    };

    return (
        <div className="fade-in min-h-screen">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="mb-12 relative">
                    <div className="absolute -top-6 left-0 opacity-[0.04] pointer-events-none select-none">
                        <span className="text-[20vh] font-serif">修</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-primary text-xs font-bold tracking-widest uppercase">Learner Metrics</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-neutral-warm">
                        Progress <span className="text-neutral-warm/30">Dashboard</span>
                    </h1>
                    <p className="text-neutral-warm/50 text-sm md:text-base font-light mt-2 max-w-2xl">
                        Real-time deterministic breakdown of your lesson milestones, kanji mastery, vocabulary lexicon, and review areas.
                    </p>
                </div>

                {/* Top Stats Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {/* 1. Total Learned Kanji */}
                    <div className="bg-bg-card border border-neutral-warm/10 rounded-2xl p-6 shadow-sm hover:border-neutral-warm/20 transition-all">
                        <div className="text-xs text-neutral-warm/40 font-bold uppercase tracking-wider mb-2">Learned Kanji</div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold font-serif text-neutral-warm">{stats.totalKanjiLearned}</span>
                            <span className="text-xs text-neutral-warm/40 font-mono">/ {stats.totalKanjiCurriculum}</span>
                        </div>
                        <div className="text-[11px] text-neutral-warm/50 mt-2 flex items-center gap-1">
                            <span>✍</span>
                            <span>{stats.totalKanjiLearned > 0 ? `${stats.totalKanjiLearned} characters practiced` : 'No kanji practiced yet'}</span>
                        </div>
                    </div>

                    {/* 2. Study Streak */}
                    <div className="bg-bg-card border border-neutral-warm/10 rounded-2xl p-6 shadow-sm hover:border-neutral-warm/20 transition-all">
                        <div className="text-xs text-neutral-warm/40 font-bold uppercase tracking-wider mb-2">Study Streak</div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold font-serif text-[#f1c40f]">{stats.streakCount}</span>
                            <span className="text-sm font-medium text-neutral-warm/40">Days</span>
                        </div>
                        <div className="text-[11px] text-[#f1c40f]/70 mt-2 flex items-center gap-1">
                            <span>🔥</span>
                            <span>{stats.streakCount > 0 ? 'Daily forge consistency' : 'Start your streak today'}</span>
                        </div>
                    </div>

                    {/* 3. Mastery Rate */}
                    <div className="bg-bg-card border border-neutral-warm/10 rounded-2xl p-6 shadow-sm hover:border-neutral-warm/20 transition-all">
                        <div className="text-xs text-neutral-warm/40 font-bold uppercase tracking-wider mb-2">Mastery Rate</div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-bold font-serif text-neutral-warm">{stats.masteryRate}</span>
                            <span className="text-sm font-medium text-neutral-warm/40">%</span>
                        </div>
                        <div className="text-[11px] text-neutral-warm/50 mt-2 flex items-center gap-1">
                            <span>🎯</span>
                            <span>{stats.quizzesTaken > 0 ? `Across ${stats.quizzesTaken} quiz session${stats.quizzesTaken > 1 ? 's' : ''}` : 'Take quizzes to measure'}</span>
                        </div>
                    </div>

                    {/* 4. Vocabulary Saved */}
                    <div className="bg-bg-card border border-neutral-warm/10 rounded-2xl p-6 shadow-sm hover:border-neutral-warm/20 transition-all">
                        <div className="text-xs text-neutral-warm/40 font-bold uppercase tracking-wider mb-2">Saved Lexicon</div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold font-serif text-neutral-warm">{stats.savedVocabCount}</span>
                            <span className="text-xs text-neutral-warm/40 font-mono">words</span>
                        </div>
                        <div className="text-[11px] text-success mt-2 flex items-center gap-1">
                            <span>★</span>
                            <Link to="/vocabulary" className="hover:underline">
                                {stats.savedVocabCount > 0 ? 'Review bookmarked items' : 'Bookmark words in library'}
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Left Column: JLPT Level Progress Bars */}
                    <div className="lg:col-span-3 space-y-8">
                        {/* JLPT Mastery Levels */}
                        <div className="bg-bg-card border border-neutral-warm/10 rounded-2xl p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-warm/10">
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-5 rounded-full bg-primary"></div>
                                    <h2 className="text-lg font-bold text-neutral-warm">Curriculum Progress by JLPT Level</h2>
                                </div>
                                <span className="text-xs font-mono text-neutral-warm/40">Real-time Completion</span>
                            </div>

                            <div className="space-y-6">
                                {stats.levels.map((lp) => {
                                    const color = levelColors[lp.level] || '#2ecc71';
                                    return (
                                        <div key={lp.level} className="space-y-2">
                                            <div className="flex items-center justify-between text-sm">
                                                <div className="flex items-center gap-3">
                                                    <span className="font-bold px-2 py-0.5 rounded text-xs" style={{ backgroundColor: `${color}15`, color, border: `1px solid ${color}30` }}>
                                                        JLPT {lp.level}
                                                    </span>
                                                    <span className="text-neutral-warm/70 font-medium text-xs">{levelNames[lp.level]}</span>
                                                </div>
                                                <div className="flex items-center gap-3 font-mono text-xs">
                                                    <span className="text-neutral-warm/40">
                                                        {lp.total > 0 ? `${lp.completed} / ${lp.total} lessons` : 'Coming soon'}
                                                    </span>
                                                    <span className="font-bold" style={{ color }}>
                                                        {lp.percentage}% COMPLETE
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Animated Progress Bar */}
                                            <div className="w-full bg-bg-elevated rounded-full h-2 overflow-hidden border border-neutral-warm/5">
                                                <div
                                                    className="h-full rounded-full transition-all duration-700 ease-out"
                                                    style={{
                                                        width: `${lp.percentage}%`,
                                                        backgroundColor: color,
                                                        boxShadow: lp.percentage > 0 ? `0 0 10px ${color}40` : 'none'
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-8 pt-6 border-t border-neutral-warm/10 flex items-center justify-between text-xs text-neutral-warm/40">
                                <span>Progress updates automatically when lessons are marked complete.</span>
                                <Link to="/lessons" className="text-primary font-bold hover:underline">
                                    Go to Lessons →
                                </Link>
                            </div>
                        </div>

                        {/* Recent Study Activity Timeline */}
                        <div className="bg-bg-card border border-neutral-warm/10 rounded-2xl p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-5 rounded-full bg-[#f1c40f]"></div>
                                    <h3 className="text-base font-bold text-neutral-warm">Recent Quiz History</h3>
                                </div>
                                <span className="text-xs font-mono text-neutral-warm/40">{stats.quizzesTaken} attempts</span>
                            </div>

                            {progress.quizScores && progress.quizScores.length > 0 ? (
                                <div className="space-y-3">
                                    {progress.quizScores.slice(-5).reverse().map((attempt, index) => {
                                        const percentage = Math.round((attempt.score / attempt.total) * 100);
                                        const isPassing = percentage >= 70;
                                        return (
                                            <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-bg-elevated/60 border border-neutral-warm/5 text-xs">
                                                <div className="flex items-center gap-3">
                                                    <span className={`w-2 h-2 rounded-full ${isPassing ? 'bg-success' : 'bg-primary'}`}></span>
                                                    <div>
                                                        <span className="font-bold text-neutral-warm">{attempt.category || 'General Quiz'}</span>
                                                        <div className="text-[10px] text-neutral-warm/40 font-mono">{attempt.date || 'Recent'}</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3 font-mono">
                                                    <span className="text-neutral-warm/60">{attempt.score} / {attempt.total}</span>
                                                    <span className={`font-bold px-2 py-0.5 rounded text-[11px] ${isPassing ? 'bg-success/10 text-success' : 'bg-primary/10 text-primary'}`}>
                                                        {percentage}%
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="text-center py-8 text-neutral-warm/40 text-xs">
                                    <p className="mb-2">No quiz attempts recorded yet.</p>
                                    <Link to="/quiz" className="text-primary font-bold hover:underline">Start a Quiz →</Link>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Weak Spots + Saved Words */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Weak Spots */}
                        <div className="bg-bg-card border border-neutral-warm/10 rounded-2xl p-6 shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1.5 h-5 rounded-full bg-error"></div>
                                <h2 className="text-base font-bold text-neutral-warm">Weak Spots / Review Deck</h2>
                            </div>
                            <p className="text-xs text-neutral-warm/50 mb-4">
                                Concepts and questions frequently answered incorrectly during quizzes.
                            </p>

                            {stats.weakSpots.length === 0 ? (
                                <div className="p-6 rounded-xl bg-bg-elevated/40 border border-neutral-warm/5 text-center">
                                    <div className="text-2xl mb-2 font-serif text-neutral-warm/20">清</div>
                                    <p className="text-neutral-warm/40 text-xs mb-3">No weak spots detected. Great accuracy!</p>
                                    <Link to="/quiz" className="text-primary text-xs font-bold hover:underline">
                                        Take a Quiz →
                                    </Link>
                                </div>
                            ) : (
                                <div className="space-y-2.5">
                                    {stats.weakSpots.map((item, i) => (
                                        <div
                                            key={i}
                                            className="p-3.5 rounded-xl bg-bg-elevated/60 border border-neutral-warm/5 flex items-start justify-between gap-3 text-xs"
                                        >
                                            <div className="min-w-0 flex-1">
                                                <div className="font-medium text-neutral-warm line-clamp-2 mb-1">
                                                    {item.question}
                                                </div>
                                                <div className="flex items-center gap-2 text-[10px] text-neutral-warm/40">
                                                    <span className="text-primary font-jp font-bold">{item.correctAnswer}</span>
                                                    <span>•</span>
                                                    <span className="uppercase">{item.category || 'Quiz'}</span>
                                                </div>
                                            </div>
                                            <span className="px-2 py-0.5 rounded bg-error/10 text-error font-bold font-mono text-[10px] shrink-0">
                                                {item.wrongCount} err{item.wrongCount > 1 ? 's' : ''}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Saved Words Deck */}
                        <div className="bg-bg-card border border-neutral-warm/10 rounded-2xl p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-5 rounded-full bg-primary"></div>
                                    <h2 className="text-base font-bold text-neutral-warm">Saved Vocabulary</h2>
                                </div>
                                <Link to="/vocabulary" className="text-primary text-xs font-bold hover:underline">
                                    Browse ({stats.savedVocabCount})
                                </Link>
                            </div>

                            {progress.savedWords && progress.savedWords.length > 0 ? (
                                <div className="space-y-2">
                                    {progress.savedWords.slice(0, 4).map((w) => (
                                        <div
                                            key={w.id}
                                            className="p-3 rounded-xl bg-bg-elevated/60 border border-neutral-warm/5 flex items-center justify-between gap-3 text-xs"
                                        >
                                            <div>
                                                <span className="font-jp font-bold text-neutral-warm">{w.word}</span>
                                                {w.reading && <span className="font-jp text-primary/80 ml-1.5">({w.reading})</span>}
                                                <div className="text-[11px] text-neutral-warm/50 truncate max-w-[160px]">{w.meaning}</div>
                                            </div>
                                            <button
                                                onClick={() => removeWord(w.id)}
                                                className="text-neutral-warm/30 hover:text-error transition-colors p-1"
                                                title="Remove bookmark"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="p-6 rounded-xl bg-bg-elevated/40 border border-neutral-warm/5 text-center text-xs text-neutral-warm/40">
                                    <p className="mb-2">No words bookmarked yet.</p>
                                    <Link to="/vocabulary" className="text-primary font-bold hover:underline">
                                        Explore Vocabulary Library →
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
