import { useState, useMemo } from 'react';
import { n5GrammarSections } from '../data/grammarSections';
import { grammar } from '../data/grammar';
import AudioPlayer from '../components/AudioPlayer';

export default function GrammarPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedSectionId, setExpandedSectionId] = useState('sec_n5_01');
    const [selectedPatternId, setSelectedPatternId] = useState(null);

    // Map grammar patterns by ID for quick lookup
    const grammarMap = useMemo(() => {
        const map = {};
        grammar.forEach(g => {
            map[g.id] = g;
        });
        return map;
    }, []);

    // Filtered sections and patterns based on search term
    const filteredSections = useMemo(() => {
        if (!searchTerm.trim()) return n5GrammarSections;

        const term = searchTerm.toLowerCase();
        return n5GrammarSections.filter(sec => {
            const matchSec = sec.title.toLowerCase().includes(term) ||
                sec.japaneseTitle.includes(term) ||
                sec.description.toLowerCase().includes(term);

            const matchPattern = sec.topics.some(t =>
                t.patterns.some(pId => {
                    const p = grammarMap[pId];
                    if (!p) return false;
                    return p.pattern.toLowerCase().includes(term) ||
                        p.meaning.toLowerCase().includes(term) ||
                        p.structure?.toLowerCase().includes(term);
                })
            );

            return matchSec || matchPattern;
        });
    }, [searchTerm, grammarMap]);

    const activePattern = selectedPatternId ? grammarMap[selectedPatternId] : null;

    const totalPatternsCount = grammar.filter(g => g.level === 'N5').length;
    const totalSectionsCount = n5GrammarSections.length;

    return (
        <div className="fade-in min-h-screen">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
                {/* Page Header */}
                <div className="mb-10">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-xs font-bold uppercase tracking-widest text-primary">Master Grammar Curriculum</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-neutral-warm mb-3">
                        N5 Grammar Library
                    </h1>
                    <p className="text-neutral-warm/50 text-sm md:text-base font-light max-w-3xl leading-relaxed">
                        A structured pedagogical curriculum organized across {totalSectionsCount} core sections and {totalPatternsCount} granular grammar patterns, featuring formulas, usage constraints, and pitfalls.
                    </p>
                </div>

                {/* Metrics & Search Bar */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="md:col-span-2 bg-bg-card border border-neutral-warm/10 rounded-2xl flex items-center px-4 shadow-sm">
                        <svg className="w-4 h-4 text-neutral-warm/30 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search patterns (e.g. 〜てください, は, です), meanings, or topics..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-3.5 bg-transparent text-neutral-warm text-sm placeholder:text-neutral-warm/30 focus:outline-none"
                        />
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm('')}
                                className="text-xs text-neutral-warm/40 hover:text-neutral-warm font-mono"
                            >
                                Clear
                            </button>
                        )}
                    </div>
                    <div className="bg-bg-card border border-neutral-warm/10 rounded-2xl p-3.5 flex items-center justify-around text-center shadow-sm">
                        <div>
                            <div className="text-xl font-serif font-bold text-primary">{totalSectionsCount}</div>
                            <div className="text-[10px] text-neutral-warm/40 uppercase tracking-wider">Sections</div>
                        </div>
                        <div className="w-px h-8 bg-neutral-warm/10"></div>
                        <div>
                            <div className="text-xl font-serif font-bold text-neutral-warm">{totalPatternsCount}</div>
                            <div className="text-[10px] text-neutral-warm/40 uppercase tracking-wider">N5 Patterns</div>
                        </div>
                    </div>
                </div>

                {/* 14 Sections Explorer */}
                <div className="space-y-6">
                    {filteredSections.length === 0 ? (
                        <div className="text-center py-20 bg-bg-card rounded-2xl border border-neutral-warm/10">
                            <div className="text-4xl font-serif text-neutral-warm/10 mb-4">空</div>
                            <p className="text-neutral-warm/40 text-sm">No grammar sections match your search query.</p>
                        </div>
                    ) : (
                        filteredSections.map((sec) => {
                            const isExpanded = expandedSectionId === sec.id;
                            const patternsInSection = sec.topics.flatMap(t => t.patterns).map(pId => grammarMap[pId]).filter(Boolean);

                            return (
                                <div
                                    key={sec.id}
                                    className="bg-bg-card border border-neutral-warm/10 rounded-2xl overflow-hidden shadow-sm transition-all"
                                >
                                    {/* Section Header Accordion Bar */}
                                    <button
                                        type="button"
                                        onClick={() => setExpandedSectionId(isExpanded ? null : sec.id)}
                                        className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-bg-elevated/40 transition-colors"
                                    >
                                        <div className="flex items-start gap-4">
                                            <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-primary/10 text-primary border border-primary/20 shrink-0">
                                                SEC {sec.sectionNumber}
                                            </span>
                                            <div>
                                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                                    <h2 className="text-lg md:text-xl font-serif font-bold text-neutral-warm">
                                                        {sec.title}
                                                    </h2>
                                                    <span className="text-xs text-neutral-warm/30 font-jp">
                                                        ({sec.japaneseTitle})
                                                    </span>
                                                </div>
                                                <p className="text-xs text-neutral-warm/50 leading-relaxed max-w-2xl">
                                                    {sec.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 shrink-0">
                                            <span className="hidden sm:inline text-xs text-neutral-warm/40 font-mono">
                                                {patternsInSection.length} patterns
                                            </span>
                                            <svg
                                                className={`w-5 h-5 text-neutral-warm/30 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-primary' : ''}`}
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </button>

                                    {/* Expanded Topics & Patterns Grid */}
                                    {isExpanded && (
                                        <div className="px-6 pb-6 pt-2 border-t border-neutral-warm/5 bg-bg-elevated/20 space-y-6 fade-in">
                                            {sec.topics.map((topic) => (
                                                <div key={topic.topicId} className="space-y-3">
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/70"></span>
                                                        <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-warm/70">
                                                            {topic.title}
                                                        </h3>
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                                        {topic.patterns.map((pId) => {
                                                            const p = grammarMap[pId];
                                                            if (!p) return null;
                                                            return (
                                                                <div
                                                                    key={p.id}
                                                                    onClick={() => setSelectedPatternId(p.id)}
                                                                    className="bg-bg-card p-4 rounded-xl border border-neutral-warm/10 hover:border-primary/40 hover:bg-bg-elevated cursor-pointer transition-all shadow-sm group"
                                                                >
                                                                    <div className="flex items-start justify-between gap-2 mb-2">
                                                                        <span className="font-jp font-bold text-sm text-neutral-warm group-hover:text-primary transition-colors">
                                                                            {p.pattern}
                                                                        </span>
                                                                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 shrink-0">
                                                                            {p.level}
                                                                        </span>
                                                                    </div>
                                                                    <p className="text-xs text-neutral-warm/50 line-clamp-2 leading-relaxed mb-3">
                                                                        {p.meaning}
                                                                    </p>
                                                                    <div className="flex items-center justify-between text-[10px] text-neutral-warm/30 pt-2 border-t border-neutral-warm/5 font-mono">
                                                                        <span>{p.examples?.length || 0} examples</span>
                                                                        <span className="text-primary group-hover:translate-x-0.5 transition-transform">Inspect →</span>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })
                    )}
                </div>
            </div>

            {/* Pattern Detail Modal Inspector */}
            {activePattern && (
                <div className="fixed inset-0 bg-bg-dark/85 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6 fade-in overflow-y-auto">
                    <div className="bg-bg-card border border-neutral-warm/15 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl space-y-6">
                        {/* Modal Header */}
                        <div className="flex items-start justify-between gap-4 pb-4 border-b border-neutral-warm/10">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-primary text-white">
                                        {activePattern.level}
                                    </span>
                                    <span className="text-xs text-neutral-warm/40 font-mono uppercase tracking-wider">
                                        {activePattern.topicTitle}
                                    </span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-jp font-bold text-neutral-warm">
                                    {activePattern.pattern}
                                </h3>
                                <p className="text-sm text-primary font-medium mt-1">
                                    {activePattern.meaning}
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setSelectedPatternId(null)}
                                className="w-8 h-8 rounded-full bg-bg-elevated border border-neutral-warm/10 flex items-center justify-center text-neutral-warm/50 hover:text-neutral-warm hover:border-neutral-warm/30 transition-all text-sm shrink-0"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Formation & Structure */}
                        <div className="space-y-2">
                            <h4 className="text-xs font-bold text-primary uppercase tracking-widest">
                                Structure & Formation
                            </h4>
                            <div className="bg-bg-elevated p-4 rounded-xl border border-neutral-warm/10 font-jp text-sm font-semibold text-neutral-warm">
                                {activePattern.structure || activePattern.formation}
                            </div>
                        </div>

                        {/* When to Use vs When NOT to Use */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="p-4 rounded-xl bg-success/5 border border-success/20">
                                <span className="text-xs font-bold text-success uppercase tracking-wider block mb-1">
                                    ✓ When to Use
                                </span>
                                <p className="text-xs text-neutral-warm/80 leading-relaxed">
                                    {activePattern.whenToUse || activePattern.usage}
                                </p>
                            </div>
                            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                                <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">
                                    ⚠ When NOT to Use
                                </span>
                                <p className="text-xs text-neutral-warm/80 leading-relaxed">
                                    {activePattern.whenNotToUse || activePattern.commonMistakes?.[0] || 'Follow standard grammatical particle placement.'}
                                </p>
                            </div>
                        </div>

                        {/* Example Sentences with Audio */}
                        <div className="space-y-3">
                            <h4 className="text-xs font-bold text-primary uppercase tracking-widest">
                                Authentic Example Sentences
                            </h4>
                            <div className="space-y-2.5">
                                {activePattern.examples?.map((ex, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-bg-elevated/70 p-4 rounded-xl border border-neutral-warm/5 flex items-start justify-between gap-4"
                                    >
                                        <div className="flex-1">
                                            <div className="font-jp text-base text-neutral-warm mb-0.5">{ex.japanese}</div>
                                            {ex.romaji && <div className="text-primary/70 text-xs italic font-mono mb-1">{ex.romaji}</div>}
                                            <div className="text-neutral-warm/50 text-xs">{ex.english}</div>
                                        </div>
                                        <AudioPlayer text={ex.japanese} rate={0.85} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Usage Notes & Pitfalls */}
                        {activePattern.notes && (
                            <div className="p-4 rounded-xl bg-bg-elevated border-l-4 border-l-[#f1c40f]">
                                <span className="text-xs font-bold text-[#f1c40f] uppercase tracking-wider block mb-1">
                                    ℹ Cultural Nuance & Usage Notes
                                </span>
                                <p className="text-xs text-neutral-warm/70 leading-relaxed">{activePattern.notes}</p>
                            </div>
                        )}

                        {/* Modal Footer */}
                        <div className="flex justify-end pt-2">
                            <button
                                type="button"
                                onClick={() => setSelectedPatternId(null)}
                                className="px-6 py-2.5 bg-primary text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-md shadow-primary/20 hover:bg-primary-light transition-all"
                            >
                                Close Pattern Inspector
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
