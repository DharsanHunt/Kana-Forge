import { useProgress } from '../context/ProgressContext';
import { lessons } from '../data/lessons';
import { Link } from 'react-router-dom';

export default function ProgressPage() {
    const { progress } = useProgress();

    const totalLessons = lessons.length;
    const completedCount = progress.completedLessons.length;
    const quizzesTaken = progress.quizScores.length;
    const averageScore = quizzesTaken > 0
        ? Math.round(progress.quizScores.reduce((sum, q) => sum + (q.score / q.total) * 100, 0) / quizzesTaken)
        : 0;

    const levelProgress = ['N5', 'N4', 'N3', 'N2'].map((level) => {
        const levelLessons = lessons.filter((l) => l.level === level);
        const completed = levelLessons.filter((l) => progress.completedLessons.includes(l.id)).length;
        const percent = levelLessons.length > 0 ? Math.round((completed / levelLessons.length) * 100) : 0;
        return { level, total: levelLessons.length, completed, percent };
    });

    const levelColors = { N5: '#2ecc71', N4: '#3498db', N3: '#f1c40f', N2: '#e63746' };
    const levelNames = { N5: 'Beginner', N4: 'Elementary', N3: 'Intermediate', N2: 'Pre-Advanced' };
    const topWeakSpots = [...(progress.weakSpots || [])].sort((a, b) => (b.wrongCount || 0) - (a.wrongCount || 0)).slice(0, 3);

    return (
        <div className="fade-in min-h-screen">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="mb-12 relative">
                    <div className="absolute -top-6 left-0 opacity-[0.04] pointer-events-none select-none">
                        <span className="text-[20vh] font-serif">修</span>
                    </div>
                    <span className="text-primary text-xs font-bold tracking-widest uppercase block mb-2">Your Journey</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-neutral-warm">
                        Progress <span className="text-neutral-warm/20">Dashboard</span>
                    </h1>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    <div className="bg-bg-card border border-neutral-warm/5 rounded-lg p-6">
                        <div className="text-xs text-neutral-warm/30 uppercase tracking-wider mb-3">Total Kanji</div>
                        <div className="text-4xl font-bold text-neutral-warm">{completedCount}</div>
                        <div className="text-xs text-success flex items-center gap-1 mt-2">
                            <span>↗</span> +{Math.min(completedCount, 12)} this week
                        </div>
                    </div>
                    <div className="bg-bg-card border border-neutral-warm/5 rounded-lg p-6">
                        <div className="text-xs text-neutral-warm/30 uppercase tracking-wider mb-3">Study Streak</div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold text-[#f1c40f]">{progress.streak.count}</span>
                            <span className="text-sm text-neutral-warm/30">Days</span>
                        </div>
                        <div className="text-xs text-[#f1c40f]/60 flex items-center gap-1 mt-2">
                            <span>🏆</span> Personal Best
                        </div>
                    </div>
                    <div className="bg-bg-card border border-neutral-warm/5 rounded-lg p-6">
                        <div className="text-xs text-neutral-warm/30 uppercase tracking-wider mb-3">Mastery Rate</div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-bold text-neutral-warm">{averageScore || 88.4}</span>
                            <span className="text-sm text-neutral-warm/30">%</span>
                        </div>
                        <div className="text-xs text-error/60 flex items-center gap-1 mt-2">
                            <span>↓</span> -0.2% variance
                        </div>
                    </div>
                    <div className="bg-bg-card border border-neutral-warm/5 rounded-lg p-6">
                        <div className="text-xs text-neutral-warm/30 uppercase tracking-wider mb-3">Vocabulary</div>
                        <div className="text-4xl font-bold text-neutral-warm">{progress.savedWords.length || '1,840'}</div>
                        <div className="text-xs text-success flex items-center gap-1 mt-2">
                            <span>↗</span> +{Math.min(progress.savedWords.length, 140)} items
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Left: JLPT + Chart */}
                    <div className="lg:col-span-3 space-y-8">
                        {/* JLPT Mastery Levels */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-6 border-t-2 border-primary"></div>
                                <h2 className="text-xl font-bold text-neutral-warm">JLPT Mastery Levels</h2>
                            </div>
                            <div className="space-y-5">
                                {levelProgress.map((lp) => (
                                    <div key={lp.level}>
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <span className="text-sm font-bold" style={{ color: levelColors[lp.level] }}>{lp.level}</span>
                                                <span className="text-sm text-neutral-warm/40">{levelNames[lp.level]}</span>
                                            </div>
                                            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: levelColors[lp.level] }}>
                                                {lp.percent}% Complete
                                            </span>
                                        </div>
                                        <div className="w-full bg-neutral-warm/5 rounded-full h-1.5">
                                            <div className="h-1.5 rounded-full transition-all duration-700" style={{ width: `${lp.percent}%`, backgroundColor: levelColors[lp.level] }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Retention Forecast */}
                        <div className="bg-bg-card border border-neutral-warm/5 rounded-lg p-6">
                            <h3 className="text-xs font-bold text-neutral-warm/30 uppercase tracking-widest mb-6">Retention Forecast</h3>
                            <div className="flex items-end justify-between h-40 gap-3 px-2">
                                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => {
                                    const heights = [30, 55, 45, 70, 85, 60, 40];
                                    return (
                                        <div key={day} className="flex flex-col items-center gap-2 flex-1">
                                            <div className="w-full flex flex-col justify-end h-32">
                                                <div
                                                    className="w-full bg-primary/60 rounded-t transition-all hover:bg-primary"
                                                    style={{ height: `${heights[i]}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-[10px] text-neutral-warm/25 uppercase">{day}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right: Weak Spots + Saved Words */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Weak Spots */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-6 border-t-2 border-primary"></div>
                                <h2 className="text-xl font-bold text-neutral-warm">Weak Spots</h2>
                            </div>
                            {topWeakSpots.length === 0 ? (
                                <div className="bg-bg-card border border-neutral-warm/5 rounded-lg p-6 text-center">
                                    <p className="text-neutral-warm/30 text-sm mb-3">Take quizzes to identify weak areas.</p>
                                    <Link to="/quiz" className="text-primary text-sm hover:text-primary-light">Take a quiz →</Link>
                                </div>
                            ) : (
                                <div className="space-y-2">
                                    {topWeakSpots.map((item, i) => (
                                        <div key={i} className="bg-bg-card border border-neutral-warm/5 rounded-lg p-4 flex items-center gap-4 hover:border-neutral-warm/10 transition-colors cursor-pointer group">
                                            <div className="text-2xl font-serif text-primary/50">{item.correctAnswer?.charAt(0) || '義'}</div>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-sm font-medium text-neutral-warm truncate">{item.correctAnswer || 'Gi'}</div>
                                                <div className="text-xs text-neutral-warm/30 uppercase">{item.category || 'Review'}</div>
                                            </div>
                                            <span className="text-neutral-warm/20 group-hover:text-neutral-warm/40 transition-colors">›</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Saved Words */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-6 border-t-2 border-primary"></div>
                                <h2 className="text-xl font-bold text-neutral-warm">Saved Words</h2>
                            </div>
                            {progress.savedWords.length === 0 ? (
                                <div className="bg-bg-card border border-neutral-warm/5 rounded-lg p-6 text-center">
                                    <p className="text-neutral-warm/30 text-sm mb-3">Save words from the vocabulary page.</p>
                                    <Link to="/vocabulary" className="text-primary text-sm hover:text-primary-light">Browse vocabulary →</Link>
                                </div>
                            ) : (
                                <div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {progress.savedWords.slice(0, 6).map((word) => (
                                            <span key={word.id} className="bg-bg-card border border-neutral-warm/10 text-neutral-warm/60 px-3 py-1.5 rounded text-sm font-jp">
                                                {word.word}
                                            </span>
                                        ))}
                                    </div>
                                    {progress.savedWords.length > 6 && (
                                        <Link to="/vocabulary" className="block w-full border border-neutral-warm/10 text-neutral-warm/30 py-3 rounded text-sm text-center hover:border-neutral-warm/20 transition-colors uppercase tracking-wider text-xs">
                                            View All {progress.savedWords.length} Items
                                        </Link>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
