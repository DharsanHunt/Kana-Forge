import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { lessons } from '../data/lessons';
import { useProgress } from '../context/ProgressContext';

const levels = ['All', 'N5', 'N4', 'N3', 'N2', 'N1'];
const categories = ['All', 'hiragana', 'grammar', 'vocab', 'kanji'];

const levelColors = {
    N5: '#2ecc71', N4: '#3498db', N3: '#f1c40f', N2: '#e63746', N1: '#F0EDE6',
};

const categoryKanji = {
    hiragana: 'あ', grammar: '文', vocab: '語', kanji: '漢',
};

export default function LessonsPage() {
    const [selectedLevel, setSelectedLevel] = useState('All');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const { progress } = useProgress();

    const filtered = useMemo(() => {
        return lessons.filter((l) => {
            const matchLevel = selectedLevel === 'All' || l.level === selectedLevel;
            const matchCat = selectedCategory === 'All' || l.category === selectedCategory;
            return matchLevel && matchCat;
        });
    }, [selectedLevel, selectedCategory]);

    return (
        <div className="fade-in min-h-screen">
            <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
                {/* Header */}
                <div className="mb-12 relative">
                    <div className="absolute -top-8 right-0 opacity-[0.04] pointer-events-none select-none">
                        <span className="text-[20vh] font-serif">初</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-serif font-bold gold-gradient-text mb-4">Lessons</h1>
                    <p className="text-neutral-warm/50 text-lg max-w-lg font-light">
                        Hone your blade in the art of Japanese. Master the foundational elements through curated study sets.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap items-center gap-3 mb-10">
                    {levels.map((level) => (
                        <button
                            key={level}
                            onClick={() => setSelectedLevel(level)}
                            className={`px-5 py-2.5 text-sm font-medium rounded transition-all ${selectedLevel === level
                                    ? 'bg-primary text-white'
                                    : 'border border-neutral-warm/10 text-neutral-warm/50 hover:border-neutral-warm/30 hover:text-neutral-warm'
                                }`}
                        >
                            {level === 'All' ? 'All Levels' : level}
                        </button>
                    ))}
                    <div className="w-px h-6 bg-neutral-warm/10 mx-2"></div>
                    {categories.filter(c => c !== 'All').map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(selectedCategory === cat ? 'All' : cat)}
                            className={`px-4 py-2.5 text-sm font-medium rounded transition-all ${selectedCategory === cat
                                    ? 'bg-neutral-warm/10 text-neutral-warm'
                                    : 'border border-neutral-warm/10 text-neutral-warm/40 hover:border-neutral-warm/20'
                                }`}
                        >
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Lessons List */}
                <div className="space-y-1">
                    {filtered.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="text-4xl mb-4 opacity-30">空</div>
                            <p className="text-neutral-warm/30">No lessons match your filters.</p>
                        </div>
                    ) : (
                        filtered.map((lesson) => {
                            const isCompleted = progress.completedLessons.includes(lesson.id);
                            const color = levelColors[lesson.level] || '#F0EDE6';
                            const kanji = categoryKanji[lesson.category] || '学';

                            return (
                                <Link
                                    key={lesson.id}
                                    to={`/lessons/${lesson.id}`}
                                    className="group flex items-center gap-6 py-5 px-6 border-b border-neutral-warm/5 hover:bg-neutral-warm/[0.02] transition-all"
                                >
                                    {/* Kanji icon */}
                                    <div className="text-3xl font-serif text-primary/40 group-hover:text-primary/70 transition-colors w-12 text-center shrink-0">
                                        {kanji}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-3 mb-1">
                                            <h3 className="font-bold text-neutral-warm group-hover:text-neutral-warm transition-colors">{lesson.title}</h3>
                                            <span
                                                className="text-[10px] font-bold px-2 py-0.5 rounded border"
                                                style={{ color, borderColor: `${color}40` }}
                                            >
                                                {lesson.level}
                                            </span>
                                            {isCompleted && (
                                                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-success/10 text-success border border-success/20">完</span>
                                            )}
                                        </div>
                                        <p className="text-sm text-neutral-warm/35 truncate">{lesson.description}</p>
                                    </div>

                                    {/* Status */}
                                    <div className="text-sm text-neutral-warm/30 shrink-0 flex items-center gap-2">
                                        {isCompleted ? (
                                            <span className="text-success">100% Mastered</span>
                                        ) : (
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        )}
                                    </div>
                                </Link>
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
}
