import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const levels = [
    { id: 'N5', label: 'N5', sublabel: 'Beginner', color: '#2ecc71', icon: '🌱' },
    { id: 'N4', label: 'N4', sublabel: 'Elementary', color: '#3498db', icon: '💧' },
    { id: 'N3', label: 'N3', sublabel: 'Intermediate', color: '#f1c40f', icon: '🔥' },
    { id: 'N2', label: 'N2', sublabel: 'Pre-Advanced', color: '#e63746', icon: '🛡️' },
    { id: 'N1', label: 'N1', sublabel: 'Advanced', color: '#F0EDE6', icon: '⚔️' },
];

export default function GetStartedPage() {
    const navigate = useNavigate();
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [step, setStep] = useState(1);

    const handleContinue = () => {
        if (step === 1 && selectedLevel) {
            localStorage.setItem('kana-forge-level', selectedLevel);
            setStep(2);
        } else if (step === 2) {
            navigate('/lessons');
        }
    };

    return (
        <div className="fade-in min-h-[calc(100vh-80px)] flex flex-col px-6 lg:px-20 py-16">
            <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col">
                {/* Close button */}
                <div className="flex justify-end mb-8">
                    <button onClick={() => navigate('/')} className="text-neutral-warm/40 hover:text-neutral-warm transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {step === 1 && (
                    <div className="fade-in-up flex-1 flex flex-col">
                        <h1 className="text-5xl md:text-7xl font-serif font-bold gold-gradient-text mb-6">Choose Your Path</h1>
                        <p className="text-neutral-warm/50 text-lg max-w-lg mb-12 font-light">
                            Every master was once a beginner. Select the JLPT level that matches your current expertise to begin your journey.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
                            {levels.map((level) => (
                                <button
                                    key={level.id}
                                    onClick={() => setSelectedLevel(level.id)}
                                    className={`relative bg-bg-card p-6 md:p-8 text-left transition-all duration-300 group ${selectedLevel === level.id
                                            ? 'border-2 scale-[1.02]'
                                            : 'border border-neutral-warm/5 hover:border-neutral-warm/15'
                                        }`}
                                    style={{
                                        borderColor: selectedLevel === level.id ? level.color : undefined,
                                        borderBottomWidth: '4px',
                                        borderBottomColor: level.color,
                                    }}
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: level.color }}>Level</span>
                                        <span className="text-lg">{level.icon}</span>
                                    </div>
                                    <div className="text-3xl md:text-4xl font-bold text-neutral-warm mb-1">{level.label}</div>
                                    <div className="text-sm text-neutral-warm/40">{level.sublabel}</div>
                                </button>
                            ))}
                        </div>

                        <div className="mt-auto flex flex-col items-center gap-4">
                            <button
                                onClick={handleContinue}
                                disabled={!selectedLevel}
                                className="bg-primary text-white px-12 py-4 text-base font-bold rounded shadow-lg shadow-primary/20 hover:bg-primary-light transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:shadow-none flex items-center gap-2"
                            >
                                Continue to Path <span>→</span>
                            </button>
                            <span className="text-primary/50 text-sm">Step {step} of 2: Level Identification</span>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="fade-in-up flex-1 flex flex-col items-center justify-center text-center">
                        <div className="text-6xl mb-6">⚔️</div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold gold-gradient-text mb-4">Your Forge Awaits</h1>
                        <p className="text-neutral-warm/50 text-lg max-w-md mb-4 font-light">
                            You&apos;ve selected <span className="text-primary font-semibold">{selectedLevel}</span>. Your curriculum has been prepared.
                        </p>
                        <p className="text-neutral-warm/30 text-sm max-w-md mb-10">
                            Every stroke matters. Every word counts. Begin forging your path to Japanese mastery.
                        </p>

                        <button
                            onClick={handleContinue}
                            className="bg-primary text-white px-12 py-4 text-base font-bold rounded shadow-2xl shadow-primary/40 hover:scale-105 transition-transform"
                        >
                            Enter the Forge
                        </button>
                        <span className="text-primary/50 text-sm mt-4">Step {step} of 2: Begin Journey</span>
                    </div>
                )}
            </div>

            {/* Footer */}
            <div className="max-w-5xl mx-auto w-full mt-16 pt-8 border-t border-neutral-warm/5 flex justify-between text-xs text-neutral-warm/30">
                <p>&copy; 2024 Kana Forge. Forging language mastery.</p>
                <div className="flex gap-6">
                    <span>Privacy</span>
                    <span>Terms</span>
                    <span>Guidelines</span>
                </div>
            </div>
        </div>
    );
}
