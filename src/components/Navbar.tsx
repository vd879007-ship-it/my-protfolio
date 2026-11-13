'use client';

import { useState } from 'react';
import Image from 'next/image';
import { User, ArrowRight } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Services', href: '/#services' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQ', href: '/#faq' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAFAFD]/90 backdrop-blur-md transition-all border-b border-slate-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        
        {/* Developer Logo (Left): Exact Custom Logo from image copy 2.png */}
        <a href="/#home" className="flex items-center group">
          <Image
            src="/dinesh-logo.png"
            alt="Dinesh V - Best Full Stack Developer in Tamil Nadu Logo"
            width={260}
            height={65}
            priority
            className="h-10 sm:h-12 w-auto object-contain hover:scale-105 transition-transform duration-200"
          />
        </a>

        {/* Center Navigation Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveTab(item.name)}
                className={`relative py-1 text-sm font-bold tracking-wide transition-colors duration-200 whitespace-nowrap ${
                  isActive ? 'text-[#FF5500]' : 'text-slate-700 hover:text-[#FF5500]'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2.5px] bg-[#FF5500] rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right CTA Button: Orange "Hire Me! →" */}
        <a
          href="/#contact"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF6600] px-5 py-2.5 text-xs font-extrabold text-white shadow-md transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
        >
          <User className="h-4 w-4" />
          <span>Hire Me!</span>
          <ArrowRight className="h-4 w-4" />
        </a>
      </nav>
    </header>
  );
}
