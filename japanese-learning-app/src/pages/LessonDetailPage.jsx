import { useParams, Link } from 'react-router-dom';
import { lessons } from '../data/lessons';
import { useProgress } from '../context/ProgressContext';

export default function LessonDetailPage() {
    const { id } = useParams();
    const { progress, completeLesson } = useProgress();
    const lesson = lessons.find((l) => l.id === id);

    if (!lesson) {
        return (
            <div className="fade-in max-w-3xl mx-auto px-4 py-20 text-center">
                <div className="text-5xl mb-4">😵</div>
                <h1 className="text-2xl font-bold text-navy mb-3">Lesson not found</h1>
                <p className="text-navy/50 mb-6">The lesson you&apos;re looking for doesn&apos;t exist.</p>
                <Link to="/lessons" className="text-accent hover:text-accent-light font-medium">← Back to lessons</Link>
            </div>
        );
    }

    const isCompleted = progress.completedLessons.includes(lesson.id);

    const handleComplete = () => {
        completeLesson(lesson.id);
    };

    return (
        <div className="fade-in max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-navy/40 mb-8">
                <Link to="/lessons" className="hover:text-navy transition-colors">Lessons</Link>
                <span>/</span>
                <span className="text-navy/60">{lesson.level}</span>
                <span>/</span>
                <span className="text-navy/60 truncate">{lesson.title}</span>
            </div>

            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${lesson.level === 'N5' ? 'bg-bamboo/15 text-bamboo' :
                            lesson.level === 'N4' ? 'bg-blue-500/10 text-blue-700' :
                                lesson.level === 'N3' ? 'bg-gold/20 text-amber-800' :
                                    lesson.level === 'N2' ? 'bg-accent/10 text-accent' :
                                        'bg-navy/10 text-navy'
                        }`}>
                        {lesson.level}
                    </span>
                    {isCompleted && (
                        <span className="inline-flex items-center gap-1 bg-bamboo/15 text-bamboo text-xs font-semibold px-3 py-1.5 rounded-full">
                            ✓ Completed
                        </span>
                    )}
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-navy mb-3">{lesson.title}</h1>
                <p className="text-navy/50 text-lg">{lesson.description}</p>
            </div>

            {/* Content */}
            <div className="bg-white rounded-2xl p-6 md:p-8 card-shadow border border-navy/5 mb-8">
                <div className="prose-custom text-navy/80 leading-relaxed whitespace-pre-line text-[15px]">
                    {lesson.content.split('\n').map((line, i) => {
                        const trimmed = line.trim();
                        if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
                            return <h3 key={i} className="text-lg font-bold text-navy mt-6 mb-2">{trimmed.replace(/\*\*/g, '')}</h3>;
                        }
                        if (trimmed.startsWith('**')) {
                            const parts = trimmed.split('**');
                            return (
                                <p key={i} className="mb-1">
                                    {parts.map((part, j) => j % 2 === 1 ? <strong key={j} className="text-navy font-semibold">{part}</strong> : part)}
                                </p>
                            );
                        }
                        if (trimmed.startsWith('•')) {
                            const content = trimmed.slice(1).trim();
                            const parts = content.split('**');
                            return (
                                <div key={i} className="flex gap-2 mb-1.5 pl-2">
                                    <span className="text-accent shrink-0">•</span>
                                    <span>
                                        {parts.map((part, j) => j % 2 === 1 ? <strong key={j} className="text-navy font-semibold">{part}</strong> : part)}
                                    </span>
                                </div>
                            );
                        }
                        if (trimmed === '') return <div key={i} className="h-3"></div>;
                        return <p key={i} className="mb-2">{trimmed}</p>;
                    })}
                </div>
            </div>

            {/* Examples */}
            {lesson.examples && lesson.examples.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-navy mb-4">📋 Examples</h2>
                    <div className="space-y-3">
                        {lesson.examples.map((example, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-xl p-5 card-shadow border border-navy/5 fade-in-up"
                                style={{ animationDelay: `${i * 80}ms` }}
                            >
                                <div className="font-jp text-xl text-navy font-medium mb-1">{example.japanese}</div>
                                <div className="text-accent/70 text-sm font-medium mb-1">{example.romaji}</div>
                                <div className="text-navy/50 text-sm">{example.english}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Cultural Note */}
            {lesson.culturalNote && (
                <div className="bg-sakura-light/30 border border-sakura/20 rounded-2xl p-6 mb-8">
                    <h3 className="font-bold text-navy text-lg mb-2">🏯 Cultural Note</h3>
                    <p className="text-navy/70 text-sm leading-relaxed">{lesson.culturalNote}</p>
                </div>
            )}

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
                {!isCompleted ? (
                    <button
                        onClick={handleComplete}
                        id="mark-complete-btn"
                        className="inline-flex items-center gap-2 bg-bamboo text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-bamboo/20 hover:shadow-xl hover:bg-bamboo-light hover:-translate-y-0.5 transition-all duration-300"
                    >
                        ✓ Mark as Complete
                    </button>
                ) : (
                    <div className="inline-flex items-center gap-2 bg-bamboo/10 text-bamboo px-6 py-3 rounded-xl font-semibold">
                        ✓ Lesson completed
                    </div>
                )}

                <Link
                    to="/quiz"
                    className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-accent/20 hover:shadow-xl hover:bg-accent-light hover:-translate-y-0.5 transition-all duration-300"
                >
                    Practice This →
                </Link>

                <Link
                    to="/lessons"
                    className="inline-flex items-center gap-2 bg-navy/5 text-navy/60 px-6 py-3 rounded-xl font-medium hover:bg-navy/10 transition-all"
                >
                    ← All Lessons
                </Link>
            </div>
        </div>
    );
}
