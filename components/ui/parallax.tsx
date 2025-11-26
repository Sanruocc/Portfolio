'use client';

import { ReactNode, useRef, useState, useEffect } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  // All hooks must be called unconditionally at the top level
  const yTransform = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);
  const yTransformDown = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);
  const xTransformLeft = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);
  const xTransformRight = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);

  const y = direction === 'up' ? yTransform : direction === 'down' ? yTransformDown : 0;
  const x = direction === 'left' ? xTransformLeft : direction === 'right' ? xTransformRight : 0;

  // Disable parallax on mobile if specified
  if (disabledOnMobile && isMobile) {
    return <div className={className}>{children}</div>;
  }

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
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50 * speed]);
  
  if (isMobile) {
    return <div className={className}>{children}</div>;
  }

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

// Individual child component to use hooks properly
function StaggeredParallaxChild({ 
  child, 
  index, 
  scrollYProgress, 
  speed, 
  staggerDelay 
}: { 
  child: ReactNode; 
  index: number; 
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']; 
  speed: number; 
  staggerDelay: number;
}) {
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -100 * speed * (index + 1) * 0.5]
  );

  return (
    <motion.div
      style={{
        y,
        willChange: 'transform'
      }}
      transition={{ delay: index * staggerDelay }}
    >
      {child}
    </motion.div>
  );
}

export function StaggeredParallax({ 
  children, 
  className = '',
  speed = 0.5,
  staggerDelay = 0.1
}: StaggeredParallaxProps) {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  
  if (isMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <StaggeredParallaxChild
          key={index}
          child={child}
          index={index}
          scrollYProgress={scrollYProgress}
          speed={speed}
          staggerDelay={staggerDelay}
        />
      ))}
    </div>
  );
}