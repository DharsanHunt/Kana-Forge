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

    // Per-level progress
    const levelProgress = ['N5', 'N4', 'N3', 'N2', 'N1'].map((level) => {
        const levelLessons = lessons.filter((l) => l.level === level);
        const completed = levelLessons.filter((l) => progress.completedLessons.includes(l.id)).length;
        return { level, total: levelLessons.length, completed, percent: levelLessons.length > 0 ? Math.round((completed / levelLessons.length) * 100) : 0 };
    });

    const levelColors = {
        N5: { bg: 'bg-bamboo', light: 'bg-bamboo/15', text: 'text-bamboo' },
        N4: { bg: 'bg-blue-500', light: 'bg-blue-500/10', text: 'text-blue-700' },
        N3: { bg: 'bg-amber-500', light: 'bg-gold/20', text: 'text-amber-800' },
        N2: { bg: 'bg-accent', light: 'bg-accent/10', text: 'text-accent' },
        N1: { bg: 'bg-navy', light: 'bg-navy/10', text: 'text-navy' },
    };

    // Weak spots sorted by wrong count
    const topWeakSpots = [...(progress.weakSpots || [])].sort((a, b) => (b.wrongCount || 0) - (a.wrongCount || 0)).slice(0, 8);

    return (
        <div className="fade-in max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Header */}
            <div className="mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-navy mb-3">📊 Your Progress</h1>
                <p className="text-navy/50 text-lg">Track your learning journey and see how far you&apos;ve come.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                <div className="bg-white rounded-2xl p-5 card-shadow border border-navy/5 text-center">
                    <div className="text-3xl font-bold text-navy mb-1">{completedCount}</div>
                    <div className="text-sm text-navy/40">Lessons Completed</div>
                    <div className="text-xs text-navy/30 mt-1">of {totalLessons}</div>
                </div>
                <div className="bg-white rounded-2xl p-5 card-shadow border border-navy/5 text-center">
                    <div className="text-3xl font-bold text-accent mb-1">{quizzesTaken}</div>
                    <div className="text-sm text-navy/40">Quizzes Taken</div>
                </div>
                <div className="bg-white rounded-2xl p-5 card-shadow border border-navy/5 text-center">
                    <div className="text-3xl font-bold text-bamboo mb-1">{averageScore}%</div>
                    <div className="text-sm text-navy/40">Average Score</div>
                </div>
                <div className="bg-white rounded-2xl p-5 card-shadow border border-navy/5 text-center">
                    <div className="text-3xl font-bold text-gold mb-1 flex items-center justify-center gap-1">
                        🔥 {progress.streak.count}
                    </div>
                    <div className="text-sm text-navy/40">Day Streak</div>
                    {progress.streak.lastStudyDate && (
                        <div className="text-xs text-navy/25 mt-1">Last: {progress.streak.lastStudyDate}</div>
                    )}
                </div>
            </div>

            {/* Level Progress */}
            <div className="bg-white rounded-2xl p-6 md:p-8 card-shadow border border-navy/5 mb-8">
                <h2 className="font-bold text-navy text-xl mb-6">📈 Progress by Level</h2>
                <div className="space-y-5">
                    {levelProgress.map((lp) => (
                        <div key={lp.level}>
                            <div className="flex justify-between items-center mb-2">
                                <div className="flex items-center gap-3">
                                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${levelColors[lp.level].light} ${levelColors[lp.level].text}`}>
                                        {lp.level}
                                    </span>
                                    <span className="text-sm text-navy/50">{lp.completed} / {lp.total} lessons</span>
                                </div>
                                <span className="text-sm font-semibold text-navy/60">{lp.percent}%</span>
                            </div>
                            <div className="w-full bg-navy/5 rounded-full h-3">
                                <div
                                    className={`${levelColors[lp.level].bg} h-3 rounded-full transition-all duration-700`}
                                    style={{ width: `${lp.percent}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Weak Spots */}
                <div className="bg-white rounded-2xl p-6 card-shadow border border-navy/5">
                    <h2 className="font-bold text-navy text-xl mb-4">🎯 Weak Spots</h2>
                    {topWeakSpots.length === 0 ? (
                        <div className="text-center py-8">
                            <div className="text-3xl mb-2">✨</div>
                            <p className="text-navy/40 text-sm">Take some quizzes to identify areas for review.</p>
                            <Link to="/quiz" className="text-accent text-sm font-medium hover:text-accent-light mt-2 inline-block">
                                Take a quiz →
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-2">
                            {topWeakSpots.map((item, i) => (
                                <div key={i} className="flex items-center justify-between bg-accent/5 border border-accent/10 rounded-xl px-4 py-3">
                                    <div className="text-sm text-navy/70 flex-1 min-w-0 truncate">{item.question}</div>
                                    <span className="text-xs font-bold text-accent ml-2 shrink-0">{item.wrongCount}× wrong</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Saved Words Summary */}
                <div className="bg-white rounded-2xl p-6 card-shadow border border-navy/5">
                    <h2 className="font-bold text-navy text-xl mb-4">❤️ Saved Words</h2>
                    {progress.savedWords.length === 0 ? (
                        <div className="text-center py-8">
                            <div className="text-3xl mb-2">📝</div>
                            <p className="text-navy/40 text-sm">Save words from the vocabulary page to have them appear here.</p>
                            <Link to="/vocabulary" className="text-accent text-sm font-medium hover:text-accent-light mt-2 inline-block">
                                Browse vocabulary →
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-2">
                            {progress.savedWords.slice(0, 8).map((word) => (
                                <div key={word.id} className="flex items-center justify-between bg-paper rounded-xl px-4 py-3">
                                    <div className="flex items-center gap-3 min-w-0">
                                        <span className="font-jp text-navy font-medium">{word.word}</span>
                                        <span className="text-accent/60 text-sm">{word.romaji}</span>
                                    </div>
                                    <span className="text-xs text-navy/40 shrink-0">{word.meaning}</span>
                                </div>
                            ))}
                            {progress.savedWords.length > 8 && (
                                <Link to="/vocabulary" className="text-accent text-sm font-medium hover:text-accent-light block text-center mt-2">
                                    View all {progress.savedWords.length} words →
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Recent Quiz Scores */}
            {progress.quizScores.length > 0 && (
                <div className="bg-white rounded-2xl p-6 card-shadow border border-navy/5 mt-8">
                    <h2 className="font-bold text-navy text-xl mb-4">📝 Recent Quizzes</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {[...progress.quizScores].reverse().slice(0, 8).map((quiz, i) => (
                            <div key={i} className="bg-paper rounded-xl p-4 text-center">
                                <div className={`text-2xl font-bold mb-1 ${(quiz.score / quiz.total) >= 0.8 ? 'text-bamboo' :
                                        (quiz.score / quiz.total) >= 0.5 ? 'text-gold' : 'text-accent'
                                    }`}>
                                    {quiz.score}/{quiz.total}
                                </div>
                                <div className="text-xs text-navy/40">{quiz.category === 'All' ? 'All categories' : quiz.category}</div>
                                <div className="text-xs text-navy/25 mt-1">{quiz.date}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
