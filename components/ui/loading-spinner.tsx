'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { spinAnimation } from '@/lib/animations';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
}

export function LoadingSpinner({ 
  size = 'md', 
  color = '#7C3AED',
  className = '' 
}: LoadingSpinnerProps) {
  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'w-4 h-4';
      case 'lg':
        return 'w-12 h-12';
      default:
        return 'w-8 h-8';
    }
  };

  return (
    <motion.div
      className={`${getSizeClass()} ${className}`}
      variants={spinAnimation}
      animate="animate"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke={color}
          strokeWidth="2"
          strokeOpacity="0.3"
          fill="none"
        />
        <motion.path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
          stroke={color}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="60"
          strokeDashoffset="60"
          animate={{
            strokeDashoffset: 0,
            rotate: 360
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </svg>
    </motion.div>
  );
}

// Page loader component
export function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Simulate loading time or wait for content
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Don't render on server
  if (!isMounted) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.5, ease: 'easeOut' }
          }}
        >
          <div className="flex flex-col items-center gap-4">
            {/* Logo with spinner */}
            <div className="relative">
              <motion.div
                className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <span className="text-white font-bold text-xl">RS</span>
              </motion.div>
              
              {/* Outer spinner ring */}
              <motion.div
                className="absolute -inset-2 border-2 border-transparent border-t-purple-600 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
            </div>
            
            {/* Loading text */}
            <motion.p
              className="text-muted-foreground text-sm font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Loading portfolio...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Skeleton loader for content
interface SkeletonLoaderProps {
  count?: number;
  className?: string;
  type?: 'text' | 'card' | 'circle';
}

export function SkeletonLoader({ 
  count = 1, 
  className = '',
  type = 'text' 
}: SkeletonLoaderProps) {
  const getSkeletonClass = () => {
    switch (type) {
      case 'card':
        return 'h-48 rounded-xl';
      case 'circle':
        return 'h-12 w-12 rounded-full';
      default:
        return 'h-4 rounded';
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className={`${getSkeletonClass()} bg-muted/50`}
          initial={{ opacity: 0.5 }}
          animate={{ 
            opacity: [0.5, 0.8, 0.5],
            transition: { 
              duration: 1.5, 
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.1
            }
          }}
        />
      ))}
    </div>
  );
}

// Progress bar for loading states
interface ProgressBarProps {
  progress: number;
  className?: string;
}

export function ProgressBar({ progress, className = '' }: ProgressBarProps) {
  return (
    <div className={`w-full h-2 bg-muted rounded-full overflow-hidden ${className}`}>
      <motion.div
        className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
    </div>
  );
}