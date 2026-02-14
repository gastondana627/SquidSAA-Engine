import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: Particle[] = [];
    const particleCount = width < 768 ? 60 : 150;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 0.5;
        // Kaggle Blue tints
        this.color = Math.random() > 0.8 ? '#20BEFF' : '#E2E8F0';
        this.alpha = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Anomaly Effect (Center Attraction)
        const dx = width / 2 - this.x;
        const dy = height / 2 - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        // Gentle pull towards center to simulate the SAA dip
        if (dist < 300) {
            this.x += dx * 0.0002;
            this.y += dy * 0.0002;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.fill();
      }
    }

    const init = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      
      // Draw connecting lines for "constellation" look near the center
      particles.forEach((p, index) => {
        p.update();
        p.draw();
        
        // Simple connectivity
        for (let j = index + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const distance = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
            if (distance < 100) {
                ctx.beginPath();
                ctx.strokeStyle = '#20BEFF'; // Kaggle Blue
                ctx.globalAlpha = 0.1 - (distance / 100) * 0.1;
                ctx.lineWidth = 0.5;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        }
      });
      requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-60" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-6 inline-block"
        >
            <div className="px-3 py-1 border border-kaggle/30 rounded-full bg-kaggle/10 text-kaggle font-mono text-sm tracking-widest uppercase mb-4">
                System Status: Online
            </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 drop-shadow-2xl"
        >
          Decoding the <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-kaggle to-blue-400">
            South Atlantic Anomaly
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-cosmic-dim max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Project SquidSAA leverages machine learning to filter biological ghosts 
          and sensor drift from radiation data in the Van Allen belts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center gap-4"
        >
            <a href="#lab" className="px-8 py-3 bg-kaggle text-space-950 font-bold rounded hover:bg-white transition-colors shadow-[0_0_20px_rgba(32,190,255,0.4)]">
                Access Lab
            </a>
            <a href="#problem" className="px-8 py-3 border border-cosmic text-cosmic font-bold rounded hover:bg-cosmic/10 transition-colors">
                Learn More
            </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-kaggle/50"
      >
        <ArrowDown size={24} />
      </motion.div>
    </div>
  );
};