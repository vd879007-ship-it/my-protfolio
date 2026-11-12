'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Rocket, Sparkles, ArrowRight } from 'lucide-react';

const techIcons = [
  { name: 'HTML5', bg: 'bg-orange-50 text-[#E34F26]', label: '5' },
  { name: 'CSS3', bg: 'bg-blue-50 text-[#1572B6]', label: '3' },
  { name: 'JavaScript', bg: 'bg-amber-50 text-[#F7DF1E]', label: 'JS' },
  { name: 'React', bg: 'bg-cyan-50 text-[#61DAFB]', label: '⚛' },
  { name: 'Node.js', bg: 'bg-emerald-50 text-[#339933]', label: 'JS' },
  { name: 'MongoDB', bg: 'bg-emerald-50 text-[#47A248]', label: '🍃' },
  { name: 'Express', bg: 'bg-slate-100 text-slate-800', label: 'ex' },
  { name: 'Git', bg: 'bg-slate-100 text-slate-800', label: '🐙' },
];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [scene, setScene] = useState<number>(2);
  const [progress, setProgress] = useState<number>(0);
  const [isLaunching, setIsLaunching] = useState<boolean>(false);
  const [preloaderExit, setPreloaderExit] = useState<boolean>(false);

  // Fast, cinematic timeline
  useEffect(() => {
    const t1 = setTimeout(() => setScene(3), 200);
    const t2 = setTimeout(() => setScene(5), 500);
    const t3 = setTimeout(() => setScene(6), 800);
    const t4 = setTimeout(() => setScene(7), 1100);

    // Hard safety fallback: Always complete after 2.5s maximum
    const fallbackTimer = setTimeout(() => {
      setPreloaderExit(true);
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(fallbackTimer);
    };
  }, [onComplete]);

  // Fast Progress Ticker
  useEffect(() => {
    if (scene >= 7) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsLaunching(true);
            setTimeout(() => setPreloaderExit(true), 400);
            setTimeout(() => onComplete(), 700);
            return 100;
          }
          return prev + 10;
        });
      }, 35);
      return () => clearInterval(interval);
    }
  }, [scene, onComplete]);

  const handleSkip = () => {
    setPreloaderExit(true);
    onComplete();
  };

  return (
    <AnimatePresence>
      {!preloaderExit && (
        <motion.div
          key="preloader-overlay"
          initial={{ opacity: 1, y: 0 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FAFAFD] overflow-hidden select-none"
        >
          {/* Skip Button */}
          <button
            onClick={handleSkip}
            className="absolute top-6 right-6 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-500 hover:text-[#FF5500] hover:bg-[#FFF5EF] transition-all border border-slate-200/80 bg-white/80 shadow-sm z-50 cursor-pointer"
          >
            <span>Skip Intro</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Soft Background Orange Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#FF5500]/20 via-[#FF8800]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Center Content Container */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[340px] px-4 text-center">
            
            {/* Brackets, 3D D Logo Emblem, Name & Subtitle */}
            {!isLaunching && (
              <motion.div className="relative flex flex-col items-center">
                
                {/* Code Brackets < > & 3D Logo */}
                <div className="relative flex items-center justify-center gap-3 sm:gap-6 mb-4">
                  <span className="text-4xl sm:text-6xl font-black text-[#FF5500] tracking-tighter">
                    &lt;
                  </span>

                  <div className="relative flex items-center justify-center h-20 sm:h-24">
                    <Image
                      src="/d-icon.png"
                      alt="Dinesh Logo"
                      width={100}
                      height={100}
                      priority
                      className="h-20 sm:h-24 w-auto object-contain drop-shadow-xl"
                    />
                  </div>

                  <span className="text-4xl sm:text-6xl font-black text-[#FF5500] tracking-tighter">
                    &gt;
                  </span>
                </div>

                {/* Name & Subtitle Reveal */}
                <div className="flex flex-col items-center">
                  <h1 className="text-3xl sm:text-4xl font-black tracking-tight flex items-center justify-center">
                    <span className="text-[#0F2042]">D</span>
                    <span className="bg-gradient-to-r from-[#FF5500] via-[#FF6600] to-[#FF8800] bg-clip-text text-transparent">
                      inesh
                    </span>
                  </h1>

                  <div className="flex items-center gap-2.5 mt-1.5">
                    <span className="w-6 h-[1.5px] bg-[#FF5500]" />
                    <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-slate-800 uppercase">
                      FULL STACK DEVELOPER
                    </span>
                    <span className="w-6 h-[1.5px] bg-[#FF5500]" />
                  </div>
                </div>

                {/* Tech Stack Icons */}
                {scene >= 6 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-wrap items-center justify-center gap-2 mt-4 max-w-sm"
                  >
                    {techIcons.map((tech) => (
                      <div
                        key={tech.name}
                        className={`flex h-7 w-7 items-center justify-center rounded-lg font-black text-[11px] shadow-sm border border-slate-100 ${tech.bg}`}
                        title={tech.name}
                      >
                        {tech.label}
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* Loading Text & Progress Bar */}
                <div className="w-full max-w-xs mt-5 flex flex-col items-center">
                  <p className="text-[11px] font-bold text-slate-500 mb-1.5">
                    Loading Portfolio...
                  </p>

                  <div className="w-full h-2 bg-slate-200/80 rounded-full overflow-hidden p-0.5 shadow-inner">
                    <div
                      className="h-full bg-gradient-to-r from-[#FF5500] to-[#FF8800] rounded-full transition-all duration-150"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <span className="text-[11px] font-black text-[#FF5500] mt-1">
                    {progress}%
                  </span>
                </div>

              </motion.div>
            )}

            {/* Launch Animation */}
            {isLaunching && (
              <div className="relative flex flex-col items-center justify-center min-h-[220px]">
                <div className="mb-4 flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF5EF] border border-[#FFD8C2] text-[#FF5500] font-extrabold text-xs shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ready!</span>
                </div>

                <div className="p-3 rounded-2xl bg-gradient-to-tr from-[#FF5500] to-[#FF8800] text-white shadow-xl shadow-[#FF5500]/50">
                  <Rocket className="w-8 h-8 -rotate-45" />
                </div>
              </div>
            )}

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
