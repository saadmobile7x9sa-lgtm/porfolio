import React, { useState } from 'react';
import { ScrollProgressBar } from './components/ScrollProgressBar.tsx';
import { CustomCursor } from './components/CustomCursor.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Services } from './components/Services.tsx';
import { SelectedWork } from './components/SelectedWork.tsx';
import { FeaturedCaseStudies } from './components/FeaturedCaseStudies.tsx';
import { SkillsArsenal } from './components/SkillsArsenal.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ProjectModal } from './components/ProjectModal.tsx';
import { ProjectItem } from './types.ts';
import { ASSETS } from './data/portfolioData.ts';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [avatarSrc, setAvatarSrc] = useState<string>(() => {
    return localStorage.getItem('abdulmoeed_custom_avatar') || ASSETS.avatar;
  });

  const handleUpdateAvatar = (newSrc: string) => {
    setAvatarSrc(newSrc);
    try {
      localStorage.setItem('abdulmoeed_custom_avatar', newSrc);
    } catch {
      // storage quota fallback
    }
  };

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'dark bg-[#0E0E10] text-[#FAF8F5]' : 'bg-[#FAF9F5] text-[#141414]'
      }`}
    >
      {/* Custom Expanding Circular Cursor */}
      <CustomCursor />

      {/* Thin, animated top progress bar tracking scroll across entire page */}
      <ScrollProgressBar darkMode={darkMode} />

      {/* 3-Zone Top Navigation Bar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenContact={handleOpenContact}
      />

      <main>
        {/* Hero Section */}
        <Hero
          darkMode={darkMode}
          avatarSrc={avatarSrc}
          onUpdateAvatar={handleUpdateAvatar}
          onOpenContact={handleOpenContact}
        />

        {/* About Section */}
        <About
          darkMode={darkMode}
          avatarSrc={avatarSrc}
          onOpenContact={handleOpenContact}
        />

        {/* Services Section */}
        <Services
          darkMode={darkMode}
          onOpenContact={handleOpenContact}
        />

        {/* Selected Work Section */}
        <SelectedWork
          darkMode={darkMode}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Featured Case Studies Section */}
        <FeaturedCaseStudies
          darkMode={darkMode}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Skills & Arsenal Section */}
        <SkillsArsenal
          darkMode={darkMode}
        />

        {/* Testimonials Section */}
        <Testimonials
          darkMode={darkMode}
        />

        {/* Contact & Inquiry Section */}
        <ContactSection
          darkMode={darkMode}
        />
      </main>

      {/* Footer */}
      <Footer
        darkMode={darkMode}
        onOpenContact={handleOpenContact}
      />

      {/* Lightbox / Project Examination Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={handleOpenContact}
      />
    </div>
  );
}
