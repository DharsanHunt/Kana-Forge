import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Store a simple auth flag in localStorage for demo
        localStorage.setItem('kana-forge-user', JSON.stringify({
            email,
            name: isSignUp ? name : email.split('@')[0],
            loggedIn: true,
        }));
        navigate('/');
    };

    return (
        <div className="fade-in min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-16">
            {/* Background kanji */}
            <div className="fixed inset-0 flex items-end justify-end pointer-events-none select-none overflow-hidden">
                <span className="text-[40vh] font-serif text-neutral-warm opacity-[0.02] translate-x-20 translate-y-20">鍛</span>
            </div>

            <div className="w-full max-w-md relative z-10">
                <div className="bg-bg-card border border-neutral-warm/5 rounded-xl p-8 md:p-10 shadow-2xl">
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-neutral-warm mb-2">
                        {isSignUp ? 'Join the Forge' : 'Welcome Back'}
                    </h1>
                    <p className="text-neutral-warm/50 text-sm mb-8">
                        {isSignUp ? 'Create your account to begin forging mastery.' : 'Enter the forge to continue your journey.'}
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {isSignUp && (
                            <div>
                                <label className="block text-xs font-bold text-neutral-warm/60 tracking-widest uppercase mb-2">Full Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Daishi Tanaka"
                                    className="w-full px-4 py-3.5 bg-bg-elevated border border-neutral-warm/10 rounded text-neutral-warm text-sm placeholder:text-neutral-warm/25 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                                    required
                                />
                            </div>
                        )}

                        <div>
                            <label className="block text-xs font-bold text-neutral-warm/60 tracking-widest uppercase mb-2">Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="daishi@kanaforge.jp"
                                className="w-full px-4 py-3.5 bg-bg-elevated border border-neutral-warm/10 rounded text-neutral-warm text-sm placeholder:text-neutral-warm/25 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                                required
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-xs font-bold text-neutral-warm/60 tracking-widest uppercase">Password</label>
                                {!isSignUp && (
                                    <button type="button" className="text-xs text-neutral-warm/40 uppercase tracking-wider hover:text-primary transition-colors">
                                        Recover Access
                                    </button>
                                )}
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-3.5 bg-bg-elevated border border-neutral-warm/10 rounded text-neutral-warm text-sm placeholder:text-neutral-warm/25 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors pr-12"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-warm/30 hover:text-neutral-warm/60 transition-colors"
                                >
                                    {showPassword ? (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            id="login-submit-btn"
                            className="w-full bg-primary text-white py-4 rounded text-sm font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:bg-primary-light hover:shadow-primary/30 transition-all active:scale-[0.98] mt-2"
                        >
                            {isSignUp ? 'Create Account' : 'Enter the Forge'}
                        </button>
                    </form>

                    <p className="text-center text-sm text-neutral-warm/40 mt-6">
                        {isSignUp ? 'Already have an account? ' : 'New apprentice? '}
                        <button
                            onClick={() => setIsSignUp(!isSignUp)}
                            className="text-neutral-warm font-medium underline underline-offset-4 hover:text-primary transition-colors"
                        >
                            {isSignUp ? 'Sign In' : 'Join the Forge'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}
