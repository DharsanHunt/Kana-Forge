import { useState } from 'react';
import { hiragana } from '../data/hiragana';
import { katakana } from '../data/katakana';

const tabs = ['Hiragana', 'Katakana', 'Kanji'];

export default function WritingPage() {
    const [activeTab, setActiveTab] = useState('Hiragana');
    const [selectedChar, setSelectedChar] = useState(null);
    const [quizMode, setQuizMode] = useState(false);
    const [quizAnswer, setQuizAnswer] = useState('');
    const [quizFeedback, setQuizFeedback] = useState(null);

    const characters = activeTab === 'Hiragana' ? hiragana : activeTab === 'Katakana' ? katakana : [];

    const startQuiz = () => {
        setQuizMode(true);
        setQuizAnswer('');
        setQuizFeedback(null);
        const randomChar = characters[Math.floor(Math.random() * characters.length)];
        setSelectedChar(randomChar);
    };

    const checkQuizAnswer = () => {
        if (!selectedChar) return;
        const correct = quizAnswer.trim().toLowerCase() === selectedChar.romaji.toLowerCase();
        setQuizFeedback(correct ? 'correct' : 'wrong');
        if (!correct) {
            setTimeout(() => {
                setQuizFeedback(null);
                setQuizAnswer('');
                const randomChar = characters[Math.floor(Math.random() * characters.length)];
                setSelectedChar(randomChar);
            }, 2000);
        }
    };

    const nextQuizChar = () => {
        setQuizFeedback(null);
        setQuizAnswer('');
        const randomChar = characters[Math.floor(Math.random() * characters.length)];
        setSelectedChar(randomChar);
    };

    return (
        <div className="fade-in min-h-screen">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-neutral-warm mb-2">Writing Practice</h1>
                    <p className="text-primary/70 text-sm font-light">Hone your stroke order and character recognition</p>
                </div>

                {/* Tabs */}
                <div className="flex gap-0 mb-10 border-b border-neutral-warm/10">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => { setActiveTab(tab); setSelectedChar(null); setQuizMode(false); }}
                            className={`px-8 py-4 text-sm font-medium transition-all relative ${activeTab === tab
                                    ? 'text-primary'
                                    : 'text-neutral-warm/40 hover:text-neutral-warm/70'
                                }`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
                            )}
                        </button>
                    ))}
                </div>

                {activeTab === 'Kanji' ? (
                    <div className="text-center py-20">
                        <div className="text-6xl font-serif text-neutral-warm/10 mb-4">漢</div>
                        <p className="text-neutral-warm/30 text-lg mb-2">Kanji practice coming soon</p>
                        <p className="text-neutral-warm/20 text-sm">We&apos;re forging this module with care.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        {/* Character Grid */}
                        <div className="lg:col-span-3">
                            <div className="grid grid-cols-5 sm:grid-cols-10 gap-1 mb-6">
                                {characters.map((charItem) => (
                                    <button
                                        key={charItem.character}
                                        onClick={() => { setSelectedChar(charItem); setQuizMode(false); }}
                                        className={`aspect-square flex flex-col items-center justify-center rounded transition-all text-center ${selectedChar?.character === charItem.character
                                                ? 'bg-primary/10 border border-primary/40 text-primary'
                                                : 'bg-bg-card border border-neutral-warm/5 text-neutral-warm hover:border-neutral-warm/20'
                                            }`}
                                    >
                                        <span className="font-jp text-lg leading-none">{charItem.character}</span>
                                        <span className="text-[8px] text-neutral-warm/30 mt-0.5 uppercase">{charItem.romaji}</span>
                                    </button>
                                ))}
                            </div>

                            {/* Quiz Mode Area */}
                            {quizMode && selectedChar && (
                                <div className="bg-bg-card border border-neutral-warm/5 rounded-xl p-8 text-center fade-in">
                                    <div className="font-jp text-7xl text-neutral-warm mb-4">{selectedChar.character}</div>
                                    <p className="text-primary/60 text-xs uppercase tracking-widest mb-6">Writing Mode: Active</p>

                                    <div className="max-w-sm mx-auto">
                                        <label className="text-xs font-bold text-neutral-warm/40 uppercase tracking-wider block text-left mb-2">Type Romaji to Verify</label>
                                        <input
                                            type="text"
                                            value={quizAnswer}
                                            onChange={(e) => setQuizAnswer(e.target.value)}
                                            onKeyDown={(e) => e.key === 'Enter' && (quizFeedback === 'correct' ? nextQuizChar() : checkQuizAnswer())}
                                            className={`w-full px-4 py-4 bg-bg-elevated border-2 rounded text-center text-lg font-jp focus:outline-none transition-colors ${quizFeedback === 'correct' ? 'border-success text-success' :
                                                    quizFeedback === 'wrong' ? 'border-error text-error' :
                                                        'border-primary/40 text-neutral-warm focus:border-primary'
                                                }`}
                                            placeholder="|"
                                            autoFocus
                                        />
                                        <div className="flex justify-between mt-3 text-xs text-neutral-warm/30">
                                            <span>Stroke 1 of {selectedChar.strokeOrder?.split(',').length || 3}</span>
                                            <button className="text-primary hover:text-primary-light transition-colors">Show Stroke Order</button>
                                        </div>
                                    </div>

                                    {quizFeedback === 'correct' && (
                                        <div className="mt-4 fade-in">
                                            <p className="text-success text-sm mb-3">✓ Correct! {selectedChar.character} = {selectedChar.romaji}</p>
                                            <button onClick={nextQuizChar} className="bg-primary text-white px-6 py-2 rounded text-sm font-bold">Next Character</button>
                                        </div>
                                    )}
                                    {quizFeedback === 'wrong' && (
                                        <p className="mt-4 text-error text-sm fade-in">✗ That&apos;s {selectedChar.romaji}. Try again...</p>
                                    )}
                                </div>
                            )}

                            {!quizMode && (
                                <button
                                    onClick={startQuiz}
                                    className="w-full bg-bg-card border border-neutral-warm/10 text-neutral-warm/50 py-4 rounded hover:border-primary/30 hover:text-primary transition-all text-sm font-medium"
                                >
                                    Start Practice Mode
                                </button>
                            )}
                        </div>

                        {/* Character Detail Panel */}
                        <div className="lg:col-span-2">
                            {selectedChar ? (
                                <div className="bg-bg-card border border-neutral-warm/5 rounded-xl p-6 sticky top-24 fade-in">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-neutral-warm/20 text-xs">♫</span>
                                        <span className="text-neutral-warm/20 text-xs cursor-pointer hover:text-primary transition-colors">★</span>
                                    </div>

                                    <div className="text-center mb-6">
                                        <div className="font-jp text-7xl text-neutral-warm mb-2">{selectedChar.character}</div>
                                        <div className="text-primary text-xl">{selectedChar.romaji}</div>
                                    </div>

                                    {/* Stroke Practice */}
                                    <div className="mb-6">
                                        <h4 className="text-xs font-bold text-neutral-warm/40 uppercase tracking-wider mb-3">Stroke Practice</h4>
                                        <div className="grid grid-cols-2 gap-1">
                                            {[...Array(4)].map((_, i) => (
                                                <div key={i} className="aspect-square bg-bg-elevated border border-neutral-warm/5 rounded"></div>
                                            ))}
                                        </div>
                                        <div className="flex gap-2 mt-3">
                                            <button className="flex-1 py-2 bg-bg-elevated border border-neutral-warm/10 rounded text-sm text-neutral-warm/50 hover:text-neutral-warm hover:border-neutral-warm/20 transition-colors">Clear</button>
                                            <button className="flex-1 py-2 bg-primary text-white rounded text-sm font-bold hover:bg-primary-light transition-colors">Check</button>
                                        </div>
                                    </div>

                                    {/* Stroke Order */}
                                    {selectedChar.strokeOrder && (
                                        <div className="mb-4">
                                            <h4 className="text-xs font-bold text-neutral-warm/40 uppercase tracking-wider mb-2">Stroke Order</h4>
                                            <p className="text-sm text-neutral-warm/40 leading-relaxed">{selectedChar.strokeOrder}</p>
                                        </div>
                                    )}

                                    {/* Example Word */}
                                    {selectedChar.exampleWord && (
                                        <div>
                                            <h4 className="text-xs font-bold text-neutral-warm/40 uppercase tracking-wider mb-2">Example</h4>
                                            <div className="bg-bg-elevated border border-neutral-warm/5 rounded p-3">
                                                <div className="font-jp text-lg text-neutral-warm">{selectedChar.exampleWord.japanese}</div>
                                                <div className="text-primary/60 text-xs italic">{selectedChar.exampleWord.romaji}</div>
                                                <div className="text-neutral-warm/30 text-xs">{selectedChar.exampleWord.english}</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="bg-bg-card border border-neutral-warm/5 rounded-xl p-8 text-center">
                                    <div className="text-4xl font-serif text-neutral-warm/10 mb-3">選</div>
                                    <p className="text-neutral-warm/30 text-sm">Select a character to view details</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
