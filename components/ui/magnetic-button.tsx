'use client';

import { ReactNode, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { buttonHover } from '@/lib/animations';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  magnetic?: boolean;
}

export function MagneticButton({ 
  children, 
  className = '', 
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'md',
  magnetic = true
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magnetic || disabled) return;
    
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = 80; // Magnetic radius
    
    if (distance < maxDistance) {
      const strength = 1 - (distance / maxDistance);
      x.set(deltaX * strength * 0.3);
      y.set(deltaY * strength * 0.3);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const getVariantClass = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border';
      case 'ghost':
        return 'bg-transparent text-foreground hover:bg-accent/10';
      default:
        return 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-primary/25';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-1.5 text-sm';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3';
    }
  };

  return (
    <motion.button
      ref={ref}
      className={`
        relative inline-flex items-center justify-center gap-2 font-medium rounded-full
        transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background
        disabled:opacity-50 disabled:cursor-not-allowed
        ${getVariantClass()}
        ${getSizeClass()}
        ${className}
      `}
      style={{
        x: xSpring,
        y: ySpring
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      disabled={disabled}
      variants={buttonHover}
      whileHover="hover"
      whileTap="tap"
      animate={isHovered ? 'hover' : 'rest'}
    >
      {/* Ripple effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-full bg-white/20"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.2, opacity: 0 }}
          transition={{ duration: 0.4 }}
        />
      )}
      
      <span className="relative z-10">
        {children}
      </span>
      
      {/* Click animation */}
      <motion.div
        className="absolute inset-0 rounded-full bg-white/30"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: isHovered ? 1.1 : 0, 
          opacity: isHovered ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}

// Magnetic container for wrapping multiple elements
interface MagneticContainerProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticContainer({ 
  children, 
  className = '', 
  strength = 0.3 
}: MagneticContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = 120;
    
    if (distance < maxDistance) {
      const moveStrength = 1 - (distance / maxDistance);
      x.set(deltaX * moveStrength * strength);
      y.set(deltaY * moveStrength * strength);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        x: xSpring,
        y: ySpring
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}