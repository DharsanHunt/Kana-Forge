import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { lessons } from '../data/lessons';
import { useProgress } from '../context/ProgressContext';

const levels = ['All', 'N5', 'N4'];
const categories = ['All', 'hiragana', 'katakana', 'grammar', 'vocab', 'kanji'];

const levelColors = {
    N5: '#2ecc71',
    N4: '#3498db',
    N3: '#f1c40f',
    N2: '#e63746',
    N1: '#F0EDE6',
};

const categoryKanji = {
    hiragana: 'あ',
    katakana: 'ア',
    grammar: '文',
    vocab: '語',
    kanji: '漢',
    reading: '読',
    listening: '聴'
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

    // Group by Level and Modules
    const groupedModules = useMemo(() => {
        const groups = {};
        filtered.forEach((l) => {
            const key = `${l.level} - ${l.moduleTitle || `Module ${l.moduleNumber || 1}`}`;
            if (!groups[key]) {
                groups[key] = {
                    level: l.level,
                    moduleTitle: l.moduleTitle || `Module ${l.moduleNumber || 1}`,
                    lessons: []
                };
            }
            groups[key].lessons.push(l);
        });
        return Object.values(groups);
    }, [filtered]);

    return (
        <div className="fade-in min-h-screen">
            <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
                {/* Page Header */}
                <div className="mb-12 relative">
                    <div className="absolute -top-8 right-0 opacity-[0.04] pointer-events-none select-none">
                        <span className="text-[20vh] font-serif">鍛</span>
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-xs font-bold uppercase tracking-widest text-primary">Curated Japanese Curriculum</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold gold-gradient-text mb-4">
                        Forge Your Path
                    </h1>
                    <p className="text-neutral-warm/50 text-base md:text-lg max-w-2xl font-light leading-relaxed">
                        A structured, module-by-module Japanese curriculum covering JLPT N5 foundations through N4 intermediate fluency. Author original dialogues, reading comprehension, and listening practice.
                    </p>
                </div>

                {/* Filter Controls */}
                <div className="flex flex-wrap items-center gap-3 mb-10 pb-6 border-b border-neutral-warm/10">
                    <div className="flex items-center gap-2">
                        {levels.map((level) => (
                            <button
                                key={level}
                                onClick={() => setSelectedLevel(level)}
                                className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${selectedLevel === level
                                        ? 'bg-primary text-white shadow-md shadow-primary/20'
                                        : 'border border-neutral-warm/10 text-neutral-warm/50 hover:border-neutral-warm/30 hover:text-neutral-warm'
                                    }`}
                            >
                                {level === 'All' ? 'All Levels' : `JLPT ${level}`}
                            </button>
                        ))}
                    </div>
                    <div className="hidden sm:block w-px h-6 bg-neutral-warm/10 mx-2"></div>
                    <div className="flex flex-wrap items-center gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${selectedCategory === cat
                                        ? 'bg-neutral-warm/15 text-neutral-warm font-bold border border-neutral-warm/20'
                                        : 'border border-neutral-warm/10 text-neutral-warm/40 hover:border-neutral-warm/20 hover:text-neutral-warm/70'
                                    }`}
                            >
                                {cat === 'All' ? 'All Topics' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grouped Modules List */}
                <div className="space-y-10">
                    {groupedModules.length === 0 ? (
                        <div className="text-center py-20 bg-bg-card rounded-2xl border border-neutral-warm/10">
                            <div className="text-4xl mb-4 opacity-30 font-serif">空</div>
                            <p className="text-neutral-warm/40 text-sm">No lessons match your active level and category filters.</p>
                        </div>
                    ) : (
                        groupedModules.map((moduleGroup, gIdx) => {
                            const completedCount = moduleGroup.lessons.filter(l => progress.completedLessons.includes(l.id)).length;
                            const totalCount = moduleGroup.lessons.length;
                            const percent = Math.round((completedCount / totalCount) * 100);
                            const color = levelColors[moduleGroup.level] || '#F0EDE6';

                            return (
                                <div key={gIdx} className="bg-bg-card border border-neutral-warm/10 rounded-2xl p-6 shadow-sm">
                                    {/* Module Group Header */}
                                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-neutral-warm/5">
                                        <div className="flex items-center gap-3">
                                            <span
                                                className="text-[11px] font-bold px-2.5 py-0.5 rounded border"
                                                style={{ color, borderColor: `${color}40`, backgroundColor: `${color}10` }}
                                            >
                                                {moduleGroup.level}
                                            </span>
                                            <h2 className="text-lg font-serif font-bold text-neutral-warm">
                                                {moduleGroup.moduleTitle}
                                            </h2>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-24 h-1.5 rounded-full bg-neutral-warm/10 overflow-hidden">
                                                <div
                                                    className="h-full bg-primary rounded-full transition-all duration-500"
                                                    style={{ width: `${percent}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-xs text-neutral-warm/40 font-mono">
                                                {completedCount}/{totalCount} completed
                                            </span>
                                        </div>
                                    </div>

                                    {/* Lessons List in Module */}
                                    <div className="divide-y divide-neutral-warm/5">
                                        {moduleGroup.lessons.map((lesson) => {
                                            const isCompleted = progress.completedLessons.includes(lesson.id);
                                            const kanji = categoryKanji[lesson.category] || '学';

                                            return (
                                                <Link
                                                    key={lesson.id}
                                                    to={`/lessons/${lesson.id}`}
                                                    className="group flex items-center gap-5 py-4 px-3 rounded-xl hover:bg-bg-elevated/60 transition-all"
                                                >
                                                    {/* Category Icon */}
                                                    <div className="w-10 h-10 rounded-lg bg-bg-elevated border border-neutral-warm/10 flex items-center justify-center text-xl font-serif text-primary/70 group-hover:text-primary group-hover:border-primary/30 transition-all shrink-0">
                                                        {kanji}
                                                    </div>

                                                    {/* Lesson Details */}
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <h3 className="font-bold text-sm md:text-base text-neutral-warm group-hover:text-primary transition-colors">
                                                                {lesson.title}
                                                            </h3>
                                                            {lesson.japaneseTitle && (
                                                                <span className="hidden sm:inline text-xs text-neutral-warm/30 font-jp">
                                                                    ({lesson.japaneseTitle})
                                                                </span>
                                                            )}
                                                            {isCompleted && (
                                                                <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-success/15 text-success border border-success/30">
                                                                    ✓ Sealed
                                                                </span>
                                                            )}
                                                        </div>
                                                        <p className="text-xs text-neutral-warm/40 truncate leading-relaxed">
                                                            {lesson.description}
                                                        </p>
                                                    </div>

                                                    {/* Action Indicator */}
                                                    <div className="text-xs text-neutral-warm/30 group-hover:text-primary transition-colors shrink-0 flex items-center gap-1 font-medium">
                                                        <span>Open</span>
                                                        <span>→</span>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
}
