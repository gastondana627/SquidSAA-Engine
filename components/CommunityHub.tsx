import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { Users, Calendar, ArrowRight, MessageSquare, Radio } from 'lucide-react';

export const CommunityHub: React.FC = () => {
  const events = [
    { title: 'Weekly Triage: SAA-09 Sector', date: 'DEC 14, 18:00 UTC', status: 'UPCOMING' },
    { title: 'Anomaly Hunting Hackathon', date: 'DEC 24 - 26', status: 'REGISTRATION OPEN' },
    { title: 'Drift Analysis Workshop', date: 'JAN 05, 12:00 UTC', status: 'WAITLIST' },
  ];

  return (
    <div className="py-24 bg-space-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-kaggle/5 via-transparent to-transparent opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-start">
            
            {/* Left Column: Mission Control / CTA */}
            <div className="md:w-5/12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-kaggle/30 bg-kaggle/10 text-kaggle text-xs font-mono mb-6">
                    <Users size={12} />
                    <span>SQUADRON ACCESS</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-6">Community Hub</h2>
                <p className="text-cosmic-dim text-lg mb-8 leading-relaxed">
                    Join the global squadron of data scientists and astrophysicists tracking the anomaly. 
                    Validate datasets, peer-review notebooks, and participate in live audit events.
                </p>
                
                <a href="#lab" className="group relative inline-flex items-center justify-center px-8 py-4 bg-kaggle text-space-950 font-bold rounded overflow-hidden transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(32,190,255,0.5)]" aria-label="Start Audit Sequence">
                    <span className="relative z-10 flex items-center gap-2">
                        START AUDIT SEQUENCE <ArrowRight size={18} />
                    </span>
                    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
                </a>

                <div className="mt-12 grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-space-900/50 border border-white/5">
                        <div className="text-3xl font-mono font-bold text-white mb-1">1,248</div>
                        <div className="text-xs text-cosmic-dim uppercase tracking-wider">Active Agents</div>
                    </div>
                    <div className="p-4 rounded-lg bg-space-900/50 border border-white/5">
                        <div className="text-3xl font-mono font-bold text-kaggle mb-1">89%</div>
                        <div className="text-xs text-cosmic-dim uppercase tracking-wider">Solution Accuracy</div>
                    </div>
                </div>
            </div>

            {/* Right Column: Events Feed */}
            <div className="md:w-7/12 w-full">
                <div className="bg-space-900/30 backdrop-blur-xl border border-white/10 rounded-xl p-1 overflow-hidden">
                    <div className="bg-space-950/50 px-6 py-4 border-b border-white/5 flex justify-between items-center">
                        <h3 className="text-white font-mono font-bold flex items-center gap-2">
                            <Radio size={16} className="text-red-500 animate-pulse" />
                            LIVE_EVENTS_FEED
                        </h3>
                        <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                            <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                        </div>
                    </div>
                    
                    <div className="p-6 space-y-4">
                        {events.map((event, idx) => (
                            <div key={idx} className="group p-4 rounded border border-white/5 bg-space-800/20 hover:bg-space-800/50 hover:border-kaggle/30 transition-all cursor-pointer">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="text-kaggle font-bold text-lg group-hover:text-white transition-colors">{event.title}</div>
                                    <div className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white/10 text-white border border-white/10">
                                        {event.status}
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-cosmic-dim">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar size={14} />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 opacity-50 group-hover:opacity-100 transition-opacity">
                                        <MessageSquare size={14} />
                                        <span>Join Channel</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="bg-space-950/30 px-6 py-3 border-t border-white/5 text-center">
                        <button className="text-xs font-mono text-kaggle hover:text-white transition-colors uppercase tracking-widest">
                            View Full Schedule
                        </button>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};