'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: string;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

interface FloatingParticlesProps {
  count?: number;
  className?: string;
  colors?: string[];
  speed?: 'slow' | 'medium' | 'fast';
}

export function FloatingParticles({ 
  count = 15,
  className = '',
  colors = ['#7C3AED', '#F97316', '#3B82F6', '#10B981'],
  speed = 'medium'
}: FloatingParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    // Don't create particles if reduced motion is preferred
    if (mediaQuery.matches) {
      return () => mediaQuery.removeEventListener('change', handleChange);
    }

    // Adjust count for mobile
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? Math.min(count, 5) : count;

    // Generate particles
    const newParticles: Particle[] = Array.from({ length: particleCount }, (_, i) => ({
      id: `particle-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2, // 2-6px
      duration: Math.random() * 20 + 15, // 15-35s
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.1 // 0.1-0.6
    }));

    setParticles(newParticles);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [count]);

  const getSpeedMultiplier = () => {
    switch (speed) {
      case 'slow':
        return 1.5;
      case 'fast':
        return 0.7;
      default:
        return 1;
    }
  };

  // Don't render if reduced motion is preferred
  if (isReducedMotion) {
    return null;
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => {
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: color,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
              willChange: 'transform'
            }}
            initial={{
              y: 0,
              x: 0,
              opacity: 0
            }}
            animate={{
              y: [
                0,
                -(Math.random() * 100 + 50),
                -(Math.random() * 200 + 100),
                0
              ],
              x: [
                0,
                (Math.random() - 0.5) * 100,
                (Math.random() - 0.5) * 150,
                0
              ],
              opacity: [
                0,
                particle.opacity,
                particle.opacity,
                0
              ]
            }}
            transition={{
              duration: particle.duration * getSpeedMultiplier(),
              delay: particle.delay,
              repeat: Infinity,
              ease: 'easeInOut',
              times: [0, 0.3, 0.7, 1]
            }}
          />
        );
      })}
    </div>
  );
}

// Optimized particle system for performance
export function OptimizedParticles() {
  const [isMobile, setIsMobile] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    const checkReducedMotion = () => {
      setIsReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };

    checkMobile();
    checkReducedMotion();

    window.addEventListener('resize', checkMobile);
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', checkReducedMotion);

    return () => {
      window.removeEventListener('resize', checkMobile);
      mediaQuery.removeEventListener('change', checkReducedMotion);
    };
  }, []);

  if (isReducedMotion) {
    return null;
  }

  const particleCount = isMobile ? 5 : 20;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {Array.from({ length: particleCount }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{
            y: 0,
            x: 0,
            opacity: 0
          }}
          animate={{
            y: -(Math.random() * 300 + 100),
            x: (Math.random() - 0.5) * 200,
            opacity: [0, 0.4, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            delay: Math.random() * 10,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatDelay: Math.random() * 5
          }}
        />
      ))}
    </div>
  );
}