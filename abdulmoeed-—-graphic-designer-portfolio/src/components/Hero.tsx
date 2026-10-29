import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Award, Camera, Check, Layers, RefreshCw, Sparkles, Upload } from 'lucide-react';
import { ASSETS, STATS } from '../data/portfolioData.ts';

interface HeroProps {
  darkMode: boolean;
  avatarSrc: string;
  onUpdateAvatar: (src: string) => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  darkMode,
  avatarSrc,
  onUpdateAvatar,
  onOpenContact,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showAvatarSwitcher, setShowAvatarSwitcher] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onUpdateAvatar(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      {/* Background Subtle Editorial Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <div className="h-full w-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        {/* Top Micro-Header Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-current/10 text-xs font-mono uppercase tracking-wider text-[#737068] dark:text-[#9C9B97]">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#FF3B1D]" />
            <span className="font-semibold text-[#141414] dark:text-white">AVAILABLE FOR Q1 / Q2 PROJECTS</span>
          </div>
          <div className="flex items-center gap-3">
            <span>GRAPHIC DESIGNER</span>
            <span aria-hidden="true">·</span>
            <span>2+ YEARS EXPERIENCE</span>
            <span aria-hidden="true">·</span>
            <span>BASED IN PARIS / REMOTE</span>
          </div>
        </div>

        {/* Hero Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-10 md:pt-14">
          {/* Left Column: Bold Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="space-y-2">
              <span className="text-xs md:text-sm font-mono tracking-widest text-[#FF3B1D] uppercase font-bold block">
                Visual Identity & Creative Direction
              </span>

              {/* Massive Signature Title with Spring Bounce */}
              <motion.h1
                initial={{ y: -50, opacity: 0, scale: 0.88 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 14,
                  mass: 1,
                }}
                className="font-display text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold tracking-tighter leading-[0.92] text-[#141414] dark:text-white"
              >
                <span className="inline-block bg-[#FF3B1D] text-white px-4 sm:px-6 py-1 sm:py-2 rounded-xl sm:rounded-2xl shadow-lg shadow-[#FF3B1D]/25">
                  ABDUL MOEED
                </span>
              </motion.h1>
            </div>

            <p className="mt-6 md:mt-8 text-base md:text-xl font-normal leading-relaxed text-[#4A4740] dark:text-[#B5B3AC] max-w-xl text-balance">
              Graphic designer sculpting bold visual identities, tactile luxury packaging, and uncompromising editorial typography. Balancing structural Swiss rigor with vivid kinetic rebellion.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="px-6 py-3.5 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase bg-[#141414] text-white hover:bg-[#FF3B1D] dark:bg-white dark:text-[#141414] dark:hover:bg-[#FF3B1D] dark:hover:text-white transition-all duration-300 inline-flex items-center gap-2 shadow-sm"
              >
                <span>Explore Selected Work</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <button
                onClick={onOpenContact}
                className="px-6 py-3.5 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase border border-current/20 hover:border-[#FF3B1D] hover:text-[#FF3B1D] transition-colors inline-flex items-center gap-2"
              >
                <span>Request Project Proposal</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Credentials / Quick Proof Ribbon with Spring Bounce */}
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.92 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 15,
                delay: 0.15,
              }}
              className="mt-12 p-6 sm:p-7 bg-[#FF3B1D] text-white rounded-2xl sm:rounded-3xl shadow-xl shadow-[#FF3B1D]/20 grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {STATS.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-mono tracking-wider text-white/85 uppercase mt-0.5 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Art-Directed 3D Character Avatar Spotlight */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Ambient Spotlight Circle Glow */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#FF3B1D]/10 blur-3xl -z-10" />

            {/* Framed Graphic Container with Entrance Bounce */}
            <motion.div
              initial={{ y: 70, opacity: 0, scale: 0.85 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 280,
                damping: 14,
                delay: 0.25,
              }}
              className="relative w-full max-w-md bg-[#F2EFE8] dark:bg-[#1A1A1E] rounded-3xl p-4 md:p-6 border border-[#E0DCD3] dark:border-[#2C2C32] shadow-2xl transition-transform duration-500 hover:-translate-y-1"
            >
              {/* Top Card Label */}
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-current/10 text-[11px] font-mono uppercase text-[#7A7770] dark:text-[#9C9A93]">
                <div className="flex items-center gap-2">
                  <span>Character Identity</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B1D]" />
                </div>
                <button
                  onClick={() => setShowAvatarSwitcher(!showAvatarSwitcher)}
                  className="text-[#FF3B1D] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  title="Switch or customize character avatar"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Customize</span>
                </button>
              </div>

              {/* Character Switcher Drawer */}
              {showAvatarSwitcher && (
                <div className="mb-3 p-3 rounded-xl bg-white dark:bg-[#121215] border border-[#DDD9CE] dark:border-[#2B2B32] space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-[#75726B] dark:text-[#95938B] font-semibold">Select Avatar Style:</span>
                    <button
                      onClick={() => setShowAvatarSwitcher(false)}
                      className="text-[#75726B] hover:text-[#141414] dark:hover:text-white"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onUpdateAvatar(ASSETS.avatar)}
                      className={`p-1.5 rounded-lg border text-left flex items-center gap-2 ${
                        avatarSrc === ASSETS.avatar
                          ? 'border-[#FF3B1D] bg-[#FF3B1D]/5 font-bold text-[#FF3B1D]'
                          : 'border-current/10 hover:border-current/30'
                      }`}
                    >
                      <img src={ASSETS.avatar} alt="Pngtree Style" className="w-6 h-6 rounded-md object-cover" />
                      <span className="truncate">Pngtree 3D Boy</span>
                    </button>
                    <button
                      onClick={() => onUpdateAvatar(ASSETS.avatarCreative)}
                      className={`p-1.5 rounded-lg border text-left flex items-center gap-2 ${
                        avatarSrc === ASSETS.avatarCreative
                          ? 'border-[#FF3B1D] bg-[#FF3B1D]/5 font-bold text-[#FF3B1D]'
                          : 'border-current/10 hover:border-current/30'
                      }`}
                    >
                      <img src={ASSETS.avatarCreative} alt="Studio Style" className="w-6 h-6 rounded-md object-cover" />
                      <span className="truncate">Creative Deck</span>
                    </button>
                  </div>

                  <div className="pt-2 border-t border-current/10 flex items-center justify-between">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      accept="image/*"
                      className="hidden"
                    />
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full py-1.5 rounded-lg bg-[#141414] text-white dark:bg-white dark:text-[#141414] hover:bg-[#FF3B1D] dark:hover:bg-[#FF3B1D] dark:hover:text-white transition-colors flex items-center justify-center gap-1.5 text-[11px]"
                    >
                      <Upload className="w-3 h-3" />
                      <span>Upload My Custom PNG File</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Character Image */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#FAF9F5] dark:bg-[#121214] flex items-center justify-center border border-[#E8E4DA] dark:border-[#25252A]">
                <img
                  src={avatarSrc}
                  alt="3D Stylized Cute Boy Graphic Designer Avatar for Abdulmoeed"
                  className="w-full h-full object-cover object-top sm:object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Floating Tactile Badges */}
                <div className="absolute top-3 left-3 bg-[#141414]/85 backdrop-blur-md text-white text-[10px] font-mono px-2.5 py-1 rounded-md border border-white/10 uppercase tracking-widest flex items-center gap-1.5 shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B1D]" />
                  <span>3D BOY AVATAR</span>
                </div>

                <div className="absolute bottom-3 right-3 bg-white/90 dark:bg-[#141414]/90 backdrop-blur-md text-[#141414] dark:text-white text-[10px] font-mono px-3 py-1.5 rounded-md border border-current/10 uppercase font-semibold shadow-lg">
                  GRAPHIC DESIGNER
                </div>
              </div>

              {/* Bottom Card Bio Lead */}
              <div className="mt-4 pt-3 flex items-center justify-between">
                <div>
                  <span className="block font-display text-sm font-bold text-[#141414] dark:text-white">
                    Abdulmoeed
                  </span>
                  <span className="text-xs text-[#7A7770] dark:text-[#99978F] font-mono">
                    2+ Years Experience · Visual Systems
                  </span>
                </div>

                <div className="w-8 h-8 rounded-full bg-[#FF3B1D] text-white flex items-center justify-center font-bold text-xs shadow-md shadow-[#FF3B1D]/30">
                  AM
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Kinetic Infinite Marquee Ribbon */}
      <div className="mt-16 md:mt-24 border-y border-current/10 py-3.5 bg-[#F4F1E8] dark:bg-[#161619] overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center text-xs md:text-sm font-mono tracking-widest uppercase font-bold text-[#45433E] dark:text-[#B5B3AC]">
          <span className="mx-6">★ BRAND IDENTITY</span>
          <span className="mx-6 text-[#FF3B1D]">●</span>
          <span className="mx-6">LUXURY PACKAGING</span>
          <span className="mx-6 text-[#FF3B1D]">●</span>
          <span className="mx-6">SWISS EDITORIAL TYPOGRAPHY</span>
          <span className="mx-6 text-[#FF3B1D]">●</span>
          <span className="mx-6">TACTILE PHYSICAL MERCH</span>
          <span className="mx-6 text-[#FF3B1D]">●</span>
          <span className="mx-6">CUSTOM DIE-LINES & PRE-PRESS</span>
          <span className="mx-6 text-[#FF3B1D]">●</span>
          <span className="mx-6">DIGITAL ART DIRECTION</span>
          <span className="mx-6 text-[#FF3B1D]">●</span>
          <span className="mx-6">★ BRAND IDENTITY</span>
          <span className="mx-6 text-[#FF3B1D]">●</span>
          <span className="mx-6">LUXURY PACKAGING</span>
          <span className="mx-6 text-[#FF3B1D]">●</span>
          <span className="mx-6">SWISS EDITORIAL TYPOGRAPHY</span>
          <span className="mx-6 text-[#FF3B1D]">●</span>
          <span className="mx-6">TACTILE PHYSICAL MERCH</span>
          <span className="mx-6 text-[#FF3B1D]">●</span>
          <span className="mx-6">CUSTOM DIE-LINES & PRE-PRESS</span>
          <span className="mx-6 text-[#FF3B1D]">●</span>
          <span className="mx-6">DIGITAL ART DIRECTION</span>
        </div>
      </div>
    </section>
  );
};
