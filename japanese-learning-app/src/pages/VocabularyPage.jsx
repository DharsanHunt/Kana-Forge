import { useState } from 'react';
import { vocabulary } from '../data/vocabulary';
import { useProgress } from '../context/ProgressContext';

const levels = ['All', 'N5', 'N4', 'N3', 'Common'];

export default function VocabularyPage() {
    const [selectedLevel, setSelectedLevel] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const { progress, saveWord, removeWord } = useProgress();

    const filteredWords = vocabulary.filter((word) => {
        const matchSearch = searchTerm === '' ||
            word.word.includes(searchTerm) ||
            word.romaji.toLowerCase().includes(searchTerm.toLowerCase()) ||
            word.meaning.toLowerCase().includes(searchTerm.toLowerCase());
        return matchSearch;
    });

    const isWordSaved = (wordId) => progress.savedWords.some((w) => w.id === wordId);

    return (
        <div className="fade-in min-h-screen">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-neutral-warm mb-2">Vocabulary Explorer</h1>
                    <p className="text-neutral-warm/40 text-sm font-light">Master Japanese words with detailed context and usage examples.</p>
                </div>

                {/* Search */}
                <div className="bg-bg-card border border-neutral-warm/5 rounded-lg flex items-center px-4 mb-6">
                    <svg className="w-4 h-4 text-neutral-warm/30 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search Japanese, Romaji, or English..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-4 bg-transparent text-neutral-warm text-sm placeholder:text-neutral-warm/25 focus:outline-none"
                    />
                </div>

                {/* Filter pills */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {levels.map((level) => (
                        <button
                            key={level}
                            onClick={() => setSelectedLevel(level)}
                            className={`px-4 py-2 text-xs font-bold rounded transition-all uppercase tracking-wider ${selectedLevel === level
                                    ? 'bg-primary text-white'
                                    : 'bg-bg-card border border-neutral-warm/10 text-neutral-warm/40 hover:border-neutral-warm/20'
                                }`}
                        >
                            {level}
                        </button>
                    ))}
                </div>

                {/* Words */}
                {filteredWords.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="text-4xl font-serif text-neutral-warm/10 mb-4">空</div>
                        <p className="text-neutral-warm/30">No words match your search.</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {filteredWords.map((word, i) => {
                            const saved = isWordSaved(word.id);
                            return (
                                <div
                                    key={word.id}
                                    className="bg-bg-card border border-neutral-warm/5 rounded-xl p-6 hover:border-neutral-warm/10 transition-all fade-in-up"
                                    style={{ animationDelay: `${i * 30}ms` }}
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <span className="font-jp text-2xl md:text-3xl font-bold text-neutral-warm">{word.word}</span>
                                                <span className="text-xs font-bold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                                                    {word.topic === 'Daily Life' ? 'N5' : word.topic === 'Emotions' ? 'N3' : 'N4'}
                                                </span>
                                            </div>
                                            <div className="text-primary/70 text-sm italic">{word.romaji}</div>
                                        </div>
                                        <button
                                            onClick={() => saved ? removeWord(word.id) : saveWord(word)}
                                            className={`p-2 rounded transition-all ${saved ? 'text-primary bg-primary/10' : 'text-neutral-warm/20 hover:text-primary'
                                                }`}
                                        >
                                            {saved ? '◼' : '◻'}
                                        </button>
                                    </div>

                                    <p className="text-neutral-warm/60 text-sm mb-4">{word.meaning}</p>

                                    {word.exampleSentence && (
                                        <div className="border-l-4 border-l-neutral-warm/10 bg-bg-elevated p-4 rounded-r">
                                            <div className="font-jp text-neutral-warm/70">{word.exampleSentence.japanese}</div>
                                            <div className="text-primary/50 text-xs italic mt-1">{word.exampleSentence.romaji}</div>
                                            <div className="text-neutral-warm/30 text-xs mt-0.5">{word.exampleSentence.english}</div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Load More */}
                {filteredWords.length > 0 && (
                    <div className="text-center mt-10">
                        <button className="border border-neutral-warm/10 text-neutral-warm/40 px-8 py-3 rounded text-sm font-medium hover:border-neutral-warm/20 hover:text-neutral-warm/60 transition-all">
                            Load More Vocabulary
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
