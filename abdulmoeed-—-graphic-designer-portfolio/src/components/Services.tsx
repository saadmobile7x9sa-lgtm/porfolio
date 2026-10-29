import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ChevronRight, Layers, Package, SlidersHorizontal, Sparkles, Type } from 'lucide-react';
import { SERVICES } from '../data/portfolioData.ts';

interface ServicesProps {
  darkMode: boolean;
  onOpenContact: () => void;
}

export const Services: React.FC<ServicesProps> = ({ darkMode, onOpenContact }) => {
  const [activeService, setActiveService] = useState<string>(SERVICES[0].number);

  const icons = [Layers, Package, Type, SlidersHorizontal];

  return (
    <section id="services" className="py-20 md:py-32 border-b border-current/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-current/10 text-xs font-mono uppercase tracking-widest text-[#737068] dark:text-[#9C9B97]">
          <span className="text-[#000000] dark:text-black font-semibold">02 / CORE CAPABILITIES</span>
          <span className="text-[#FF3B1D] font-bold">DISCIPLINES & SERVICES</span>
        </div>

        {/* Title */}
        <div className="pt-12 md:pt-16 max-w-3xl">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white bg-[#FF3810] border border-black/10 p-5 sm:p-7 rounded-2xl sm:rounded-3xl shadow-xl shadow-[#FF3810]/20 inline-block">
            Design Services Crafted with Precision.
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#524F47] dark:text-[#B0AEA6] leading-relaxed">
            Every project begins with conceptual rigor and concludes with production-ready deliverables ready for factory press runs or global digital rollout.
          </p>
        </div>

        {/* Interactive Services Grid / Showcase */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Service Selection List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {SERVICES.map((service, index) => {
              const Icon = icons[index % icons.length];
              const isSelected = activeService === service.number;

              return (
                <button
                  key={service.number}
                  onClick={() => setActiveService(service.number)}
                  className={`text-left p-6 rounded-2xl transition-all duration-300 border flex items-start justify-between group ${
                    isSelected
                      ? 'bg-[#141414] text-white dark:bg-white dark:text-[#141414] border-transparent shadow-xl'
                      : 'bg-[#F4F1E8]/60 dark:bg-[#161619] border-[#E2DDD3] dark:border-[#27272D] text-[#141414] dark:text-white hover:border-[#FF3B1D]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`font-mono text-sm font-bold ${
                        isSelected ? 'text-[#FF3B1D]' : 'text-[#7D7A73] dark:text-[#8D8A82]'
                      }`}
                    >
                      {service.number}.
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold tracking-tight">
                        {service.title}
                      </h3>
                      <p
                        className={`mt-1 text-xs line-clamp-1 ${
                          isSelected
                            ? 'text-gray-300 dark:text-gray-600'
                            : 'text-[#6A675F] dark:text-[#9B9992]'
                        }`}
                      >
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-5 h-5 shrink-0 transition-transform ${
                      isSelected
                        ? 'text-[#FF3B1D] translate-x-1'
                        : 'text-[#8C8982] group-hover:text-[#FF3B1D]'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Service Detailed Panel */}
          <div className="lg:col-span-7">
            {SERVICES.filter((s) => s.number === activeService).map((service) => (
              <div
                key={service.number}
                className="bg-[#F2EFE7] dark:bg-[#18181C] rounded-3xl p-8 md:p-10 border border-[#DDD8CD] dark:border-[#2A2A30] h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-current/10">
                    <span className="font-mono text-xs font-bold uppercase text-[#FF3B1D]">
                      Capability {service.number} / 04
                    </span>
                    <span className="text-xs font-mono text-[#7A7770] dark:text-[#918E87]">
                      TOOLING: {service.tools.join(' · ')}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl md:text-3xl font-bold tracking-tight text-[#141414] dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-[#FF3B1D]">
                    {service.tagline}
                  </p>
                  <p className="mt-4 text-sm md:text-base text-[#4E4B44] dark:text-[#B2B0A8] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="mt-8 pt-6 border-t border-current/10">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#78756E] dark:text-[#96948D] block mb-4">
                      Expected Deliverables & Artifacts
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.deliverables.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs md:text-sm text-[#242321] dark:text-[#D5D3CC]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#FF3B1D] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="mt-10 pt-6 border-t border-current/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs font-mono text-[#6E6B64] dark:text-[#9A9891]">
                    Standard turnaround: 2–4 Weeks · Fixed Milestone Pricing
                  </div>
                  <button
                    onClick={onOpenContact}
                    className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FF3B1D] text-white hover:bg-[#E02E12] transition-colors inline-flex items-center gap-2"
                  >
                    <span>Inquire for {service.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
