import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-bg-dark py-20 px-6 lg:px-20 border-t border-neutral-warm/5 text-neutral-warm/40">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                <div className="max-w-xs">
                    <div className="flex items-center gap-3 text-neutral-warm mb-6">
                        <div className="bg-primary text-white size-8 flex items-center justify-center rounded-sm rotate-3">
                            <span className="text-lg font-serif font-bold">鍛</span>
                        </div>
                        <span className="text-lg font-bold tracking-tighter">KANAFORGE</span>
                    </div>
                    <p className="text-sm font-light leading-relaxed italic">
                        &quot;The quiet study of language is the highest form of self-cultivation.&quot;
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                    <div>
                        <h6 className="text-neutral-warm font-bold text-xs uppercase tracking-widest mb-6">Learning</h6>
                        <ul className="space-y-4 text-sm">
                            <li><Link className="hover:text-primary transition-colors" to="/lessons">Lessons</Link></li>
                            <li><Link className="hover:text-primary transition-colors" to="/writing">Writing</Link></li>
                            <li><Link className="hover:text-primary transition-colors" to="/grammar">Grammar</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-neutral-warm font-bold text-xs uppercase tracking-widest mb-6">Practice</h6>
                        <ul className="space-y-4 text-sm">
                            <li><Link className="hover:text-primary transition-colors" to="/vocabulary">Vocabulary</Link></li>
                            <li><Link className="hover:text-primary transition-colors" to="/quiz">Quiz</Link></li>
                            <li><Link className="hover:text-primary transition-colors" to="/chat">AI Chat</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-neutral-warm font-bold text-xs uppercase tracking-widest mb-6">Account</h6>
                        <ul className="space-y-4 text-sm">
                            <li><Link className="hover:text-primary transition-colors" to="/progress">Progress</Link></li>
                            <li><Link className="hover:text-primary transition-colors" to="/login">Login</Link></li>
                            <li><Link className="hover:text-primary transition-colors" to="/get-started">Get Started</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-neutral-warm/5 flex flex-col md:flex-row justify-between text-xs">
                <p>&copy; 2024 Kana Forge Academy. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <span className="hover:text-primary transition-colors cursor-pointer">Twitter</span>
                    <span className="hover:text-primary transition-colors cursor-pointer">Discord</span>
                    <span className="hover:text-primary transition-colors cursor-pointer">Instagram</span>
                </div>
            </div>
        </footer>
    );
}
