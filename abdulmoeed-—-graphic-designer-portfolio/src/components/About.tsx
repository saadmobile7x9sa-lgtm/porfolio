import React from 'react';
import { ArrowUpRight, Compass, Eye, Feather, Sparkles } from 'lucide-react';
import { ASSETS } from '../data/portfolioData.ts';

interface AboutProps {
  darkMode: boolean;
  avatarSrc: string;
  onOpenContact: () => void;
}

export const About: React.FC<AboutProps> = ({ darkMode, avatarSrc, onOpenContact }) => {
  return (
    <section id="about" className="py-20 md:py-32 border-b border-current/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-current/10 text-xs font-mono uppercase tracking-widest text-[#737068] dark:text-[#9C9B97]">
          <span>01 / ABOUT THE DESIGNER</span>
          <span className="text-[#FF3B1D] font-bold">ABDULMOEED // PROFILE</span>
        </div>

        {/* Big Editorial Manifesto Statement */}
        <div className="pt-12 md:pt-16 max-w-4xl">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF3B1D] font-bold">
            Philosophy & Craft
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-[#FF3810]">
            "Design isn't just how a label looks on a shelf—it's the tactile gravity that forces someone to pick it up, pause, and remember."
          </h2>
        </div>

        {/* Grid: Story + Character Focus + Philosophy Cards */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Biography Narrative */}
          <div className="lg:col-span-7 space-y-6 text-base md:text-lg text-[#47443E] dark:text-[#B5B3AB] leading-relaxed">
            <p>
              I am <strong className="text-[#FF3810] font-semibold">Abdulmoeed</strong>, a graphic designer and visual identity specialist with over two years of dedicated studio practice. My work sits at the intersection of Swiss modernist typography, experimental packaging architecture, and strategic brand systems.
            </p>
            <p>
              Over the past 2+ years, I have collaborated with venture-backed robotics companies in Silicon Valley, artisanal apothecary labs in Copenhagen, and cultural institutions in Zürich. I believe in eliminating visual noise so that core concepts strike with maximum velocity.
            </p>
            <p>
              Whether engineering a complex packaging die-line with blind debossing or curating an exhibition poster series, my commitment is unwavering: obsessive attention to kerning, tactile substrate selection, and distinctive character that endures long past transient design trends.
            </p>

            {/* Quick Principles */}
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-[#F4F1E8] dark:bg-[#18181C] border border-[#E4E0D6] dark:border-[#2B2B32]">
                <div className="text-[#FF3B1D] mb-3">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-display text-base font-bold text-[#141414] dark:text-white">
                  Mathematical Grid
                </h3>
                <p className="mt-1 text-xs text-[#6E6B63] dark:text-[#9A9890] leading-normal">
                  Rooted in 12-column Swiss discipline to build rock-solid foundations.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F4F1E8] dark:bg-[#18181C] border border-[#E4E0D6] dark:border-[#2B2B32]">
                <div className="text-[#FF3B1D] mb-3">
                  <Feather className="w-5 h-5" />
                </div>
                <h3 className="font-display text-base font-bold text-[#141414] dark:text-white">
                  Substrate Tactility
                </h3>
                <p className="mt-1 text-xs text-[#6E6B63] dark:text-[#9A9890] leading-normal">
                  Paper weight, foil stamping, and debossing chosen with intentional purpose.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F4F1E8] dark:bg-[#18181C] border border-[#E4E0D6] dark:border-[#2B2B32]">
                <div className="text-[#FF3B1D] mb-3">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="font-display text-base font-bold text-[#141414] dark:text-white">
                  Optical Kerning
                </h3>
                <p className="mt-1 text-xs text-[#6E6B63] dark:text-[#9A9890] leading-normal">
                  Every headline hand-kerned for seamless rhythm and visual impact.
                </p>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FF3B1D] text-white hover:bg-[#E02E12] transition-colors inline-flex items-center gap-2"
              >
                <span>Initiate Collaboration</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Studio Card with Character + Specifications */}
          <div className="lg:col-span-5 bg-[#F2EFE8] dark:bg-[#18181C] rounded-3xl p-6 md:p-8 border border-[#E0DCD3] dark:border-[#28282E]">
            <div className="flex items-center justify-between pb-4 border-b border-current/10">
              <span className="font-display font-bold text-sm text-[#141414] dark:text-white">
                Studio Specs & Identity
              </span>
              <span className="text-xs font-mono text-[#FF3B1D] font-bold">2+ YRS PRACTICE</span>
            </div>

            <div className="mt-6 flex items-center gap-5">
              <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-[#DCD7CD] dark:border-[#33333A] bg-white">
                <img
                  src={avatarSrc}
                  alt="Abdulmoeed Avatar"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-xs font-mono text-[#7D7A73] dark:text-[#9A9890] uppercase block">
                  Lead Designer
                </span>
                <h4 className="font-display text-xl font-bold text-[#141414] dark:text-white">
                  Abdulmoeed
                </h4>
                <p className="text-xs text-[#615E58] dark:text-[#A8A6A0] mt-0.5">
                  Visual Identity · Luxury Packaging · Editorial Typography
                </p>
              </div>
            </div>

            {/* Studio Specifications Table */}
            <div className="mt-6 pt-6 border-t border-current/10 space-y-3 text-xs font-mono">
              <div className="flex justify-between py-1 border-b border-current/5">
                <span className="text-[#7D7A73] dark:text-[#8E8C85]">Experience</span>
                <span className="font-semibold text-[#141414] dark:text-white">2+ Years Studio & Freelance</span>
              </div>
              <div className="flex justify-between py-1 border-b border-current/5">
                <span className="text-[#7D7A73] dark:text-[#8E8C85]">Primary Stack</span>
                <span className="font-semibold text-[#141414] dark:text-white">Illustrator, InDesign, C4D, Figma</span>
              </div>
              <div className="flex justify-between py-1 border-b border-current/5">
                <span className="text-[#7D7A73] dark:text-[#8E8C85]">Production Expertise</span>
                <span className="font-semibold text-[#141414] dark:text-white">Packaging Die-Lines, CMYK Pre-Press</span>
              </div>
              <div className="flex justify-between py-1 border-b border-current/5">
                <span className="text-[#7D7A73] dark:text-[#8E8C85]">Availability</span>
                <span className="font-semibold text-[#FF3B1D]">Immediate (2 Open Slots)</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#7D7A73] dark:text-[#8E8C85]">Response Guarantee</span>
                <span className="font-semibold text-[#141414] dark:text-white">Within 24 Hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
