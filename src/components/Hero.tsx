'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Instagram, Mail } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/vd879007-ship-it' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/dinesh-v-2207ba377' },
  { name: 'Email', icon: Mail, href: 'mailto:dineshcse142@gmail.com' },
];

interface HeroProps {
  isLoaded?: boolean;
}

export default function Hero({ isLoaded = true }: HeroProps) {
  // Staggered animation variants for content (Left Column)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  return (
    <section className="relative pt-6 pb-10 md:pt-10 md:pb-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[500px]">
        
        {/* LEFT COLUMN - Content (Animates First) */}
        <motion.div
          className="lg:col-span-6 flex flex-col justify-center items-start space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
        >
          {/* Small Pill Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FFD8C2] bg-[#FFF5EF]"
          >
            <span className="text-xs">👋</span>
            <span className="text-xs font-semibold text-[#FF5500]">
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants} className="space-y-1">
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 flex items-center gap-2">
              Hi, I&apos;m Dinesh V <span className="inline-block animate-bounce">👋</span>
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.1]">
              Best Full Stack <br />
              <span className="text-[#FF5500]">Developer</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-slate-600 max-w-lg leading-relaxed font-normal"
          >
            Currently working as Full Stack Developer at <strong>Skillstar Digital Solutions</strong> company &amp; leading MERN specialist in Tamil Nadu, India. Building high-performance, fast, and SEO-optimized web applications with Next.js, React, and Node.js.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-1">
            {/* Primary Orange Button */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-[#FF5500] text-white font-bold text-sm shadow-md transition-all hover:bg-[#E04B00] hover:shadow-lg hover:scale-105 active:scale-95"
            >
              <span>Hire Me</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Secondary White Button */}
            <a
              href="/resume.pdf"
              download="Dinesh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-800 font-semibold text-sm border border-slate-200 shadow-sm hover:bg-slate-50 transition-all hover:scale-105 active:scale-95"
            >
              <Download className="w-4 h-4 text-slate-600" />
              <span>Download CV</span>
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 pt-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100/80 text-slate-700 transition-all hover:bg-[#FFF5EF] hover:text-[#FF5500] hover:scale-110 active:scale-95"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN - Image & Backdrop (Animates AFTER Content) */}
        <motion.div
          className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] lg:min-h-[500px]"
          initial={{ opacity: 0, x: 40 }}
          animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
        >
          {/* Backdrop Geometry Container */}
          <div className="relative w-full max-w-[460px] h-[440px] flex items-center justify-center">
            
            {/* Left Dotted Matrix Pattern */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isLoaded ? { opacity: 0.7, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 grid grid-cols-4 gap-2.5 z-0"
            >
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={`left-dot-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#FF8844]" />
              ))}
            </motion.div>

            {/* Right Dotted Matrix Pattern */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isLoaded ? { opacity: 0.7, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 grid grid-cols-4 gap-2.5 z-0"
            >
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={`right-dot-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#FF8844]" />
              ))}
            </motion.div>

            {/* Thin Arc Orbital Ring with Accent Dots */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -20 }}
              animate={isLoaded ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.8, delay: 0.95, ease: 'easeOut' }}
              className="absolute w-[390px] h-[390px] sm:w-[450px] sm:h-[450px] rounded-full border border-[#FF5500]/30 z-0 pointer-events-none"
            >
              <div className="absolute top-10 right-12 w-3 h-3 rounded-full bg-[#FF5500] shadow-sm" />
              <div className="absolute bottom-16 left-8 w-2.5 h-2.5 rounded-full bg-[#FF5500]" />
            </motion.div>

            {/* Large Solid Orange Circle Backdrop */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={isLoaded ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{
                type: 'spring',
                stiffness: 180,
                damping: 20,
                delay: 0.85,
              }}
              className="absolute w-[310px] h-[310px] sm:w-[370px] sm:h-[370px] rounded-full bg-gradient-to-tr from-[#FF5500] via-[#FF6600] to-[#FF7700] shadow-2xl z-0"
            />

            {/* Transparent Developer Cutout Image */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={isLoaded ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.95 }}
              transition={{ duration: 0.7, delay: 1.05, ease: 'easeOut' }}
              className="relative z-10 w-[290px] sm:w-[350px] h-[390px] sm:h-[450px] flex items-end justify-center pointer-events-none"
            >
              <Image
                src="/image.png"
                alt="Dinesh V - Best Full Stack Developer in Tamil Nadu"
                width={450}
                height={550}
                priority
                className="object-contain object-bottom drop-shadow-2xl translate-y-1"
              />
            </motion.div>

            {/* Floating Glass Card (Top Right) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                isLoaded
                  ? { opacity: 1, scale: 1, y: [0, -8, 0] }
                  : { opacity: 0, scale: 0.5 }
              }
              transition={{
                opacity: { duration: 0.5, delay: 1.25 },
                scale: { type: 'spring', stiffness: 260, damping: 20, delay: 1.25 },
                y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.75 },
              }}
              className="absolute top-4 right-0 sm:-right-2 z-20 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 max-w-[160px]"
            >
              <p className="text-xs font-semibold text-slate-800 leading-tight">
                Turning <br />
                Ideas into
              </p>
              <p className="text-sm font-extrabold text-[#FF5500] mt-0.5">
                Reality 🚀
              </p>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
