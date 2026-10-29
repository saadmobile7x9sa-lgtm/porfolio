import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData.ts';

interface TestimonialsProps {
  darkMode: boolean;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ darkMode }) => {
  return (
    <section className="py-20 md:py-32 border-b border-current/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-current/10 text-xs font-mono uppercase tracking-widest text-[#737068] dark:text-[#9C9B97]">
          <span>06 / CLIENT COMMENDATIONS</span>
          <span className="text-[#FF3B1D] font-bold">PROVEN IMPACT</span>
        </div>

        {/* Section Title */}
        <div className="pt-12 md:pt-16 max-w-3xl">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white bg-[#FF3810] p-5 sm:p-7 rounded-2xl sm:rounded-3xl shadow-xl shadow-[#FF3810]/20 inline-block">
            Endorsements from the Frontlines.
          </h2>
          <p className="mt-3 text-base text-[#524F47] dark:text-[#A8A69E]">
            Direct feedback from founders, creative directors, and exhibition curators who trusted Abdulmoeed with their visual identities.
          </p>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#F2EFE8] dark:bg-[#18181C] border border-[#DDD8CC] dark:border-[#2A2A31] flex flex-col justify-between relative group hover:border-[#FF3B1D] dark:hover:border-[#FF3B1D] transition-colors duration-300"
            >
              <div>
                <Quote className="w-8 h-8 text-[#FF3B1D] opacity-80 mb-6" />
                <p className="text-base text-[#2A2824] dark:text-[#D1CEC6] leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-current/10">
                <div className="text-xs font-mono text-[#FF3B1D] font-bold uppercase mb-1">
                  Impact: {item.impact}
                </div>
                <h3 className="font-display text-base font-bold text-[#141414] dark:text-white">
                  {item.author}
                </h3>
                <div className="text-xs text-[#7A7770] dark:text-[#918E87] mt-0.5">
                  {item.role} · <span className="font-semibold text-[#141414] dark:text-white">{item.company}</span>
                </div>
                <div className="text-[11px] font-mono text-[#8C8880] dark:text-[#78756E] mt-1">
                  Project: {item.project}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
