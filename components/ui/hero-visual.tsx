'use client';

import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { HeroParticles } from './advanced-particles';

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollY } = useScroll();

  const springConfig = { damping: 30, stiffness: 150, mass: 0.8 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Scroll-based gradient shift
  const gradientOffset = useTransform(scrollY, [0, 500], [0, 50]);

  // Repel effect values
  const repelX = useTransform(springX, (x) => x * -20);
  const repelY = useTransform(springY, (y) => y * -20);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate mouse position relative to container center (-1 to 1)
    const relativeX = (e.clientX - rect.left - centerX) / centerX;
    const relativeY = (e.clientY - rect.top - centerY) / centerY;

    mouseX.set(relativeX);
    mouseY.set(relativeY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className='relative h-[600px] w-full overflow-hidden rounded-2xl'
      role="img"
      aria-label="Abstract Japanese street-inspired composition with advanced particle effects"
    >
      {/* Advanced Particle System */}
      <HeroParticles />
      
      <motion.svg
        viewBox='0 0 600 800'
        preserveAspectRatio='xMidYMid meet'
        className='absolute inset-0 h-full w-full z-10'
      >
        <defs>
          <linearGradient id='grad-main' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#A855F7' />
            <stop offset='50%' stopColor='#C084FC' />
            <stop offset='100%' stopColor='#F97316' />
          </linearGradient>
          
          <linearGradient id='grad-accent' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#F97316' />
            <stop offset='100%' stopColor='#A855F7' />
          </linearGradient>
          
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          
          <filter id="blur-soft">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
          
          <filter id="neon-glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <pattern id='grid-pattern' width='40' height='40' patternUnits='userSpaceOnUse'>
            <path d='M 40 0 L 0 0 0 40' fill='none' stroke='currentColor' className='text-muted-foreground/20' strokeWidth='0.5' />
          </pattern>
        </defs>

        {/* Animated Grid Background */}
        <rect width='100%' height='100%' fill='url(#grid-pattern)' opacity='0.5'>
          <animate attributeName='opacity' values='0.5;0.8;0.5' dur='3s' repeatCount='indefinite' />
        </rect>
        
        {/* Main Composition Container - Moves slightly against cursor */}
        <motion.g style={{ x: springX, y: springY }}>
          
          {/* Background Billboard - Vertical Signage with enhanced glow */}
          <motion.rect
            x='80'
            y='120'
            width='200'
            height='450'
            rx='24'
            className='fill-background/30 stroke-muted-foreground/20'
            strokeWidth='1.5'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <animate attributeName='stroke-opacity' values='0.2;0.5;0.2' dur='4s' repeatCount='indefinite' />
          </motion.rect>

          {/* Main Billboard - Horizontal (Repels from cursor) */}
          <motion.g style={{ x: repelX, y: repelY }}>
            <motion.rect
              x='140'
              y='260'
              width='340'
              height='200'
              rx='20'
              className='fill-background/80 stroke-border shadow-2xl'
              strokeWidth='2'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            
            {/* Animated Gradient Border with enhanced animation */}
            <motion.rect
              x='140'
              y='260'
              width='340'
              height='200'
              rx='20'
              fill="none"
              stroke="url(#grad-main)"
              strokeWidth="3"
              strokeDasharray="1080"
              initial={{ strokeDashoffset: 1080 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
            >
              <animate attributeName='stroke-width' values='3;4;3' dur='2s' repeatCount='indefinite' />
            </motion.rect>
            
            {/* Inner Glow with pulsing effect */}
            <motion.rect
              x='150'
              y='270'
              width='320'
              height='180'
              rx='15'
              fill="url(#grad-accent)"
              opacity="0.1"
              animate={{ opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Floating particles inside billboard */}
            <circle cx='200' cy='320' r='2' fill='#A855F7' opacity='0.6'>
              <animate attributeName='cy' values='320;340;320' dur='3s' repeatCount='indefinite' />
              <animate attributeName='opacity' values='0.6;0.9;0.6' dur='3s' repeatCount='indefinite' />
            </circle>
            <circle cx='350' cy='380' r='1.5' fill='#F97316' opacity='0.5'>
              <animate attributeName='cx' values='350;370;350' dur='4s' repeatCount='indefinite' />
              <animate attributeName='opacity' values='0.5;0.8;0.5' dur='4s' repeatCount='indefinite' />
            </circle>
            <circle cx='280' cy='360' r='2.5' fill='#C084FC' opacity='0.4'>
              <animate attributeName='cy' values='360;350;360' dur='2.5s' repeatCount='indefinite' />
              <animate attributeName='opacity' values='0.4;0.7;0.4' dur='2.5s' repeatCount='indefinite' />
            </circle>
          </motion.g>

          {/* Neon Sign - Vertical (Floating with enhanced glow) */}
          <motion.g
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect
              x='420'
              y='140'
              width='80'
              height='240'
              rx='16'
              className='fill-background/70 stroke-purple-500/30'
              strokeWidth='1.5'
              filter='url(#neon-glow)'
            >
              <animate attributeName='stroke-width' values='1.5;2.5;1.5' dur='2s' repeatCount='indefinite' />
            </rect>
            
            {/* Abstract Geometric Patterns (Kanji-inspired) with animation */}
            <g stroke='currentColor' className='text-purple-500' strokeWidth='2' strokeLinecap="round">
              {/* Pattern 1 - Gate-like */}
              <path d='M440 170 L460 170 M450 160 L450 190'>
                <animate attributeName='stroke-opacity' values='1;0.3;1' dur='3s' repeatCount='indefinite' />
              </path>
              {/* Pattern 2 - Horizontal lines */}
              <path d='M440 210 L480 210 M440 225 L480 225'>
                <animate attributeName='stroke-opacity' values='1;0.5;1' dur='2.5s' repeatCount='indefinite' />
              </path>
              {/* Pattern 3 - Cross */}
              <path d='M460 200 L480 220 M480 200 L460 220'>
                <animate attributeName='stroke-opacity' values='1;0.4;1' dur='3.5s' repeatCount='indefinite' />
              </path>
              {/* Pattern 4 - Circle with line */}
              <circle cx='460' cy='250' r='8' fill='none'>
                <animate attributeName='r' values='8;10;8' dur='2s' repeatCount='indefinite' />
              </circle>
              <path d='M460 258 V280'>
                <animate attributeName='stroke-opacity' values='1;0.6;1' dur='2.8s' repeatCount='indefinite' />
              </path>
            </g>
            
            <circle cx='460' cy='300' r='5' className='fill-orange-500' opacity='0.8'>
              <animate attributeName='r' values='5;7;5' dur='1.5s' repeatCount='indefinite' />
            </circle>
            <circle cx='470' cy='305' r='3' className='fill-white' opacity='0.6'>
              <animate attributeName='opacity' values='0.6;1;0.6' dur='2s' repeatCount='indefinite' />
            </circle>
          </motion.g>

          {/* Circular Elements - Rotating with cursor and enhanced effects */}
          <motion.g
            style={{
              x: useTransform(springX, x => x * 15),
              y: useTransform(springY, y => y * 15)
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <circle
              cx='100'
              cy='580'
              r='70'
              className='stroke-purple-500/25'
              strokeWidth='2'
              fill="none"
              strokeDasharray="12 8"
            >
              <animate attributeName='stroke-dasharray' values='12 8;16 4;12 8' dur='4s' repeatCount='indefinite' />
            </circle>
            <circle
              cx='100'
              cy='580'
              r='45'
              className='stroke-orange-500/25'
              strokeWidth='1.5'
              fill="none"
              strokeDasharray="6 6"
            >
              <animate attributeName='stroke-dasharray' values='6 6;8 4;6 6' dur='3s' repeatCount='indefinite' />
            </circle>
            <circle
              cx='100'
              cy='580'
              r='20'
              className='fill-purple-500/20'
            >
              <animate attributeName='r' values='20;25;20' dur='2s' repeatCount='indefinite' />
            </circle>
          </motion.g>

          {/* Floating Billboard - Bottom Right with enhanced animation */}
          <motion.rect
            x='320'
            y='480'
            width='140'
            height='100'
            rx='12'
            fill="url(#grad-main)"
            opacity="0.15"
            animate={{
              rotate: [0, 3, 0],
              y: [0, 20, 0],
              opacity: [0.15, 0.25, 0.15]
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Glowing Orb - Top Right with enhanced effects */}
          <motion.circle
            cx='520'
            cy='100'
            r='18'
            fill="url(#grad-accent)"
            filter="url(#glow)"
            opacity="0.7"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.9, 0.5],
              r: [18, 22, 18]
            }}
            transition={{ duration: 3.5, repeat: Infinity }}
          />
          
          {/* Additional Geometric Elements with enhanced interaction */}
          <motion.g
            style={{ x: useTransform(springX, x => x * -10), y: useTransform(springY, y => y * -10) }}
          >
            {/* Small decorative rectangles */}
            <motion.rect
              x='50'
              y='200'
              width='40'
              height='60'
              rx='8'
              className='fill-orange-500/20 stroke-orange-500/40'
              strokeWidth='1'
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            
            <motion.rect
              x='500'
              y='400'
              width='50'
              height='30'
              rx='6'
              className='fill-purple-500/20 stroke-purple-500/40'
              strokeWidth='1'
              animate={{
                y: [0, 15, 0],
                opacity: [0.6, 0.9, 0.6],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
          </motion.g>
          
          {/* Animated Gradient Lines with enhanced flow */}
          <motion.g
            style={{ x: gradientOffset }}
          >
            <path
              d='M0 600 Q150 580 300 600 T600 600'
              stroke="url(#grad-main)"
              strokeWidth='2'
              fill='none'
              opacity='0.3'
              strokeDasharray='600'
              strokeDashoffset='600'
            >
              <animate
                attributeName='strokeDashoffset'
                values='600;0;600'
                dur='4s'
                repeatCount='indefinite'
              />
              <animate
                attributeName='stroke-width'
                values='2;3;2'
                dur='2s'
                repeatCount='indefinite'
              />
            </path>
            
            {/* Additional flowing lines */}
            <path
              d='M0 650 Q300 630 600 650'
              stroke="url(#grad-accent)"
              strokeWidth='1.5'
              fill='none'
              opacity='0.2'
              strokeDasharray='600'
              strokeDashoffset='600'
            >
              <animate
                attributeName='strokeDashoffset'
                values='600;0;600'
                dur='5s'
                repeatCount='indefinite'
                begin='1s'
              />
            </path>
          </motion.g>

        </motion.g>
      </motion.svg>
    </div>
  );
}
