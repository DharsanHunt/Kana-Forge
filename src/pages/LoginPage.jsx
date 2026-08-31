import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
    const navigate = useNavigate();
    const { signInWithEmail, signUpWithEmail, signInWithGoogle, resetPassword } = useAuth();

    const [isSignUp, setIsSignUp] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [resetEmail, setResetEmail] = useState('');
    const [resetSent, setResetSent] = useState(false);

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            if (isSignUp) {
                await signUpWithEmail(email, password, name);
            } else {
                await signInWithEmail(email, password);
            }
            navigate('/');
        } catch (err) {
            console.error('Authentication error:', err);
            let message = err.message || 'Authentication failed. Please try again.';
            if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
                message = 'Invalid email or password. Please verify your credentials.';
            } else if (err.code === 'auth/email-already-in-use') {
                message = 'An account with this email already exists. Try signing in.';
            } else if (err.code === 'auth/weak-password') {
                message = 'Password should be at least 6 characters.';
            } else if (err.code === 'auth/invalid-email') {
                message = 'Please provide a valid email address.';
            }
            setError(message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setError('');
        setLoading(true);
        try {
            await signInWithGoogle();
            navigate('/');
        } catch (err) {
            console.error('Google Sign-In error:', err);
            if (err.code !== 'auth/popup-closed-by-user') {
                setError(err.message || 'Failed to sign in with Google.');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await resetPassword(resetEmail);
            setResetSent(true);
        } catch (err) {
            console.error('Password reset error:', err);
            setError(err.message || 'Failed to send password reset email.');
        } finally {
            setLoading(false);
        }
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
                    <p className="text-neutral-warm/50 text-sm mb-6">
                        {isSignUp ? 'Create your account to begin forging mastery.' : 'Enter the forge to continue your journey.'}
                    </p>

                    {error && (
                        <div className="mb-6 p-4 rounded-lg bg-error/10 border border-error/20 text-error text-sm fade-in flex items-start gap-3">
                            <span className="text-base leading-none">⚠️</span>
                            <span className="flex-1 leading-snug">{error}</span>
                        </div>
                    )}

                    {/* Google OAuth Button */}
                    <button
                        type="button"
                        onClick={handleGoogleSignIn}
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-3 py-3.5 px-4 bg-bg-elevated border border-neutral-warm/10 rounded text-neutral-warm text-sm font-medium hover:border-neutral-warm/30 hover:bg-neutral-warm/5 transition-all mb-6 disabled:opacity-50"
                    >
                        <svg className="w-4 h-4" viewBox="0 0 24 24">
                            <path
                                fill="#EA4335"
                                d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"
                            />
                            <path
                                fill="#4285F4"
                                d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M5.6 14.8c-.3-.8-.4-1.8-.4-2.8s.1-1.9.4-2.8L1.9 6.3C.7 8.7 0 10.3 0 12s.7 3.3 1.9 5.7l3.7-2.9z"
                            />
                            <path
                                fill="#34A853"
                                d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2-6.4-4.8L1.9 16.4C3.7 20.4 7.5 23 12 23z"
                            />
                        </svg>
                        <span>Continue with Google</span>
                    </button>

                    <div className="relative flex items-center justify-center mb-6">
                        <div className="w-full border-t border-neutral-warm/5"></div>
                        <span className="bg-bg-card px-3 text-xs text-neutral-warm/30 uppercase tracking-widest absolute">or</span>
                    </div>

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
                                    <button
                                        type="button"
                                        onClick={() => { setShowForgotPassword(true); setError(''); setResetSent(false); setResetEmail(email); }}
                                        className="text-xs text-neutral-warm/40 uppercase tracking-wider hover:text-primary transition-colors"
                                    >
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
                            disabled={loading}
                            className="w-full bg-primary text-white py-4 rounded text-sm font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:bg-primary-light hover:shadow-primary/30 transition-all active:scale-[0.98] mt-2 disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            ) : (
                                <span>{isSignUp ? 'Create Account' : 'Enter the Forge'}</span>
                            )}
                        </button>
                    </form>

                    <p className="text-center text-sm text-neutral-warm/40 mt-6">
                        {isSignUp ? 'Already have an account? ' : 'New apprentice? '}
                        <button
                            onClick={() => { setIsSignUp(!isSignUp); setError(''); }}
                            className="text-neutral-warm font-medium underline underline-offset-4 hover:text-primary transition-colors"
                        >
                            {isSignUp ? 'Sign In' : 'Join the Forge'}
                        </button>
                    </p>
                </div>
            </div>

            {/* Forgot Password Modal */}
            {showForgotPassword && (
                <div className="fixed inset-0 bg-bg-dark/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 fade-in">
                    <div className="bg-bg-card border border-neutral-warm/10 rounded-xl p-8 max-w-md w-full shadow-2xl">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-neutral-warm">Recover Access</h3>
                            <button
                                onClick={() => setShowForgotPassword(false)}
                                className="text-neutral-warm/30 hover:text-neutral-warm transition-colors"
                            >
                                ✕
                            </button>
                        </div>
                        <p className="text-neutral-warm/50 text-sm mb-6">
                            Enter your registered email address to receive password recovery instructions.
                        </p>

                        {resetSent ? (
                            <div className="p-4 rounded bg-success/10 border border-success/20 text-success text-sm mb-6">
                                Password reset link has been dispatched to <strong>{resetEmail}</strong>. Please check your inbox.
                            </div>
                        ) : (
                            <form onSubmit={handleResetPassword} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-neutral-warm/60 tracking-widest uppercase mb-2">Email</label>
                                    <input
                                        type="email"
                                        value={resetEmail}
                                        onChange={(e) => setResetEmail(e.target.value)}
                                        placeholder="daishi@kanaforge.jp"
                                        className="w-full px-4 py-3.5 bg-bg-elevated border border-neutral-warm/10 rounded text-neutral-warm text-sm placeholder:text-neutral-warm/25 focus:outline-none focus:border-primary/50"
                                        required
                                        autoFocus
                                    />
                                </div>
                                <div className="flex gap-3 pt-2">
                                    <button
                                        type="button"
                                        onClick={() => setShowForgotPassword(false)}
                                        className="flex-1 py-3 bg-bg-elevated text-neutral-warm/60 rounded text-sm hover:text-neutral-warm"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={loading || !resetEmail.trim()}
                                        className="flex-1 py-3 bg-primary text-white font-bold rounded text-sm hover:bg-primary-light transition-all disabled:opacity-50"
                                    >
                                        {loading ? 'Sending...' : 'Send Link'}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
