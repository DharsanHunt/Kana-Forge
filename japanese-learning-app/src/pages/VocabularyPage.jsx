import { useState, useMemo } from 'react';
import { vocabulary } from '../data/vocabulary';
import { useProgress } from '../context/ProgressContext';
import AudioPlayer from '../components/AudioPlayer';

const levels = ['All', 'N5', 'N4'];
const ITEMS_PER_PAGE = 24;

export default function VocabularyPage() {
    const [selectedLevel, setSelectedLevel] = useState('N5');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedPos, setSelectedPos] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const { progress, saveWord, removeWord } = useProgress();

    // Determine available categories based on current level
    const categories = useMemo(() => {
        const cats = new Set();
        vocabulary.forEach(w => {
            if (selectedLevel === 'All' || w.level === selectedLevel) {
                if (w.category) cats.add(w.category);
            }
        });
        return ['All', ...Array.from(cats).sort()];
    }, [selectedLevel]);

    // Determine available parts of speech
    const partsOfSpeech = useMemo(() => {
        const posSet = new Set();
        vocabulary.forEach(w => {
            const p = w.pos || w.partOfSpeech;
            if (p) posSet.add(p);
        });
        return ['All', ...Array.from(posSet).sort()];
    }, []);

    const isWordSaved = (wordId) => progress?.savedWords?.some((w) => w.id === wordId);

    // Filter words based on all active criteria
    const filteredWords = useMemo(() => {
        return vocabulary.filter((word) => {
            const matchLevel = selectedLevel === 'All' || word.level === selectedLevel;
            const matchCategory = selectedCategory === 'All' || word.category === selectedCategory;
            const wordPos = word.pos || word.partOfSpeech || '';
            const matchPos = selectedPos === 'All' || wordPos.toLowerCase().includes(selectedPos.toLowerCase());
            const matchBookmark = !showBookmarksOnly || isWordSaved(word.id);

            const matchSearch = searchTerm === '' ||
                word.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
                word.reading?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                word.romaji?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                word.meaning.toLowerCase().includes(searchTerm.toLowerCase());

            return matchLevel && matchCategory && matchPos && matchBookmark && matchSearch;
        });
    }, [selectedLevel, selectedCategory, selectedPos, showBookmarksOnly, searchTerm, progress?.savedWords]);

    // Pagination calculations
    const totalPages = Math.ceil(filteredWords.length / ITEMS_PER_PAGE) || 1;
    const paginatedWords = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredWords.slice(start, start + ITEMS_PER_PAGE);
    }, [filteredWords, currentPage]);

    const handleLevelChange = (lvl) => {
        setSelectedLevel(lvl);
        setSelectedCategory('All');
        setCurrentPage(1);
    };

    const handleCategoryChange = (cat) => {
        setSelectedCategory(cat);
        setCurrentPage(1);
    };

    const handleSearchChange = (val) => {
        setSearchTerm(val);
        setCurrentPage(1);
    };

    return (
        <div className="fade-in min-h-screen">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-xs font-bold uppercase tracking-widest text-primary">Lexicon Explorer</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-neutral-warm mb-2">
                        Vocabulary Library
                    </h1>
                    <p className="text-neutral-warm/50 text-sm md:text-base font-light max-w-3xl">
                        Comprehensive curated Japanese vocabulary collection across practical thematic spheres, with authentic example sentences, native Web Speech pronunciation, and search filters.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="bg-bg-card border border-neutral-warm/10 rounded-2xl flex items-center px-4 mb-6 shadow-sm">
                    <svg className="w-4 h-4 text-neutral-warm/30 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search Japanese Kanji (駅), Hiragana (えき), Romaji (eki), or English (station)..."
                        value={searchTerm}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        className="w-full px-4 py-3.5 bg-transparent text-neutral-warm text-sm placeholder:text-neutral-warm/30 focus:outline-none"
                    />
                    {searchTerm && (
                        <button
                            onClick={() => handleSearchChange('')}
                            className="text-xs text-neutral-warm/40 hover:text-neutral-warm font-mono mr-2"
                        >
                            Clear
                        </button>
                    )}
                </div>

                {/* Controls Bar: Level Pills, Bookmarks Toggle & Counts */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex flex-wrap items-center gap-2">
                        {levels.map((level) => (
                            <button
                                key={level}
                                onClick={() => handleLevelChange(level)}
                                className={`px-4 py-1.5 text-xs font-bold rounded-xl transition-all uppercase tracking-wider ${selectedLevel === level
                                        ? 'bg-primary text-white shadow-md shadow-primary/20'
                                        : 'bg-bg-card border border-neutral-warm/10 text-neutral-warm/50 hover:text-neutral-warm'
                                    }`}
                            >
                                {level === 'All' ? 'All Levels' : `JLPT ${level}`}
                            </button>
                        ))}

                        <button
                            onClick={() => {
                                setShowBookmarksOnly(!showBookmarksOnly);
                                setCurrentPage(1);
                            }}
                            className={`px-3.5 py-1.5 text-xs font-bold rounded-xl border transition-all flex items-center gap-1.5 ${showBookmarksOnly
                                    ? 'bg-primary/20 border-primary text-primary'
                                    : 'bg-bg-card border-neutral-warm/10 text-neutral-warm/50 hover:text-neutral-warm'
                                }`}
                        >
                            <span>★</span>
                            <span>Bookmarks ({progress?.savedWords?.length || 0})</span>
                        </button>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-mono text-neutral-warm/50">
                        <span>Showing {filteredWords.length} words</span>
                        <span>•</span>
                        <span>Page {currentPage} of {totalPages}</span>
                    </div>
                </div>

                {/* Secondary Filters: Category & POS Selectors */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {/* Category Filter */}
                    <div className="bg-bg-card border border-neutral-warm/10 rounded-xl p-3 flex items-center gap-2">
                        <span className="text-xs font-bold text-neutral-warm/40 uppercase tracking-wider shrink-0">Category:</span>
                        <select
                            value={selectedCategory}
                            onChange={(e) => handleCategoryChange(e.target.value)}
                            className="bg-transparent text-neutral-warm text-xs w-full focus:outline-none cursor-pointer"
                        >
                            {categories.map((cat) => (
                                <option key={cat} value={cat} className="bg-bg-card text-neutral-warm">
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Part of Speech Filter */}
                    <div className="bg-bg-card border border-neutral-warm/10 rounded-xl p-3 flex items-center gap-2">
                        <span className="text-xs font-bold text-neutral-warm/40 uppercase tracking-wider shrink-0">Part of Speech:</span>
                        <select
                            value={selectedPos}
                            onChange={(e) => {
                                setSelectedPos(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="bg-transparent text-neutral-warm text-xs w-full focus:outline-none cursor-pointer"
                        >
                            {partsOfSpeech.map((pos) => (
                                <option key={pos} value={pos} className="bg-bg-card text-neutral-warm">
                                    {pos}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Words Grid / List */}
                {paginatedWords.length === 0 ? (
                    <div className="text-center py-20 bg-bg-card rounded-2xl border border-neutral-warm/10">
                        <div className="text-4xl font-serif text-neutral-warm/10 mb-4">空</div>
                        <p className="text-neutral-warm/40 text-sm">No vocabulary words match your filter criteria.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {paginatedWords.map((word) => {
                            const saved = isWordSaved(word.id);
                            return (
                                <div
                                    key={word.id}
                                    className="bg-bg-card border border-neutral-warm/10 rounded-2xl p-5 hover:border-neutral-warm/20 transition-all shadow-sm flex flex-col justify-between"
                                >
                                    <div>
                                        {/* Word Top Bar */}
                                        <div className="flex items-start justify-between gap-3 mb-2">
                                            <div className="min-w-0">
                                                <div className="flex items-center gap-2 flex-wrap mb-1">
                                                    <span className="font-jp text-2xl font-bold text-neutral-warm">
                                                        {word.word}
                                                    </span>
                                                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 shrink-0">
                                                        {word.level}
                                                    </span>
                                                    {word.category && (
                                                        <span className="text-[10px] px-2 py-0.5 rounded bg-bg-elevated text-neutral-warm/60 border border-neutral-warm/5 truncate max-w-[140px]">
                                                            {word.category}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-2 text-xs font-mono text-neutral-warm/60">
                                                    {word.reading && <span className="font-jp text-primary/80">{word.reading}</span>}
                                                    {word.romaji && <span className="text-neutral-warm/40 italic">({word.romaji})</span>}
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-1 shrink-0">
                                                <AudioPlayer text={word.word} rate={0.85} />
                                                <button
                                                    onClick={() => (saved ? removeWord(word.id) : saveWord(word))}
                                                    className={`p-2 rounded-xl transition-all ${saved
                                                            ? 'text-primary bg-primary/10'
                                                            : 'text-neutral-warm/30 hover:text-neutral-warm hover:bg-bg-elevated'
                                                        }`}
                                                    title={saved ? 'Remove bookmark' : 'Bookmark word'}
                                                >
                                                    <svg className="w-4 h-4" fill={saved ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        {/* English Meaning */}
                                        <p className="text-sm font-medium text-neutral-warm/90 mb-3">
                                            {word.meaning}
                                        </p>
                                    </div>

                                    {/* Example Sentence with Audio */}
                                    {word.exampleSentence && (
                                        <div className="pt-3 border-t border-neutral-warm/5 bg-bg-elevated/40 -mx-5 -mb-5 p-4 rounded-b-2xl flex items-start justify-between gap-3">
                                            <div className="text-xs space-y-0.5 flex-1 min-w-0">
                                                <div className="font-jp text-neutral-warm font-medium">
                                                    {word.exampleSentence.japanese}
                                                </div>
                                                {word.exampleSentence.romaji && (
                                                    <div className="text-[11px] text-neutral-warm/40 font-mono italic">
                                                        {word.exampleSentence.romaji}
                                                    </div>
                                                )}
                                                <div className="text-neutral-warm/60 text-[11px]">
                                                    {word.exampleSentence.english}
                                                </div>
                                            </div>
                                            <AudioPlayer text={word.exampleSentence.japanese} rate={0.85} />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
                        <button
                            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-bg-card border border-neutral-warm/10 text-neutral-warm/70 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-bg-elevated transition-all"
                        >
                            ← Prev
                        </button>

                        <div className="flex items-center gap-1 font-mono text-xs text-neutral-warm/60 px-3">
                            <span>Page</span>
                            <span className="font-bold text-primary">{currentPage}</span>
                            <span>of</span>
                            <span>{totalPages}</span>
                        </div>

                        <button
                            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-bg-card border border-neutral-warm/10 text-neutral-warm/70 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-bg-elevated transition-all"
                        >
                            Next →
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
