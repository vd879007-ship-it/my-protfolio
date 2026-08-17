'use client';

import { motion } from 'framer-motion';

export default function OrbitRings() {
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
      {/* Primary Oversized Orange Gradient Circle */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute w-[440px] h-[440px] md:w-[520px] md:h-[520px] rounded-full orange-radial-glow opacity-90 border border-[#FF6B00]/20 shadow-[0_0_80px_rgba(255,107,0,0.2)]"
      />

      {/* Inner Glowing Backdrop Disk */}
      <div className="absolute w-[360px] h-[360px] md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-tr from-[#FFF0E6] via-white/80 to-[#FFF7F2] blur-sm border border-[#FF6B00]/30 shadow-inner" />

      {/* Thin Orbital Line 1 (Clockwise Rotation) */}
      <div className="absolute w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full border border-dashed border-[#FF6B00]/25 animate-spin-orbit">
        {/* Orbital Node 1 */}
        <motion.div 
          whileHover={{ scale: 1.3 }}
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-[#FF6B00] shadow-[0_0_15px_rgba(255,107,0,0.5)] flex items-center justify-center"
        >
          <div className="w-2 h-2 rounded-full bg-[#FF6B00]" />
        </motion.div>
        
        {/* Orbital Node 2 */}
        <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-4 h-4 rounded-full bg-[#FF6B00]/80 shadow-[0_0_10px_rgba(255,107,0,0.4)]" />
      </div>

      {/* Thin Orbital Line 2 (Counter-Clockwise Rotation) */}
      <div className="absolute w-[620px] h-[620px] md:w-[720px] md:h-[720px] rounded-full border border-slate-200/80 animate-spin-orbit-reverse">
        {/* Orbital Node 3 */}
        <div className="absolute bottom-12 left-20 w-5 h-5 rounded-full bg-white border border-[#FF6B00]/40 shadow-md flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-[#FF6B00]/60" />
        </div>
      </div>

      {/* Ambient Pulsing Glow Circle */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-[#FF6B00]/10 blur-3xl animate-pulse-glow" />
    </div>
  );
}
