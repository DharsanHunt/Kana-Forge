import { useState, useMemo } from 'react';
import { grammar } from '../data/grammar';

const levels = ['All', 'N5', 'N4', 'N3', 'N2', 'N1'];

export default function GrammarPage() {
    const [selectedLevel, setSelectedLevel] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedId, setExpandedId] = useState(null);

    const filteredGrammar = useMemo(() => {
        return grammar.filter((g) => {
            const matchLevel = selectedLevel === 'All' || g.level === selectedLevel;
            const matchSearch = searchTerm === '' ||
                g.pattern.toLowerCase().includes(searchTerm.toLowerCase()) ||
                g.meaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
                g.structure.toLowerCase().includes(searchTerm.toLowerCase());
            return matchLevel && matchSearch;
        });
    }, [selectedLevel, searchTerm]);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="fade-in max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-navy mb-3">📖 Grammar Library</h1>
                <p className="text-navy/50 text-lg">Searchable grammar points with structures, examples, and comparisons.</p>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative flex-1 max-w-md">
                    <input
                        type="text"
                        placeholder="Search grammar patterns..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-navy/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                    />
                    <svg className="absolute left-3 top-3.5 w-4 h-4 text-navy/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                <div className="flex flex-wrap gap-2">
                    {levels.map((level) => (
                        <button
                            key={level}
                            onClick={() => setSelectedLevel(level)}
                            className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${selectedLevel === level
                                    ? 'bg-navy text-cream'
                                    : 'bg-navy/5 text-navy/60 hover:bg-navy/10'
                                }`}
                        >
                            {level}
                        </button>
                    ))}
                </div>
            </div>

            {/* Count */}
            <div className="text-sm text-navy/40 mb-6">
                {filteredGrammar.length} grammar point{filteredGrammar.length !== 1 ? 's' : ''}
            </div>

            {/* Grammar List */}
            {filteredGrammar.length === 0 ? (
                <div className="text-center py-20">
                    <div className="text-5xl mb-4">🔍</div>
                    <p className="text-navy/40 text-lg">No grammar points match your search.</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {filteredGrammar.map((g, i) => (
                        <div
                            key={g.id}
                            className="bg-white rounded-2xl card-shadow border border-navy/5 overflow-hidden fade-in-up transition-all duration-300 hover:card-shadow-hover"
                            style={{ animationDelay: `${i * 50}ms` }}
                        >
                            {/* Header */}
                            <button
                                onClick={() => toggleExpand(g.id)}
                                className="w-full text-left p-5 flex items-center justify-between group"
                            >
                                <div className="flex items-center gap-4 flex-1 min-w-0">
                                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full shrink-0 ${g.level === 'N5' ? 'bg-bamboo/15 text-bamboo' :
                                            g.level === 'N4' ? 'bg-blue-500/10 text-blue-700' :
                                                g.level === 'N3' ? 'bg-gold/20 text-amber-800' :
                                                    g.level === 'N2' ? 'bg-accent/10 text-accent' :
                                                        'bg-navy/10 text-navy'
                                        }`}>
                                        {g.level}
                                    </span>
                                    <div className="min-w-0">
                                        <div className="font-jp font-bold text-navy text-lg group-hover:text-accent transition-colors">{g.pattern}</div>
                                        <div className="text-navy/50 text-sm truncate">{g.meaning}</div>
                                    </div>
                                </div>
                                <svg
                                    className={`w-5 h-5 text-navy/30 transition-transform duration-300 shrink-0 ml-4 ${expandedId === g.id ? 'rotate-180' : ''}`}
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Expanded content */}
                            {expandedId === g.id && (
                                <div className="px-5 pb-5 fade-in border-t border-navy/5 pt-4">
                                    {/* Structure */}
                                    <div className="mb-4">
                                        <h4 className="text-xs font-bold text-navy/40 uppercase tracking-wider mb-2">Structure</h4>
                                        <div className="bg-paper rounded-xl px-4 py-3 font-jp text-navy font-medium">{g.structure}</div>
                                    </div>

                                    {/* Examples */}
                                    <div className="mb-4">
                                        <h4 className="text-xs font-bold text-navy/40 uppercase tracking-wider mb-2">Examples</h4>
                                        <div className="space-y-2">
                                            {g.examples.map((ex, j) => (
                                                <div key={j} className="bg-paper rounded-xl p-4">
                                                    <div className="font-jp text-navy/80">{ex.japanese}</div>
                                                    <div className="text-accent/60 text-sm">{ex.romaji}</div>
                                                    <div className="text-navy/50 text-sm">{ex.english}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Notes */}
                                    {g.notes && (
                                        <div className="mb-4">
                                            <h4 className="text-xs font-bold text-navy/40 uppercase tracking-wider mb-2">Notes</h4>
                                            <p className="text-navy/60 text-sm leading-relaxed">{g.notes}</p>
                                        </div>
                                    )}

                                    {/* Compare section */}
                                    {g.compareWith && (
                                        <div className="bg-sakura-light/20 border border-sakura/15 rounded-xl p-4">
                                            <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-2">🔍 Compare & Contrast</h4>
                                            <p className="text-navy/60 text-sm leading-relaxed">{g.compareWith}</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
