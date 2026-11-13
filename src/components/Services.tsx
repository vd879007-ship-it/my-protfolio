'use client';

import {
  Code2,
  Layout,
  Server,
  Database,
  Smartphone,
  Gauge,
  ShieldCheck,
  Rocket,
  Send,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const services = [
  {
    step: '01',
    title: 'Web Development',
    description:
      'Building responsive, fast and modern websites using the latest technologies.',
    icon: Code2,
  },
  {
    step: '02',
    title: 'UI/UX Design',
    description:
      'Designing clean, intuitive and engaging user interfaces that deliver great experiences.',
    icon: Layout,
  },
  {
    step: '03',
    title: 'Backend Development',
    description:
      'Developing secure and scalable server-side applications and RESTful APIs.',
    icon: Server,
  },
  {
    step: '04',
    title: 'Database Management',
    description:
      'Designing and managing efficient databases for optimal performance and reliability.',
    icon: Database,
  },
  {
    step: '05',
    title: 'Responsive Design',
    description:
      'Creating mobile-friendly websites that work perfectly on all devices and screen sizes.',
    icon: Smartphone,
  },
  {
    step: '06',
    title: 'Performance Optimization',
    description:
      'Optimizing websites for speed, SEO and performance to ensure the best user experience.',
    icon: Gauge,
  },
  {
    step: '07',
    title: 'Web Security',
    description:
      'Implementing best practices to secure applications and protect data from vulnerabilities.',
    icon: ShieldCheck,
  },
  {
    step: '08',
    title: 'Deployment & Hosting',
    description:
      'Deploying applications to the cloud and managing hosting for seamless availability.',
    icon: Rocket,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-16 bg-[#FAFAFD] border-t border-slate-100 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center mb-12">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FFD8C2] bg-[#FFF5EF] mb-3">
            <Sparkles className="w-4 h-4 text-[#FF5500]" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#FF5500]">
              My Services
            </span>
          </div>

          {/* Headline */}
          <div className="mb-2">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Services <span className="text-[#FF5500]">I Offer</span>
            </h2>
            <div className="w-12 h-1 bg-[#FF5500] rounded-full mx-auto mt-2" />
          </div>

          {/* Subtitle */}
          <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed max-w-xl text-center">
            I build scalable, high-performance and user-friendly web applications that help businesses grow and succeed.
          </p>
        </div>

        {/* 8 Services Grid (4 Cols x 2 Rows on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.step}
                className="group relative bg-white rounded-2xl p-6 border border-slate-100/90 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 hover:border-[#FF5500]/30"
              >
                <div>
                  {/* Top Header: Icon & Step Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF5EF] text-[#FF5500] border border-[#FFD8C2]/60 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-7 w-7 stroke-[2]" />
                    </div>

                    <span className="px-2.5 py-0.5 rounded-md text-xs font-black bg-[#FFF5EF] text-[#FF5500] border border-[#FFD8C2]/60">
                      {service.step}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-lg font-black text-slate-900 tracking-tight mb-2 group-hover:text-[#FF5500] transition-colors">
                    {service.title}
                  </h3>

                  {/* Orange Underline Accent */}
                  <div className="w-6 h-[2.5px] bg-[#FF5500] rounded-full mb-3 transition-all duration-300 group-hover:w-10" />

                  {/* Service Description */}
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call-To-Action Banner */}
        <div className="mt-12 max-w-5xl mx-auto bg-gradient-to-r from-[#FFF5EF] via-[#FFF0E6] to-[#FFF5EF] rounded-2xl p-6 border border-[#FFD8C2] shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FF5500] text-white shadow-md shadow-[#FF5500]/30">
              <Send className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-900 leading-snug">
                Have a Project in Mind?
              </h3>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">
                Let&apos;s work together to bring your ideas to life.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#FF5500] px-6 py-3 text-xs font-extrabold text-white shadow-md transition-all duration-200 hover:bg-[#E04B00] hover:scale-105 hover:shadow-lg active:scale-95 whitespace-nowrap"
          >
            <span>Let&apos;s Connect</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
