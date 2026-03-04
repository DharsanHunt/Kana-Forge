import { useParams, Link, useNavigate } from 'react-router-dom';
import { lessons } from '../data/lessons';
import { useProgress } from '../context/ProgressContext';

export default function LessonDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { progress, completeLesson } = useProgress();
    const lesson = lessons.find((l) => l.id === id);

    if (!lesson) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="text-5xl mb-4 font-serif text-neutral-warm/20">空</div>
                    <p className="text-neutral-warm/40 mb-4">Lesson not found.</p>
                    <Link to="/lessons" className="text-primary hover:underline">← Back to Lessons</Link>
                </div>
            </div>
        );
    }

    const isCompleted = progress.completedLessons.includes(lesson.id);
    const lessonIndex = lessons.findIndex((l) => l.id === id);
    const prevLesson = lessonIndex > 0 ? lessons[lessonIndex - 1] : null;
    const nextLesson = lessonIndex < lessons.length - 1 ? lessons[lessonIndex + 1] : null;

    const levelColors = { N5: '#2ecc71', N4: '#3498db', N3: '#f1c40f', N2: '#e63746', N1: '#F0EDE6' };
    const color = levelColors[lesson.level] || '#F0EDE6';

    const renderContent = (text) => {
        if (!text) return null;
        return text.split('\n').map((line, i) => {
            if (line.startsWith('**') && line.endsWith('**')) {
                return <h3 key={i} className="text-xl font-bold text-neutral-warm mt-6 mb-3">{line.replace(/\*\*/g, '')}</h3>;
            }
            if (line.startsWith('- ')) {
                return (
                    <div key={i} className="flex gap-3 my-2">
                        <span className="text-primary mt-1.5 text-xs">●</span>
                        <span className="text-neutral-warm/70 leading-relaxed">{line.substring(2)}</span>
                    </div>
                );
            }
            if (line.trim() === '') return <div key={i} className="h-3"></div>;
            return <p key={i} className="text-neutral-warm/70 leading-relaxed mb-2">{line}</p>;
        });
    };

    return (
        <div className="fade-in min-h-screen">
            <div className="max-w-3xl mx-auto px-6 lg:px-8 py-12">
                {/* Breadcrumb */}
                <div className="text-xs text-neutral-warm/30 tracking-wider uppercase mb-8 flex items-center gap-2">
                    <Link to="/lessons" className="hover:text-primary transition-colors">Japanese</Link>
                    <span>/</span>
                    <span className="text-neutral-warm/50">{lesson.category}</span>
                    <span>/</span>
                    <span className="text-neutral-warm/60">{lesson.title}</span>
                </div>

                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                    <span
                        className="text-xs font-bold px-3 py-1 rounded"
                        style={{ backgroundColor: `${color}15`, color, border: `1px solid ${color}30` }}
                    >
                        LEVEL {lesson.level}
                    </span>
                    {!isCompleted ? (
                        <button
                            onClick={() => completeLesson(lesson.id)}
                            className="flex items-center gap-2 text-sm font-medium border border-success/30 text-success px-4 py-2 rounded hover:bg-success/10 transition-colors"
                        >
                            <span className="text-success">●</span> Mark Complete
                        </button>
                    ) : (
                        <span className="flex items-center gap-2 text-sm font-medium text-success/60">
                            <span>✓</span> Completed
                        </span>
                    )}
                </div>

                <h1 className="text-3xl md:text-4xl font-serif font-bold text-neutral-warm mb-4">{lesson.title}</h1>
                <p className="text-neutral-warm/50 text-lg font-light mb-10">{lesson.description}</p>

                {/* Content Card */}
                <div className="bg-bg-card border border-neutral-warm/5 rounded-xl p-8 mb-8">
                    {renderContent(lesson.content)}
                </div>

                {/* Examples */}
                {lesson.examples && lesson.examples.length > 0 && (
                    <div className="mb-8">
                        <h3 className="text-primary text-xs font-bold tracking-widest uppercase mb-6">Practice Examples</h3>
                        <div className="space-y-4">
                            {lesson.examples.map((ex, i) => (
                                <div key={i} className="border-l-4 border-l-primary/40 bg-bg-card p-5 rounded-r">
                                    <div className="font-jp text-xl text-neutral-warm mb-1">{ex.japanese}</div>
                                    <div className="text-primary/70 text-sm italic">{ex.romaji}</div>
                                    <div className="text-neutral-warm/40 text-sm mt-1">{ex.english}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Cultural Note */}
                {lesson.culturalNote && (
                    <div className="border-l-4 border-l-[#f1c40f] bg-bg-card p-6 rounded-r mb-8">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-[#f1c40f]">ℹ</span>
                            <h4 className="text-xs font-bold text-[#f1c40f] tracking-widest uppercase">Cultural Note</h4>
                        </div>
                        <p className="text-neutral-warm/60 italic text-sm leading-relaxed">{lesson.culturalNote}</p>
                    </div>
                )}

                {/* Seal Lesson */}
                {!isCompleted && (
                    <div className="text-center py-12">
                        <button
                            onClick={() => completeLesson(lesson.id)}
                            className="group"
                        >
                            <div className="w-16 h-16 mx-auto bg-primary/10 border border-primary/30 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                                <span className="text-2xl font-serif text-primary">完</span>
                            </div>
                            <p className="text-xs text-neutral-warm/30 uppercase tracking-wider mb-1">Seal Lesson</p>
                            <p className="text-sm font-medium text-neutral-warm/50">Lesson Complete?</p>
                            <p className="text-xs text-neutral-warm/30 mt-1">Stamp the seal to record your progress in the forge.</p>
                        </button>
                    </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between pt-8 border-t border-neutral-warm/5">
                    {prevLesson ? (
                        <Link to={`/lessons/${prevLesson.id}`} className="text-sm text-neutral-warm/40 hover:text-primary transition-colors flex items-center gap-2">
                            ← Previous
                        </Link>
                    ) : <div />}
                    <div className="flex gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <span className="w-2 h-2 rounded-full bg-neutral-warm/20"></span>
                    </div>
                    {nextLesson ? (
                        <Link to={`/lessons/${nextLesson.id}`} className="text-sm text-primary font-medium hover:text-primary-light transition-colors flex items-center gap-2">
                            Next Lesson →
                        </Link>
                    ) : <div />}
                </div>
            </div>
        </div>
    );
}
