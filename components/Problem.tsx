import React from 'react';
import { Ghost, Zap, Compass, AlertTriangle } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

export const Problem: React.FC = () => {
  return (
    <div className="py-24 relative bg-space-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Anomaly Analysis</h2>
          <div className="h-1 w-24 bg-kaggle mx-auto rounded-full"></div>
          <p className="mt-4 text-cosmic-dim max-w-2xl mx-auto">
            Navigating the intersection of biological perception and orbital mechanics. 
            Identifying the signal within the noise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard delay={0.1}>
            <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
              <Ghost size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Biological Ghosts</h3>
            <p className="text-cosmic-dim text-sm leading-relaxed">
              Astronauts report "phosphenes"—flashes of light caused by cosmic rays hitting the retina. 
              These subjective reports often correlate with, but distinctively differ from, electronic sensor data.
            </p>
          </GlassCard>

          <GlassCard delay={0.2}>
            <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4 text-orange-400">
              <Compass size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Sensor Drift</h3>
            <p className="text-cosmic-dim text-sm leading-relaxed">
              Prolonged exposure to the SAA's high-energy proton flux degrades silicon detectors, 
              introducing a gradual bias in telemetry that mimics actual radiation spikes.
            </p>
          </GlassCard>

          <GlassCard delay={0.3}>
            <div className="w-12 h-12 rounded-lg bg-kaggle/20 flex items-center justify-center mb-4 text-kaggle">
              <Zap size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">SAA Radiation</h3>
            <p className="text-cosmic-dim text-sm leading-relaxed">
              The Van Allen belts dip closest to Earth over the South Atlantic. Satellites and the ISS 
              pass through this zone daily, requiring precise mapping to protect sensitive electronics.
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};