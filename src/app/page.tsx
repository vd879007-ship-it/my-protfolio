'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Preloader from '@/components/Preloader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasSeenIntro = sessionStorage.getItem('dinesh_portfolio_intro');
    if (!hasSeenIntro) {
      setIsLoading(true);
    }
  }, []);

  const handlePreloaderComplete = () => {
    sessionStorage.setItem('dinesh_portfolio_intro', 'seen');
    setIsLoading(false);
  };

  return (
    <>
      {/* Fast & Snappy Preloader Animation on First Visit */}
      {mounted && isLoading && (
        <Preloader onComplete={handlePreloaderComplete} />
      )}

      {/* Main Page Content */}
      <main className="relative min-h-screen flex flex-col justify-between bg-[#FAFAFD] text-slate-900 selection:bg-[#FF5500] selection:text-white">
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Navigation Bar */}
          <Navbar />

          {/* Hero Section */}
          <Hero />

          {/* 4-Column Feature Card */}
          <FeatureGrid />

          {/* About Me Section */}
          <About />

          {/* Tech Stack / Skills Section */}
          <Skills />

          {/* Work Experience Section */}
          <Experience />

          {/* Featured Projects Section */}
          <Projects />

          {/* Services Section */}
          <Services />

          {/* Contact Section & Footer */}
          <Contact />
        </div>
      </main>
    </>
  );
}
