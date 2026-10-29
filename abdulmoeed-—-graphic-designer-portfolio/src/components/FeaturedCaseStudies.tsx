import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy, ExternalLink, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData.ts';
import { ProjectItem } from '../types.ts';

interface FeaturedCaseStudiesProps {
  darkMode: boolean;
  onSelectProject: (project: ProjectItem) => void;
}

export const FeaturedCaseStudies: React.FC<FeaturedCaseStudiesProps> = ({
  darkMode,
  onSelectProject,
}) => {
  const featuredList = PROJECTS.filter((p) => p.featured);
  const [activeIdx, setActiveIdx] = useState(0);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const activeProject = featuredList[activeIdx] || featuredList[0];

  const handleCopyColor = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 1800);
  };

  return (
    <section id="case-studies" className="py-20 md:py-32 border-b border-current/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-current/10 text-xs font-mono uppercase tracking-widest text-[#737068] dark:text-[#9C9B97]">
          <span>04 / DEEP DIVE SHOWCASE</span>
          <span className="text-[#FF3B1D] font-bold">FEATURED CASE STUDIES</span>
        </div>

        {/* Section Title */}
        <div className="pt-12 md:pt-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#141414] dark:text-white">
              Anatomy of an Identity.
            </h2>
            <p className="mt-3 text-base text-[#524F47] dark:text-[#A8A69E] max-w-xl">
              Deep editorial case studies breaking down conceptual strategy, material selection, and measurable commercial results.
            </p>
          </div>

          {/* Project Switcher Navigation */}
          <div className="flex items-center gap-2">
            {featuredList.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActiveIdx(idx)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  activeIdx === idx
                    ? 'bg-[#FF3B1D] text-white shadow-md shadow-[#FF3B1D]/25 font-bold'
                    : 'bg-[#EDEAE0] dark:bg-[#1D1D22] text-[#636059] dark:text-[#96938B] hover:text-[#141414] dark:hover:text-white'
                }`}
              >
                0{idx + 1}. {p.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Sticky-Style Editorial Showcase Container */}
        <div className="mt-14 bg-[#F2EFE8] dark:bg-[#17171B] rounded-3xl p-6 sm:p-10 lg:p-14 border border-[#DDD9CE] dark:border-[#2B2B32]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Story, Challenge, Solution & Metrics */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div>
                {/* Meta Strip */}
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#75726B] dark:text-[#9C9992] pb-4 border-b border-current/10">
                  <span>{activeProject.client}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeProject.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeProject.year}</span>
                </div>

                <h3 className="mt-6 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#141414] dark:text-white">
                  {activeProject.title}
                </h3>

                <p className="mt-4 text-base text-[#47443E] dark:text-[#B2B0A8] leading-relaxed">
                  {activeProject.fullStory}
                </p>

                {/* Key Metric Badge */}
                {activeProject.stat && (
                  <div className="mt-6 p-4 rounded-2xl bg-[#EBE7DC] dark:bg-[#202025] border border-current/10 flex items-center gap-4">
                    <span className="font-display text-3xl font-extrabold text-[#FF3B1D]">
                      {activeProject.stat}
                    </span>
                    <span className="text-xs font-mono text-[#57544D] dark:text-[#B0AEA6]">
                      {activeProject.statLabel}
                    </span>
                  </div>
                )}

                {/* Deliverables Checklist */}
                <div className="mt-8 pt-6 border-t border-current/10">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#75726B] dark:text-[#95938B] block mb-3 font-semibold">
                    Production Scope
                  </span>
                  <div className="space-y-2">
                    {activeProject.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-[#2A2927] dark:text-[#CFCDBE]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B1D]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Color Palette Inspection */}
                <div className="mt-8 pt-6 border-t border-current/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#75726B] dark:text-[#95938B] font-semibold">
                      Curated Palette
                    </span>
                    {copiedColor && (
                      <span className="text-[11px] font-mono text-[#FF3B1D]">
                        Copied {copiedColor}!
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {activeProject.palette.map((color) => (
                      <button
                        key={color}
                        onClick={() => handleCopyColor(color)}
                        className="group relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/30 hover:bg-white dark:hover:bg-black transition-colors"
                        title="Click to copy HEX code"
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full shadow-inner"
                          style={{ backgroundColor: color }}
                        />
                        <span className="text-[10px] font-mono font-bold text-[#3B3934] dark:text-[#CCC9BF]">
                          {color}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Typography System */}
                <div className="mt-6 pt-4 border-t border-current/10 text-xs font-mono text-[#66635C] dark:text-[#A6A49C]">
                  <span className="text-[#75726B] dark:text-[#95938B]">Typography: </span>
                  <span className="font-semibold text-[#141414] dark:text-white">
                    {activeProject.typography}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button
                  onClick={() => onSelectProject(activeProject)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#141414] text-white hover:bg-[#FF3B1D] dark:bg-white dark:text-[#141414] dark:hover:bg-[#FF3B1D] dark:hover:text-white transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Open Full Examination Modal</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Hero High-Res Graphic Mockup */}
            <div className="lg:col-span-7">
              <div
                onClick={() => onSelectProject(activeProject)}
                className="group cursor-pointer relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#E2DED3] dark:bg-[#202025] border border-[#D5D0C3] dark:border-[#32323A] shadow-xl"
              >
                <img
                  src={activeProject.heroImage}
                  alt={activeProject.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-5 py-2.5 rounded-full bg-white text-[#141414] text-xs font-mono font-bold uppercase tracking-wider shadow-2xl flex items-center gap-2">
                    <span>Inspect Full Scale Mockup</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
