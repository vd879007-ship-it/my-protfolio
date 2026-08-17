'use client';

import { Code2, Monitor, Lightbulb, Rocket } from 'lucide-react';

const features = [
  {
    title: 'Frontend',
    icon: Code2,
    subtitle: 'React, Next.js, Tailwind CSS',
  },
  {
    title: 'Backend & APIs',
    icon: Monitor,
    subtitle: 'Node.js, Express, MongoDB',
  },
  {
    title: 'Problem Solver',
    icon: Lightbulb,
    subtitle: 'DSA, Clean Code, Logic',
  },
  {
    title: 'Lifelong Learner',
    icon: Rocket,
    subtitle: 'Always exploring new tech',
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-8 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Rectangle Container Card */}
      <div className="bg-white rounded-2xl p-6 md:p-7 border border-slate-200/80 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`flex items-center gap-4 px-3 md:px-6 ${
                  index !== features.length - 1 ? 'lg:border-r lg:border-slate-100' : ''
                }`}
              >
                {/* Icon Container */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF5EF] text-[#FF5500] border border-[#FFD8C2]">
                  <Icon className="h-6 w-6 stroke-[2]" />
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {feature.subtitle}
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
