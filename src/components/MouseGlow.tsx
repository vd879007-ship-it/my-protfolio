'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function MouseGlow() {
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-500"
      animate={{
        x: mousePosition.x - 250,
        y: mousePosition.y - 250,
      }}
      transition={{
        type: 'spring',
        damping: 30,
        stiffness: 200,
        mass: 0.5,
      }}
    >
      <div 
        className="h-[500px] w-[500px] rounded-full opacity-40 blur-[90px]"
        style={{
          background: 'radial-gradient(circle, rgba(255, 107, 0, 0.15) 0%, rgba(255, 133, 51, 0.05) 50%, transparent 75%)',
        }}
      />
    </motion.div>
  );
}
