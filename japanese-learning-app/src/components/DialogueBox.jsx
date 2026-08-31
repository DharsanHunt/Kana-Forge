import { useState } from 'react';
import AudioPlayer from './AudioPlayer';

export default function DialogueBox({ dialogue }) {
    const [showTranslations, setShowTranslations] = useState(true);

    if (!dialogue || !dialogue.lines || dialogue.lines.length === 0) return null;

    const fullDialogueText = dialogue.lines.map(l => `${l.speaker ? l.speaker + ': ' : ''}${l.japanese}`).join('。 ');

    return (
        <div className="bg-bg-card border border-neutral-warm/10 rounded-xl p-6 mb-8 shadow-lg">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-neutral-warm/5">
                <div>
                    <span className="text-primary text-xs font-bold tracking-widest uppercase block mb-1">
                        Conversational Dialogue
                    </span>
                    <h4 className="text-lg font-bold text-neutral-warm">
                        {dialogue.title || 'Practical Dialogue'}
                    </h4>
                </div>
                <div className="flex items-center gap-3">
                    <AudioPlayer text={fullDialogueText} label="Listen to Dialogue" rate={0.85} />
                    <button
                        type="button"
                        onClick={() => setShowTranslations(!showTranslations)}
                        className="text-xs px-3 py-1 rounded bg-bg-elevated border border-neutral-warm/10 text-neutral-warm/50 hover:text-neutral-warm hover:border-neutral-warm/20 transition-all"
                    >
                        {showTranslations ? 'Hide English' : 'Show English'}
                    </button>
                </div>
            </div>

            <div className="space-y-4">
                {dialogue.lines.map((line, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                        <div
                            key={idx}
                            className={`flex gap-3.5 items-start p-3.5 rounded-lg transition-colors ${isEven ? 'bg-bg-elevated/40' : 'bg-transparent'
                                }`}
                        >
                            <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-xs shrink-0 font-serif">
                                {line.speaker ? line.speaker.charAt(0) : '話'}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-xs font-bold text-neutral-warm/70">
                                        {line.speaker || 'Person'}
                                    </span>
                                    <AudioPlayer text={line.japanese} rate={0.85} />
                                </div>
                                <div className="font-jp text-base text-neutral-warm mb-1 leading-relaxed">
                                    {line.japanese}
                                </div>
                                {line.romaji && (
                                    <div className="text-primary/60 text-xs italic mb-1 font-light">
                                        {line.romaji}
                                    </div>
                                )}
                                {showTranslations && line.english && (
                                    <div className="text-neutral-warm/40 text-xs leading-relaxed">
                                        {line.english}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
