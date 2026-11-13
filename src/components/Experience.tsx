'use client';

import Image from 'next/image';
import { Briefcase, Calendar, Trophy } from 'lucide-react';

const experiences = [
  {
    step: '1',
    company: 'South Graps Solution',
    duration: '1 Month',
    role: 'Frontend Developer Intern',
    description:
      'Worked on building responsive and user-friendly frontend interfaces using modern web technologies.',
    logoType: 'sgs',
    isCurrent: false,
  },
  {
    step: '2',
    company: 'Visual Carrer Solution',
    duration: '6 Months',
    role: 'Full Stack Developer Intern',
    description:
      'Developed full-stack web applications and gained hands-on experience in MERN stack development.',
    logoType: 'visual',
    isCurrent: false,
  },
  {
    step: '3',
    company: 'MSEED',
    duration: '3 Months',
    role: 'Work Intern – Full Stack Developer',
    description:
      'Collaborated on real-world projects and implemented scalable solutions using modern full stack technologies.',
    logoType: 'mseed',
    isCurrent: false,
  },
  {
    step: '4',
    company: 'Skillstar Digital Solutions',
    duration: 'Now',
    role: 'Full Stack Developer',
    description:
      'Currently working as Full Stack Developer at Skillstar Digital Solutions company, building scalable web applications and delivering high-performance digital solutions.',
    logoType: 'skillstar',
    isCurrent: true,
  },
];

function CompanyLogo({ type }: { type: string }) {
  switch (type) {
    case 'sgs':
      return (
        <div className="flex items-center justify-center">
          <Image
            src="/sgs-logo.png"
            alt="South Graps Solution Logo"
            width={95}
            height={40}
            className="h-9 sm:h-10 w-auto object-contain hover:scale-105 transition-transform"
          />
        </div>
      );
    case 'visual':
      return (
        <div className="flex items-center justify-center">
          <Image
            src="/visual-logo.png"
            alt="Visual Career Solution Logo"
            width={100}
            height={38}
            className="h-9 sm:h-10 w-auto object-contain hover:scale-105 transition-transform"
          />
        </div>
      );
    case 'mseed':
      return (
        <div className="flex items-center justify-center">
          <Image
            src="/mseed-logo.png"
            alt="MSEED Logo"
            width={110}
            height={32}
            className="h-8 sm:h-9 w-auto object-contain hover:scale-105 transition-transform"
          />
        </div>
      );
    case 'skillstar':
      return (
        <div className="flex items-center gap-2">
          <Image
            src="/skillstar-icon.png"
            alt="Skillstar Digital Solutions Logo"
            width={38}
            height={32}
            className="h-8 sm:h-9 w-auto object-contain drop-shadow-xs hover:scale-105 transition-transform"
          />
          <div className="text-left leading-none">
            <span className="text-sm font-extrabold text-slate-900 block">SKILLSTAR</span>
            <span className="text-[9px] font-bold text-slate-400 tracking-wider uppercase">DIGITAL SOLUTIONS</span>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 bg-[#FAFAFD] z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center mb-12">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FFD8C2] bg-[#FFF5EF] mb-3">
            <Briefcase className="w-4 h-4 text-[#FF5500]" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#FF5500]">
              Experience
            </span>
          </div>

          {/* Headline */}
          <div className="mb-2">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Work <span className="text-[#FF5500]">Experience</span>
            </h2>
            <div className="w-12 h-1 bg-[#FF5500] rounded-full mx-auto mt-2" />
          </div>

          {/* Subtitle */}
          <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed max-w-xl text-center">
            My professional journey and the amazing companies I&apos;ve had the opportunity to work with.
          </p>
        </div>

        {/* Stepper Timeline & 4 Cards */}
        <div className="relative max-w-6xl mx-auto mb-12">
          
          {/* Horizontal Line Connecting Step Numbers (Desktop) */}
          <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-[#FF5500]/40 z-0">
            <div className="w-full h-full flex justify-between items-center">
              <span className="w-2 h-2 rounded-full bg-[#FF5500] -translate-y-0.5" />
              <span className="w-2 h-2 rounded-full bg-[#FF5500] -translate-y-0.5" />
              <span className="w-2 h-2 rounded-full bg-[#FF5500] -translate-y-0.5" />
            </div>
          </div>

          {/* 4 Experience Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {experiences.map((exp) => (
              <div key={exp.company} className="flex flex-col items-center">
                
                {/* Stepper Circle Number (1, 2, 3, 4) */}
                <div className="h-12 w-12 rounded-full bg-white border-2 border-[#FF5500] text-[#FF5500] font-black text-lg flex items-center justify-center shadow-md mb-6 z-10 hover:scale-110 transition-transform">
                  {exp.step}
                </div>

                {/* Experience Card */}
                <div className="w-full bg-white rounded-2xl p-6 border border-slate-100 shadow-md flex flex-col items-center text-center h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 hover:border-[#FF5500]/30">
                  
                  {/* Company Logo Header */}
                  <div className="h-12 flex items-center justify-center mb-3">
                    <CompanyLogo type={exp.logoType} />
                  </div>

                  {/* Company Name */}
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">
                    {exp.company}
                  </h3>

                  {/* Duration Badge */}
                  <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#FF5500] mb-3">
                    <Calendar className="w-3.5 h-3.5 text-[#FF5500]" />
                    <span>{exp.duration}</span>
                  </div>

                  {/* Role Tag */}
                  <div className={`px-3 py-1 rounded-full text-xs font-bold mb-4 ${
                    exp.isCurrent
                      ? 'bg-[#FFF5EF] text-[#FF5500] border border-[#FFD8C2]'
                      : 'bg-[#FFF5EF] text-[#FF5500]'
                  }`}>
                    • {exp.role}
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-slate-100 mb-4" />

                  {/* Description Paragraph */}
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {exp.description}
                  </p>

                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Bottom Floating Stats / Dedication Banner */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl p-6 border border-slate-100 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Trophy Icon & Text */}
          <div className="flex items-center gap-4 text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#FF5500] to-[#FF8800] text-white shadow-md">
              <Trophy className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 leading-snug">
                Every experience has shaped me into a better developer.
              </p>
              <p className="text-xs font-semibold text-slate-500 mt-0.5">
                Continuously learning, building, and growing.
              </p>
            </div>
          </div>

          {/* Right 4 Stats Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center md:border-l md:border-slate-100 md:pl-6">
            <div>
              <h4 className="text-xl font-black text-[#FF5500]">4+</h4>
              <p className="text-[11px] font-bold text-slate-500 uppercase mt-0.5">Experiences</p>
            </div>
            <div>
              <h4 className="text-xl font-black text-[#FF5500]">10+</h4>
              <p className="text-[11px] font-bold text-slate-500 uppercase mt-0.5">Projects</p>
            </div>
            <div>
              <h4 className="text-xl font-black text-[#FF5500]">6+</h4>
              <p className="text-[11px] font-bold text-slate-500 uppercase mt-0.5">Months Exp.</p>
            </div>
            <div>
              <h4 className="text-xl font-black text-[#FF5500]">100%</h4>
              <p className="text-[11px] font-bold text-slate-500 uppercase mt-0.5">Dedication</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
