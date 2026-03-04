import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const navLinks = [
    { to: '/', label: 'Home', icon: '🏠' },
    { to: '/lessons', label: 'Lessons', icon: '📚' },
    { to: '/writing', label: 'Writing', icon: '✍️' },
    { to: '/vocabulary', label: 'Vocabulary', icon: '📝' },
    { to: '/grammar', label: 'Grammar', icon: '📖' },
    { to: '/quiz', label: 'Quiz', icon: '❓' },
    { to: '/chat', label: 'AI Chat', icon: '🤖' },
    { to: '/progress', label: 'Progress', icon: '📊' },
];

export default function Navbar() {
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md border-b border-navy/8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group" onClick={() => setMobileOpen(false)}>
                        <span className="text-2xl">🗾</span>
                        <div className="flex flex-col leading-tight">
                            <span className="font-jp font-bold text-navy text-lg tracking-tight group-hover:text-accent transition-colors duration-300">
                                Kana Forge
                            </span>
                            <span className="text-[10px] text-navy/50 font-medium tracking-wider uppercase">
                                かなフォージ
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.to ||
                                (link.to !== '/' && location.pathname.startsWith(link.to));
                            return (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive
                                        ? 'bg-navy text-cream shadow-sm'
                                        : 'text-navy/70 hover:text-navy hover:bg-navy/5'
                                        }`}
                                >
                                    <span className="mr-1.5">{link.icon}</span>
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden p-2 rounded-lg text-navy/70 hover:text-navy hover:bg-navy/5 transition-colors"
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
            </div>

            {/* Mobile Nav */}
            {mobileOpen && (
                <div className="lg:hidden border-t border-navy/8 bg-cream/95 backdrop-blur-md fade-in">
                    <div className="px-4 py-3 space-y-1">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.to ||
                                (link.to !== '/' && location.pathname.startsWith(link.to));
                            return (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    onClick={() => setMobileOpen(false)}
                                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                                        ? 'bg-navy text-cream'
                                        : 'text-navy/70 hover:text-navy hover:bg-navy/5'
                                        }`}
                                >
                                    <span className="mr-2">{link.icon}</span>
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
}
