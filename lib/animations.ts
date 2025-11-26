'use client';

import { Variants } from 'framer-motion';

// Reusable animation variants for consistency across the app

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: 'easeOut' 
    }
  }
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: 'easeOut' 
    }
  }
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: 'easeOut' 
    }
  }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: 'easeOut' 
    }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: 'easeOut' 
    }
  }
};

export const scaleInUp: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: 'easeOut' 
    }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

export const slideInFromLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8, 
      ease: 'easeOut',
      delay: 0.2
    }
  }
};

export const slideInFromRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8, 
      ease: 'easeOut',
      delay: 0.2
    }
  }
};

// Card hover animations
export const cardHover: Variants = {
  rest: { 
    scale: 1, 
    y: 0,
    transition: { duration: 0.3 }
  },
  hover: { 
    scale: 1.02, 
    y: -8,
    transition: { 
      duration: 0.4,
      ease: 'easeOut'
    }
  }
};

// Button animations
export const buttonHover: Variants = {
  rest: { 
    scale: 1,
    transition: { duration: 0.2 }
  },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1 }
  }
};

// Text reveal animations
export const textReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: 'easeOut'
    }
  })
};

// Parallax variants
export const parallaxUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 1,
      ease: 'easeOut'
    }
  }
};

export const parallaxDown: Variants = {
  hidden: { opacity: 0, y: -60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 1,
      ease: 'easeOut'
    }
  }
};

// Loading spinner
export const spinAnimation: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear'
    }
  }
};

// Pulse animation
export const pulseAnimation: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

// Bounce animation
export const bounceAnimation: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

// Draw path animation (for SVGs)
export const drawPath: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut'
    }
  }
};

// Typewriter effect
export const typewriter: Variants = {
  hidden: { width: 0 },
  visible: {
    width: '100%',
    transition: {
      duration: 2,
      ease: 'easeInOut'
    }
  }
};

// Blur in animation
export const blurIn: Variants = {
  hidden: { opacity: 0, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

// Glow animation
export const glow: Variants = {
  rest: {
    boxShadow: '0 0 0 0 rgba(124, 58, 237, 0)'
  },
  hover: {
    boxShadow: '0 0 20px 4px rgba(124, 58, 237, 0.3)',
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  }
};