import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const navLinks = [
    { to: '/lessons', label: 'Lessons' },
    { to: '/writing', label: 'Writing' },
    { to: '/vocabulary', label: 'Vocabulary' },
    { to: '/grammar', label: 'Grammar' },
    { to: '/quiz', label: 'Quiz' },
    { to: '/chat', label: 'AI Chat' },
    { to: '/progress', label: 'Progress' },
];

export default function Navbar() {
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const { user, signOut, isAuthenticated } = useAuth();

    const handleSignOut = async () => {
        await signOut();
        setUserMenuOpen(false);
        setMobileOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-bg-dark/80 backdrop-blur-md px-6 lg:px-20 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group" onClick={() => setMobileOpen(false)}>
                    <div className="bg-primary text-white size-10 flex items-center justify-center rounded-sm rotate-3 shadow-[4px_4px_0px_0px_rgba(230,55,70,0.2)]">
                        <span className="text-2xl font-serif font-bold">鍛</span>
                    </div>
                    <h1 className="text-xl font-bold tracking-tight text-neutral-warm">
                        KANA<span className="text-primary font-light">FORGE</span>
                    </h1>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.to ||
                            (link.to !== '/' && location.pathname.startsWith(link.to));
                        return (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`text-sm font-medium transition-colors duration-200 ${isActive ? 'text-primary' : 'text-neutral-warm/70 hover:text-primary'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Auth Controls */}
                <div className="hidden sm:flex items-center gap-5">
                    {isAuthenticated ? (
                        <div className="relative">
                            <button
                                onClick={() => setUserMenuOpen(!userMenuOpen)}
                                className="flex items-center gap-2.5 py-1.5 px-3 rounded-full bg-bg-elevated border border-neutral-warm/10 hover:border-primary/40 transition-colors"
                            >
                                <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold font-serif uppercase">
                                    {user?.displayName ? user.displayName.charAt(0) : user?.email?.charAt(0) || '鍛'}
                                </div>
                                <span className="text-xs text-neutral-warm font-medium max-w-[120px] truncate">
                                    {user?.displayName || user?.email?.split('@')[0]}
                                </span>
                                <span className="text-[10px] text-neutral-warm/40">▼</span>
                            </button>

                            {userMenuOpen && (
                                <div className="absolute right-0 mt-2 w-56 bg-bg-card border border-neutral-warm/10 rounded-xl shadow-2xl py-2 z-50 fade-in">
                                    <div className="px-4 py-2.5 border-b border-neutral-warm/5">
                                        <div className="text-xs font-bold text-neutral-warm truncate">{user?.displayName || 'Apprentice'}</div>
                                        <div className="text-[11px] text-neutral-warm/40 truncate">{user?.email}</div>
                                    </div>
                                    <Link
                                        to="/progress"
                                        onClick={() => setUserMenuOpen(false)}
                                        className="block px-4 py-2 text-xs text-neutral-warm/70 hover:text-primary hover:bg-neutral-warm/5"
                                    >
                                        📊 My Progress & History
                                    </Link>
                                    <button
                                        onClick={handleSignOut}
                                        className="w-full text-left px-4 py-2 text-xs text-error hover:bg-error/10 transition-colors mt-1"
                                    >
                                        🚪 Log Out
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <Link to="/login" className="text-sm font-medium hover:text-primary transition-colors">Login</Link>
                            <Link
                                to="/get-started"
                                className="bg-primary text-white px-6 py-2 text-sm font-bold rounded hover:bg-primary/90 transition-all active:scale-95 shadow-lg shadow-primary/20"
                            >
                                Get Started
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="lg:hidden p-2 rounded text-neutral-warm/70 hover:text-neutral-warm hover:bg-neutral-warm/5 transition-colors"
                    aria-label="Toggle menu"
                    id="mobile-menu-toggle"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {mobileOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Nav */}
            {mobileOpen && (
                <div className="lg:hidden border-t border-neutral-warm/5 bg-bg-dark/95 backdrop-blur-md fade-in mt-4">
                    <div className="px-4 py-3 space-y-1">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.to ||
                                (link.to !== '/' && location.pathname.startsWith(link.to));
                            return (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    onClick={() => setMobileOpen(false)}
                                    className={`block px-4 py-3 rounded text-sm font-medium transition-all duration-200 ${isActive ? 'text-primary bg-primary/5' : 'text-neutral-warm/70 hover:text-neutral-warm hover:bg-neutral-warm/5'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                        <div className="pt-3 border-t border-neutral-warm/5 flex flex-col gap-2">
                            {isAuthenticated ? (
                                <div className="space-y-2">
                                    <div className="px-4 py-2 text-xs text-neutral-warm/40">
                                        Signed in as <strong className="text-neutral-warm">{user?.email}</strong>
                                    </div>
                                    <button
                                        onClick={handleSignOut}
                                        className="w-full block px-4 py-3 text-sm font-bold text-error bg-error/10 rounded text-center"
                                    >
                                        Log Out
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <Link to="/login" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm font-medium text-neutral-warm/70 hover:text-primary">Login</Link>
                                    <Link to="/get-started" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm font-bold text-white bg-primary rounded text-center">Get Started</Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
