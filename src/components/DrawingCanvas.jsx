import { useRef, useState, useEffect, useCallback } from 'react';

export default function DrawingCanvas({ onCheck, onClear, character, isChecking }) {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [hasStrokes, setHasStrokes] = useState(false);
    const [context, setContext] = useState(null);

    const setupCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const rect = canvas.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;

        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;

        const ctx = canvas.getContext('2d');
        ctx.scale(dpr, dpr);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#F0EDE6';
        setContext(ctx);

        // Draw guide grid
        drawGuide(ctx, rect.width, rect.height);
    }, []);

    useEffect(() => {
        setupCanvas();
        window.addEventListener('resize', setupCanvas);
        return () => window.removeEventListener('resize', setupCanvas);
    }, [setupCanvas]);

    // Reset canvas when character changes
    useEffect(() => {
        clearCanvas();
        // eslint-disable-next-line
    }, [character]);

    const drawGuide = (ctx, w, h) => {
        ctx.save();
        ctx.strokeStyle = 'rgba(240, 237, 230, 0.06)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);

        // Center cross
        ctx.beginPath();
        ctx.moveTo(w / 2, 0);
        ctx.lineTo(w / 2, h);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, h / 2);
        ctx.lineTo(w, h / 2);
        ctx.stroke();

        // Diagonal guides
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(w, h);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(w, 0);
        ctx.lineTo(0, h);
        ctx.stroke();

        ctx.setLineDash([]);
        ctx.restore();
    };

    const getPosition = (e) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();

        if (e.touches) {
            return {
                x: e.touches[0].clientX - rect.left,
                y: e.touches[0].clientY - rect.top,
            };
        }
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
    };

    const startDrawing = (e) => {
        e.preventDefault();
        if (!context) return;
        const pos = getPosition(e);
        context.beginPath();
        context.moveTo(pos.x, pos.y);
        setIsDrawing(true);
        setHasStrokes(true);
    };

    const draw = (e) => {
        e.preventDefault();
        if (!isDrawing || !context) return;
        const pos = getPosition(e);

        context.strokeStyle = '#F0EDE6';
        context.lineWidth = 4;
        context.lineTo(pos.x, pos.y);
        context.stroke();
    };

    const stopDrawing = (e) => {
        if (e) e.preventDefault();
        if (!context) return;
        context.closePath();
        setIsDrawing(false);
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        if (!canvas || !context) return;
        const rect = canvas.getBoundingClientRect();
        context.clearRect(0, 0, rect.width, rect.height);
        drawGuide(context, rect.width, rect.height);
        setHasStrokes(false);
        if (onClear) onClear();
    };

    const getCanvasImage = () => {
        const canvas = canvasRef.current;
        if (!canvas) return null;
        return canvas.toDataURL('image/png');
    };

    const handleCheck = () => {
        if (!hasStrokes) return;
        const imageData = getCanvasImage();
        if (onCheck) onCheck(imageData);
    };

    return (
        <div className="space-y-3">
            <div
                className="relative w-full aspect-square bg-bg-elevated border-2 border-neutral-warm/10 rounded-lg overflow-hidden cursor-crosshair"
                style={{ touchAction: 'none' }}
            >
                {/* Ghost character guide */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                    <span className="font-jp text-[120px] text-neutral-warm/[0.06]">{character}</span>
                </div>

                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full"
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={stopDrawing}
                />

                {/* Stroke indicator */}
                {isDrawing && (
                    <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                )}
            </div>

            <div className="flex gap-2">
                <button
                    onClick={clearCanvas}
                    className="flex-1 py-2.5 bg-bg-elevated border border-neutral-warm/10 rounded text-sm text-neutral-warm/50 hover:text-neutral-warm hover:border-neutral-warm/20 transition-colors"
                >
                    Clear
                </button>
                <button
                    onClick={handleCheck}
                    disabled={!hasStrokes || isChecking}
                    className="flex-1 py-2.5 bg-primary text-white rounded text-sm font-bold hover:bg-primary-light transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {isChecking ? (
                        <>
                            <span className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            Checking...
                        </>
                    ) : (
                        'Check with AI'
                    )}
                </button>
            </div>
        </div>
    );
}
