'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  staggerChildren?: boolean;
  delay?: number;
}

export function SectionReveal({ 
  children, 
  className = '', 
  threshold = 0.2,
  staggerChildren = false,
  delay = 0
}: SectionRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: '-20% 0px -20% 0px',
    once: true
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerChildren ? staggerContainer : fadeInUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

// Individual element reveal component
interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function Reveal({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up'
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: '-10% 0px -10% 0px',
    once: true
  });

  const getVariants = () => {
    switch (direction) {
      case 'down':
        return { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } };
      case 'left':
        return { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } };
      case 'right':
        return { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } };
      default:
        return { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={getVariants()}
      transition={{ 
        duration: 0.6, 
        ease: 'easeOut',
        delay 
      }}
    >
      {children}
    </motion.div>
  );
}