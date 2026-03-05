import { useState } from 'react';
import { hiragana } from '../data/hiragana';
import { katakana } from '../data/katakana';
import DrawingCanvas from '../components/DrawingCanvas';

const tabs = ['Hiragana', 'Katakana', 'Kanji'];

export default function WritingPage() {
    const [activeTab, setActiveTab] = useState('Hiragana');
    const [selectedChar, setSelectedChar] = useState(null);
    const [quizMode, setQuizMode] = useState(false);
    const [quizAnswer, setQuizAnswer] = useState('');
    const [quizFeedback, setQuizFeedback] = useState(null);

    // AI stroke check state
    const [isChecking, setIsChecking] = useState(false);
    const [aiResult, setAiResult] = useState(null);
    const [apiKey, setApiKey] = useState(() => {
        try { return localStorage.getItem('kana-forge-gemini-key') || ''; } catch { return ''; }
    });
    const [showApiKeyPrompt, setShowApiKeyPrompt] = useState(false);
    const [pendingImage, setPendingImage] = useState(null);

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

    // AI stroke checking with Gemini 2.5 Flash
    const checkStrokeWithAI = async (imageDataUrl) => {
        const effectiveApiKey = apiKey || import.meta.env.VITE_GEMINI_API_KEY || '';
        if (!effectiveApiKey) {
            setPendingImage(imageDataUrl);
            setShowApiKeyPrompt(true);
            return;
        }

        setIsChecking(true);
        setAiResult(null);

        // Strip the data:image/png;base64, prefix
        const base64Data = imageDataUrl.split(',')[1];

        try {
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${effectiveApiKey}`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [
                            {
                                parts: [
                                    {
                                        inline_data: {
                                            mime_type: 'image/png',
                                            data: base64Data,
                                        },
                                    },
                                    {
                                        text: `I am practicing writing the Japanese ${activeTab.toLowerCase()} character "${selectedChar.character}" (${selectedChar.romaji}). 

Please analyze my handwritten attempt in the image and respond in this exact JSON format only, no other text:
{"match": true/false, "score": 1-10, "feedback": "brief feedback about stroke accuracy"}

Rules:
- "match" = true if the character is recognizable as ${selectedChar.character}, even if imperfect
- "score" = 1 (unrecognizable) to 10 (perfect)
- "feedback" = one sentence about stroke quality, proportions, or what to improve
- Be encouraging but honest
- If you literally cannot see any strokes or the canvas appears blank, set match to false and score to 0`,
                                    },
                                ],
                            },
                        ],
                        generationConfig: {
                            temperature: 0.3,
                            maxOutputTokens: 2048,
                            responseMimeType: 'application/json',
                            responseSchema: {
                                type: 'OBJECT',
                                properties: {
                                    match: { type: 'BOOLEAN' },
                                    score: { type: 'INTEGER' },
                                    feedback: { type: 'STRING' },
                                },
                                required: ['match', 'score', 'feedback'],
                            },
                        },
                    }),
                }
            );

            if (!response.ok) {
                const errorData = await response.json().catch(() => null);
                throw new Error(errorData?.error?.message || `API error: ${response.status}`);
            }

            const data = await response.json();

            // With responseMimeType: "application/json", Gemini returns structured JSON directly
            const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text;

            if (responseText) {
                try {
                    const result = JSON.parse(responseText);
                    setAiResult(result);
                } catch {
                    setAiResult({ match: false, score: 0, feedback: responseText });
                }
            } else {
                setAiResult({ match: false, score: 0, feedback: 'No valid JSON response from AI.' });
            }
        } catch (error) {
            setAiResult({
                match: false,
                score: 0,
                feedback: `Error: ${error.message}. Check your API key.`,
            });
        } finally {
            setIsChecking(false);
        }
    };

    const handleApiKeySave = () => {
        try { localStorage.setItem('kana-forge-gemini-key', apiKey); } catch { }
        setShowApiKeyPrompt(false);
        if (pendingImage) {
            checkStrokeWithAI(pendingImage);
            setPendingImage(null);
        }
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
                            onClick={() => { setActiveTab(tab); setSelectedChar(null); setQuizMode(false); setAiResult(null); }}
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
                                        onClick={() => { setSelectedChar(charItem); setQuizMode(false); setAiResult(null); }}
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
                                    Start Romaji Quiz Mode
                                </button>
                            )}
                        </div>

                        {/* Character Detail Panel */}
                        <div className="lg:col-span-2">
                            {selectedChar ? (
                                <div className="bg-bg-card border border-neutral-warm/5 rounded-xl p-6 sticky top-24 fade-in">
                                    {/* Character display */}
                                    <div className="text-center mb-5">
                                        <div className="font-jp text-6xl text-neutral-warm mb-1">{selectedChar.character}</div>
                                        <div className="text-primary text-lg font-medium">{selectedChar.romaji}</div>
                                    </div>

                                    {/* Drawing Canvas */}
                                    <div className="mb-5">
                                        <h4 className="text-xs font-bold text-neutral-warm/40 uppercase tracking-wider mb-3 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                            Stroke Practice
                                        </h4>
                                        <DrawingCanvas
                                            character={selectedChar.character}
                                            onCheck={checkStrokeWithAI}
                                            onClear={() => setAiResult(null)}
                                            isChecking={isChecking}
                                        />
                                    </div>

                                    {/* AI Result */}
                                    {aiResult && (
                                        <div className={`mb-5 p-4 rounded-lg border fade-in ${aiResult.match
                                            ? 'bg-success/5 border-success/20'
                                            : 'bg-error/5 border-error/20'
                                            }`}>
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-2">
                                                    <span className={`text-lg ${aiResult.match ? 'text-success' : 'text-error'}`}>
                                                        {aiResult.match ? '✓' : '✗'}
                                                    </span>
                                                    <span className={`text-sm font-bold ${aiResult.match ? 'text-success' : 'text-error'}`}>
                                                        {aiResult.match ? 'Character Recognized!' : 'Try Again'}
                                                    </span>
                                                </div>
                                                {aiResult.score > 0 && (
                                                    <div className="flex items-center gap-1">
                                                        <span className={`text-2xl font-bold ${aiResult.score >= 7 ? 'text-success' :
                                                            aiResult.score >= 4 ? 'text-[#f1c40f]' :
                                                                'text-error'
                                                            }`}>{aiResult.score}</span>
                                                        <span className="text-neutral-warm/30 text-xs">/10</span>
                                                    </div>
                                                )}
                                            </div>
                                            <p className="text-neutral-warm/60 text-sm leading-relaxed">{aiResult.feedback}</p>
                                        </div>
                                    )}

                                    {/* Stroke Order Info */}
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
                                    <p className="text-neutral-warm/30 text-sm">Select a character to practice drawing</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* API Key Prompt Modal */}
            {showApiKeyPrompt && (
                <div className="fixed inset-0 bg-bg-dark/80 backdrop-blur-sm z-50 flex items-center justify-center fade-in">
                    <div className="bg-bg-card border border-neutral-warm/10 rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl">
                        <h3 className="font-bold text-neutral-warm text-lg mb-2">API Key Required</h3>
                        <p className="text-neutral-warm/40 text-sm mb-4">Enter your Google Gemini API key for AI stroke checking.</p>
                        <input
                            type="password"
                            value={apiKey}
                            onChange={(e) => setApiKey(e.target.value)}
                            placeholder="AIzaSy..."
                            className="w-full px-4 py-3 bg-bg-elevated border border-neutral-warm/10 rounded text-sm text-neutral-warm mb-2 focus:outline-none focus:border-primary/50"
                            autoFocus
                            onKeyDown={(e) => e.key === 'Enter' && handleApiKeySave()}
                        />
                        <p className="text-xs text-neutral-warm/20 mb-4">Stored locally only. Never shared.</p>
                        <div className="flex gap-2">
                            <button
                                onClick={() => { setShowApiKeyPrompt(false); setPendingImage(null); }}
                                className="flex-1 py-2.5 bg-bg-elevated text-neutral-warm/50 rounded text-sm"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleApiKeySave}
                                disabled={!apiKey.trim()}
                                className="flex-1 py-2.5 bg-primary text-white rounded text-sm font-bold disabled:opacity-30"
                            >
                                Save & Check
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
