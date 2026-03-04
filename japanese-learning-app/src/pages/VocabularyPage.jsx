import { useState } from 'react';
import { vocabulary } from '../data/vocabulary';
import { useProgress } from '../context/ProgressContext';

const topics = ['All', ...new Set(vocabulary.map((v) => v.topic))];

export default function VocabularyPage() {
    const [selectedTopic, setSelectedTopic] = useState('All');
    const [showSavedOnly, setShowSavedOnly] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const { progress, saveWord, removeWord } = useProgress();

    const filteredWords = vocabulary.filter((word) => {
        const matchTopic = selectedTopic === 'All' || word.topic === selectedTopic;
        const matchSearch = searchTerm === '' ||
            word.word.includes(searchTerm) ||
            word.romaji.toLowerCase().includes(searchTerm.toLowerCase()) ||
            word.meaning.toLowerCase().includes(searchTerm.toLowerCase());
        return matchTopic && matchSearch;
    });

    const displayWords = showSavedOnly
        ? progress.savedWords
        : filteredWords;

    const isWordSaved = (wordId) => progress.savedWords.some((w) => w.id === wordId);

    const topicEmojis = {
        'Food': '🍱',
        'Travel': '✈️',
        'Daily Life': '🏠',
        'Emotions': '💭',
        'Work': '💼',
        'Anime/Pop Culture': '🎌',
    };

    return (
        <div className="fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-navy mb-3">📝 Vocabulary Builder</h1>
                <p className="text-navy/50 text-lg">Learn words by topic and build your personal word list.</p>
            </div>

            {/* Controls */}
            <div className="flex flex-col gap-4 mb-8">
                {/* Search */}
                <div className="relative max-w-md">
                    <input
                        type="text"
                        placeholder="Search words (Japanese, romaji, or English)..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-navy/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                    />
                    <svg className="absolute left-3 top-3.5 w-4 h-4 text-navy/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                {/* Tabs: Topics & Saved */}
                <div className="flex flex-wrap items-center gap-2">
                    <button
                        onClick={() => { setShowSavedOnly(false); setSelectedTopic('All'); }}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${!showSavedOnly && selectedTopic === 'All'
                                ? 'bg-navy text-cream' : 'bg-navy/5 text-navy/60 hover:bg-navy/10'
                            }`}
                    >
                        📦 All
                    </button>
                    {topics.filter((t) => t !== 'All').map((topic) => (
                        <button
                            key={topic}
                            onClick={() => { setShowSavedOnly(false); setSelectedTopic(topic); }}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${!showSavedOnly && selectedTopic === topic
                                    ? 'bg-navy text-cream' : 'bg-navy/5 text-navy/60 hover:bg-navy/10'
                                }`}
                        >
                            {topicEmojis[topic] || '📝'} {topic}
                        </button>
                    ))}
                    <div className="w-px h-6 bg-navy/10 mx-1"></div>
                    <button
                        onClick={() => setShowSavedOnly(true)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${showSavedOnly
                                ? 'bg-accent text-white' : 'bg-accent/10 text-accent hover:bg-accent/20'
                            }`}
                    >
                        ❤️ Saved ({progress.savedWords.length})
                    </button>
                </div>
            </div>

            {/* Word count */}
            <div className="text-sm text-navy/40 mb-6">
                {showSavedOnly ? `${displayWords.length} saved word${displayWords.length !== 1 ? 's' : ''}` : `${displayWords.length} word${displayWords.length !== 1 ? 's' : ''}`}
            </div>

            {/* Words Grid */}
            {displayWords.length === 0 ? (
                <div className="text-center py-20">
                    <div className="text-5xl mb-4">{showSavedOnly ? '💭' : '🔍'}</div>
                    <p className="text-navy/40 text-lg">
                        {showSavedOnly ? 'No saved words yet. Start saving words you want to review!' : 'No words match your search.'}
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {displayWords.map((word, i) => {
                        const saved = isWordSaved(word.id);
                        return (
                            <div
                                key={word.id}
                                className="bg-white rounded-2xl p-5 card-shadow border border-navy/5 hover:card-shadow-hover transition-all duration-300 fade-in-up"
                                style={{ animationDelay: `${i * 30}ms` }}
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <div className="font-jp text-2xl text-navy font-medium">{word.word}</div>
                                        <div className="text-accent/70 text-sm font-medium">{word.romaji}</div>
                                    </div>
                                    <button
                                        onClick={() => saved ? removeWord(word.id) : saveWord(word)}
                                        className={`p-2 rounded-lg transition-all duration-200 ${saved ? 'text-accent bg-accent/10 hover:bg-accent/20' : 'text-navy/20 hover:text-accent hover:bg-accent/5'
                                            }`}
                                        title={saved ? 'Remove from saved' : 'Save word'}
                                    >
                                        {saved ? '❤️' : '🤍'}
                                    </button>
                                </div>

                                <div className="text-navy/70 font-semibold text-sm mb-3">{word.meaning}</div>

                                {word.exampleSentence && (
                                    <div className="bg-paper rounded-xl p-3 text-sm">
                                        <div className="font-jp text-navy/80 mb-0.5">{word.exampleSentence.japanese}</div>
                                        <div className="text-accent/60 text-xs">{word.exampleSentence.romaji}</div>
                                        <div className="text-navy/40 text-xs">{word.exampleSentence.english}</div>
                                    </div>
                                )}

                                <div className="mt-3">
                                    <span className="text-xs bg-navy/5 text-navy/40 px-2.5 py-1 rounded-full">{word.topic}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
