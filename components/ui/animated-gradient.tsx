'use client';

import { ReactNode } from 'react';

interface AnimatedGradientProps {
  children?: ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

export function AnimatedGradient({ 
  children, 
  className = '',
  intensity = 'medium' 
}: AnimatedGradientProps) {
  const getIntensityClass = () => {
    switch (intensity) {
      case 'low':
        return 'opacity-20';
      case 'high':
        return 'opacity-40';
      default:
        return 'opacity-30';
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Animated gradient background */}
      <div 
        className={`
          absolute inset-0 rounded-2xl overflow-hidden pointer-events-none
          ${getIntensityClass()}
        `}
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(124, 58, 237, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(249, 115, 22, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 70%)
          `,
          animation: 'gradientShift 20s ease-in-out infinite',
          backgroundSize: '200% 200%'
        }}
      />
      
      {/* Animated mesh grid */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'meshMove 30s linear infinite'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

// Standalone gradient background for hero/contact sections
export function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Main animated gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(124, 58, 237, 0.3) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(249, 115, 22, 0.3) 0%, transparent 40%),
            radial-gradient(circle at 40% 60%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)
          `,
          animation: 'gradientShift 30s ease-in-out infinite',
          backgroundSize: '300% 300%'
        }}
      />
      
      {/* Subtle mesh overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          animation: 'meshMove 40s linear infinite'
        }}
      />
    </div>
  );
}