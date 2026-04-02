import React, { useRef, useEffect, useState } from 'react';
import { Activity, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface IntegrityMeterProps {
  initialDrift?: number;
}

export const IntegrityMeter: React.FC<IntegrityMeterProps> = ({ initialDrift = 0.2 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [drift, setDrift] = useState(initialDrift);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;
    let isVisible = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    const resize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = 300;
      }
    };
    window.addEventListener('resize', resize);
    resize();

    const render = () => {
      if (isVisible) {
        const width = canvas.width;
        const height = canvas.height;

        ctx.clearRect(0, 0, width, height);

        // Draw Grid
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let x = 0; x < width; x += 40) {
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
        }
        for (let y = 0; y < height; y += 40) {
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
        }
        ctx.stroke();

        // Draw Signal
        ctx.beginPath();
        ctx.strokeStyle = drift > 0.5 ? (Math.random() > 0.5 ? '#ff4444' : '#20BEFF') : '#20BEFF'; // Red flicker if critical
        ctx.lineWidth = 2;
        ctx.shadowBlur = 10;
        ctx.shadowColor = drift > 0.5 ? '#ff4444' : '#20BEFF';

        for (let x = 0; x < width; x++) {
          // Base carrier wave
          const frequency = 0.02;
          const amplitude = 50;
          let y = height / 2 + Math.sin(x * frequency - time) * amplitude;

          // Apply Drift Interference
          if (drift > 0.0) {
             // Base noise present in all signals
             y += (Math.random() - 0.5) * (drift * 10);

             // Severe Jitter Threshold
             if (drift > 0.5) {
               const jitter = (Math.random() - 0.5) * (drift * 150);
               // Occasional spikes
               if (Math.random() > 0.95) {
                  y += jitter;
               }
             }
          }

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Draw Overlay Text
        ctx.fillStyle = drift > 0.5 ? '#ff4444' : '#20BEFF';
        ctx.font = '12px "JetBrains Mono"';
        ctx.fillText(`SIGNAL_INTEGRITY: ${Math.max(0, (1 - drift) * 100).toFixed(2)}%`, 20, 30);
        ctx.fillText(`DRIFT_FACTOR: ${drift.toFixed(3)}`, 20, 50);

        time += 0.1;
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [drift]);

  return (
    <div className="rounded-xl border border-white/10 bg-space-950/80 backdrop-blur-sm overflow-hidden relative group">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-kaggle/50 to-transparent opacity-50"></div>
      
      {/* Canvas Display */}
      <div className="relative h-[300px] w-full">
        <canvas ref={canvasRef} className="block" />
        
        {/* Warning Overlay */}
        {drift > 0.5 && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-red-500/10 border border-red-500/50 p-4 rounded backdrop-blur-sm animate-pulse flex items-center gap-3">
                    <AlertTriangle className="text-red-500" />
                    <span className="text-red-500 font-mono font-bold">CRITICAL INTERFERENCE DETECTED</span>
                </div>
            </div>
        )}
      </div>

      {/* Controls */}
      <div className="p-6 border-t border-white/10 bg-space-900/50 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
            <div className={`p-3 rounded-full ${drift > 0.5 ? 'bg-red-500/20 text-red-500' : 'bg-kaggle/20 text-kaggle'}`}>
                <Activity size={24} />
            </div>
            <div>
                <h3 className="text-white font-bold text-lg">Sensor Integrity Monitor</h3>
                <p className="text-cosmic-dim text-sm">Real-time simulation of SAA radiation impact on telemetry.</p>
            </div>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
            <span className="text-xs font-mono text-cosmic-dim whitespace-nowrap">DRIFT FACTOR</span>
            <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.01"
                value={drift}
                onChange={(e) => setDrift(parseFloat(e.target.value))}
                className="w-full md:w-48 h-2 bg-space-800 rounded-lg appearance-none cursor-pointer accent-kaggle hover:accent-white transition-all"
            />
            <span className="text-xs font-mono text-white w-12 text-right">{drift.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};