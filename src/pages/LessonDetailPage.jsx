import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { lessons } from '../data/lessons';
import { useProgress } from '../context/ProgressContext';
import AudioPlayer from '../components/AudioPlayer';
import DialogueBox from '../components/DialogueBox';

export default function LessonDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { progress, completeLesson } = useProgress();
    const lesson = lessons.find((l) => l.id === id);

    // Reading & Listening Quiz State
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showExplanations, setShowExplanations] = useState({});

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

    const handleAnswerSelect = (qIndex, option, correctAnswer) => {
        setSelectedAnswers(prev => ({ ...prev, [qIndex]: option }));
        setShowExplanations(prev => ({ ...prev, [qIndex]: true }));
    };

    const renderContent = (text) => {
        if (!text) return null;
        return text.split('\n').map((line, i) => {
            if (line.startsWith('### ')) {
                return <h3 key={i} className="text-xl font-bold text-neutral-warm mt-8 mb-4 border-b border-neutral-warm/10 pb-2">{line.replace('### ', '')}</h3>;
            }
            if (line.startsWith('#### ')) {
                return <h4 key={i} className="text-base font-bold text-primary mt-6 mb-3">{line.replace('#### ', '')}</h4>;
            }
            if (line.startsWith('**') && line.endsWith('**')) {
                return <h4 key={i} className="text-lg font-bold text-neutral-warm mt-6 mb-3">{line.replace(/\*\*/g, '')}</h4>;
            }
            if (line.startsWith('* ') || line.startsWith('- ')) {
                return (
                    <div key={i} className="flex gap-3 my-2 pl-2">
                        <span className="text-primary mt-1.5 text-xs">●</span>
                        <span className="text-neutral-warm/80 leading-relaxed text-sm">{line.substring(2)}</span>
                    </div>
                );
            }
            if (line.startsWith('> ')) {
                return (
                    <div key={i} className="my-4 p-4 rounded-lg bg-primary/5 border-l-4 border-l-primary text-sm text-neutral-warm/80 italic leading-relaxed">
                        {line.replace('> ', '')}
                    </div>
                );
            }
            if (line.trim() === '') return <div key={i} className="h-2"></div>;
            return <p key={i} className="text-neutral-warm/70 leading-relaxed mb-3 text-sm">{line}</p>;
        });
    };

    return (
        <div className="fade-in min-h-screen">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
                {/* Breadcrumb Navigation */}
                <div className="text-xs text-neutral-warm/40 tracking-wider uppercase mb-8 flex flex-wrap items-center gap-2">
                    <Link to="/lessons" className="hover:text-primary transition-colors">Curriculum</Link>
                    <span>/</span>
                    <span className="text-primary font-semibold">Level {lesson.level}</span>
                    <span>/</span>
                    <span className="text-neutral-warm/60">{lesson.moduleTitle || `Module ${lesson.moduleNumber || 1}`}</span>
                    <span>/</span>
                    <span className="text-neutral-warm/80 font-medium truncate max-w-xs">{lesson.title}</span>
                </div>

                {/* Lesson Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-neutral-warm/10">
                    <div className="flex items-center gap-3">
                        <span
                            className="text-xs font-bold px-3 py-1 rounded"
                            style={{ backgroundColor: `${color}15`, color, border: `1px solid ${color}30` }}
                        >
                            JLPT {lesson.level}
                        </span>
                        <span className="text-xs font-medium px-2.5 py-1 rounded bg-bg-elevated text-neutral-warm/60 uppercase tracking-wider">
                            {lesson.category}
                        </span>
                    </div>
                    <div>
                        {!isCompleted ? (
                            <button
                                onClick={() => completeLesson(lesson.id)}
                                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider border border-success/40 text-success px-4 py-2 rounded-lg hover:bg-success/10 transition-all shadow-sm"
                            >
                                <span className="text-success text-sm">●</span> Mark Complete
                            </button>
                        ) : (
                            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-success px-3 py-1.5 rounded-lg bg-success/10 border border-success/30">
                                <span>✓</span> Completed & Sealed
                            </span>
                        )}
                    </div>
                </div>

                {/* Title & Japanese Subtitle */}
                <div className="mb-8">
                    {lesson.japaneseTitle && (
                        <div className="font-jp text-primary font-bold text-sm tracking-widest uppercase mb-1">
                            {lesson.japaneseTitle}
                        </div>
                    )}
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-neutral-warm mb-3 leading-tight">
                        {lesson.title}
                    </h1>
                    <p className="text-neutral-warm/60 text-base md:text-lg font-light leading-relaxed">
                        {lesson.description}
                    </p>
                </div>

                {/* Learning Objectives Box */}
                {lesson.learningObjectives && lesson.learningObjectives.length > 0 && (
                    <div className="bg-bg-elevated/60 border border-neutral-warm/10 rounded-xl p-6 mb-8 shadow-sm">
                        <h3 className="text-primary text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
                            <span>🎯</span> Learning Objectives
                        </h3>
                        <div className="space-y-2.5">
                            {lesson.learningObjectives.map((obj, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                                        {i + 1}
                                    </span>
                                    <span className="text-neutral-warm/80 text-sm leading-relaxed">{obj}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Main Content Article */}
                <div className="bg-bg-card border border-neutral-warm/10 rounded-xl p-8 mb-8 shadow-md">
                    {renderContent(lesson.content)}
                </div>

                {/* Conversational Dialogue Section */}
                {lesson.dialogue && <DialogueBox dialogue={lesson.dialogue} />}

                {/* Practice Examples */}
                {lesson.examples && lesson.examples.length > 0 && (
                    <div className="mb-8 bg-bg-card border border-neutral-warm/10 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-6 pb-3 border-b border-neutral-warm/5">
                            <h3 className="text-primary text-xs font-bold tracking-widest uppercase">
                                Practice Examples & Audio
                            </h3>
                            <span className="text-xs text-neutral-warm/40 font-mono">{lesson.examples.length} examples</span>
                        </div>
                        <div className="space-y-4">
                            {lesson.examples.map((ex, i) => (
                                <div key={i} className="border-l-4 border-l-primary/40 bg-bg-elevated/40 p-4 rounded-r flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="font-jp text-lg text-neutral-warm mb-1">{ex.japanese}</div>
                                        {ex.romaji && <div className="text-primary/70 text-xs italic mb-1">{ex.romaji}</div>}
                                        <div className="text-neutral-warm/50 text-xs">{ex.english}</div>
                                    </div>
                                    <AudioPlayer text={ex.japanese} rate={0.85} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Reading Comprehension Activity */}
                {lesson.readingPassage && (
                    <div className="bg-bg-card border border-neutral-warm/10 rounded-xl p-6 mb-8">
                        <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-warm/5">
                            <h3 className="text-primary text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                                <span>📖</span> Reading Comprehension (読解)
                            </h3>
                            <AudioPlayer text={lesson.readingPassage.japanese} label="Listen to Passage" rate={0.85} />
                        </div>
                        <h4 className="text-base font-bold text-neutral-warm mb-3">{lesson.readingPassage.title}</h4>
                        <div className="bg-bg-elevated/80 border border-neutral-warm/5 rounded-lg p-5 mb-6 font-jp text-neutral-warm/90 leading-loose text-base">
                            {lesson.readingPassage.japanese}
                        </div>

                        {/* Reading Questions */}
                        {lesson.readingPassage.questions && lesson.readingPassage.questions.map((q, qIdx) => {
                            const isAnswered = selectedAnswers[`r_${qIdx}`] !== undefined;
                            const isCorrect = selectedAnswers[`r_${qIdx}`] === q.correctAnswer;
                            return (
                                <div key={qIdx} className="border-t border-neutral-warm/10 pt-4 mt-4">
                                    <p className="text-sm font-semibold text-neutral-warm mb-3">{q.question}</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mb-3">
                                        {q.options.map((opt, optIdx) => {
                                            const isSelected = selectedAnswers[`r_${qIdx}`] === opt;
                                            return (
                                                <button
                                                    key={optIdx}
                                                    type="button"
                                                    onClick={() => handleAnswerSelect(`r_${qIdx}`, opt, q.correctAnswer)}
                                                    className={`p-3 rounded-lg text-xs text-left transition-all border ${isSelected
                                                            ? isCorrect
                                                                ? 'bg-success/15 border-success text-success font-bold'
                                                                : 'bg-primary/15 border-primary text-primary font-bold'
                                                            : 'bg-bg-elevated border-neutral-warm/10 text-neutral-warm/70 hover:border-primary/30'
                                                        }`}
                                                >
                                                    {opt}
                                                </button>
                                            );
                                        })}
                                    </div>
                                    {isAnswered && (
                                        <div className={`p-3 rounded-lg text-xs leading-relaxed ${isCorrect ? 'bg-success/10 text-success' : 'bg-primary/10 text-primary'}`}>
                                            <span className="font-bold">{isCorrect ? '✓ Correct! ' : '✗ Incorrect. '}</span>
                                            {q.explanation}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Listening Comprehension Activity */}
                {lesson.listeningExercise && (
                    <div className="bg-bg-card border border-neutral-warm/10 rounded-xl p-6 mb-8">
                        <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-warm/5">
                            <h3 className="text-primary text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                                <span>🎧</span> Listening Practice (聴解)
                            </h3>
                            <AudioPlayer text={lesson.listeningExercise.audioText} label="Play Audio" rate={0.85} />
                        </div>
                        <p className="text-xs text-neutral-warm/50 mb-4">
                            Listen to the Japanese speech prompt above and select the most accurate response below.
                        </p>
                        <div className="border-t border-neutral-warm/10 pt-4">
                            <p className="text-sm font-semibold text-neutral-warm mb-3">{lesson.listeningExercise.question}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mb-3">
                                {lesson.listeningExercise.options.map((opt, optIdx) => {
                                    const isSelected = selectedAnswers['listening'] === opt;
                                    const isCorrect = isSelected && opt === lesson.listeningExercise.correctAnswer;
                                    return (
                                        <button
                                            key={optIdx}
                                            type="button"
                                            onClick={() => handleAnswerSelect('listening', opt, lesson.listeningExercise.correctAnswer)}
                                            className={`p-3 rounded-lg text-xs text-left transition-all border ${isSelected
                                                    ? isCorrect
                                                        ? 'bg-success/15 border-success text-success font-bold'
                                                        : 'bg-primary/15 border-primary text-primary font-bold'
                                                    : 'bg-bg-elevated border-neutral-warm/10 text-neutral-warm/70 hover:border-primary/30'
                                                }`}
                                        >
                                            {opt}
                                        </button>
                                    );
                                })}
                            </div>
                            {selectedAnswers['listening'] && (
                                <div className="p-3 rounded-lg text-xs leading-relaxed bg-bg-elevated text-neutral-warm/80">
                                    <span className="font-bold text-primary">Transcript: </span>
                                    {lesson.listeningExercise.transcript}
                                    <p className="mt-1 text-neutral-warm/60">{lesson.listeningExercise.explanation}</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Cultural Notes & Common Mistakes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {lesson.culturalNote && (
                        <div className="border-l-4 border-l-[#f1c40f] bg-bg-card p-6 rounded-r">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-[#f1c40f] text-sm">ℹ</span>
                                <h4 className="text-xs font-bold text-[#f1c40f] tracking-widest uppercase">Cultural Insight</h4>
                            </div>
                            <p className="text-neutral-warm/70 italic text-xs leading-relaxed">{lesson.culturalNote}</p>
                        </div>
                    )}
                    {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
                        <div className="border-l-4 border-l-primary bg-bg-card p-6 rounded-r">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-primary text-sm">⚠️</span>
                                <h4 className="text-xs font-bold text-primary tracking-widest uppercase">Common Pitfalls</h4>
                            </div>
                            <ul className="space-y-1.5">
                                {lesson.commonMistakes.map((mistake, idx) => (
                                    <li key={idx} className="text-neutral-warm/70 text-xs leading-relaxed">
                                        • {mistake}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Seal Lesson CTA */}
                {!isCompleted ? (
                    <div className="text-center py-10 bg-bg-card border border-neutral-warm/10 rounded-2xl mb-12">
                        <button
                            onClick={() => completeLesson(lesson.id)}
                            className="group inline-flex flex-col items-center"
                        >
                            <div className="w-16 h-16 bg-primary/10 border border-primary/40 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-primary/20 group-hover:scale-105 transition-all shadow-md">
                                <span className="text-3xl font-serif text-primary">完</span>
                            </div>
                            <p className="text-xs text-primary font-bold uppercase tracking-widest mb-1">Seal Lesson</p>
                            <p className="text-sm font-semibold text-neutral-warm">Mark Lesson Complete</p>
                            <p className="text-xs text-neutral-warm/40 mt-1 max-w-xs">
                                Stamp the forge seal to lock in your study progress and update your daily streak.
                            </p>
                        </button>
                    </div>
                ) : (
                    <div className="text-center py-8 bg-success/5 border border-success/20 rounded-2xl mb-12">
                        <span className="text-2xl text-success block mb-2 font-serif">印</span>
                        <p className="text-xs text-success font-bold uppercase tracking-widest">Mastery Recorded</p>
                        <p className="text-xs text-neutral-warm/40 mt-1">This lesson is completed and recorded in your forge archives.</p>
                    </div>
                )}

                {/* Footer Navigation */}
                <div className="flex items-center justify-between pt-8 border-t border-neutral-warm/10">
                    {prevLesson ? (
                        <Link
                            to={`/lessons/${prevLesson.id}`}
                            className="text-xs md:text-sm text-neutral-warm/60 hover:text-primary transition-colors flex items-center gap-2 font-medium"
                        >
                            ← {prevLesson.title}
                        </Link>
                    ) : <div />}
                    <Link
                        to="/lessons"
                        className="text-xs text-neutral-warm/40 hover:text-neutral-warm uppercase tracking-wider font-semibold"
                    >
                        All Lessons
                    </Link>
                    {nextLesson ? (
                        <Link
                            to={`/lessons/${nextLesson.id}`}
                            className="text-xs md:text-sm text-primary font-medium hover:text-primary-light transition-colors flex items-center gap-2"
                        >
                            {nextLesson.title} →
                        </Link>
                    ) : <div />}
                </div>
            </div>
        </div>
    );
}
