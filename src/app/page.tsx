'use client';

import { useState } from 'react';
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
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* 9-Scene Cinematic Preloader Animation */}
      {isLoading && (
        <Preloader onComplete={() => setIsLoading(false)} />
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
