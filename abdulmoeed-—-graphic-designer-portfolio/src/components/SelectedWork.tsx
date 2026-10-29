import React, { useState } from 'react';
import { ArrowUpRight, Eye, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData.ts';
import { ProjectCategory, ProjectItem } from '../types.ts';

interface SelectedWorkProps {
  darkMode: boolean;
  onSelectProject: (project: ProjectItem) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ darkMode, onSelectProject }) => {
  const [filter, setFilter] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = ['All', 'Packaging', 'Brand Identity', 'Editorial & Poster'];

  const filteredProjects = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="work" className="py-20 md:py-32 border-b border-current/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-current/10 text-xs font-mono uppercase tracking-widest text-[#737068] dark:text-[#9C9B97]">
          <span>03 / PORTFOLIO ARCHIVE</span>
          <span className="text-[#FF3B1D] font-bold">SELECTED WORK (2024–2026)</span>
        </div>

        {/* Section Title & Filter Tabs */}
        <div className="pt-12 md:pt-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#141414] dark:text-white">
              Selected Works & Systems.
            </h2>
            <p className="mt-3 text-base text-[#59564E] dark:text-[#A8A69E] max-w-xl">
              A curated collection of packaging die-lines, corporate brand architecture, and avant-garde typography printed on physical and digital canvases.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-full bg-[#EDE9DE] dark:bg-[#1B1B1F] border border-[#DDD8CB] dark:border-[#2C2C32] self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 whitespace-nowrap ${
                  filter === cat
                    ? 'bg-[#141414] text-white dark:bg-white dark:text-[#141414] shadow-md'
                    : 'text-[#5C5952] dark:text-[#9C9990] hover:text-[#141414] dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento / Dynamic Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            // Make first or featured project occupy 2 cols on lg if appropriate
            const isWide = index === 0 && filter === 'All';

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group cursor-pointer rounded-3xl overflow-hidden bg-[#F2EFE7] dark:bg-[#18181C] border border-[#DDD8CD] dark:border-[#2B2B32] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between ${
                  isWide ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Media Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E5E1D5] dark:bg-[#202025]">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="inline-flex items-center gap-2 text-xs font-mono text-white uppercase tracking-wider bg-[#FF3B1D] px-3 py-1.5 rounded-full shadow-lg">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Case Study</span>
                    </span>
                  </div>

                  {/* Top-Right Category Label */}
                  <div className="absolute top-4 right-4 bg-[#141414]/80 backdrop-blur-md text-white text-[11px] font-mono px-3 py-1 rounded-full uppercase tracking-wider border border-white/10">
                    {project.category}
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                  <div>
                    {/* Unboxed Metadata */}
                    <div className="flex items-center gap-2 text-xs font-mono text-[#78756E] dark:text-[#918E87] mb-2 uppercase">
                      <span>{project.client}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.location}</span>
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-2xl font-bold tracking-tight text-[#141414] dark:text-white group-hover:text-[#FF3B1D] transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-[#8A8780] group-hover:text-[#FF3B1D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
                    </div>

                    <p className="mt-3 text-xs md:text-sm text-[#4E4B44] dark:text-[#B2B0A8] leading-relaxed line-clamp-2">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Color Palette Preview Swatches */}
                  <div className="mt-6 pt-4 border-t border-current/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      {project.palette.map((color, cIdx) => (
                        <span
                          key={cIdx}
                          className="w-3.5 h-3.5 rounded-full border border-black/10 dark:border-white/20"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>

                    {project.stat && (
                      <span className="text-xs font-mono font-bold text-[#FF3B1D]">
                        {project.stat}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
