'use client';

import { ReactNode, useEffect, useState } from 'react';
import { CustomCursor } from './ui/custom-cursor';
import { ScrollProgress } from './ui/scroll-progress';
import { GradientBackground } from './ui/animated-gradient';
import { OptimizedParticles } from './ui/floating-particles';
import { PageLoader } from './ui/loading-spinner';
import FaviconGenerator from './ui/favicon-generator';

interface GlobalProvidersProps {
  children: ReactNode;
}

export function GlobalProviders({ children }: GlobalProvidersProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Don't render on server
  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Favicon generator - dynamically creates favicon */}
      <FaviconGenerator />
      
      {/* Page loader */}
      <PageLoader />
      
      {/* Global background effects */}
      <GradientBackground />
      <OptimizedParticles />
      
      {/* Noise texture overlay */}
      <div className="bg-noise" />
      
      {/* Global UI elements */}
      <ScrollProgress />
      <CustomCursor />
      
      {/* Main content */}
      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        {children}
      </div>
    </>
  );
}

// Hook for checking reduced motion preference
export function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return reducedMotion;
}

// Hook for checking if on mobile
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

// Hook for scroll progress
export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollProgress;
}

// Hook for element visibility
export function useElementVisibility(ref: React.RefObject<HTMLElement>, threshold = 0.2) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, threshold]);

  return isVisible;
}