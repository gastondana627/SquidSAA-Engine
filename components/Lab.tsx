import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { ExternalLink, Github, FileCode, Terminal } from 'lucide-react';

export const Lab: React.FC = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-space-950 to-space-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
            <span className="text-kaggle font-mono text-xs tracking-[0.3em] uppercase mb-2">Restricted Access</span>
            <h2 className="text-4xl font-bold text-white mb-4">The Lab</h2>
            <p className="text-center text-cosmic-dim max-w-xl">
                Direct access to raw telemetry data, training notebooks, and the open-source codebase. 
                Execute cautiously.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="#" className="group block">
                <GlassCard className="h-full flex flex-col justify-between border-kaggle/20" hoverEffect={true}>
                    <div>
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                                <FileCode size={32} />
                            </div>
                            <ExternalLink size={20} className="text-cosmic-dim group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-kaggle transition-colors">EDA Notebook</h3>
                        <p className="text-cosmic-dim mb-4">
                            Exploratory Data Analysis of the SAA dataset. Visualizing the correlation between altitude and proton flux.
                        </p>
                    </div>
                    <div className="flex items-center space-x-2 text-xs font-mono text-kaggle">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span>RUNNING ON KAGGLE</span>
                    </div>
                </GlassCard>
            </a>

            <a href="#" className="group block">
                <GlassCard className="h-full flex flex-col justify-between border-purple-500/20" hoverEffect={true}>
                    <div>
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                                <Terminal size={32} />
                            </div>
                            <ExternalLink size={20} className="text-cosmic-dim group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Model Training</h3>
                        <p className="text-cosmic-dim mb-4">
                            LSTM Neural Network architecture for predicting radiation peaks based on historical trajectory data.
                        </p>
                    </div>
                    <div className="flex items-center space-x-2 text-xs font-mono text-purple-400">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        <span>PAUSED</span>
                    </div>
                </GlassCard>
            </a>
            
            <a href="#" className="group block md:col-span-2">
                 <GlassCard className="flex flex-col md:flex-row items-center justify-between border-white/10" hoverEffect={true}>
                    <div className="flex items-center space-x-6 mb-4 md:mb-0">
                        <div className="p-4 bg-white/5 rounded-full text-white">
                            <Github size={40} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">GitHub Repository</h3>
                            <p className="text-cosmic-dim text-sm">Contribute to the source code. MIT License.</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="text-right hidden md:block">
                            <div className="text-xs font-mono text-cosmic-dim">LAST COMMIT</div>
                            <div className="text-sm text-white">2 hours ago</div>
                        </div>
                        <div className="px-6 py-2 border border-white/20 rounded hover:bg-white hover:text-black transition-colors font-mono text-sm">
                            git clone
                        </div>
                    </div>
                 </GlassCard>
            </a>
        </div>
      </div>
    </div>
  );
};