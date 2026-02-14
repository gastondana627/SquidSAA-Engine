import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', delay = 0, hoverEffect = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={hoverEffect ? { scale: 1.02, boxShadow: "0 0 20px rgba(32, 190, 255, 0.15)" } : {}}
      className={`
        relative overflow-hidden
        bg-space-900/40 backdrop-blur-xl 
        border border-white/10 
        shadow-xl rounded-xl p-6 
        transition-colors duration-300
        hover:border-kaggle/30
        group
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-kaggle/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      {children}
    </motion.div>
  );
};