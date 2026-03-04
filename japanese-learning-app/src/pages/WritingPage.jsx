import { useState } from 'react';
import { hiragana } from '../data/hiragana';
import { katakana } from '../data/katakana';

const tabs = [
    { id: 'hiragana', label: 'ひらがな Hiragana', data: hiragana },
    { id: 'katakana', label: 'カタカナ Katakana', data: katakana },
    { id: 'kanji', label: '漢字 Kanji', data: null },
];

const basicKanji = [
    { character: '日', romaji: 'nichi/hi', strokeOrder: 'Four strokes forming a rectangular shape', exampleWord: { japanese: '日本', romaji: 'nihon', english: 'Japan' } },
    { character: '月', romaji: 'getsu/tsuki', strokeOrder: 'Four strokes: left vertical, two horizontals inside, right curve', exampleWord: { japanese: '月曜日', romaji: 'getsuyoubi', english: 'Monday' } },
    { character: '火', romaji: 'ka/hi', strokeOrder: 'Four strokes: left dot, right dot, left stroke, person stroke', exampleWord: { japanese: '火曜日', romaji: 'kayoubi', english: 'Tuesday' } },
    { character: '水', romaji: 'sui/mizu', strokeOrder: 'Four strokes: vertical center, then three strokes radiating', exampleWord: { japanese: '水曜日', romaji: 'suiyoubi', english: 'Wednesday' } },
    { character: '木', romaji: 'moku/ki', strokeOrder: 'Four strokes: horizontal, vertical, left diagonal, right diagonal', exampleWord: { japanese: '木曜日', romaji: 'mokuyoubi', english: 'Thursday' } },
    { character: '金', romaji: 'kin/kane', strokeOrder: 'Eight strokes: umbrella top then lower components', exampleWord: { japanese: '金曜日', romaji: 'kinyoubi', english: 'Friday' } },
    { character: '土', romaji: 'do/tsuchi', strokeOrder: 'Three strokes: horizontal, vertical, longer horizontal', exampleWord: { japanese: '土曜日', romaji: 'doyoubi', english: 'Saturday' } },
    { character: '山', romaji: 'san/yama', strokeOrder: 'Three strokes: center vertical, left vertical, right vertical', exampleWord: { japanese: '富士山', romaji: 'fujisan', english: 'Mt. Fuji' } },
    { character: '川', romaji: 'sen/kawa', strokeOrder: 'Three strokes: three vertical flowing lines', exampleWord: { japanese: '川', romaji: 'kawa', english: 'river' } },
    { character: '人', romaji: 'jin/hito', strokeOrder: 'Two strokes: left stroke and right stroke meeting at top', exampleWord: { japanese: '日本人', romaji: 'nihonjin', english: 'Japanese person' } },
    { character: '大', romaji: 'dai/oo', strokeOrder: 'Three strokes: horizontal, left diagonal, right diagonal', exampleWord: { japanese: '大きい', romaji: 'ookii', english: 'big' } },
    { character: '小', romaji: 'shou/chii', strokeOrder: 'Three strokes: vertical with hook, left dot, right dot', exampleWord: { japanese: '小さい', romaji: 'chiisai', english: 'small' } },
    { character: '中', romaji: 'chuu/naka', strokeOrder: 'Four strokes: box shape with vertical through center', exampleWord: { japanese: '中国', romaji: 'chuugoku', english: 'China' } },
    { character: '上', romaji: 'jou/ue', strokeOrder: 'Three strokes: vertical, short horizontal, long horizontal', exampleWord: { japanese: '上', romaji: 'ue', english: 'above/up' } },
    { character: '下', romaji: 'ka/shita', strokeOrder: 'Three strokes: horizontal, vertical, dot', exampleWord: { japanese: '下', romaji: 'shita', english: 'below/down' } },
];

export default function WritingPage() {
    const [activeTab, setActiveTab] = useState('hiragana');
    const [selectedChar, setSelectedChar] = useState(null);
    const [quizMode, setQuizMode] = useState(false);
    const [quizAnswer, setQuizAnswer] = useState('');
    const [quizResult, setQuizResult] = useState(null);
    const [quizIndex, setQuizIndex] = useState(0);
    const [quizScore, setQuizScore] = useState(0);

    const activeData = activeTab === 'kanji' ? basicKanji :
        tabs.find((t) => t.id === activeTab)?.data || [];

    const startQuiz = () => {
        setQuizMode(true);
        setQuizIndex(0);
        setQuizScore(0);
        setQuizAnswer('');
        setQuizResult(null);
        setSelectedChar(null);
    };

    const checkQuizAnswer = () => {
        const current = activeData[quizIndex];
        const isCorrect = quizAnswer.trim().toLowerCase() === current.romaji.toLowerCase().split('/')[0];
        setQuizResult(isCorrect);
        if (isCorrect) setQuizScore((s) => s + 1);
    };

    const nextQuizQuestion = () => {
        if (quizIndex < activeData.length - 1) {
            setQuizIndex((i) => i + 1);
            setQuizAnswer('');
            setQuizResult(null);
        } else {
            setQuizMode(false);
        }
    };

    return (
        <div className="fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-navy mb-3">✍️ Writing Systems</h1>
                <p className="text-navy/50 text-lg">Explore and practice Hiragana, Katakana, and Kanji characters.</p>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-8 border-b border-navy/10 pb-2">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => { setActiveTab(tab.id); setSelectedChar(null); setQuizMode(false); }}
                        className={`px-5 py-3 rounded-t-lg text-sm font-semibold transition-all duration-200 font-jp ${activeTab === tab.id
                                ? 'bg-navy text-cream'
                                : 'text-navy/50 hover:text-navy hover:bg-navy/5'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Quiz Mode */}
            {quizMode ? (
                <div className="max-w-lg mx-auto fade-in">
                    <div className="bg-white rounded-2xl p-8 card-shadow border border-navy/5 text-center">
                        <div className="text-sm text-navy/40 mb-2">
                            Question {quizIndex + 1} of {activeData.length} • Score: {quizScore}
                        </div>
                        <div className="font-jp text-7xl text-navy mb-6 mt-4">{activeData[quizIndex].character}</div>
                        <p className="text-navy/60 mb-4">What is the romaji reading?</p>

                        {quizResult === null ? (
                            <div className="flex gap-2 justify-center">
                                <input
                                    type="text"
                                    value={quizAnswer}
                                    onChange={(e) => setQuizAnswer(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && checkQuizAnswer()}
                                    placeholder="Type romaji..."
                                    className="px-4 py-3 border border-navy/15 rounded-xl text-center text-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                                    autoFocus
                                />
                                <button
                                    onClick={checkQuizAnswer}
                                    className="px-6 py-3 bg-navy text-cream rounded-xl font-semibold hover:bg-navy-light transition-colors"
                                >
                                    Check
                                </button>
                            </div>
                        ) : (
                            <div className="fade-in">
                                <div className={`text-lg font-bold mb-2 ${quizResult ? 'text-bamboo' : 'text-accent'}`}>
                                    {quizResult ? '✓ Correct!' : `✗ The answer is: ${activeData[quizIndex].romaji}`}
                                </div>
                                <div className="text-sm text-navy/50 mb-4">
                                    Example: {activeData[quizIndex].exampleWord.japanese} ({activeData[quizIndex].exampleWord.english})
                                </div>
                                <button
                                    onClick={nextQuizQuestion}
                                    className="px-6 py-3 bg-navy text-cream rounded-xl font-semibold hover:bg-navy-light transition-colors"
                                >
                                    {quizIndex < activeData.length - 1 ? 'Next →' : 'Finish'}
                                </button>
                            </div>
                        )}
                    </div>

                    {!quizMode || (
                        <div className="text-center mt-4">
                            <button onClick={() => setQuizMode(false)} className="text-navy/40 hover:text-navy text-sm">
                                Exit Quiz
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <>
                    {/* Practice Button */}
                    <div className="mb-6 flex justify-end">
                        <button
                            onClick={startQuiz}
                            className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-lg shadow-accent/20 hover:bg-accent-light hover:-translate-y-0.5 transition-all duration-300"
                        >
                            🎯 Practice {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                        </button>
                    </div>

                    {/* Character Grid */}
                    <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-13 gap-2 mb-8">
                        {activeData.map((char, i) => (
                            <button
                                key={i}
                                onClick={() => setSelectedChar(char)}
                                className={`aspect-square rounded-xl flex flex-col items-center justify-center transition-all duration-200 border ${selectedChar?.character === char.character
                                        ? 'bg-navy text-cream border-navy scale-105 shadow-lg'
                                        : 'bg-white text-navy border-navy/8 hover:border-navy/20 hover:shadow-md hover:-translate-y-0.5 card-shadow'
                                    }`}
                            >
                                <span className="font-jp text-xl md:text-2xl font-medium">{char.character}</span>
                                <span className={`text-[10px] mt-0.5 ${selectedChar?.character === char.character ? 'text-cream/60' : 'text-navy/40'}`}>
                                    {char.romaji.split('/')[0]}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Character Detail */}
                    {selectedChar && (
                        <div className="bg-white rounded-2xl p-6 md:p-8 card-shadow border border-navy/5 slide-in-right">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="text-center md:text-left">
                                    <div className="font-jp text-8xl text-navy mb-2">{selectedChar.character}</div>
                                    <div className="text-2xl text-accent font-bold">{selectedChar.romaji}</div>
                                </div>

                                <div className="flex-1 space-y-4">
                                    <div>
                                        <h3 className="font-bold text-navy text-sm uppercase tracking-wider mb-1">Stroke Order</h3>
                                        <p className="text-navy/60 text-sm">{selectedChar.strokeOrder}</p>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-navy text-sm uppercase tracking-wider mb-1">Example Word</h3>
                                        <div className="bg-paper rounded-xl p-4">
                                            <div className="font-jp text-xl text-navy">{selectedChar.exampleWord.japanese}</div>
                                            <div className="text-accent/70 text-sm">{selectedChar.exampleWord.romaji}</div>
                                            <div className="text-navy/50 text-sm">{selectedChar.exampleWord.english}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
