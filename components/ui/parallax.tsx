'use client';

import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  disabledOnMobile?: boolean;
}

export function Parallax({ 
  children, 
  className = '', 
  speed = 0.5,
  direction = 'up',
  disabledOnMobile = true
}: ParallaxProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  // Check if on mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  // Disable parallax on mobile if specified
  if (disabledOnMobile && isMobile) {
    return <div className={className}>{children}</div>;
  }

  // Calculate transform based on direction
  const getTransform = () => {
    switch (direction) {
      case 'down':
        return useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);
      case 'left':
        return useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);
      case 'right':
        return useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);
      default:
        return useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);
    }
  };

  const y = direction === 'up' || direction === 'down' ? getTransform() : 0;
  const x = direction === 'left' || direction === 'right' ? getTransform() : 0;

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y,
        x,
        willChange: 'transform'
      }}
    >
      {children}
    </motion.div>
  );
}

// Parallax container for background elements
interface ParallaxBackgroundProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function ParallaxBackground({ 
  children, 
  className = '',
  speed = 0.3 
}: ParallaxBackgroundProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  if (isMobile) {
    return <div className={className}>{children}</div>;
  }

  const y = useTransform(scrollYProgress, [0, 1], [0, -50 * speed]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y,
        willChange: 'transform'
      }}
    >
      {children}
    </motion.div>
  );
}

// Staggered parallax for multiple elements
interface StaggeredParallaxProps {
  children: ReactNode[];
  className?: string;
  speed?: number;
  staggerDelay?: number;
}

export function StaggeredParallax({ 
  children, 
  className = '',
  speed = 0.5,
  staggerDelay = 0.1
}: StaggeredParallaxProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  if (isMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => {
        const y = useTransform(
          scrollYProgress,
          [0, 1],
          [0, -100 * speed * (index + 1) * 0.5]
        );

        return (
          <motion.div
            key={index}
            style={{
              y,
              willChange: 'transform'
            }}
            transition={{ delay: index * staggerDelay }}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
}