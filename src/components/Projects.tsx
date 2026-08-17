'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, ExternalLink, Github, FolderKanban } from 'lucide-react';

const projects = [
  {
    title: 'TitanFit – Fitness Web App',
    description: 'BMI & Calorie Calculator with responsive and modern UI/UX.',
    image: '/project1.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://example.com',
    codeLink: 'https://github.com',
    buttonText: 'Live Demo',
  },
  {
    title: 'Sri Plywood – Business Website',
    description: 'Modern website for a plywood company with smooth animations.',
    image: '/project2.png',
    tags: ['React', 'CSS', 'Responsive'],
    liveLink: 'https://example.com',
    codeLink: 'https://github.com',
    buttonText: 'Live Demo',
  },
  {
    title: 'Snow AI – AI Chat Assistant (Idea)',
    description: 'AI project that detects mood & interacts with positive thoughts.',
    image: '/project3.png',
    tags: ['React', 'Node.js', 'AI / NLP'],
    liveLink: 'https://example.com',
    codeLink: 'https://github.com',
    buttonText: 'View Details',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 bg-white border-t border-slate-100 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            {/* Small Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FFD8C2] bg-[#FFF5EF] mb-3">
              <FolderKanban className="w-3.5 h-3.5 text-[#FF5500]" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#FF5500]">
                My Projects
              </span>
            </div>

            {/* Headline */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                Featured <span className="text-[#FF5500]">Projects</span>
              </h2>
              <div className="w-12 h-1 bg-[#FF5500] rounded-full mt-2" />
            </div>
          </div>

          {/* Slider Controls (Left / Right Arrow Buttons) */}
          <div className="flex items-center gap-3">
            <button
              aria-label="Previous Project"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100/80 text-slate-700 border border-slate-200/80 transition-all hover:bg-[#FFF5EF] hover:text-[#FF5500] hover:border-[#FF5500]/40 hover:scale-105"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Next Project"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100/80 text-slate-700 border border-slate-200/80 transition-all hover:bg-[#FFF5EF] hover:text-[#FF5500] hover:border-[#FF5500]/40 hover:scale-105"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-3xl p-5 border border-slate-100/90 shadow-md flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-[#FF5500]/30"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative w-full h-[210px] rounded-2xl overflow-hidden mb-5 bg-slate-900 border border-slate-200/60">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-black text-slate-900 tracking-tight mb-2 group-hover:text-[#FF5500] transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-bold bg-[#FFF5EF] text-[#FF5500] border border-[#FFD8C2]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons (Live Demo & Code) */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 rounded-xl bg-[#FF5500] px-4 py-2.5 text-xs font-extrabold text-white shadow-md transition-all hover:bg-[#E04B00] hover:shadow-lg"
                >
                  <span>{project.buttonText}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>

                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 rounded-xl bg-white border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-800 shadow-sm transition-all hover:bg-slate-50"
                >
                  <span>Code</span>
                  <Github className="h-3.5 w-3.5 text-slate-700" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
