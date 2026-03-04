import { Link } from 'react-router-dom';

const features = [
    { kanji: '学', title: 'Lessons (Gaku)', desc: 'Structured pedagogical paths designed for deep cognitive retention and natural progression.', to: '/lessons' },
    { kanji: '書', title: 'Writing (Sho)', desc: 'Kanji mastery through stroke order precision and historical context for every radical.', to: '/writing' },
    { kanji: '語', title: 'Vocabulary (Go)', desc: 'A core lexicon curated for modern daily life and classical literary appreciation.', to: '/vocabulary' },
    { kanji: '文', title: 'Grammar (Bun)', desc: 'Deconstructing natural syntax to help you move beyond textbook patterns to fluid expression.', to: '/grammar' },
    { kanji: '問', title: 'Quiz (Mon)', desc: 'Frequent knowledge checks and spaced repetition algorithms to solidify your foundation.', to: '/quiz' },
    { kanji: '話', title: 'AI Chat (Wa)', desc: 'Real-time conversational practice with a sensitive AI partner trained in polite Keigo and casual dialogue.', to: '/chat' },
];

const jlptLevels = [
    { level: 'N5', kanji: '基礎', desc: 'The basics. Hiragana, Katakana, and essential survival phrases.', color: '#2ecc71' },
    { level: 'N4', kanji: '日常', desc: 'Daily life competency. Understanding simple topics and grammar.', color: '#3498db' },
    { level: 'N3', kanji: '中級', desc: 'The bridge to fluency. Managing more abstract concepts and speed.', color: '#f1c40f' },
    { level: 'N2', kanji: '上級', desc: 'Professional proficiency. Understanding business and complex media.', color: '#e63746' },
    { level: 'N1', kanji: '精通', desc: 'Mastery. Near-native comprehension of nuanced literary and technical text.', color: '#F0EDE6' },
];

export default function HomePage() {
    return (
        <div className="fade-in">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center px-6 lg:px-20 overflow-hidden">
                {/* Background Large Kanji */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                    <span className="text-[60vh] font-serif text-neutral-warm opacity-[0.03]">語</span>
                </div>

                <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
                    <div className="relative pl-8 md:pl-12 vertical-red-line z-20">
                        <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">Japanese Mastery Redefined</h2>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight gold-gradient-text mb-8">
                            Your calm path to learning Japanese
                        </h1>
                        <p className="text-lg md:text-xl text-neutral-warm/60 max-w-lg mb-10 leading-relaxed font-light">
                            Mastering Japanese with precision and elegance. Experience an editorial approach to language acquisition designed for the focused mind.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/get-started"
                                className="bg-primary text-white px-10 py-4 text-base font-bold rounded shadow-[0_0_20px_rgba(255,45,62,0.4)] hover:shadow-[0_0_30px_rgba(255,45,62,0.6)] hover:-translate-y-0.5 transition-all text-center"
                            >
                                Begin Your Journey
                            </Link>
                            <Link
                                to="/lessons"
                                className="border border-neutral-warm/20 text-neutral-warm px-10 py-4 text-base font-bold rounded hover:bg-neutral-warm/5 transition-all text-center"
                            >
                                View Curriculum
                            </Link>
                        </div>
                    </div>

                    <div className="hidden lg:block relative z-10">
                        <div className="relative aspect-square max-w-sm ml-auto">
                            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl"></div>
                            <div className="relative z-10 w-full h-full bg-bg-card border border-neutral-warm/10 rounded-xl flex items-center justify-center overflow-hidden">
                                <span className="text-[180px] font-serif text-neutral-warm/10">鍛</span>
                            </div>
                            <div className="absolute -bottom-6 -left-6 z-20 bg-bg-card p-6 border border-primary/20 rounded shadow-2xl">
                                <p className="font-serif text-2xl italic">&quot;Forge your legacy.&quot;</p>
                                <p className="text-primary text-xs tracking-widest mt-2 uppercase">Kana Forge Philosophy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Disciplines */}
            <section className="py-24 px-6 lg:px-20 bg-[#0d0d0d]">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h3 className="text-primary font-bold tracking-widest uppercase text-xs mb-2">The Essentials</h3>
                        <h2 className="text-4xl font-serif font-bold text-neutral-warm">Core Disciplines</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((f, i) => (
                            <Link
                                key={i}
                                to={f.to}
                                className="group bg-bg-card border border-neutral-warm/5 p-10 hover:border-primary/40 transition-all hover:-translate-y-1"
                            >
                                <div className="text-6xl font-serif text-neutral-warm/15 group-hover:text-primary/50 transition-colors mb-6">{f.kanji}</div>
                                <h4 className="text-xl font-bold mb-3 text-neutral-warm">{f.title}</h4>
                                <p className="text-neutral-warm/40 font-light leading-relaxed">{f.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* JLPT Section */}
            <section className="py-24 px-6 lg:px-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center max-w-2xl mx-auto">
                        <h3 className="text-primary font-bold tracking-widest uppercase text-xs mb-2">Proficiency Tracks</h3>
                        <h2 className="text-4xl font-serif font-bold text-neutral-warm mb-6">JLPT Standardization</h2>
                        <p className="text-neutral-warm/50 font-light">
                            Whether you&apos;re starting from zero or refining your fluency, our tracks align perfectly with the Japanese Language Proficiency Test standards.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {jlptLevels.map((l) => (
                            <div
                                key={l.level}
                                className="bg-bg-card p-8 border-y border-r border-neutral-warm/5 hover:bg-neutral-warm/[0.02] transition-colors"
                                style={{ borderLeftWidth: '4px', borderLeftColor: l.color }}
                            >
                                <span className="text-xs font-bold tracking-widest" style={{ color: l.color }}>LEVEL {l.level}</span>
                                <h5 className="text-2xl font-serif font-bold mt-2 mb-4">{l.kanji}</h5>
                                <p className="text-sm text-neutral-warm/40 leading-relaxed font-light">{l.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 lg:px-20 border-t border-neutral-warm/5">
                <div className="max-w-4xl mx-auto bg-primary/5 border border-primary/20 p-12 text-center rounded-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <span className="text-8xl font-serif">鍛</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to begin your craftsmanship?</h2>
                    <p className="text-neutral-warm/60 mb-10 max-w-xl mx-auto font-light">
                        Join 50,000+ students carving their own path in the Japanese language. Every stroke matters. Every word counts.
                    </p>
                    <Link
                        to="/get-started"
                        className="inline-block bg-primary text-white px-12 py-5 text-lg font-bold rounded shadow-2xl shadow-primary/40 hover:scale-105 transition-transform"
                    >
                        Start Learning Now
                    </Link>
                </div>
            </section>
        </div>
    );
}
