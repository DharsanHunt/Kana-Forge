import { Link, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { lessons } from '../data/lessons';
import { useProgress } from '../context/ProgressContext';

const levels = ['All', 'N5', 'N4', 'N3', 'N2', 'N1'];
const categories = ['All', 'hiragana', 'grammar', 'vocab', 'kanji'];

const categoryLabels = {
    hiragana: 'Hiragana',
    grammar: 'Grammar',
    vocab: 'Vocabulary',
    kanji: 'Kanji',
};

const categoryIcons = {
    hiragana: '✍️',
    grammar: '📖',
    vocab: '📝',
    kanji: '🈴',
};

const levelColors = {
    N5: 'bg-bamboo/15 text-bamboo',
    N4: 'bg-blue-500/10 text-blue-700',
    N3: 'bg-gold/20 text-amber-800',
    N2: 'bg-accent/10 text-accent',
    N1: 'bg-navy/10 text-navy',
};

export default function LessonsPage() {
    const [searchParams] = useSearchParams();
    const initialLevel = searchParams.get('level') || 'All';
    const [selectedLevel, setSelectedLevel] = useState(initialLevel);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const { progress } = useProgress();

    const filteredLessons = lessons.filter((lesson) => {
        const matchLevel = selectedLevel === 'All' || lesson.level === selectedLevel;
        const matchCategory = selectedCategory === 'All' || lesson.category === selectedCategory;
        return matchLevel && matchCategory;
    });

    return (
        <div className="fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Header */}
            <div className="mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-navy mb-3">📚 Lessons</h1>
                <p className="text-navy/50 text-lg">Structured learning paths organized by JLPT level and topic.</p>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {/* Level Filter */}
                <div className="flex flex-wrap gap-2">
                    <span className="text-sm text-navy/40 font-medium self-center mr-2">Level:</span>
                    {levels.map((level) => (
                        <button
                            key={level}
                            onClick={() => setSelectedLevel(level)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${selectedLevel === level
                                    ? 'bg-navy text-cream'
                                    : 'bg-navy/5 text-navy/60 hover:bg-navy/10'
                                }`}
                        >
                            {level}
                        </button>
                    ))}
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                    <span className="text-sm text-navy/40 font-medium self-center mr-2">Topic:</span>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${selectedCategory === cat
                                    ? 'bg-navy text-cream'
                                    : 'bg-navy/5 text-navy/60 hover:bg-navy/10'
                                }`}
                        >
                            {cat === 'All' ? 'All' : categoryLabels[cat]}
                        </button>
                    ))}
                </div>
            </div>

            {/* Lesson Count */}
            <div className="text-sm text-navy/40 mb-6">
                Showing {filteredLessons.length} lesson{filteredLessons.length !== 1 ? 's' : ''}
            </div>

            {/* Lesson Cards */}
            {filteredLessons.length === 0 ? (
                <div className="text-center py-20">
                    <div className="text-5xl mb-4">📭</div>
                    <p className="text-navy/40 text-lg">No lessons match your filters.</p>
                    <button
                        onClick={() => { setSelectedLevel('All'); setSelectedCategory('All'); }}
                        className="mt-4 text-accent hover:text-accent-light font-medium transition-colors"
                    >
                        Clear filters
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredLessons.map((lesson, i) => {
                        const isCompleted = progress.completedLessons.includes(lesson.id);
                        return (
                            <Link
                                key={lesson.id}
                                to={`/lessons/${lesson.id}`}
                                className="group bg-white rounded-2xl p-6 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 border border-navy/5 relative overflow-hidden fade-in-up"
                                style={{ animationDelay: `${i * 50}ms` }}
                            >
                                {isCompleted && (
                                    <div className="absolute top-4 right-4">
                                        <span className="inline-flex items-center gap-1 bg-bamboo/15 text-bamboo text-xs font-semibold px-2.5 py-1 rounded-full">
                                            ✓ Done
                                        </span>
                                    </div>
                                )}

                                <div className="flex items-center gap-2 mb-3">
                                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${levelColors[lesson.level]}`}>
                                        {lesson.level}
                                    </span>
                                    <span className="text-sm text-navy/40">
                                        {categoryIcons[lesson.category]} {categoryLabels[lesson.category] || lesson.category}
                                    </span>
                                </div>

                                <h3 className="font-bold text-navy text-lg mb-2 group-hover:text-accent transition-colors pr-16">
                                    {lesson.title}
                                </h3>

                                <p className="text-navy/50 text-sm leading-relaxed line-clamp-2">
                                    {lesson.description}
                                </p>

                                <div className="mt-4 flex items-center text-accent/70 text-sm font-medium group-hover:text-accent transition-colors">
                                    Start lesson
                                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
