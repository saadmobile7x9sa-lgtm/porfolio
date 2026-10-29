import React, { useState } from 'react';
import { Award, CheckCircle2, Cpu, Palette, PenTool, Sparkles } from 'lucide-react';
import { SKILLS } from '../data/portfolioData.ts';

interface SkillsArsenalProps {
  darkMode: boolean;
}

export const SkillsArsenal: React.FC<SkillsArsenalProps> = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Software' | 'Discipline' | 'Production'>('All');

  const filteredSkills = activeTab === 'All'
    ? SKILLS
    : SKILLS.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-20 md:py-32 border-b border-current/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-current/10 text-xs font-mono uppercase tracking-widest text-[#737068] dark:text-[#9C9B97]">
          <span>05 / TECHNICAL PROFICIENCY</span>
          <span className="text-[#FF3B1D] font-bold">ARSENAL & CRAFT</span>
        </div>

        {/* Section Title & Filter Tabs */}
        <div className="pt-12 md:pt-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#141414] dark:text-white">
              The Design Toolkit.
            </h2>
            <p className="mt-3 text-base text-[#524F47] dark:text-[#A8A69E] max-w-xl">
              2+ years honing vector geometry, typography kerning, 3D spatial staging, and industrial print pre-press standards.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-full bg-[#EDE9DE] dark:bg-[#1B1B1F] border border-[#DDD8CB] dark:border-[#2C2C32] self-start md:self-auto">
            {(['All', 'Software', 'Discipline', 'Production'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-[#141414] text-white dark:bg-white dark:text-[#141414] shadow-sm'
                    : 'text-[#5C5952] dark:text-[#9C9990] hover:text-[#141414] dark:hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#F2EFE8] dark:bg-[#18181C] border border-[#DDD8CD] dark:border-[#2A2A31] hover:border-[#FF3B1D] dark:hover:border-[#FF3B1D] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-current/10">
                  <span className="text-[11px] font-mono uppercase text-[#7D7A73] dark:text-[#918E87]">
                    {skill.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#FF3B1D]">
                    {skill.level}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-xl font-bold text-[#141414] dark:text-white group-hover:text-[#FF3B1D] transition-colors">
                  {skill.name}
                </h3>

                <p className="mt-2 text-xs md:text-sm text-[#4E4B44] dark:text-[#B2B0A8] leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-current/10 flex items-center justify-between text-xs font-mono text-[#7D7A73] dark:text-[#918E87]">
                <span>Validated in Production</span>
                <CheckCircle2 className="w-4 h-4 text-[#FF3B1D]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
