import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-navy text-cream/70 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-2xl">🗾</span>
                            <span className="font-jp font-bold text-cream text-xl">Kana Forge</span>
                        </div>
                        <p className="text-sm text-cream/50 leading-relaxed">
                            Your calm, focused path to learning Japanese. No pressure, no leaderboards — just genuine learning.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-cream mb-3 text-sm uppercase tracking-wider">Learn</h3>
                        <div className="space-y-2">
                            <Link to="/lessons" className="block text-sm text-cream/50 hover:text-sakura transition-colors">Lessons</Link>
                            <Link to="/writing" className="block text-sm text-cream/50 hover:text-sakura transition-colors">Writing Systems</Link>
                            <Link to="/vocabulary" className="block text-sm text-cream/50 hover:text-sakura transition-colors">Vocabulary</Link>
                            <Link to="/grammar" className="block text-sm text-cream/50 hover:text-sakura transition-colors">Grammar</Link>
                            <Link to="/chat" className="block text-sm text-cream/50 hover:text-sakura transition-colors">AI Conversation</Link>
                        </div>
                    </div>

                    {/* Inspiration */}
                    <div>
                        <h3 className="font-semibold text-cream mb-3 text-sm uppercase tracking-wider">Today&apos;s Thought</h3>
                        <blockquote className="text-sm text-cream/50 italic leading-relaxed border-l-2 border-sakura/30 pl-3">
                            &ldquo;千里の道も一歩から&rdquo;<br />
                            <span className="text-cream/40 not-italic">A journey of a thousand miles begins with a single step.</span>
                        </blockquote>
                    </div>
                </div>

                <div className="border-t border-cream/10 mt-8 pt-6 text-center text-xs text-cream/30">
                    Built with ❤️ for Japanese learners everywhere.
                </div>
            </div>
        </footer>
    );
}
