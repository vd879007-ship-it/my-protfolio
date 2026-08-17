'use client';

import Image from 'next/image';
import { User, Download, GraduationCap, BarChart3, MapPin, Briefcase, Code2, Users, Star, Rocket } from 'lucide-react';

const stats = [
  {
    icon: Briefcase,
    value: '3+',
    label: 'Years Experience',
  },
  {
    icon: Code2,
    value: '20+',
    label: 'Projects Completed',
  },
  {
    icon: Users,
    value: '10+',
    label: 'Happy Clients',
  },
  {
    icon: Star,
    value: '100%',
    label: 'Commitment',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-16 bg-white border-y border-slate-100 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN - About Information & Info Card (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center items-start space-y-6">
            
            {/* Small Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FFD8C2] bg-[#FFF5EF]">
              <User className="w-3.5 h-3.5 text-[#FF5500]" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#FF5500]">
                ABOUT ME
              </span>
            </div>

            {/* Headline with Orange Accent Line */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                Who <span className="text-[#FF5500]">I Am?</span>
              </h2>
              <div className="w-12 h-1 bg-[#FF5500] rounded-full mt-2" />
            </div>

            {/* Description Paragraph */}
            <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed max-w-xl">
              I&apos;m a Full-Stack Techno Engineering all-rounder &amp; 3+ Years experienced person and passionate to create full fledge products with end to end engineering. Love to problem-solve using latest tech stack &amp; big solutions.
            </p>

            {/* 3-Column College, CGPA, Location Card */}
            <div className="w-full bg-[#FAFAFD] rounded-xl p-4 sm:p-5 border border-slate-200/70 grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* College */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FFF5EF] text-[#FF5500]">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">College</h4>
                  <p className="text-xs text-slate-500 font-medium leading-snug mt-0.5">
                    Bachelor of Engineering in Computer Science
                  </p>
                </div>
              </div>

              {/* CGPA */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FFF5EF] text-[#FF5500]">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">CGPA</h4>
                  <p className="text-xs text-slate-500 font-medium leading-snug mt-0.5">
                    8.3 (Up to 5th Sem)
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FFF5EF] text-[#FF5500]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Location</h4>
                  <p className="text-xs text-slate-500 font-medium leading-snug mt-0.5">
                    Tiruppathur, Sivaganga, Tamil Nadu
                  </p>
                </div>
              </div>

            </div>

            {/* Download CV Button */}
            <div>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF6600] px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[#E04B00] hover:scale-105"
              >
                <span>Download CV</span>
                <Download className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN - Real Developer Desk Cutout Image & Backdrop (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] lg:min-h-[440px]">
            
            {/* Background Soft Orange Circle */}
            <div className="absolute w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full bg-gradient-to-tr from-[#FF5500]/25 via-[#FF6600]/15 to-[#FF8800]/5 z-0" />

            {/* Curved Dashed Path Connecting Icon to Desk */}
            <svg className="absolute top-10 left-12 w-48 h-32 pointer-events-none z-10" viewBox="0 0 200 120">
              <path
                d="M 20 20 Q 120 10 160 90"
                fill="none"
                stroke="#FF5500"
                strokeWidth="2"
                strokeDasharray="5 5"
                opacity="0.6"
              />
              <circle cx="160" cy="90" r="4" fill="#FF5500" />
            </svg>

            {/* Floating < /> Icon Badge */}
            <div className="absolute top-2 left-4 z-20 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 text-[#FF5500] hover:scale-110 transition-transform">
              <Code2 className="w-6 h-6 stroke-[2.5]" />
            </div>

            {/* User's Cutout Desk Image (/dinesh-desk.png) */}
            <div className="relative z-10 w-full h-[360px] sm:h-[420px] flex items-end justify-center pointer-events-none">
              <Image
                src="/dinesh-desk.png"
                alt="Dinesh - About Me Developer Workspace"
                width={550}
                height={550}
                priority
                className="object-contain object-bottom drop-shadow-2xl translate-y-1 scale-105"
              />
            </div>

            {/* Floating Dark Glass Card (Bottom Right) */}
            <div className="absolute bottom-2 right-0 sm:right-2 z-20 bg-[#0F172A] text-white rounded-2xl p-4 shadow-2xl border border-slate-800 max-w-[210px] flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FF5500] text-white shadow-md">
                <Rocket className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold leading-tight text-slate-100">
                  Building Scalable
                </p>
                <p className="text-xs font-bold text-[#FF5500] underline underline-offset-2 mt-0.5">
                  Digital Solutions
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom 4-Column Stats Bar */}
        <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex items-center justify-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF5EF] text-[#FF5500]">
                  <Icon className="h-5 w-5 stroke-[2.5]" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-extrabold text-slate-900 leading-none">
                    {stat.value}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
