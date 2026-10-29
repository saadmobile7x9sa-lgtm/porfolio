import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ darkMode, onOpenContact }) => {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatted in Paris / CET
      const timeStr = now.toLocaleTimeString('en-GB', {
        timeZone: 'Europe/Paris',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setLocalTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { label: 'Email', href: 'mailto:businesswithmoeed@gmail.com', desc: 'businesswithmoeed@gmail.com' },
    { label: 'Behance', href: 'https://behance.net', desc: 'Case Studies' },
    { label: 'Dribbble', href: 'https://dribbble.com', desc: 'Visual Shots' },
    { label: 'Instagram', href: 'https://instagram.com', desc: 'Studio Log' },
    { label: 'LinkedIn', href: 'https://linkedin.com', desc: 'Professional' },
  ];

  return (
    <footer className="pt-20 pb-12 bg-[#121214] text-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top Footer Strip: Quick Links & Time */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-16 border-b border-white/10 text-xs font-mono">
          {/* Col 1: Identity & Time */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[#FF3B1D] font-bold uppercase tracking-widest block">
              ABDULMOEED STUDIO
            </span>
            <p className="text-gray-400 text-sm font-sans max-w-xs leading-normal">
              Visual identity, packaging architecture, and editorial typography crafted with mathematical discipline.
            </p>
            <div className="pt-2 text-gray-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF3B1D]" />
              <span>PARIS, FR: {localTime || '18:55:22'} (CET)</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-gray-400 uppercase tracking-widest block mb-3">
              Site Index
            </span>
            <div className="grid grid-cols-2 gap-2 text-sm font-sans">
              <a href="#work" className="text-gray-300 hover:text-[#FF3B1D] transition-colors">
                Selected Work
              </a>
              <a href="#case-studies" className="text-gray-300 hover:text-[#FF3B1D] transition-colors">
                Case Studies
              </a>
              <a href="#services" className="text-gray-300 hover:text-[#FF3B1D] transition-colors">
                Services
              </a>
              <a href="#about" className="text-gray-300 hover:text-[#FF3B1D] transition-colors">
                About
              </a>
              <a href="#skills" className="text-gray-300 hover:text-[#FF3B1D] transition-colors">
                Skills & Arsenal
              </a>
              <a href="#contact" className="text-gray-300 hover:text-[#FF3B1D] transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Col 3: Social Portals */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-gray-400 uppercase tracking-widest block mb-3">
              Connect & Portals
            </span>
            <div className="flex flex-col gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between text-sm text-gray-300 hover:text-[#FF3B1D] transition-colors py-1 group border-b border-white/5"
                >
                  <span className="font-sans font-medium">{s.label}</span>
                  <div className="flex items-center gap-1 text-xs text-gray-500 font-mono group-hover:text-[#FF3B1D]">
                    <span>{s.desc}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Oversized Signature Typography */}
        <div className="pt-16 pb-12 select-none">
          <h2 className="font-display text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter text-[#2A2A30] hover:text-[#FF3B1D] transition-colors duration-500 text-center leading-none">
            ABDULMOEED
          </h2>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            © {new Date().getFullYear()} Abdulmoeed. All rights reserved. Graphic Designer (2+ Years).
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-300 hover:text-[#FF3B1D] transition-colors uppercase tracking-wider py-1 px-3 rounded-full hover:bg-white/5"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
