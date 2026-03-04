import { useState, useMemo } from 'react';
import { grammar } from '../data/grammar';

const levels = ['N5', 'N4', 'N3', 'N2', 'N1'];

export default function GrammarPage() {
    const [selectedLevel, setSelectedLevel] = useState('N5');
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedId, setExpandedId] = useState(null);

    const filteredGrammar = useMemo(() => {
        return grammar.filter((g) => {
            const matchLevel = g.level === selectedLevel;
            const matchSearch = searchTerm === '' ||
                g.pattern.toLowerCase().includes(searchTerm.toLowerCase()) ||
                g.meaning.toLowerCase().includes(searchTerm.toLowerCase());
            return matchLevel && matchSearch;
        });
    }, [selectedLevel, searchTerm]);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="fade-in min-h-screen">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 flex gap-8">
                {/* Sidebar */}
                <div className="hidden lg:block w-48 shrink-0">
                    <div className="sticky top-24">
                        <h4 className="text-xs font-bold text-neutral-warm/30 uppercase tracking-widest mb-4">Main Menu</h4>
                        <div className="space-y-1">
                            <div className="flex items-center gap-3 px-3 py-2 rounded text-neutral-warm/40 hover:text-neutral-warm hover:bg-neutral-warm/5 transition-colors cursor-pointer">
                                <span className="text-xs">📊</span> <span className="text-sm">Dashboard</span>
                            </div>
                            <div className="flex items-center gap-3 px-3 py-2 rounded bg-primary/10 text-primary border-l-2 border-primary">
                                <span className="text-xs">📖</span> <span className="text-sm font-medium">Grammar Library</span>
                            </div>
                            <div className="flex items-center gap-3 px-3 py-2 rounded text-neutral-warm/40 hover:text-neutral-warm hover:bg-neutral-warm/5 transition-colors cursor-pointer">
                                <span className="text-xs">文</span> <span className="text-sm">Vocabulary</span>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h4 className="text-xs font-bold text-neutral-warm/30 uppercase tracking-widest mb-2">Progress</h4>
                            <div className="text-xs text-neutral-warm/40 mb-1">Mastery</div>
                            <div className="flex items-center gap-2">
                                <div className="flex-1 bg-neutral-warm/5 rounded-full h-1">
                                    <div className="bg-primary h-1 rounded-full" style={{ width: '42%' }}></div>
                                </div>
                                <span className="text-primary text-xs font-bold">42%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main content */}
                <div className="flex-1 min-w-0">
                    <h1 className="text-3xl md:text-4xl font-bold text-neutral-warm mb-2">Grammar Library</h1>
                    <p className="text-neutral-warm/40 text-sm font-light mb-8">
                        Refine your sentence construction through our curated database of Japanese grammar patterns across all JLPT levels.
                    </p>

                    {/* Search */}
                    <div className="bg-bg-card border border-neutral-warm/5 rounded-lg flex items-center px-4 mb-6">
                        <svg className="w-4 h-4 text-neutral-warm/30 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search by pattern (e.g. 〜ながら, 〜ために) or JLPT level..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-4 bg-transparent text-neutral-warm text-sm placeholder:text-neutral-warm/25 focus:outline-none"
                        />
                    </div>

                    {/* Level filter */}
                    <div className="flex flex-wrap items-center gap-2 mb-8">
                        {levels.map((level) => (
                            <button
                                key={level}
                                onClick={() => setSelectedLevel(level)}
                                className={`px-5 py-2.5 text-sm font-medium rounded transition-all ${selectedLevel === level
                                        ? 'bg-primary text-white'
                                        : 'border border-neutral-warm/10 text-neutral-warm/40 hover:border-neutral-warm/20'
                                    }`}
                            >
                                {level}
                            </button>
                        ))}
                        <div className="ml-auto">
                            <button className="flex items-center gap-2 border border-neutral-warm/10 text-neutral-warm/40 px-4 py-2.5 rounded text-sm hover:border-neutral-warm/20 transition-colors">
                                <span>≡</span> Filter
                            </button>
                        </div>
                    </div>

                    {/* Grammar items */}
                    {filteredGrammar.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="text-4xl font-serif text-neutral-warm/10 mb-4">空</div>
                            <p className="text-neutral-warm/30">No grammar points match your search.</p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {filteredGrammar.map((g) => (
                                <div
                                    key={g.id}
                                    className="bg-bg-card border border-neutral-warm/5 rounded-lg overflow-hidden hover:border-neutral-warm/10 transition-all"
                                >
                                    {/* Header */}
                                    <button
                                        onClick={() => toggleExpand(g.id)}
                                        className="w-full text-left p-5 flex items-center justify-between group"
                                    >
                                        <div className="flex items-center gap-4 min-w-0">
                                            <div>
                                                <div className="flex items-center gap-3 mb-1">
                                                    <span className="font-jp font-bold text-lg text-neutral-warm group-hover:text-primary transition-colors">{g.pattern}</span>
                                                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">{g.level}</span>
                                                </div>
                                                <p className="text-sm text-neutral-warm/35 italic">{g.meaning}</p>
                                            </div>
                                        </div>
                                        <svg
                                            className={`w-4 h-4 text-neutral-warm/20 transition-transform duration-300 shrink-0 ml-4 ${expandedId === g.id ? 'rotate-180' : ''}`}
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {/* Expanded */}
                                    {expandedId === g.id && (
                                        <div className="px-5 pb-5 fade-in border-t border-neutral-warm/5 pt-4 space-y-5">
                                            {/* Construction */}
                                            <div>
                                                <h4 className="text-xs font-bold text-neutral-warm/30 uppercase tracking-widest mb-2">Construction</h4>
                                                <div className="border-l-4 border-l-primary/30 bg-bg-elevated p-4 rounded-r">
                                                    <span className="font-jp text-neutral-warm">{g.structure}</span>
                                                </div>
                                            </div>

                                            {/* Examples */}
                                            <div>
                                                <h4 className="text-xs font-bold text-neutral-warm/30 uppercase tracking-widest mb-3">Example Sentences</h4>
                                                <div className="space-y-4">
                                                    {g.examples.map((ex, j) => (
                                                        <div key={j}>
                                                            <div className="font-jp text-lg text-neutral-warm/80">{ex.japanese}</div>
                                                            <div className="text-neutral-warm/40 text-sm italic">{ex.romaji}</div>
                                                            <div className="text-neutral-warm/30 text-sm">{ex.english}</div>
                                                            {j < g.examples.length - 1 && <div className="border-b border-neutral-warm/5 mt-4"></div>}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Notes */}
                                            {g.notes && (
                                                <div>
                                                    <h4 className="text-xs font-bold text-neutral-warm/30 uppercase tracking-widest mb-2">Usage Notes</h4>
                                                    <div className="border-l-4 border-l-neutral-warm/10 bg-bg-elevated p-4 rounded-r">
                                                        <p className="text-neutral-warm/50 text-sm leading-relaxed">{g.notes}</p>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Actions */}
                                            <div className="flex items-center justify-end gap-4 pt-2">
                                                <button className="flex items-center gap-2 text-xs text-neutral-warm/30 hover:text-neutral-warm/60 transition-colors">
                                                    <span>■</span> Save to List
                                                </button>
                                                <button className="flex items-center gap-2 text-xs text-primary/60 hover:text-primary transition-colors">
                                                    <span>◉</span> Practice Now
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
