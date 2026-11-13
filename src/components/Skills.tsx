'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, MonitorSmartphone, Database, Wrench, Sparkles, Search } from 'lucide-react';

type Skill = {
  name: string;
  category: 'frontend' | 'backend' | 'tools';
  iconType: string;
  lineColor: string;
  bgColor: string;
};

const skills: Skill[] = [
  // FRONTEND
  {
    name: 'HTML5',
    category: 'frontend',
    iconType: 'html5',
    lineColor: 'bg-[#E34F26]',
    bgColor: 'bg-orange-50/80',
  },
  {
    name: 'CSS3',
    category: 'frontend',
    iconType: 'css3',
    lineColor: 'bg-[#1572B6]',
    bgColor: 'bg-blue-50/80',
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    iconType: 'javascript',
    lineColor: 'bg-[#F7DF1E]',
    bgColor: 'bg-amber-50/80',
  },
  {
    name: 'React.js',
    category: 'frontend',
    iconType: 'react',
    lineColor: 'bg-[#61DAFB]',
    bgColor: 'bg-cyan-50/80',
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    iconType: 'tailwind',
    lineColor: 'bg-[#38BDF8]',
    bgColor: 'bg-sky-50/80',
  },
  {
    name: 'Node.js',
    category: 'frontend',
    iconType: 'nodejs',
    lineColor: 'bg-[#339933]',
    bgColor: 'bg-emerald-50/80',
  },
  {
    name: 'SEO Optimization',
    category: 'frontend',
    iconType: 'seo',
    lineColor: 'bg-[#FF5500]',
    bgColor: 'bg-orange-50/80',
  },

  // BACKEND
  {
    name: 'Express.js',
    category: 'backend',
    iconType: 'express',
    lineColor: 'bg-slate-600',
    bgColor: 'bg-slate-100',
  },
  {
    name: 'MongoDB',
    category: 'backend',
    iconType: 'mongodb',
    lineColor: 'bg-[#47A248]',
    bgColor: 'bg-emerald-50/80',
  },
  {
    name: 'Postman',
    category: 'backend',
    iconType: 'postman',
    lineColor: 'bg-[#FF6C37]',
    bgColor: 'bg-orange-50/80',
  },
  {
    name: 'SQL',
    category: 'backend',
    iconType: 'sql',
    lineColor: 'bg-[#00758F]',
    bgColor: 'bg-cyan-50/80',
  },
  {
    name: 'Firebase',
    category: 'backend',
    iconType: 'firebase',
    lineColor: 'bg-[#FFCA28]',
    bgColor: 'bg-amber-50/80',
  },
  {
    name: 'PostgreSQL',
    category: 'backend',
    iconType: 'postgresql',
    lineColor: 'bg-[#336791]',
    bgColor: 'bg-blue-50/80',
  },

  // TOOLS
  {
    name: 'Git & GitHub',
    category: 'tools',
    iconType: 'github',
    lineColor: 'bg-slate-700',
    bgColor: 'bg-slate-100',
  },
  {
    name: 'Antigravity',
    category: 'tools',
    iconType: 'antigravity',
    lineColor: 'bg-[#FF5500]',
    bgColor: 'bg-orange-50/80',
  },
  {
    name: 'VS Code',
    category: 'tools',
    iconType: 'vscode',
    lineColor: 'bg-[#007ACC]',
    bgColor: 'bg-blue-50/80',
  },
  {
    name: 'AI Tools',
    category: 'tools',
    iconType: 'aitools',
    lineColor: 'bg-purple-500',
    bgColor: 'bg-purple-50/80',
  },
];

const categories = [
  { id: 'all', label: 'All Technologies', icon: Rocket },
  { id: 'frontend', label: 'Frontend', icon: MonitorSmartphone },
  { id: 'backend', label: 'Backend', icon: Database },
  { id: 'tools', label: 'Tools', icon: Wrench },
];

function SkillIcon({ type }: { type: string }) {
  switch (type) {
    case 'html5':
      return (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
          <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0z" fill="#E34F26"/>
          <path d="M12 2.182v19.553l7.009-1.996 1.558-17.557H12z" fill="#EF652A"/>
          <path d="M12 9.479H8.258l-.254-2.864H12V4.433H5.321l.764 8.601H12V9.479zm0 6.643l-.013.004-3.411-.922-.218-2.443H5.803l.436 4.909 5.758 1.599.003-.001V16.122z" fill="#FFF"/>
          <path d="M12 9.479h3.742l-.353 3.968-3.389.922v2.443l5.76-1.599.074-.836.657-7.453.078-.863H12v2.864z" fill="#EEE"/>
        </svg>
      );
    case 'css3':
      return (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
          <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0z" fill="#1572B6"/>
          <path d="M12 2.182v19.553l7.009-1.996 1.558-17.557H12z" fill="#33A9DC"/>
          <path d="M12 9.479H8.258l-.254-2.864H12V4.433H5.321l.764 8.601H12V9.479zm0 6.643l-.013.004-3.411-.922-.218-2.443H5.803l.436 4.909 5.758 1.599.003-.001V16.122z" fill="#FFF"/>
          <path d="M12 9.479h3.742l-.353 3.968-3.389.922v2.443l5.76-1.599.074-.836.657-7.453.078-.863H12v2.864z" fill="#EEE"/>
        </svg>
      );
    case 'javascript':
      return (
        <svg className="w-10 h-10 rounded-xl" viewBox="0 0 24 24">
          <rect width="24" height="24" fill="#F7DF1E" rx="4"/>
          <path d="M6.48 19.55c.98.58 2.2.97 3.3.97 1.83 0 2.92-.9 2.92-2.52v-6.95h-2.58v6.95c0 .65-.38.97-1.02.97-.6 0-1.12-.22-1.56-.47l-1.06 1.05zm8.13-1.04c.73.47 1.63.78 2.57.78 1.34 0 2.1-.65 2.1-1.56 0-1.05-.85-1.48-2.12-1.96l-.72-.27c-1.8-.68-2.95-1.53-2.95-3.27 0-2.28 1.83-3.6 4.38-3.6 1.33 0 2.45.38 3.16.78l-1 1.48c-.62-.35-1.47-.65-2.26-.65-1.12 0-1.7.55-1.7 1.25 0 .9.75 1.3 1.95 1.77l.72.27c2.02.77 3.12 1.65 3.12 3.48 0 2.4-1.9 3.8-4.78 3.8-1.56 0-2.88-.45-3.65-.95l1.08-1.55z" fill="#000"/>
        </svg>
      );
    case 'react':
      return (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        </svg>
      );
    case 'tailwind':
      return (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
          <path d="M12 6c-3.314 0-5.467 1.657-6.46 4.97 1.324-1.324 2.813-1.82 4.468-1.488 1.054.212 1.808.972 2.64 1.812C13.996 12.678 15.65 14.34 20.46 14.34c3.314 0 5.467-1.657 6.46-4.97-1.324 1.324-2.813 1.82-4.468 1.488-1.054-.212-1.808-.972-2.64-1.812C18.464 7.662 16.81 6 12 6zM5.54 14.34c-3.314 0-5.467 1.657-6.46 4.97 1.324-1.324 2.813-1.82 4.468-1.488 1.054.212 1.808.972 2.64 1.812 1.348 1.384 3.002 3.046 7.812 3.046 3.314 0 5.467-1.657 6.46-4.97-1.324 1.324-2.813 1.82-4.468 1.488-1.054-.212-1.808-.972-2.64-1.812-1.348-1.384-3.002-3.046-7.812-3.046z" fill="#38BDF8"/>
        </svg>
      );
    case 'nodejs':
      return (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2z" fill="#339933"/>
          <path d="M12 12.5L7 9.5V14.5L12 17.5L17 14.5V9.5L12 12.5z" fill="#FFF"/>
        </svg>
      );
    case 'seo':
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#FF5500] to-[#FF8800] text-white shadow-md">
          <Search className="w-5 h-5" />
        </div>
      );
    case 'express':
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-800 font-extrabold text-sm border border-slate-200">
          ex
        </div>
      );
    case 'mongodb':
      return (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C11.5 4 6 9.5 6 15c0 3.3 2.7 6 6 6s6-2.7 6-6c0-5.5-5.5-11-6-13z" fill="#47A248"/>
          <path d="M12 2v19" stroke="#FFF" strokeWidth="1"/>
        </svg>
      );
    case 'postman':
      return (
        <svg className="w-10 h-10" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="11" fill="#FF6C37"/>
          <path d="M7 12l10-4-4 10-2-4-4-2z" fill="#FFF"/>
        </svg>
      );
    case 'sql':
      return (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="5" rx="9" ry="3" fill="#00758F" />
          <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="#00758F" strokeWidth="2"/>
          <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" stroke="#00758F" strokeWidth="2"/>
        </svg>
      );
    case 'firebase':
      return (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
          <path d="M3.8 17.5L7.2 3.1l4.2 7.8L3.8 17.5z" fill="#FFA000"/>
          <path d="M13.8 8.6l2.1-4.1 4.3 13-6.4-8.9z" fill="#F44336"/>
          <path d="M3.8 17.5L12 22l8.2-4.5-8.8-13.8L3.8 17.5z" fill="#FFCA28"/>
        </svg>
      );
    case 'postgresql':
      return (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-3.5H9v-2h2V9h2v2h2v2h-2v3.5z" fill="#336791"/>
        </svg>
      );
    case 'github':
      return (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#181717">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      );
    case 'antigravity':
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#FF5500] to-[#FF8800] text-white shadow-md">
          <Sparkles className="w-5 h-5" />
        </div>
      );
    case 'vscode':
      return (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
          <path d="M23.15 2.587L18.21.791a1.49 1.49 0 00-1.654.402L9.262 9.07 4.29 5.253a.853.853 0 00-1.127.067L.425 8.01a.854.854 0 00.016 1.228l4.475 4.148-4.475 4.148a.854.854 0 00-.016 1.228l2.738 2.69a.853.853 0 001.127.067l4.972-3.817 7.294 7.877c.433.467 1.13.626 1.654.402l4.94-1.796A1.5 1.5 0 0024 22.588V3.999a1.5 1.5 0 00-.85-1.412zM18 16.687l-5.694-4.687L18 7.313v9.374z" fill="#007ACC"/>
        </svg>
      );
    case 'aitools':
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-500 to-indigo-600 text-white shadow-md">
          <Sparkles className="w-5 h-5" />
        </div>
      );
    default:
      return null;
  }
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'tools'>('all');

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-16 bg-[#FAFAFD] z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Content */}
        <div className="text-center flex flex-col items-center">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FFD8C2] bg-[#FFF5EF] mb-4">
            <Rocket className="w-4 h-4 text-[#FF5500]" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#FF5500]">
              My Skills
            </span>
          </div>

          {/* Main Headline */}
          <div className="mb-3">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Tech <span className="text-[#FF5500]">Stack</span>
            </h2>
            <div className="w-12 h-1 bg-[#FF5500] rounded-full mx-auto mt-2" />
          </div>

          {/* Subtitle Paragraph */}
          <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed max-w-xl text-center mb-8">
            Specialized in MERN stack, React, Next.js, Node.js, and modern cloud technologies to build scalable, secure, and high-performance web applications.
          </p>

          {/* 3 Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10 p-1.5 rounded-full bg-white border border-slate-200/80 shadow-sm">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-200 ${
                    isActive ? 'text-white shadow-md' : 'text-slate-700 hover:text-[#FF5500]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillTab"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF5500] to-[#FF6600]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Skills Grid */}
          <motion.div
            layout
            className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5"
          >
            <AnimatePresence>
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  className="group relative bg-white rounded-2xl p-5 border border-slate-200/70 shadow-sm flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1.5 hover:border-[#FF5500]/40"
                >
                  {/* Category Pill Tag */}
                  <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 group-hover:bg-[#FFF5EF] group-hover:text-[#FF5500]">
                    {skill.category}
                  </span>

                  {/* Icon Container Badge */}
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${skill.bgColor} mb-3 transition-transform duration-300 group-hover:scale-110 mt-2`}>
                    <SkillIcon type={skill.iconType} />
                  </div>

                  {/* Skill Title */}
                  <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight">
                    {skill.name}
                  </h3>

                  {/* Colored Bottom Accent Indicator Line */}
                  <div className={`w-6 h-[2.5px] ${skill.lineColor} rounded-full mt-2.5 transition-all duration-300 group-hover:w-10`} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
