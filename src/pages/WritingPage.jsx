import { useState, useMemo } from 'react';
import { hiragana } from '../data/hiragana';
import { katakana } from '../data/katakana';
import { kanjiList } from '../data/kanji';
import { kanjiSections } from '../data/kanjiSections';
import DrawingCanvas from '../components/DrawingCanvas';
import AudioPlayer from '../components/AudioPlayer';
import { useProgress } from '../context/ProgressContext';
import { api } from '../services/api';

const tabs = ['Hiragana', 'Katakana', 'Kanji'];

export default function WritingPage() {
    const { recordKanjiPractice } = useProgress();
    const [activeTab, setActiveTab] = useState('Hiragana');
    const [selectedChar, setSelectedChar] = useState(null);
    const [selectedKanjiSection, setSelectedKanjiSection] = useState('All');
    const [kanjiSearchTerm, setKanjiSearchTerm] = useState('');
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

    const activeKanjiSectionData = useMemo(() => {
        if (selectedKanjiSection === 'All') return null;
        return kanjiSections.find(s => s.id === selectedKanjiSection);
    }, [selectedKanjiSection]);

    const characters = useMemo(() => {
        if (activeTab === 'Hiragana') return hiragana;
        if (activeTab === 'Katakana') return katakana;

        // Kanji tab: filter by section and search term
        return kanjiList.filter(k => {
            const matchSection = selectedKanjiSection === 'All' ||
                (activeKanjiSectionData && activeKanjiSectionData.kanjiList.includes(k.character));

            const matchSearch = kanjiSearchTerm === '' ||
                k.character.includes(kanjiSearchTerm) ||
                k.meanings?.some(m => m.toLowerCase().includes(kanjiSearchTerm.toLowerCase())) ||
                k.onReadings?.some(r => r.includes(kanjiSearchTerm)) ||
                k.kunReadings?.some(r => r.includes(kanjiSearchTerm));

            return matchSection && matchSearch;
        });
    }, [activeTab, selectedKanjiSection, activeKanjiSectionData, kanjiSearchTerm]);

    const startQuiz = (customChars = null) => {
        const pool = customChars || characters;
        if (!pool || pool.length === 0) return;
        setQuizMode(true);
        setQuizAnswer('');
        setQuizFeedback(null);
        const randomChar = pool[Math.floor(Math.random() * pool.length)];
        setSelectedChar(randomChar);
    };

    const checkQuizAnswer = () => {
        if (!selectedChar) return;
        const target = activeTab === 'Kanji'
            ? (selectedChar.meanings?.[0] || selectedChar.onReadings?.[0] || '')
            : (selectedChar.romaji || '');

        const input = quizAnswer.trim().toLowerCase();
        let correct = false;

        if (activeTab === 'Kanji') {
            correct = selectedChar.meanings?.some(m => m.toLowerCase().includes(input)) ||
                selectedChar.onReadings?.some(r => r.toLowerCase().includes(input)) ||
                selectedChar.kunReadings?.some(r => r.toLowerCase().includes(input)) ||
                input === selectedChar.character;
        } else {
            correct = input === target.toLowerCase();
        }

        setQuizFeedback(correct ? 'correct' : 'wrong');
        if (!correct) {
            setTimeout(() => {
                setQuizFeedback(null);
                setQuizAnswer('');
                const randomChar = characters[Math.floor(Math.random() * characters.length)];
                setSelectedChar(randomChar);
            }, 2200);
        }
    };

    const nextQuizChar = () => {
        setQuizFeedback(null);
        setQuizAnswer('');
        const randomChar = characters[Math.floor(Math.random() * characters.length)];
        setSelectedChar(randomChar);
    };

    // AI stroke checking with backend proxy & Gemini 2.5 Flash
    const checkStrokeWithAI = async (imageDataUrl) => {
        setIsChecking(true);
        setAiResult(null);

        try {
            let result = null;
            const targetRomajiOrMeaning = activeTab === 'Kanji'
                ? (selectedChar.meanings?.join(', ') || '')
                : (selectedChar.romaji || '');

            try {
                // Primary: Secure backend AI proxy
                result = await api.checkStrokeWithAI({
                    imageData: imageDataUrl,
                    character: selectedChar.character,
                    romaji: targetRomajiOrMeaning,
                    characterType: activeTab.toLowerCase(),
                });
            } catch (backendErr) {
                console.warn('Backend AI stroke check unavailable, attempting client fallback:', backendErr.message);
                const effectiveApiKey = apiKey || import.meta.env.VITE_GEMINI_API_KEY || '';
                if (!effectiveApiKey) {
                    setPendingImage(imageDataUrl);
                    setShowApiKeyPrompt(true);
                    setIsChecking(false);
                    return;
                }

                const base64Data = imageDataUrl.split(',')[1];
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
                                            text: `I am practicing writing the Japanese ${activeTab.toLowerCase()} character "${selectedChar.character}" (${targetRomajiOrMeaning}). 

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
                const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text;
                if (responseText) {
                    try {
                        result = JSON.parse(responseText);
                    } catch {
                        result = { match: false, score: 0, feedback: responseText };
                    }
                } else {
                    result = { match: false, score: 0, feedback: 'No valid response from AI.' };
                }
            }

            if (result) {
                setAiResult(result);
                if (activeTab === 'Kanji') {
                    recordKanjiPractice(selectedChar.character, result.score || 0);
                }
                try {
                    await api.saveWritingProgress({
                        character: selectedChar.character,
                        characterType: activeTab.toLowerCase(),
                        score: result.score || 0,
                    });
                } catch (persistErr) {
                    console.warn('Could not persist writing progress:', persistErr.message);
                }
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
                    <div className="flex items-center gap-3 mb-2">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-xs font-bold uppercase tracking-widest text-primary">Interactive Writing Studio</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-neutral-warm mb-2">
                        Stroke & Character Forge
                    </h1>
                    <p className="text-neutral-warm/50 text-sm md:text-base font-light">
                        Hone stroke balance, readings, and muscle memory with live canvas drawing and AI stroke order analysis across Kana and 100 Curated N5 Kanji.
                    </p>
                </div>

                {/* Main Script Tabs */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-neutral-warm/10">
                    <div className="flex gap-0">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => {
                                    setActiveTab(tab);
                                    setSelectedChar(null);
                                    setQuizMode(false);
                                    setAiResult(null);
                                }}
                                className={`px-6 md:px-8 py-4 text-sm font-bold transition-all relative uppercase tracking-wider ${activeTab === tab
                                        ? 'text-primary'
                                        : 'text-neutral-warm/40 hover:text-neutral-warm/70'
                                    }`}
                            >
                                {tab === 'Kanji' ? 'N5 Kanji (100)' : tab}
                                {activeTab === tab && (
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
                                )}
                            </button>
                        ))}
                    </div>

                    {activeTab === 'Kanji' && (
                        <div className="text-xs font-mono text-neutral-warm/50 pb-2">
                            <span>100 Curated N5 Kanji</span>
                            <span className="mx-2">•</span>
                            <span className="text-primary font-bold">11 Thematic Sections</span>
                        </div>
                    )}
                </div>

                {/* Kanji Specific Thematic Section Bar */}
                {activeTab === 'Kanji' && (
                    <div className="space-y-4 mb-8">
                        {/* Section Selector Pills */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
                            <button
                                onClick={() => { setSelectedKanjiSection('All'); setSelectedChar(null); }}
                                className={`px-3 py-1.5 text-xs font-bold rounded-xl whitespace-nowrap transition-all uppercase tracking-wider ${selectedKanjiSection === 'All'
                                        ? 'bg-primary text-white shadow-md shadow-primary/20'
                                        : 'bg-bg-card border border-neutral-warm/10 text-neutral-warm/50 hover:text-neutral-warm'
                                    }`}
                            >
                                All 100 Kanji
                            </button>
                            {kanjiSections.map((sec) => (
                                <button
                                    key={sec.id}
                                    onClick={() => { setSelectedKanjiSection(sec.id); setSelectedChar(null); }}
                                    className={`px-3 py-1.5 text-xs font-medium rounded-xl whitespace-nowrap transition-all flex items-center gap-1.5 ${selectedKanjiSection === sec.id
                                            ? 'bg-primary text-white shadow-md shadow-primary/20 font-bold'
                                            : 'bg-bg-card border border-neutral-warm/10 text-neutral-warm/60 hover:text-neutral-warm'
                                        }`}
                                >
                                    <span className="font-mono text-[10px] opacity-75">#{sec.number}</span>
                                    <span>{sec.title}</span>
                                    <span className="font-mono text-[10px] opacity-60">({sec.range})</span>
                                </button>
                            ))}
                        </div>

                        {/* Selected Section Overview Banner */}
                        {activeKanjiSectionData && (
                            <div className="bg-bg-card border border-neutral-warm/10 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4 fade-in">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-xs font-mono font-bold text-primary">Section {activeKanjiSectionData.number} ({activeKanjiSectionData.range})</span>
                                        <span className="text-xs text-neutral-warm/40 font-jp">• {activeKanjiSectionData.japaneseTitle}</span>
                                    </div>
                                    <h3 className="text-base font-bold text-neutral-warm">{activeKanjiSectionData.title}</h3>
                                    <p className="text-xs text-neutral-warm/60 mt-0.5">{activeKanjiSectionData.description}</p>
                                </div>
                                <button
                                    onClick={() => {
                                        const sectionChars = kanjiList.filter(k => activeKanjiSectionData.kanjiList.includes(k.character));
                                        startQuiz(sectionChars);
                                    }}
                                    className="px-4 py-2 bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0"
                                >
                                    <span>🎯</span>
                                    <span>{activeKanjiSectionData.reviewTitle}</span>
                                </button>
                            </div>
                        )}
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Character Grid */}
                    <div className="lg:col-span-3">
                        <div className={`grid gap-2 mb-6 ${activeTab === 'Kanji' ? 'grid-cols-5 sm:grid-cols-10' : 'grid-cols-5 sm:grid-cols-10'}`}>
                            {characters.map((charItem) => {
                                const isSelected = selectedChar?.character === charItem.character;
                                return (
                                    <button
                                        key={charItem.character}
                                        onClick={() => { setSelectedChar(charItem); setQuizMode(false); setAiResult(null); }}
                                        className={`aspect-square flex flex-col items-center justify-center rounded-xl transition-all text-center p-1 ${isSelected
                                                ? 'bg-primary/20 border-2 border-primary text-primary shadow-md shadow-primary/20 scale-105'
                                                : 'bg-bg-card border border-neutral-warm/10 text-neutral-warm hover:border-primary/40 hover:bg-bg-elevated'
                                            }`}
                                    >
                                        <span className="font-jp text-xl font-bold leading-none">{charItem.character}</span>
                                        <span className="text-[9px] text-neutral-warm/40 mt-1 uppercase font-mono truncate max-w-full px-0.5">
                                            {activeTab === 'Kanji' ? charItem.meanings?.[0] : charItem.romaji}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Quiz Mode Area */}
                        {quizMode && selectedChar && (
                            <div className="bg-bg-card border border-neutral-warm/10 rounded-2xl p-8 text-center fade-in shadow-md mb-6">
                                <div className="font-jp text-7xl text-neutral-warm mb-4">{selectedChar.character}</div>
                                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-6">
                                    Recall Quiz: Active
                                </p>

                                <div className="max-w-sm mx-auto">
                                    <label className="text-xs font-bold text-neutral-warm/50 uppercase tracking-wider block text-left mb-2">
                                        {activeTab === 'Kanji' ? 'Enter English Meaning / Reading' : 'Type Romaji to Verify'}
                                    </label>
                                    <input
                                        type="text"
                                        value={quizAnswer}
                                        onChange={(e) => setQuizAnswer(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && (quizFeedback === 'correct' ? nextQuizChar() : checkQuizAnswer())}
                                        className={`w-full px-4 py-4 bg-bg-elevated border-2 rounded-xl text-center text-lg font-jp focus:outline-none transition-colors ${quizFeedback === 'correct' ? 'border-success text-success' :
                                                quizFeedback === 'wrong' ? 'border-primary text-primary' :
                                                    'border-neutral-warm/20 text-neutral-warm focus:border-primary'
                                            }`}
                                        placeholder="|"
                                        autoFocus
                                    />
                                </div>

                                {quizFeedback === 'correct' && (
                                    <div className="mt-4 fade-in">
                                        <p className="text-success text-sm font-bold mb-3">
                                            ✓ Correct! {selectedChar.character} = {activeTab === 'Kanji' ? selectedChar.meanings?.join(', ') : selectedChar.romaji}
                                        </p>
                                        <button onClick={nextQuizChar} className="bg-primary text-white px-6 py-2 rounded-xl text-sm font-bold shadow-md shadow-primary/20">
                                            Next Character →
                                        </button>
                                    </div>
                                )}
                                {quizFeedback === 'wrong' && (
                                    <p className="mt-4 text-primary text-sm fade-in font-medium">
                                        ✗ That&apos;s {activeTab === 'Kanji' ? selectedChar.meanings?.join(', ') : selectedChar.romaji}. Try again...
                                    </p>
                                )}
                            </div>
                        )}

                        {!quizMode && (
                            <button
                                onClick={() => startQuiz()}
                                className="w-full bg-bg-card border border-neutral-warm/10 text-neutral-warm/60 py-4 rounded-2xl hover:border-primary/40 hover:text-primary transition-all text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
                            >
                                <span>⚡</span>
                                <span>Start Quick Recognition Quiz</span>
                            </button>
                        )}
                    </div>

                    {/* Character Detail Panel */}
                    <div className="lg:col-span-2">
                        {selectedChar ? (
                            <div className="bg-bg-card border border-neutral-warm/10 rounded-2xl p-6 sticky top-24 fade-in shadow-lg">
                                {/* Character Display */}
                                <div className="text-center mb-5 pb-4 border-b border-neutral-warm/10">
                                    <div className="font-jp text-7xl font-bold text-neutral-warm mb-1">{selectedChar.character}</div>
                                    {activeTab === 'Kanji' ? (
                                        <div>
                                            <div className="text-primary text-lg font-bold">
                                                {selectedChar.meanings?.join(', ')}
                                            </div>
                                            <div className="text-xs text-neutral-warm/40 mt-1 font-mono">
                                                Strokes: {selectedChar.strokeCount} | Radical: {selectedChar.radical}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="text-primary text-xl font-bold font-mono">{selectedChar.romaji}</div>
                                    )}
                                </div>

                                {/* Drawing Canvas */}
                                <div className="mb-5">
                                    <h4 className="text-xs font-bold text-neutral-warm/50 uppercase tracking-wider mb-3 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                                        Handwriting Canvas
                                    </h4>
                                    <DrawingCanvas
                                        character={selectedChar.character}
                                        onCheck={checkStrokeWithAI}
                                        onClear={() => setAiResult(null)}
                                        isChecking={isChecking}
                                    />
                                </div>

                                {/* AI Result Feedback */}
                                {aiResult && (
                                    <div className={`mb-5 p-4 rounded-xl border fade-in ${aiResult.match
                                            ? 'bg-success/5 border-success/30'
                                            : 'bg-primary/5 border-primary/30'
                                        }`}>
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <span className={`text-lg ${aiResult.match ? 'text-success' : 'text-primary'}`}>
                                                    {aiResult.match ? '✓' : '✗'}
                                                </span>
                                                <span className={`text-sm font-bold ${aiResult.match ? 'text-success' : 'text-primary'}`}>
                                                    {aiResult.match ? 'Character Recognized!' : 'Check Proportions'}
                                                </span>
                                            </div>
                                            {aiResult.score > 0 && (
                                                <div className="flex items-center gap-1">
                                                    <span className={`text-2xl font-bold ${aiResult.score >= 7 ? 'text-success' :
                                                            aiResult.score >= 4 ? 'text-[#f1c40f]' :
                                                                'text-primary'
                                                        }`}>{aiResult.score}</span>
                                                    <span className="text-neutral-warm/40 text-xs font-mono">/10</span>
                                                </div>
                                            )}
                                        </div>
                                        <p className="text-neutral-warm/70 text-xs leading-relaxed">{aiResult.feedback}</p>
                                    </div>
                                )}

                                {/* Kanji Readings */}
                                {activeTab === 'Kanji' && (
                                    <div className="space-y-4 mb-4">
                                        {selectedChar.onReadings?.length > 0 && (
                                            <div>
                                                <span className="text-[11px] font-bold text-neutral-warm/40 uppercase tracking-wider block mb-1">
                                                    On-reading (Onyomi):
                                                </span>
                                                <div className="text-sm font-jp text-primary font-semibold">
                                                    {selectedChar.onReadings.join('、 ')}
                                                </div>
                                            </div>
                                        )}
                                        {selectedChar.kunReadings?.length > 0 && (
                                            <div>
                                                <span className="text-[11px] font-bold text-neutral-warm/40 uppercase tracking-wider block mb-1">
                                                    Kun-reading (Kunyomi):
                                                </span>
                                                <div className="text-sm font-jp text-neutral-warm font-semibold">
                                                    {selectedChar.kunReadings.join('、 ')}
                                                </div>
                                            </div>
                                        )}

                                        {/* Compounds */}
                                        {selectedChar.compounds && (
                                            <div className="border-t border-neutral-warm/10 pt-3">
                                                <span className="text-[11px] font-bold text-neutral-warm/40 uppercase tracking-wider block mb-2">
                                                    Common Compounds:
                                                </span>
                                                <div className="space-y-2">
                                                    {selectedChar.compounds.map((cmp, i) => (
                                                        <div key={i} className="bg-bg-elevated/60 p-2.5 rounded-xl flex items-center justify-between gap-2 text-xs">
                                                            <div>
                                                                <span className="font-jp font-bold text-neutral-warm">{cmp.kanji}</span>
                                                                <span className="text-primary font-jp ml-1.5">({cmp.reading})</span>
                                                            </div>
                                                            <span className="text-neutral-warm/50 text-right">{cmp.meaning}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Example Sentence with Audio */}
                                        {selectedChar.exampleSentence && (
                                            <div className="border-t border-neutral-warm/10 pt-3">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-[11px] font-bold text-neutral-warm/40 uppercase tracking-wider">
                                                        Example Context:
                                                    </span>
                                                    <AudioPlayer text={selectedChar.exampleSentence.japanese} rate={0.85} />
                                                </div>
                                                <div className="bg-bg-elevated p-3 rounded-xl">
                                                    <p className="font-jp text-sm text-neutral-warm mb-1">{selectedChar.exampleSentence.japanese}</p>
                                                    <p className="text-neutral-warm/40 text-xs">{selectedChar.exampleSentence.english}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Kana Details */}
                                {activeTab !== 'Kanji' && (
                                    <div className="space-y-4">
                                        {selectedChar.strokeOrder && (
                                            <div>
                                                <h4 className="text-xs font-bold text-neutral-warm/40 uppercase tracking-wider mb-1">Stroke Order</h4>
                                                <p className="text-xs text-neutral-warm/60 leading-relaxed">{selectedChar.strokeOrder}</p>
                                            </div>
                                        )}
                                        {selectedChar.exampleWord && (
                                            <div>
                                                <h4 className="text-xs font-bold text-neutral-warm/40 uppercase tracking-wider mb-1">Example</h4>
                                                <div className="bg-bg-elevated border border-neutral-warm/5 rounded-xl p-3">
                                                    <div className="font-jp text-base text-neutral-warm">{selectedChar.exampleWord.japanese}</div>
                                                    <div className="text-primary/70 text-xs italic">{selectedChar.exampleWord.romaji}</div>
                                                    <div className="text-neutral-warm/40 text-xs">{selectedChar.exampleWord.english}</div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="bg-bg-card border border-neutral-warm/10 rounded-2xl p-10 text-center">
                                <div className="text-5xl font-serif text-neutral-warm/10 mb-3">選</div>
                                <p className="text-neutral-warm/40 text-sm">Select any character to inspect readings, compounds, and practice handwriting.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* API Key Modal */}
            {showApiKeyPrompt && (
                <div className="fixed inset-0 bg-bg-dark/80 backdrop-blur-sm z-50 flex items-center justify-center fade-in">
                    <div className="bg-bg-card border border-neutral-warm/10 rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl">
                        <h3 className="font-bold text-neutral-warm text-lg mb-2">API Key Required</h3>
                        <p className="text-neutral-warm/40 text-sm mb-4">Enter your Google Gemini API key for AI stroke checking.</p>
                        <input
                            type="password"
                            value={apiKey}
                            onChange={(e) => setApiKey(e.target.value)}
                            placeholder="AIzaSy..."
                            className="w-full px-4 py-3 bg-bg-elevated border border-neutral-warm/10 rounded-xl text-sm text-neutral-warm mb-2 focus:outline-none focus:border-primary/50"
                            autoFocus
                            onKeyDown={(e) => e.key === 'Enter' && handleApiKeySave()}
                        />
                        <p className="text-xs text-neutral-warm/20 mb-4">Stored locally only. Never shared.</p>
                        <div className="flex gap-2">
                            <button
                                onClick={() => { setShowApiKeyPrompt(false); setPendingImage(null); }}
                                className="flex-1 py-2.5 bg-bg-elevated text-neutral-warm/50 rounded-xl text-sm"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleApiKeySave}
                                disabled={!apiKey.trim()}
                                className="flex-1 py-2.5 bg-primary text-white rounded-xl text-sm font-bold disabled:opacity-30"
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
