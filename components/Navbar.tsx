import React from 'react';
import { Radio, Database, Activity, Terminal, Users } from 'lucide-react';

interface NavbarProps {
  scrollY: number;
}

export const Navbar: React.FC<NavbarProps> = ({ scrollY }) => {
  const isScrolled = scrollY > 50;

  const navLinks = [
    { name: 'Mission', href: '#hero', icon: <Radio size={16} /> },
    { name: 'Anomaly', href: '#problem', icon: <Activity size={16} /> },
    { name: 'Systems', href: '#tech', icon: <Terminal size={16} /> },
    { name: 'Lab', href: '#lab', icon: <Database size={16} /> },
    { name: 'Community', href: '#community', icon: <Users size={16} /> },
  ];

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-300 ease-in-out
        border-b 
        ${isScrolled 
          ? 'bg-space-950/80 backdrop-blur-lg border-white/10 py-3' 
          : 'bg-transparent border-transparent py-6'}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-full border border-kaggle/50 flex items-center justify-center bg-kaggle/10 group-hover:bg-kaggle/20 transition-colors">
            <span className="text-kaggle font-mono font-bold text-xs">SQ</span>
          </div>
          <span className="font-bold text-lg tracking-wider text-cosmic group-hover:text-white transition-colors">
            PROJECT <span className="text-kaggle">SQUID</span>SAA
          </span>
        </div>

        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="flex items-center space-x-2 text-sm font-mono text-cosmic-dim hover:text-kaggle transition-colors duration-200"
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </a>
            </li>
          ))}
        </ul>

        <button className="md:hidden text-cosmic hover:text-kaggle" aria-label="Toggle Navigation Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};