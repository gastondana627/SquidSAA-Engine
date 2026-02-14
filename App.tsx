import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { IntegrityMeter } from './components/IntegrityMeter';
import { TechStack } from './components/TechStack';
import { Lab } from './components/Lab';
import { CommunityHub } from './components/CommunityHub';
import { Audit } from './components/Audit';

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-space-950 text-cosmic font-sans selection:bg-kaggle selection:text-space-950 relative">
      <div className="fixed inset-0 pointer-events-none z-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      
      <Navbar scrollY={scrollY} />
      
      <main className="relative z-10 flex flex-col gap-0">
        <section id="hero">
          <Hero />
        </section>
        
        <section id="problem">
          <Problem />
        </section>

        <section id="telemetry" className="py-12 bg-space-900/30 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <IntegrityMeter initialDrift={0.15} />
            </div>
        </section>
        
        <section id="tech">
          <TechStack />
        </section>
        
        <section id="lab">
          <Lab />
        </section>

        <section id="community">
          <CommunityHub />
        </section>
      </main>

      <Audit />
    </div>
  );
}