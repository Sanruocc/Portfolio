'use client';

import { motion } from 'framer-motion';

export function FloatingShapes() {
  return (
    <div className='absolute inset-0 overflow-hidden opacity-20 pointer-events-none'>
      {/* Circle */}
      <motion.svg
        className='absolute left-[10%] top-[15%] w-24 h-24 text-primary/40'
        viewBox='0 0 100 100'
        initial={{ y: 0, rotate: 0 }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <circle cx='50' cy='50' r='40' stroke='currentColor' strokeWidth='2' fill='none' />
      </motion.svg>

      {/* Triangle */}
      <motion.svg
        className='absolute right-[15%] top-[25%] w-32 h-32 text-purple-500/40'
        viewBox='0 0 100 100'
        initial={{ y: 0, rotate: 0 }}
        animate={{
          y: [0, 30, 0],
          rotate: [0, -360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
      >
        <polygon points='50,15 90,85 10,85' stroke='currentColor' strokeWidth='2' fill='none' />
      </motion.svg>

      {/* Square */}
      <motion.svg
        className='absolute left-[20%] bottom-[20%] w-20 h-20 text-blue-500/40'
        viewBox='0 0 100 100'
        initial={{ y: 0, rotate: 45 }}
        animate={{
          y: [0, -40, 0],
          rotate: [45, 225],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }}
      >
        <rect x='20' y='20' width='60' height='60' stroke='currentColor' strokeWidth='2' fill='none' />
      </motion.svg>

      {/* Lines */}
      <motion.svg
        className='absolute right-[25%] bottom-[15%] w-40 h-40 text-indigo-500/40'
        viewBox='0 0 100 100'
        initial={{ scale: 1, opacity: 0.5 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <line x1='10' y1='50' x2='90' y2='50' stroke='currentColor' strokeWidth='2' strokeDasharray='5,5' />
        <line x1='50' y1='10' x2='50' y2='90' stroke='currentColor' strokeWidth='2' strokeDasharray='5,5' />
      </motion.svg>

      {/* Hexagon */}
      <motion.svg
        className='absolute left-[50%] top-[50%] w-64 h-64 text-pink-500/10 -translate-x-1/2 -translate-y-1/2'
        viewBox='0 0 100 100'
        initial={{ rotate: 0 }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <polygon points='50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5' stroke='currentColor' strokeWidth='1' fill='none' />
      </motion.svg>
    </div>
  );
}