import { Link } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';

const features = [
    { icon: '📚', title: 'Structured Lessons', desc: 'JLPT-organized lessons from N5 to N1 with clear explanations and examples.', link: '/lessons' },
    { icon: '✍️', title: 'Writing Systems', desc: 'Master Hiragana, Katakana, and Kanji with interactive character grids.', link: '/writing' },
    { icon: '📝', title: 'Vocabulary Builder', desc: 'Learn words by topic with example sentences. Save favorites to your personal list.', link: '/vocabulary' },
    { icon: '📖', title: 'Grammar Library', desc: 'Searchable grammar points with structures, examples, and comparison guides.', link: '/grammar' },
    { icon: '❓', title: 'Practice Quizzes', desc: 'Test your knowledge with multiple choice and fill-in-the-blank questions.', link: '/quiz' },
    { icon: '🤖', title: 'AI Conversation Coach', desc: 'Practice speaking with Hana, your patient AI Japanese tutor powered by Claude.', link: '/chat' },
];

const jlptLevels = [
    { level: 'N5', label: 'Beginner', desc: 'Basic greetings, hiragana, simple grammar', color: 'bg-bamboo/15 text-bamboo border-bamboo/20' },
    { level: 'N4', label: 'Elementary', desc: 'Daily conversations, te-form, potential', color: 'bg-blue-500/10 text-blue-700 border-blue-500/20' },
    { level: 'N3', label: 'Intermediate', desc: 'Complex grammar, reading comprehension', color: 'bg-gold/20 text-amber-800 border-gold/30' },
    { level: 'N2', label: 'Upper-Intermediate', desc: 'Business Japanese, keigo, nuance', color: 'bg-accent/10 text-accent border-accent/20' },
    { level: 'N1', label: 'Advanced', desc: 'Classical expressions, literature, formal writing', color: 'bg-navy/10 text-navy border-navy/20' },
];

export default function HomePage() {
    const { progress } = useProgress();
    const hasStarted = progress.completedLessons.length > 0;

    return (
        <div className="fade-in">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cream via-sakura-light/20 to-cream"></div>
                <div className="absolute top-20 right-10 text-8xl opacity-5 font-jp select-none hidden md:block">日本語</div>
                <div className="absolute bottom-10 left-10 text-6xl opacity-5 font-jp select-none hidden md:block">学ぶ</div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-navy/5 rounded-full px-4 py-1.5 mb-6">
                            <span className="w-2 h-2 bg-bamboo rounded-full animate-pulse"></span>
                            <span className="text-sm text-navy/60 font-medium">Learn at your own pace — no pressure</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-navy leading-tight mb-6">
                            Your calm path to
                            <br />
                            <span className="text-gradient-accent">learning Japanese</span>
                        </h1>

                        <p className="text-lg md:text-xl text-navy/60 leading-relaxed mb-8 max-w-2xl">
                            Structured lessons, AI conversation practice, and personal progress tracking.
                            No leaderboards, no gamification — just genuine, focused learning.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {hasStarted ? (
                                <Link
                                    to="/lessons"
                                    className="inline-flex items-center gap-2 bg-navy text-cream px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-navy/20 hover:shadow-xl hover:shadow-navy/30 hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    Continue Learning
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        to="/lessons?level=N5"
                                        id="cta-beginner"
                                        className="inline-flex items-center gap-2 bg-navy text-cream px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-navy/20 hover:shadow-xl hover:shadow-navy/30 hover:-translate-y-0.5 transition-all duration-300"
                                    >
                                        I&apos;m a Beginner
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                                    </Link>
                                    <Link
                                        to="/lessons"
                                        id="cta-experienced"
                                        className="inline-flex items-center gap-2 bg-cream border-2 border-navy/15 text-navy px-8 py-4 rounded-xl font-semibold text-lg hover:border-navy/30 hover:bg-navy/5 hover:-translate-y-0.5 transition-all duration-300"
                                    >
                                        I know some Japanese
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Everything you need to learn Japanese</h2>
                    <p className="text-navy/50 text-lg max-w-2xl mx-auto">A comprehensive toolkit designed for genuine learning, from your first hiragana to fluent conversation.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, i) => (
                        <Link
                            key={i}
                            to={feature.link}
                            className="group bg-white rounded-2xl p-6 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 border border-navy/5"
                            style={{ animationDelay: `${i * 100}ms` }}
                        >
                            <span className="text-3xl mb-4 block">{feature.icon}</span>
                            <h3 className="font-bold text-navy text-lg mb-2 group-hover:text-accent transition-colors">{feature.title}</h3>
                            <p className="text-navy/50 text-sm leading-relaxed">{feature.desc}</p>
                        </Link>
                    ))}
                </div>
            </section>

            {/* JLPT Levels */}
            <section className="bg-white/50 border-y border-navy/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Choose your level</h2>
                        <p className="text-navy/50 text-lg max-w-2xl mx-auto">Content organized by JLPT levels — start where you are and progress at your own pace.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {jlptLevels.map((lvl) => (
                            <Link
                                key={lvl.level}
                                to={`/lessons?level=${lvl.level}`}
                                className={`group rounded-2xl p-5 border-2 ${lvl.color} hover:-translate-y-1 transition-all duration-300`}
                            >
                                <div className="text-2xl font-bold mb-1">{lvl.level}</div>
                                <div className="font-semibold text-sm mb-2">{lvl.label}</div>
                                <div className="text-xs opacity-70">{lvl.desc}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <div className="font-jp text-5xl text-navy/10 mb-6">頑張って！</div>
                <h2 className="text-3xl font-bold text-navy mb-4">Ready to start?</h2>
                <p className="text-navy/50 text-lg mb-8 max-w-xl mx-auto">
                    Every expert was once a beginner. Take your first step today.
                </p>
                <Link
                    to="/lessons?level=N5"
                    className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-accent/20 hover:shadow-xl hover:bg-accent-light hover:-translate-y-0.5 transition-all duration-300"
                >
                    Start with N5
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </section>
        </div>
    );
}
