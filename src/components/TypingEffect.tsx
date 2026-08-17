'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const phrases = [
  'Modern Web Applications',
  'Full-Stack Web Architectures',
  'High-Performance React Apps',
  'Scalable Node & Next.js Systems'
];

export default function TypingEffect() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetPhrase = phrases[currentPhraseIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && currentText === targetPhrase) {
      typingSpeed = 2200; // Pause at full word
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      typingSpeed = 300;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText !== targetPhrase) {
          setCurrentText(targetPhrase.slice(0, currentText.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        setCurrentText(targetPhrase.slice(0, currentText.length - 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhraseIndex]);

  return (
    <span className="inline-flex items-center">
      <span className="text-gradient-orange underline decoration-[#FF6B00]/30 underline-offset-8">
        {currentText}
      </span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: 'easeInOut' }}
        className="ml-1 inline-block h-8 w-1 bg-[#FF6B00] rounded-full align-middle"
      />
    </span>
  );
}
