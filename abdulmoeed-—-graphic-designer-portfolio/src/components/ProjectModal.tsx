import React, { useEffect, useState } from 'react';
import { Check, Copy, ExternalLink, X } from 'lucide-react';
import { ProjectItem } from '../types.ts';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenContact,
}) => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleCopyColor = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-5xl bg-[#FAF9F5] dark:bg-[#151518] rounded-3xl overflow-hidden shadow-2xl border border-[#E0DCD3] dark:border-[#2C2C32] z-10 max-h-[92vh] flex flex-col my-auto">
        {/* Top Header Bar */}
        <div className="px-6 md:px-8 py-5 border-b border-current/10 flex items-center justify-between bg-[#F4F1E8] dark:bg-[#1A1A1E] shrink-0">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#737068] dark:text-[#9C9A93]">
            <span className="font-bold text-[#FF3B1D]">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.client}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-[#141414] dark:text-white transition-colors"
            aria-label="Close Project Modal (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="overflow-y-auto p-6 md:p-10 space-y-8">
          {/* Main Visual Display */}
          <div className="relative rounded-2xl overflow-hidden bg-[#ECE8DC] dark:bg-[#202025] border border-[#DDD8CD] dark:border-[#2D2D35] aspect-[16/10] w-full">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            {project.stat && (
              <div className="absolute bottom-4 left-4 bg-[#141414]/90 backdrop-blur-md text-white px-4 py-2 rounded-xl font-mono text-xs border border-white/10 flex items-center gap-2">
                <span className="font-bold text-[#FF3B1D] text-sm">{project.stat}</span>
                <span className="text-gray-300">{project.statLabel}</span>
              </div>
            )}
          </div>

          {/* Title & Overview */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#141414] dark:text-white">
                {project.title}
              </h2>
              <p className="mt-4 text-base text-[#47443E] dark:text-[#B5B3AB] leading-relaxed">
                {project.fullStory}
              </p>
            </div>

            {/* Project Specifications Sidebar */}
            <div className="md:col-span-5 bg-[#F2EFE8] dark:bg-[#1A1A1E] p-6 rounded-2xl border border-[#DDD8CD] dark:border-[#2A2A31] space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#737068] dark:text-[#95938B] font-bold">
                Project Deliverables
              </h3>
              <ul className="space-y-2 text-xs">
                {project.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#22211F] dark:text-[#D5D3CC]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B1D] shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-current/10">
                <span className="font-mono text-xs uppercase tracking-widest text-[#737068] dark:text-[#95938B] font-bold block mb-2">
                  Typography Spec
                </span>
                <div className="text-xs font-mono font-semibold text-[#141414] dark:text-white">
                  {project.typography}
                </div>
              </div>

              {/* Color Swatches */}
              <div className="pt-4 border-t border-current/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#737068] dark:text-[#95938B] font-bold">
                    Palette Swatches
                  </span>
                  {copiedColor && (
                    <span className="text-[10px] font-mono text-[#FF3B1D]">
                      Copied {copiedColor}!
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {project.palette.map((color) => (
                    <button
                      key={color}
                      onClick={() => handleCopyColor(color)}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-black/40 text-[10px] font-mono hover:border-[#FF3B1D] transition-colors"
                      title="Click to copy HEX"
                    >
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                      <span>{color}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className="px-6 md:px-8 py-4 border-t border-current/10 bg-[#F4F1E8] dark:bg-[#1A1A1E] flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="text-xs font-mono text-[#6E6B64] dark:text-[#95938B]">
            Client: {project.client} · Location: {project.location}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full text-xs font-mono uppercase border border-current/20 hover:border-black dark:hover:border-white transition-colors"
            >
              Close (ESC)
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-5 py-2 rounded-full text-xs font-mono uppercase font-bold text-white bg-[#FF3B1D] hover:bg-[#E02E12] transition-colors shadow-sm"
            >
              Commission Similar Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
