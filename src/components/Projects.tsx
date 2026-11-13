'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ExternalLink, FolderKanban, Sparkles } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  category: 'E-Commerce' | 'Corporate & Industry' | 'Education & Health' | 'Travel & Services';
  description: string;
  image: string;
  tags: string[];
  liveLink: string;
  codeLink: string;
  buttonText: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Shanmugam Industries – Manufacturing Website',
    category: 'Corporate & Industry',
    description: 'Premier manufacturer portal for high-performance automotive body fillers, metal pastes, and polyester putty refinish solutions engineered with Next.js and modern industrial UI by Dinesh V.',
    image: '/projects/shanmugam.png',
    tags: ['Automotive Refinish', 'Manufacturing', 'Industrial UI', 'Next.js'],
    liveLink: 'https://shanmugam-industries-final.vercel.app/',
    codeLink: 'https://github.com/vd879007-ship-it',
    buttonText: 'Live Demo',
  },
  {
    id: 2,
    title: 'Fundun Holidays – Travel & Tourism Portal',
    category: 'Travel & Services',
    description: 'Comprehensive South India travel platform showcasing luxury packages to Ooty, Munnar, Kodaikanal, Coorg & Goa with responsive booking and custom inquiry architecture.',
    image: '/projects/fundun-holidays.png',
    tags: ['Tours & Travels', 'Holiday Packages', 'South India', 'Interactive UI'],
    liveLink: 'https://vd879007-ship-it.github.io/fundun-holidays/',
    codeLink: 'https://github.com/vd879007-ship-it/fundun-holidays',
    buttonText: 'Live Demo',
  },
  {
    id: 3,
    title: 'MSEED – Learning Management System',
    category: 'Education & Health',
    description: 'Next-generation learning management portal empowering students through industry-aligned skill development, structured modules, and interactive portals built with clean MERN stack architecture.',
    image: '/projects/mseed.png',
    tags: ['LMS Platform', 'E-Learning', 'Student Portal', 'Skill Development'],
    liveLink: 'https://vd879007-ship-it.github.io/MSEED/',
    codeLink: 'https://github.com/vd879007-ship-it/MSEED',
    buttonText: 'Live Demo',
  },
  {
    id: 4,
    title: 'ROKEA by RK – Luxury Sarees & Jewellery',
    category: 'E-Commerce',
    description: 'Curated e-commerce boutique for handcrafted heritage sarees, Dubion silk, and exclusive jewelry collections with rich catalog visuals, real-time cart state, and smooth user checkout.',
    image: '/projects/rokea.png',
    tags: ['E-Commerce', 'Luxury Fashion', 'Online Store', 'Modern Cart UI'],
    liveLink: 'https://rokea-by-rk.vercel.app/',
    codeLink: 'https://github.com/vd879007-ship-it',
    buttonText: 'Live Demo',
  },
  {
    id: 5,
    title: 'Kovai Fertility & Health Center',
    category: 'Education & Health',
    description: 'Natural fertility and sexual wellness clinic portal with 30+ years of clinical trust, featuring Ayurvedic treatments, responsive medical UI, and direct consultation booking.',
    image: '/projects/fertility-center.png',
    tags: ['Hospital Website', 'Ayurveda', 'Doctor Consultation', 'Medical Portal'],
    liveLink: 'https://fertility-center.vercel.app/',
    codeLink: 'https://github.com/vd879007-ship-it',
    buttonText: 'Live Demo',
  },
  {
    id: 6,
    title: 'Aero Kinetic – Performance Footwear Store',
    category: 'E-Commerce',
    description: 'Modern shoe shop and e-commerce portal featuring athletic sneakers, next-gen performance footwear, interactive product filtering, and sleek responsive shopping interface.',
    image: '/projects/shoes-shop.png',
    tags: ['Shoe Shop', 'Athletic Footwear', 'E-Commerce', 'Modern UI'],
    liveLink: 'https://shoes-shop-azure.vercel.app/',
    codeLink: 'https://github.com/vd879007-ship-it',
    buttonText: 'Live Demo',
  },
  {
    id: 7,
    title: 'EssEmm Corporation – Kitchen & Furniture Machines',
    category: 'Corporate & Industry',
    description: 'Industrial food machinery portal transforming commercial kitchens since 1997 with premium Cosmos commercial equipment, multi-utility grinders, and automated processing solutions.',
    image: '/projects/essemm.png',
    tags: ['Commercial Machines', 'Industrial Equipment', 'Food Processing', 'Kitchen Solutions'],
    liveLink: 'https://essemm-furniture.vercel.app/',
    codeLink: 'https://github.com/vd879007-ship-it',
    buttonText: 'Live Demo',
  },
  {
    id: 8,
    title: 'SABOL Water Solutions – Delivery Service',
    category: 'Corporate & Industry',
    description: 'Packaged drinking water delivery service providing pure water cans and bottles for residential homes, corporate offices, businesses, hotels, and events with WhatsApp order routing.',
    image: '/projects/sabol-water.png',
    tags: ['Water Company', 'Online Ordering', 'Delivery Service', 'Corporate Supply'],
    liveLink: 'https://sabol-water.vercel.app/',
    codeLink: 'https://github.com/vd879007-ship-it',
    buttonText: 'Live Demo',
  },
  {
    id: 9,
    title: 'Titan Fitness – Premium Gym Website',
    category: 'Travel & Services',
    description: 'High-energy fitness club platform featuring certified personal trainers, workout equipment catalogs, custom training programs, and interactive membership plans.',
    image: '/projects/titan-fitness.png',
    tags: ['Gym & Fitness', 'Trainer Programs', 'Membership Plans', 'Workout Schedules'],
    liveLink: 'https://skillstardevsrc-sys.github.io/gym-website/',
    codeLink: 'https://github.com/skillstardevsrc-sys/gym-website',
    buttonText: 'Live Demo',
  },
  {
    id: 10,
    title: 'Ink Studio – Tattoo & Body Art Center',
    category: 'Travel & Services',
    description: 'Creative tattoo studio and body art showcase platform highlighting custom flash designs, artist gallery portfolios, hygiene standards, and consultation booking.',
    image: '/projects/tattoo-center.png',
    tags: ['Tattoo Studio', 'Body Art', 'Artist Portfolio', 'Appointment Booking'],
    liveLink: 'https://tatttos-new-dqu9.vercel.app',
    codeLink: 'https://github.com/vd879007-ship-it',
    buttonText: 'Live Demo',
  },
];

const categories = [
  'All',
  'E-Commerce',
  'Corporate & Industry',
  'Education & Health',
  'Travel & Services',
] as const;

type CategoryType = (typeof categories)[number];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  const handlePrevCategory = () => {
    const currentIndex = categories.indexOf(selectedCategory);
    const nextIndex = (currentIndex - 1 + categories.length) % categories.length;
    setSelectedCategory(categories[nextIndex]);
  };

  const handleNextCategory = () => {
    const currentIndex = categories.indexOf(selectedCategory);
    const nextIndex = (currentIndex + 1) % categories.length;
    setSelectedCategory(categories[nextIndex]);
  };

  return (
    <section id="projects" className="relative py-20 bg-white border-t border-slate-100 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            {/* Small Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FFD8C2] bg-[#FFF5EF] mb-3">
              <FolderKanban className="w-3.5 h-3.5 text-[#FF5500]" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#FF5500]">
                Featured Works ({projects.length})
              </span>
            </div>

            {/* Headline */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                Featured <span className="text-[#FF5500]">Projects</span>
              </h2>
              <div className="w-12 h-1 bg-[#FF5500] rounded-full mt-2" />
            </div>
            <p className="mt-3 text-sm text-slate-600 max-w-xl font-medium">
              Explore live industry, e-commerce, healthcare, and enterprise web solutions built with modern technology stacks.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-slate-400 hidden sm:inline-block">
              Filter by Category
            </span>
            <button
              onClick={handlePrevCategory}
              aria-label="Previous Category"
              title="Previous Category"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100/80 text-slate-700 border border-slate-200/80 transition-all hover:bg-[#FFF5EF] hover:text-[#FF5500] hover:border-[#FF5500]/40 hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNextCategory}
              aria-label="Next Category"
              title="Next Category"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100/80 text-slate-700 border border-slate-200/80 transition-all hover:bg-[#FFF5EF] hover:text-[#FF5500] hover:border-[#FF5500]/40 hover:scale-105 active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-100">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            const count = category === 'All'
              ? projects.length
              : projects.filter((p) => p.category === category).length;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#FF5500] text-white shadow-md shadow-[#FF5500]/20 scale-105'
                    : 'bg-slate-100/80 text-slate-600 hover:bg-[#FFF5EF] hover:text-[#FF5500]'
                }`}
              >
                {category === 'All' && <Sparkles className="w-3.5 h-3.5" />}
                <span>{category}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-black ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl p-5 border border-slate-200/80 shadow-md flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 hover:border-[#FF5500]/40"
            >
              <div>
                {/* Project Image Banner with Badge */}
                <div className="relative w-full h-[220px] rounded-2xl overflow-hidden mb-5 bg-slate-900 border border-slate-200/60 shadow-inner group-hover:shadow-md transition-shadow">
                  <Image
                    src={project.image}
                    alt={`${project.title} - Web Development Project by Dinesh V Full Stack Developer`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                  {/* Project Index Pill (Top Left) */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-black text-white tracking-wide">
                    #{project.id < 10 ? `0${project.id}` : project.id}
                  </div>

                  {/* Category Pill (Top Right) */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-md border border-white/40 text-[10px] font-extrabold text-[#FF5500] uppercase tracking-wider shadow-sm">
                    {project.category}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-black text-slate-900 tracking-tight mb-2 group-hover:text-[#FF5500] transition-colors line-clamp-1">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-[#FFF5EF] text-[#FF5500] border border-[#FFD8C2]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button (View Live Demo) */}
              <div className="pt-3 border-t border-slate-100">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#FF5500] px-4 py-2.5 text-xs font-extrabold text-white shadow-md transition-all hover:bg-[#E04B00] hover:shadow-lg hover:scale-[1.01] active:scale-95"
                >
                  <span>View Live Demo</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
