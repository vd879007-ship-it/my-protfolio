'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Rocket, Sparkles } from 'lucide-react';

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
  const [scene, setScene] = useState<number>(1);
  const [progress, setProgress] = useState<number>(0);
  const [isLaunching, setIsLaunching] = useState<boolean>(false);
  const [preloaderExit, setPreloaderExit] = useState<boolean>(false);

  useEffect(() => {
    // Storyboard Timeline Steps
    const t1 = setTimeout(() => setScene(2), 700);   // Code Brackets appear
    const t2 = setTimeout(() => setScene(3), 1400);  // 3D Letter D emblem forms
    const t3 = setTimeout(() => setScene(4), 2100);  // Scale / Glow effect
    const t4 = setTimeout(() => setScene(5), 3000);  // Name & Subtitle reveal
    const t5 = setTimeout(() => setScene(6), 3800);  // Tech stack icons pop up
    const t6 = setTimeout(() => setScene(7), 4600);  // Loading text & progress bar
    
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, []);

  // Progress Ticker (0% to 100%)
  useEffect(() => {
    if (scene >= 7) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            
            // 100% Launch Trigger
            setTimeout(() => {
              setIsLaunching(true);
            }, 300);

            // Curtain Slide Exit
            setTimeout(() => {
              setPreloaderExit(true);
            }, 1200);

            // Complete Callback
            setTimeout(() => {
              onComplete();
            }, 1800);

            return 100;
          }
          return prev + 3;
        });
      }, 25);
      return () => clearInterval(interval);
    }
  }, [scene, onComplete]);

  return (
    <AnimatePresence>
      {!preloaderExit && (
        <motion.div
          key="preloader-overlay"
          initial={{ opacity: 1, y: 0 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FAFAFD] overflow-hidden select-none"
        >
          {/* Soft Background Orange Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#FF5500]/20 via-[#FF8800]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Background Floating Orange Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(16)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-[#FF5500]/40"
                style={{
                  top: `${(i * 14 + 8) % 90}%`,
                  left: `${(i * 23 + 12) % 90}%`,
                }}
                animate={{
                  y: [-15, 15, -15],
                  opacity: [0.2, 0.7, 0.2],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2.5 + (i % 3),
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* Center Content Container */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[340px] px-4 text-center">
            
            {/* SCENE 1: Blinking Cursor */}
            {scene === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-5xl font-mono text-[#FF5500] font-bold"
              >
                <span className="inline-block animate-pulse">|</span>
              </motion.div>
            )}

            {/* SCENE 2 to 7: Brackets, 3D D Logo Emblem, Name & Subtitle */}
            {scene >= 2 && !isLaunching && (
              <motion.div className="relative flex flex-col items-center">
                
                {/* Code Brackets < > & Exact 3D 'D' Logo Icon (/d-icon.png) */}
                <div className="relative flex items-center justify-center gap-3 sm:gap-6 mb-4">
                  
                  {/* Left Code Bracket < */}
                  <motion.span
                    initial={{ x: -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="text-4xl sm:text-6xl font-black text-[#FF5500] tracking-tighter"
                  >
                    &lt;
                  </motion.span>

                  {/* Exact 3D Navy Blue & Orange Orbital 'D' Logo Emblem */}
                  {scene >= 3 && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0, rotate: -15 }}
                      animate={{ scale: 1, opacity: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                      className="relative flex items-center justify-center h-24 sm:h-28"
                    >
                      <Image
                        src="/d-icon.png"
                        alt="3D D Logo Emblem"
                        width={120}
                        height={120}
                        priority
                        className="h-24 sm:h-28 w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform"
                      />
                    </motion.div>
                  )}

                  {/* Right Code Bracket > */}
                  <motion.span
                    initial={{ x: 60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="text-4xl sm:text-6xl font-black text-[#FF5500] tracking-tighter"
                  >
                    &gt;
                  </motion.span>
                </div>

                {/* SCENE 5: Name & Subtitle Reveal */}
                {scene >= 5 && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center"
                  >
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tight flex items-center justify-center">
                      <span className="text-[#0F2042] drop-shadow-sm">D</span>
                      <span className="bg-gradient-to-r from-[#FF5500] via-[#FF6600] to-[#FF8800] bg-clip-text text-transparent">
                        inesh
                      </span>
                    </h1>

                    {/* Subtitle with Side Lines */}
                    <div className="flex items-center gap-2.5 mt-2">
                      <span className="w-6 h-[1.5px] bg-[#FF5500]" />
                      <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-slate-800 uppercase">
                        FULL STACK DEVELOPER
                      </span>
                      <span className="w-6 h-[1.5px] bg-[#FF5500]" />
                    </div>
                  </motion.div>
                )}

                {/* SCENE 6: Tech Stack Icons Popup */}
                {scene >= 6 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-5 max-w-sm"
                  >
                    {techIcons.map((tech, idx) => (
                      <motion.div
                        key={tech.name}
                        initial={{ scale: 0, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 18,
                          delay: idx * 0.07,
                        }}
                        className={`flex h-8 w-8 items-center justify-center rounded-xl font-black text-xs shadow-sm border border-slate-100 ${tech.bg}`}
                        title={tech.name}
                      >
                        {tech.label}
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* SCENE 7: Loading Text & Progress Bar */}
                {scene >= 7 && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-xs mt-6 flex flex-col items-center"
                  >
                    <p className="text-xs font-bold text-slate-600 mb-2">
                      Building Amazing Experiences...
                    </p>

                    {/* Progress Bar Track */}
                    <div className="w-full h-2.5 bg-slate-200/80 rounded-full overflow-hidden p-0.5 shadow-inner">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#FF5500] to-[#FF8800] rounded-full shadow-md"
                        style={{ width: `${progress}%` }}
                        transition={{ ease: 'easeOut' }}
                      />
                    </div>

                    {/* Percentage Counter */}
                    <span className="text-xs font-black text-[#FF5500] mt-1.5">
                      {progress}%
                    </span>
                  </motion.div>
                )}

              </motion.div>
            )}

            {/* SCENE 8 & 9: Dynamic Rocket Blast Off Launch Animation */}
            {isLaunching && (
              <div className="relative flex flex-col items-center justify-center min-h-[300px]">
                
                {/* Launch Text */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-8 flex items-center gap-2 px-5 py-2 rounded-full bg-[#FFF5EF] border border-[#FFD8C2] text-[#FF5500] font-extrabold text-sm shadow-sm"
                >
                  <Sparkles className="w-4 h-4 animate-spin-slow" />
                  <span>Launching Portfolio...</span>
                </motion.div>

                {/* Rocket Icon Launching Upward */}
                <motion.div
                  initial={{ y: 80, scale: 1, opacity: 0 }}
                  animate={{
                    y: -900,
                    scale: 2.2,
                    opacity: [0, 1, 1, 0.9, 0],
                  }}
                  transition={{
                    duration: 1.2,
                    ease: [0.45, 0, 0.15, 1],
                  }}
                  className="relative text-[#FF5500] flex flex-col items-center"
                >
                  {/* Glowing 3D Rocket Icon */}
                  <div className="p-4 rounded-3xl bg-gradient-to-tr from-[#FF5500] to-[#FF8800] text-white shadow-2xl shadow-[#FF5500]/60 ring-4 ring-orange-200/50">
                    <Rocket className="w-14 h-14 -rotate-45 stroke-[2.5]" />
                  </div>

                  {/* Rocket Engine Flame Trail */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 180, opacity: [0.8, 1, 0] }}
                    transition={{ duration: 1.2 }}
                    className="w-4 bg-gradient-to-b from-[#FF5500] via-[#FF8800] to-transparent rounded-b-full shadow-lg shadow-[#FF5500] mt-1"
                  />
                </motion.div>

              </div>
            )}

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
