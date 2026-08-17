'use client';

import { motion } from 'framer-motion';

export default function BackgroundDecorations() {
  const particles = [
    { top: '15%', left: '10%', size: 'w-2 h-2', delay: 0 },
    { top: '25%', right: '12%', size: 'w-3 h-3', delay: 1 },
    { top: '65%', left: '8%', size: 'w-2.5 h-2.5', delay: 2 },
    { top: '75%', right: '15%', size: 'w-2 h-2', delay: 1.5 },
    { top: '45%', left: '48%', size: 'w-3 h-3', delay: 0.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Crisp Grid Dot Background Matrix */}
      <div className="absolute inset-0 bg-grid-dots opacity-60" />

      {/* Top Left Ambient Orange Soft Glow */}
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#FF6B00]/15 to-transparent blur-3xl" />

      {/* Bottom Right Subtle Soft Glow */}
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-[#FF6B00]/10 via-[#FFF0E6]/20 to-transparent blur-3xl" />

      {/* Floating Animated Particles */}
      {particles.map((p, idx) => (
        <motion.div
          key={idx}
          className={`absolute ${p.size} rounded-full bg-[#FF6B00]/40 shadow-[0_0_10px_rgba(255,107,0,0.5)]`}
          style={{ top: p.top, left: p.left, right: p.right }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + idx,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
