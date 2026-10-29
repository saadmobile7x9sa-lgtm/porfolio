import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Selected Work', href: '#work' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Bar adhering to the Top Bar Contract */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? darkMode
              ? 'bg-[#0E0E0F]/90 backdrop-blur-md border-b border-[#222225] py-3.5 shadow-lg shadow-black/20'
              : 'bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#E6E4DD] py-3.5 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
          {/* Zone 1: Brand title, single element, display face, one line */}
          <a
            href="#"
            className={`font-display text-xl md:text-2xl font-extrabold tracking-tight whitespace-nowrap shrink-0 transition-colors ${
              darkMode ? 'text-white hover:text-[#FF3B1D]' : 'text-[#141414] hover:text-[#FF3B1D]'
            }`}
          >
            ABDULMOEED
          </a>

          {/* Zone 2: 4–5 nav links, single-line, clean hover */}
          <nav className="hidden lg:flex items-center gap-7 text-xs tracking-wider uppercase font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`whitespace-nowrap shrink-0 transition-colors duration-200 relative py-1 group ${
                  darkMode ? 'text-[#9C9B97] hover:text-white' : 'text-[#5A5852] hover:text-[#141414]'
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF3B1D] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action (+ subtle theme toggle) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Theme mode switch */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              title={darkMode ? 'Switch to Editorial Paper (Light)' : 'Switch to Noir Gallery (Dark)'}
              aria-label="Toggle theme mode"
              className={`p-2 rounded-full border transition-colors ${
                darkMode
                  ? 'border-[#2D2D32] bg-[#18181B] text-[#E0DFDC] hover:text-[#FF3B1D]'
                  : 'border-[#E0DED5] bg-white text-[#4A4842] hover:text-[#FF3B1D]'
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenContact}
              className="group relative inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-[#FF3B1D] hover:bg-[#E02E12] transition-all duration-200 whitespace-nowrap shrink-0 shadow-md shadow-[#FF3B1D]/20 active:scale-95"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors ${
                darkMode ? 'text-white hover:bg-[#202025]' : 'text-[#141414] hover:bg-[#EAE8E0]'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 z-30 pt-24 px-6 flex flex-col justify-between pb-8 lg:hidden transition-all ${
            darkMode ? 'bg-[#0E0E0F] text-white' : 'bg-[#FAF9F5] text-[#141414]'
          }`}
        >
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase font-mono tracking-widest text-[#88857E]">
              Navigation
            </span>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-2xl font-bold hover:text-[#FF3B1D] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-current/10 flex flex-col gap-4">
            <div className="flex items-center justify-between text-xs font-mono text-[#88857E]">
              <span>PARIS / GLOBAL</span>
              <span>2+ YRS EXPERIENCE</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3.5 rounded-full text-center text-xs font-bold tracking-widest uppercase text-white bg-[#FF3B1D] hover:bg-[#E02E12]"
            >
              Start a Project
            </button>
          </div>
        </div>
      )}
    </>
  );
};
