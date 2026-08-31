import { useState, useEffect, useRef } from 'react';

export default function AudioPlayer({ text, label, rate = 0.9, className = '' }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [supported, setSupported] = useState(true);
    const utteranceRef = useRef(null);

    useEffect(() => {
        if (!('speechSynthesis' in window)) {
            setSupported(false);
        }
    }, []);

    const playAudio = () => {
        if (!supported || !text) return;

        window.speechSynthesis.cancel(); // Stop any active speech

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        utterance.rate = rate;

        // Try to pick a natural Japanese voice if available
        const voices = window.speechSynthesis.getVoices();
        const jaVoice = voices.find(v => v.lang.startsWith('ja') || v.lang === 'ja_JP');
        if (jaVoice) {
            utterance.voice = jaVoice;
        }

        utterance.onstart = () => setIsPlaying(true);
        utterance.onend = () => setIsPlaying(false);
        utterance.onerror = () => setIsPlaying(false);

        utteranceRef.current = utterance;
        window.speechSynthesis.speak(utterance);
    };

    const stopAudio = () => {
        if (supported) {
            window.speechSynthesis.cancel();
            setIsPlaying(false);
        }
    };

    if (!supported) return null;

    return (
        <button
            type="button"
            onClick={isPlaying ? stopAudio : playAudio}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all ${isPlaying
                    ? 'bg-primary text-white shadow-md shadow-primary/30'
                    : 'bg-bg-elevated border border-neutral-warm/10 text-neutral-warm/60 hover:text-primary hover:border-primary/30'
                } ${className}`}
            title="Listen to Japanese pronunciation"
            aria-label="Play audio"
        >
            {isPlaying ? (
                <>
                    <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                    <span>Playing</span>
                </>
            ) : (
                <>
                    <svg className="w-3.5 h-3.5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                    </svg>
                    {label && <span>{label}</span>}
                </>
            )}
        </button>
    );
}
