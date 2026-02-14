import React, { useState, useEffect } from 'react';
import { ShieldCheck, Activity, Radio, Database } from 'lucide-react';

export const Audit: React.FC = () => {
  const [radiationLevel, setRadiationLevel] = useState(14.2);
  const [packetLoss, setPacketLoss] = useState(0.001);

  useEffect(() => {
    const interval = setInterval(() => {
      setRadiationLevel(prev => +(prev + (Math.random() - 0.5)).toFixed(2));
      setPacketLoss(prev => Math.max(0, +(prev + (Math.random() * 0.0002 - 0.0001)).toFixed(5)));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-space-950/90 backdrop-blur-md border-t border-white/10 text-xs font-mono py-2 hidden md:block">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-cosmic-dim">
        
        <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 text-kaggle">
                <ShieldCheck size={14} />
                <span className="tracking-wider">HANDSHAKE INTEGRITY: 100%</span>
            </div>
            
            <div className="flex items-center space-x-2">
                <Radio size={14} className={radiationLevel > 15 ? "text-red-500 animate-pulse" : "text-green-500"} />
                <span>RAD_FLUX: {radiationLevel} μGy/h</span>
            </div>
            
             <div className="flex items-center space-x-2">
                <Activity size={14} />
                <span>SENSOR_DRIFT: <span className="text-yellow-500">NOMINAL</span></span>
            </div>
        </div>

        <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
                <Database size={14} />
                <span>PACKET_LOSS: {packetLoss}%</span>
            </div>
            <div>
                <span className="opacity-50">SQUIDSAA_V.1.0.4_BETA</span>
            </div>
        </div>
        
      </div>
    </div>
  );
};