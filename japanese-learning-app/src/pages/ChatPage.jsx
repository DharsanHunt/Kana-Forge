import { useState, useRef, useEffect } from 'react';

const TUTOR_SYSTEM_PROMPT = `You are Hana, a warm, patient, and encouraging Japanese language tutor. Your job is to help the user practice Japanese conversation.

Rules:
- Always respond in Japanese appropriate to the user's selected level (N5 = very simple, N1 = advanced)
- After your Japanese response, add a section called 「先生のメモ」(Teacher's Note) in English where you:
  1. Correct any grammar or vocabulary mistakes the user made
  2. Explain WHY it was wrong in simple terms
  3. Show the correct version
- Keep conversations natural and friendly
- If the user writes in English, gently encourage them to try in Japanese and offer a template
- Never make the user feel bad for making mistakes — always be encouraging
- Use the topic the user selected to guide the conversation
- Match the mode: if "Full Japanese", respond entirely in Japanese with furigana hints in parentheses. If "Mixed", use both Japanese and English. If "Romaji Support", add romaji after Japanese text.`;

const topics = [
    { id: 'daily', label: '🏠 Daily Life', prompt: 'Let\'s talk about daily routines and everyday activities.' },
    { id: 'travel', label: '✈️ Travel', prompt: 'Let\'s practice conversations useful for traveling in Japan.' },
    { id: 'food', label: '🍱 Food', prompt: 'Let\'s talk about Japanese food, cooking, and restaurants.' },
    { id: 'hobbies', label: '🎮 Hobbies', prompt: 'Let\'s chat about hobbies and free time activities.' },
    { id: 'free', label: '💬 Free Chat', prompt: 'Let\'s have a free conversation about anything you\'d like.' },
];

const modes = [
    { id: 'full-jp', label: '🇯🇵 Full Japanese' },
    { id: 'mixed', label: '🔀 Mixed (JP + EN)' },
    { id: 'romaji', label: '📝 Romaji Support' },
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
    const [wordPopup, setWordPopup] = useState(null);
    const [apiKey, setApiKey] = useState(() => {
        try { return localStorage.getItem('kana-forge-api-key') || ''; } catch { return ''; }
    });
    const [showApiKeyInput, setShowApiKeyInput] = useState(false);
    const messagesEndRef = useRef(null);
    const chatContainerRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const saveApiKey = (key) => {
        setApiKey(key);
        try { localStorage.setItem('kana-forge-api-key', key); } catch { }
    };

    const startChat = () => {
        const topic = topics.find((t) => t.id === selectedTopic);
        const introMessage = {
            role: 'assistant',
            content: `こんにちは！🌸 わたしは はな です。(Hello! I'm Hana.)\n\nI'll be your Japanese conversation partner today!\n\n**Topic:** ${topic.label}\n**Mode:** ${modes.find(m => m.id === selectedMode).label}\n**Level:** ${selectedLevel}\n\n${selectedLevel === 'N5' ? 'Let\'s start simple! Try saying hello in Japanese. 😊\n\nHint: こんにちは (konnichiwa)' : 'Let\'s begin! Feel free to start the conversation in Japanese. 💪'}`,
        };
        setMessages([introMessage]);
        setChatStarted(true);
    };

    const sendMessage = async () => {
        if (!input.trim() || isLoading) return;

        const effectiveApiKey = apiKey || import.meta.env.VITE_ANTHROPIC_API_KEY || '';

        if (!effectiveApiKey) {
            setShowApiKeyInput(true);
            return;
        }

        const userMessage = { role: 'user', content: input.trim() };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        const topic = topics.find((t) => t.id === selectedTopic);
        const mode = modes.find((m) => m.id === selectedMode);
        const systemPrompt = `${TUTOR_SYSTEM_PROMPT}\n\nCurrent settings:\n- Topic: ${topic.label} — ${topic.prompt}\n- Mode: ${mode.label}\n- Level: ${selectedLevel}\n\nRemember to adjust your Japanese complexity to ${selectedLevel} level.`;

        const conversationHistory = [...messages, userMessage]
            .filter((m) => m.role === 'user' || m.role === 'assistant')
            .map((m) => ({ role: m.role, content: m.content }));

        try {
            const response = await fetch('https://api.anthropic.com/v1/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': effectiveApiKey,
                    'anthropic-version': '2023-06-01',
                    'anthropic-dangerous-direct-browser-access': 'true',
                },
                body: JSON.stringify({
                    model: 'claude-opus-4-6',
                    max_tokens: 1000,
                    system: systemPrompt,
                    messages: conversationHistory,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => null);
                throw new Error(errorData?.error?.message || `API error: ${response.status}`);
            }

            const data = await response.json();
            const assistantMessage = {
                role: 'assistant',
                content: data.content[0].text,
            };
            setMessages((prev) => [...prev, assistantMessage]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                {
                    role: 'assistant',
                    content: `⚠️ Sorry, I couldn't connect to the AI. ${error.message}\n\nPlease check your API key and try again.`,
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleWordClick = (e) => {
        const text = e.target.textContent || '';
        // Simple check: if the clicked text contains Japanese characters
        const jpRegex = /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/;
        if (jpRegex.test(text) && text.length <= 10) {
            const rect = e.target.getBoundingClientRect();
            setWordPopup({
                word: text,
                x: rect.left + rect.width / 2,
                y: rect.top - 10,
            });
            setTimeout(() => setWordPopup(null), 3000);
        }
    };

    const renderMessageContent = (content) => {
        const lines = content.split('\n');
        return lines.map((line, i) => {
            // Teacher's note section
            if (line.includes('先生のメモ') || line.includes("Teacher's Note")) {
                return <div key={i} className="font-bold text-accent mt-4 mb-2 text-sm">📝 {line}</div>;
            }
            // Bold text
            if (line.includes('**')) {
                const parts = line.split(/\*\*(.*?)\*\*/g);
                return (
                    <p key={i} className="mb-1">
                        {parts.map((part, j) => j % 2 === 1 ? <strong key={j} className="font-semibold">{part}</strong> : part)}
                    </p>
                );
            }
            // Correction lines
            if (line.includes('→') || line.includes('✓') || line.includes('Correct:')) {
                return <div key={i} className="correct-highlight text-sm my-1 inline-block">{line}</div>;
            }
            if (line.includes('✗') || line.includes('Wrong:') || line.includes('Incorrect:')) {
                return <div key={i} className="correction-highlight text-sm my-1 inline-block">{line}</div>;
            }
            if (line.trim() === '') return <div key={i} className="h-2"></div>;
            return <p key={i} className="mb-1">{line}</p>;
        });
    };

    // Pre-chat setup screen
    if (!chatStarted) {
        return (
            <div className="fade-in max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-navy mb-3">🤖 AI Conversation Coach</h1>
                    <p className="text-navy/50 text-lg">Practice Japanese conversation with Hana, your patient AI tutor.</p>
                </div>

                <div className="bg-white rounded-2xl p-6 md:p-8 card-shadow border border-navy/5 space-y-6">
                    {/* API Key */}
                    <div>
                        <h3 className="font-bold text-navy text-sm uppercase tracking-wider mb-3">🔑 API Key</h3>
                        <div className="flex gap-2">
                            <input
                                type="password"
                                value={apiKey}
                                onChange={(e) => saveApiKey(e.target.value)}
                                placeholder="Enter your Anthropic API key..."
                                className="flex-1 px-4 py-3 bg-paper border border-navy/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                            />
                        </div>
                        <p className="text-xs text-navy/40 mt-1.5">Your key is stored locally and never sent anywhere except Anthropic&apos;s API.</p>
                    </div>

                    {/* Topic */}
                    <div>
                        <h3 className="font-bold text-navy text-sm uppercase tracking-wider mb-3">💬 Conversation Topic</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {topics.map((topic) => (
                                <button
                                    key={topic.id}
                                    onClick={() => setSelectedTopic(topic.id)}
                                    className={`p-3 rounded-xl text-sm font-medium transition-all text-left ${selectedTopic === topic.id
                                        ? 'bg-navy text-cream'
                                        : 'bg-paper text-navy/60 hover:bg-navy/5'
                                        }`}
                                >
                                    {topic.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mode */}
                    <div>
                        <h3 className="font-bold text-navy text-sm uppercase tracking-wider mb-3">🔄 Language Mode</h3>
                        <div className="flex flex-wrap gap-2">
                            {modes.map((mode) => (
                                <button
                                    key={mode.id}
                                    onClick={() => setSelectedMode(mode.id)}
                                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${selectedMode === mode.id
                                        ? 'bg-navy text-cream'
                                        : 'bg-paper text-navy/60 hover:bg-navy/5'
                                        }`}
                                >
                                    {mode.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Level */}
                    <div>
                        <h3 className="font-bold text-navy text-sm uppercase tracking-wider mb-3">📊 Your Level</h3>
                        <div className="flex gap-2">
                            {levels.map((level) => (
                                <button
                                    key={level}
                                    onClick={() => setSelectedLevel(level)}
                                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${selectedLevel === level
                                        ? 'bg-navy text-cream'
                                        : 'bg-paper text-navy/60 hover:bg-navy/5'
                                        }`}
                                >
                                    {level}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={startChat}
                        id="start-chat-btn"
                        className="w-full bg-accent text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-accent/20 hover:bg-accent-light hover:-translate-y-0.5 transition-all duration-300"
                    >
                        Start Conversation with Hana 🌸
                    </button>
                </div>
            </div>
        );
    }

    // Active chat
    return (
        <div className="fade-in flex flex-col h-[calc(100vh-64px)]">
            {/* Chat header */}
            <div className="bg-white/80 backdrop-blur-md border-b border-navy/8 px-4 py-3">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-sakura/30 flex items-center justify-center text-lg">🌸</div>
                        <div>
                            <div className="font-bold text-navy text-sm">Hana (はな先生)</div>
                            <div className="text-xs text-navy/40">
                                {topics.find((t) => t.id === selectedTopic)?.label} • {selectedLevel} • {modes.find((m) => m.id === selectedMode)?.label}
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => { setChatStarted(false); setMessages([]); }}
                        className="text-sm text-navy/40 hover:text-navy px-3 py-1.5 rounded-lg hover:bg-navy/5 transition-colors"
                    >
                        New Chat
                    </button>
                </div>
            </div>

            {/* Messages */}
            <div ref={chatContainerRef} className="flex-1 overflow-y-auto px-4 py-6" onClick={handleWordClick}>
                <div className="max-w-4xl mx-auto space-y-4">
                    {messages.map((msg, i) => (
                        <div
                            key={i}
                            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} fade-in`}
                        >
                            <div
                                className={`max-w-[85%] md:max-w-[70%] rounded-2xl px-5 py-4 text-sm leading-relaxed ${msg.role === 'user'
                                    ? 'bg-navy text-cream rounded-br-md'
                                    : 'bg-white card-shadow border border-navy/5 text-navy/80 rounded-bl-md'
                                    }`}
                            >
                                <div className="font-jp">{renderMessageContent(msg.content)}</div>
                            </div>
                        </div>
                    ))}

                    {isLoading && (
                        <div className="flex justify-start fade-in">
                            <div className="bg-white card-shadow border border-navy/5 rounded-2xl rounded-bl-md px-5 py-4">
                                <div className="flex gap-1.5">
                                    <span className="w-2 h-2 bg-navy/20 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                    <span className="w-2 h-2 bg-navy/20 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                    <span className="w-2 h-2 bg-navy/20 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                </div>
                            </div>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>
            </div>

            {/* Word popup */}
            {wordPopup && (
                <div
                    className="fixed z-50 bg-navy text-cream px-4 py-2 rounded-xl text-sm shadow-xl fade-in pointer-events-none"
                    style={{ left: wordPopup.x, top: wordPopup.y, transform: 'translate(-50%, -100%)' }}
                >
                    <span className="font-jp">{wordPopup.word}</span>
                    <span className="text-cream/60 ml-2">(click to look up)</span>
                </div>
            )}

            {/* API Key prompt */}
            {showApiKeyInput && (
                <div className="fixed inset-0 bg-navy/50 backdrop-blur-sm z-50 flex items-center justify-center fade-in">
                    <div className="bg-cream rounded-2xl p-6 max-w-md w-full mx-4 card-shadow">
                        <h3 className="font-bold text-navy text-lg mb-3">🔑 API Key Required</h3>
                        <p className="text-navy/50 text-sm mb-4">Please enter your Anthropic API key to chat with Hana.</p>
                        <input
                            type="password"
                            value={apiKey}
                            onChange={(e) => saveApiKey(e.target.value)}
                            placeholder="sk-ant-..."
                            className="w-full px-4 py-3 border border-navy/15 rounded-xl text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-accent/20"
                            autoFocus
                        />
                        <div className="flex gap-2">
                            <button
                                onClick={() => setShowApiKeyInput(false)}
                                className="flex-1 py-2.5 bg-navy/5 text-navy rounded-xl font-medium text-sm"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => { setShowApiKeyInput(false); sendMessage(); }}
                                className="flex-1 py-2.5 bg-navy text-cream rounded-xl font-medium text-sm"
                            >
                                Save & Send
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Input */}
            <div className="bg-white/80 backdrop-blur-md border-t border-navy/8 px-4 py-4">
                <div className="max-w-4xl mx-auto flex gap-3">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
                        placeholder="Type in Japanese or English..."
                        className="flex-1 px-5 py-3.5 bg-paper border border-navy/10 rounded-xl text-sm font-jp focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                        disabled={isLoading}
                    />
                    <button
                        onClick={sendMessage}
                        disabled={!input.trim() || isLoading}
                        className="px-6 py-3.5 bg-accent text-white rounded-xl font-semibold text-sm disabled:opacity-30 disabled:cursor-not-allowed hover:bg-accent-light transition-all shadow-lg shadow-accent/20"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}
