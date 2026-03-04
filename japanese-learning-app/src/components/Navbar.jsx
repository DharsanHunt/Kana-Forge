import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const navLinks = [
    { to: '/lessons', label: 'Lessons' },
    { to: '/writing', label: 'Writing' },
    { to: '/vocabulary', label: 'Vocabulary' },
    { to: '/grammar', label: 'Grammar' },
    { to: '/chat', label: 'AI Chat' },
];

export default function Navbar() {
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);

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
                <nav className="hidden md:flex items-center gap-10">
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

                {/* Auth Buttons */}
                <div className="hidden sm:flex items-center gap-6">
                    <Link to="/login" className="text-sm font-medium hover:text-primary transition-colors">Login</Link>
                    <Link
                        to="/get-started"
                        className="bg-primary text-white px-6 py-2 text-sm font-bold rounded hover:bg-primary/90 transition-all active:scale-95 shadow-lg shadow-primary/20"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden p-2 rounded text-neutral-warm/70 hover:text-neutral-warm hover:bg-neutral-warm/5 transition-colors"
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
                <div className="md:hidden border-t border-neutral-warm/5 bg-bg-dark/95 backdrop-blur-md fade-in mt-4">
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
                            <Link to="/login" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm font-medium text-neutral-warm/70 hover:text-primary">Login</Link>
                            <Link to="/get-started" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm font-bold text-white bg-primary rounded text-center">Get Started</Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
