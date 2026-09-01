import { useState, useRef, useEffect } from 'react';
import { api } from '../services/api';

const TUTOR_SYSTEM_PROMPT = `You are Hana, a warm, patient, and encouraging Japanese language tutor. Your job is to help the user practice Japanese conversation.

CRITICAL RULES for Language Mode:
- If Mode is "Full Japanese", YOU MUST respond using literal real Japanese characters (Hiragana, Katakana, and Kanji). DO NOT use ANY Romaji (English alphabet letters) for your conversational response. You can add furigana hints in parentheses for uncommon words.
- If Mode is "Mixed", use a mix of real Japanese characters and English explanations.
- If Mode is "Romaji Support", use real Japanese characters but MUST also provide Romaji reading for them.

CRITICAL RULES for JLPT Level:
- If Level is "N5", treat the user as a complete beginner. Use ONLY easy words, simple present/past tense (masu/desu form), and short sentences. DO NOT use complex grammar.
- If Level is "N1", treat the user like a native speaker. Use advanced vocabulary, natural idioms, complex sentence structures, and high-level kanji naturally.
- For N4, N3, N2, scale the difficulty appropriately between beginner and advanced.

General Rules:
- Always use actual Japanese text (like こんにちは) instead of rewriting it in English letters ("Konnichiwa").
- After your conversational response, ALWAYS add a section called 「先生のメモ」(Teacher's Note) in English where you:
  1. Correct any grammar or vocabulary mistakes the user made
  2. Explain WHY it was wrong in simple terms
  3. Show the correct version using REAL Japanese characters.
- Keep conversations natural and friendly.
- Use the selected topic to guide the conversation.
- Never make the user feel bad for making mistakes — always be encouraging.`;

const topics = [
    { id: 'daily', label: 'Daily Life' },
    { id: 'travel', label: 'Travel' },
    { id: 'food', label: 'Food' },
    { id: 'hobbies', label: 'Hobbies' },
    { id: 'free', label: 'Free Chat' },
];

const modes = [
    { id: 'full-jp', label: 'Full Japanese' },
    { id: 'mixed', label: 'Mixed (JP + EN)' },
    { id: 'romaji', label: 'Romaji Support' },
];

const levels = ['N5', 'N4', 'N3', 'N2', 'N1'];

export default function ChatPage() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState('daily');
    const [selectedMode, setSelectedMode] = useState('mixed');
    const [selectedLevel, setSelectedLevel] = useState('N5');
    const [chatStarted, setChatStarted] = useState(false);
    const [apiKey, setApiKey] = useState(() => {
        try { return localStorage.getItem('kana-forge-groq-key') || ''; } catch { return ''; }
    });
    const [showApiKeyInput, setShowApiKeyInput] = useState(false);
    const chatContainerRef = useRef(null);

    // Scroll to bottom of chat container only, not the whole page
    useEffect(() => {
        if (chatContainerRef.current) {
            const container = chatContainerRef.current;
            container.scrollTo({
                top: container.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [messages, isLoading]);

    const saveApiKey = (key) => {
        setApiKey(key);
        try { localStorage.setItem('kana-forge-groq-key', key); } catch { }
    };

    const startChat = () => {
        let greeting = "";
        const topicLabel = topics.find(t => t.id === selectedTopic)?.label || 'Japanese';

        if (selectedMode === 'full-jp') {
            if (selectedLevel === 'N5' || selectedLevel === 'N4') {
                greeting = `こんにちは！ はな先生（せんせい）です。 今日（きょう）は「${topicLabel}」について話（はな）しましょう！`;
            } else {
                greeting = `こんにちは！はな先生です。今日は「${topicLabel}」について話しましょう！何か話したいことはありますか？`;
            }
        } else if (selectedMode === 'mixed') {
            greeting = `こんにちは (Hello)! I am Hana Sensei. Let's practice talking about ${topicLabel} today!`;
        } else {
            greeting = `こんにちは！ はな先生です。 (Konnichiwa! Hana sensei desu.) Let's talk about ${topicLabel}!`;
        }

        const introMessage = {
            role: 'assistant',
            content: greeting,
        };
        setMessages([introMessage]);
        setChatStarted(true);
    };

    const sendMessage = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = { role: 'user', content: input.trim() };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        const topic = topics.find((t) => t.id === selectedTopic);
        const mode = modes.find((m) => m.id === selectedMode);
        const systemPrompt = `${TUTOR_SYSTEM_PROMPT}\n\nCurrent settings:\n- Topic: ${topic?.label}\n- Mode: ${mode?.label}\n- Level: ${selectedLevel}`;

        const conversationHistory = [...messages, userMessage]
            .filter((m) => m.role === 'user' || m.role === 'assistant')
            .map((m) => ({ role: m.role, content: m.content }));

        try {
            // First attempt: Secure Express backend AI proxy
            let assistantMessage = '';
            try {
                const res = await api.sendAIChatMessage({
                    messages: conversationHistory,
                    systemPrompt,
                });
                if (res?.message) {
                    assistantMessage = res.message;
                }
            } catch (backendErr) {
                console.warn('Backend AI proxy unavailable, attempting client fallback:', backendErr.message);
                const effectiveApiKey = apiKey || import.meta.env.VITE_GROQ_API_KEY || '';
                if (!effectiveApiKey) {
                    throw new Error(backendErr.message || 'AI service unavailable. Please configure server or enter an API key in settings.');
                }
                const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${effectiveApiKey}`,
                    },
                    body: JSON.stringify({
                        model: 'llama-3.3-70b-versatile',
                        messages: [
                            { role: 'system', content: systemPrompt },
                            ...conversationHistory,
                        ],
                        max_tokens: 1000,
                        temperature: 0.7,
                    }),
                });

                if (!response.ok) {
                    const errorData = await response.json().catch(() => null);
                    throw new Error(errorData?.error?.message || `API error: ${response.status}`);
                }

                const data = await response.json();
                assistantMessage = data.choices?.[0]?.message?.content || 'No response received.';
            }

            setMessages((prev) => [...prev, { role: 'assistant', content: assistantMessage }]);
        } catch (error) {
            setMessages((prev) => [...prev, { role: 'assistant', content: `⚠️ Connection error: ${error.message}` }]);
        } finally {
            setIsLoading(false);
        }
    };

    const renderMessageContent = (content) => {
        return content.split('\n').map((line, i) => {
            if (line.includes('先生のメモ') || line.includes("Teacher's Note")) {
                return <div key={i} className="font-bold text-primary mt-4 mb-2 text-sm">📝 {line}</div>;
            }
            if (line.includes('**')) {
                const parts = line.split(/\*\*(.*?)\*\*/g);
                return <p key={i} className="mb-1">{parts.map((part, j) => j % 2 === 1 ? <strong key={j}>{part}</strong> : part)}</p>;
            }
            if (line.trim() === '') return <div key={i} className="h-2"></div>;
            return <p key={i} className="mb-1">{line}</p>;
        });
    };

    // Setup screen
    if (!chatStarted) {
        return (
            <div className="fade-in min-h-screen">
                <div className="max-w-3xl mx-auto px-6 lg:px-8 py-12">
                    <div className="flex items-center gap-4 mb-2">
                        <img src="/kana-forge-logo.png" alt="Kana Forge" className="w-12 h-12 rounded-lg shadow-lg shadow-primary/20" />
                        <h1 className="text-3xl md:text-4xl font-bold text-neutral-warm">AI Conversation Coach</h1>
                    </div>
                    <p className="text-neutral-warm/40 text-sm font-light mb-10">Practice with Hana Sensei, your patient AI tutor.</p>

                    <div className="bg-bg-card border border-neutral-warm/5 rounded-xl p-6 md:p-8 space-y-6">
                        {/* Topic */}
                        <div>
                            <h3 className="text-xs font-bold text-neutral-warm/40 uppercase tracking-widest mb-3">Topic</h3>
                            <div className="flex flex-wrap gap-2">
                                {topics.map((t) => (
                                    <button key={t.id} onClick={() => setSelectedTopic(t.id)}
                                        className={`px-4 py-2.5 text-sm rounded transition-all ${selectedTopic === t.id ? 'bg-primary text-white' : 'bg-bg-elevated text-neutral-warm/40 hover:text-neutral-warm'}`}
                                    >{t.label}</button>
                                ))}
                            </div>
                        </div>

                        {/* Mode */}
                        <div>
                            <h3 className="text-xs font-bold text-neutral-warm/40 uppercase tracking-widest mb-3">Language Mode</h3>
                            <div className="flex flex-wrap gap-2">
                                {modes.map((m) => (
                                    <button key={m.id} onClick={() => setSelectedMode(m.id)}
                                        className={`px-4 py-2.5 text-sm rounded transition-all ${selectedMode === m.id ? 'bg-primary text-white' : 'bg-bg-elevated text-neutral-warm/40 hover:text-neutral-warm'}`}
                                    >{m.label}</button>
                                ))}
                            </div>
                        </div>

                        {/* Level */}
                        <div>
                            <h3 className="text-xs font-bold text-neutral-warm/40 uppercase tracking-widest mb-3">Level</h3>
                            <div className="flex gap-2">
                                {levels.map((l) => (
                                    <button key={l} onClick={() => setSelectedLevel(l)}
                                        className={`px-4 py-2.5 text-sm rounded transition-all ${selectedLevel === l ? 'bg-primary text-white' : 'bg-bg-elevated text-neutral-warm/40 hover:text-neutral-warm'}`}
                                    >{l}</button>
                                ))}
                            </div>
                        </div>

                        <button onClick={startChat} className="w-full bg-primary text-white py-4 rounded font-bold shadow-lg shadow-primary/20 hover:bg-primary-light transition-all">
                            Start Conversation with Hana 🌸
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Chat UI
    return (
        <div className="fade-in flex flex-col h-[calc(100vh-73px)]">
            {/* Header */}
            <div className="border-b border-neutral-warm/5 bg-bg-dark/80 backdrop-blur-md px-6 py-3">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg font-serif text-primary">花</div>
                        <div>
                            <div className="font-bold text-neutral-warm text-sm">Kana Forge</div>
                            <div className="text-xs text-success flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-success"></span> Sensei Online</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-xs text-neutral-warm/30">User 01</span>
                        <button onClick={() => { setChatStarted(false); setMessages([]); }} className="text-neutral-warm/30 hover:text-neutral-warm transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Messages */}
            <div
                ref={chatContainerRef}
                className="flex-1 overflow-y-auto px-4 py-6"
            >
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <span className="text-xs text-neutral-warm/20 uppercase tracking-widest">Today&apos;s Lesson</span>
                    </div>
                    <div className="space-y-6">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} fade-in`}>
                                {msg.role === 'assistant' && (
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg font-serif text-primary mr-3 shrink-0 mt-1">花</div>
                                )}
                                <div className={`max-w-[75%]`}>
                                    {msg.role === 'assistant' && <span className="text-xs text-primary mb-1 block font-bold">Hana Sensei</span>}
                                    {msg.role === 'user' && <span className="text-xs text-neutral-warm/30 mb-1 block text-right">Learner</span>}
                                    <div className={`rounded-xl px-5 py-4 text-sm leading-relaxed ${msg.role === 'user'
                                        ? 'bg-primary/10 text-neutral-warm border border-primary/20'
                                        : 'bg-bg-card border border-neutral-warm/5 text-neutral-warm/80'
                                        }`}>
                                        <div className="font-jp">{renderMessageContent(msg.content)}</div>
                                    </div>
                                    <div className="text-[10px] text-neutral-warm/20 mt-1 px-1 flex items-center gap-2">
                                        <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                        {msg.role === 'user' && <span>· Read</span>}
                                    </div>
                                </div>
                                {msg.role === 'user' && (
                                    <div className="w-10 h-10 rounded-full bg-neutral-warm/10 flex items-center justify-center text-sm ml-3 shrink-0 mt-6">👤</div>
                                )}
                            </div>
                        ))}

                        {isLoading && (
                            <div className="flex justify-start fade-in">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg font-serif text-primary mr-3">花</div>
                                <div className="bg-bg-card border border-neutral-warm/5 rounded-xl px-5 py-4">
                                    <div className="flex gap-1.5">
                                        <span className="w-2 h-2 bg-neutral-warm/20 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                        <span className="w-2 h-2 bg-neutral-warm/20 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                        <span className="w-2 h-2 bg-neutral-warm/20 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Input */}
            <div className="border-t border-neutral-warm/5 bg-bg-dark px-4 py-4">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-bg-card border border-neutral-warm/5 rounded-xl flex items-center px-4">
                        <button className="text-neutral-warm/20 hover:text-neutral-warm/40 transition-colors p-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                        </button>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
                            placeholder="Type your message in Japanese or English..."
                            className="flex-1 px-3 py-4 bg-transparent text-sm font-jp text-neutral-warm placeholder:text-neutral-warm/25 focus:outline-none"
                            disabled={isLoading}
                        />
                        <div className="flex items-center gap-2">
                            <button className="text-neutral-warm/20 hover:text-neutral-warm/40 transition-colors p-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                            </button>
                            <button
                                onClick={sendMessage}
                                disabled={!input.trim() || isLoading}
                                className="bg-primary text-white p-2.5 rounded-lg disabled:opacity-30 hover:bg-primary-light transition-all"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                            </button>
                        </div>
                    </div>
                    <p className="text-center text-[10px] text-neutral-warm/15 mt-2 uppercase tracking-widest">Press Enter to send · Shift+Enter for new line</p>
                </div>
            </div>
        </div>
    );
}
