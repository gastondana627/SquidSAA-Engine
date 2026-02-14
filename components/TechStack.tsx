import React from 'react';
import { Database, Code2, Server, Cpu, Globe, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const TechStack: React.FC = () => {
  const techs = [
    { name: 'NASA OSDR', icon: <Globe />, desc: 'Open Science Data Repository' },
    { name: 'Python', icon: <Code2 />, desc: 'Data Processing Core' },
    { name: 'Kaggle Kernels', icon: <Server />, desc: 'Cloud Compute Environment' },
    { name: 'TensorFlow', icon: <Cpu />, desc: 'Deep Learning Models' },
    { name: 'Pandas', icon: <Database />, desc: 'Telemetry Analysis' },
    { name: 'Plotly', icon: <Share2 />, desc: 'Interactive Visualization' },
  ];

  return (
    <div className="py-24 bg-space-950 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-kaggle/5 blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Mission Hardware <br/>& Software</h2>
            <p className="text-cosmic-dim text-lg">
              Powered by open science and community-driven computation. The stack is designed for 
              reproducibility and scale in high-latency environments.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
             {/* Tech Grid */}
             {techs.map((tech, idx) => (
               <motion.div
                 key={tech.name}
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ delay: idx * 0.1, duration: 0.5 }}
                 className="p-4 border border-white/5 rounded-lg bg-space-900/40 hover:bg-space-800/60 transition-colors flex items-start space-x-3"
               >
                 <div className="text-kaggle p-2 bg-kaggle/10 rounded-md">
                    {tech.icon}
                 </div>
                 <div>
                    <h4 className="font-bold text-white text-sm">{tech.name}</h4>
                    <p className="text-xs text-cosmic-dim mt-1">{tech.desc}</p>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};