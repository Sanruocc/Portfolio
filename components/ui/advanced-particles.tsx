'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface Particle {
  id: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speedX: number;
  speedY: number;
  color: string;
  shape: 'circle' | 'square' | 'triangle';
  rotation: number;
  rotationSpeed: number;
}

interface AdvancedParticlesProps {
  particleCount?: number;
  colors?: string[];
  shapes?: ('circle' | 'square' | 'triangle')[];
  speed?: number;
  size?: { min: number; max: number };
  opacity?: { min: number; max: number };
  interactive?: boolean;
  className?: string;
}

export function AdvancedParticles({
  particleCount = 80,
  colors = ['#A855F7', '#F97316', '#C084FC', '#06B6D4', '#10B981'],
  shapes = ['circle', 'square', 'triangle'],
  speed = 1,
  size = { min: 2, max: 8 },
  opacity = { min: 0.1, max: 0.6 },
  interactive = true,
  className = ''
}: AdvancedParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  // Initialize particles
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const newParticles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: `particle-${i}`,
        x: Math.random() * container.offsetWidth,
        y: Math.random() * container.offsetHeight,
        size: Math.random() * (size.max - size.min) + size.min,
        opacity: Math.random() * (opacity.max - opacity.min) + opacity.min,
        speedX: (Math.random() - 0.5) * speed,
        speedY: (Math.random() - 0.5) * speed,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2
      });
    }

    setParticles(newParticles);
  }, [particleCount, colors, shapes, speed, size, opacity]);

  // Animation loop
  useEffect(() => {
    if (!containerRef.current) return;

    const animate = () => {
      setParticles(prevParticles => {
        return prevParticles.map(particle => {
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;
          let newSpeedX = particle.speedX;
          let newSpeedY = particle.speedY;

          // Boundary check
          if (newX <= 0 || newX >= containerRef.current!.offsetWidth) {
            newSpeedX = -particle.speedX;
            newX = particle.x + newSpeedX;
          }
          if (newY <= 0 || newY >= containerRef.current!.offsetHeight) {
            newSpeedY = -particle.speedY;
            newY = particle.y + newSpeedY;
          }

          // Interactive mouse effect
          if (interactive) {
            const dx = mousePos.x - newX;
            const dy = mousePos.y - newY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 150;

            if (distance < maxDistance) {
              const force = (maxDistance - distance) / maxDistance;
              const angle = Math.atan2(dy, dx);
              const repelForce = force * 0.5;

              newSpeedX -= Math.cos(angle) * repelForce;
              newSpeedY -= Math.sin(angle) * repelForce;
            }
          }

          return {
            ...particle,
            x: newX,
            y: newY,
            speedX: newSpeedX,
            speedY: newSpeedY,
            rotation: particle.rotation + particle.rotationSpeed
          };
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePos, interactive]);

  // Mouse tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !interactive) return;

    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ pointerEvents: interactive ? 'auto' : 'none' }}
    >
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            x: particle.x,
            y: particle.y,
            width: particle.size,
            height: particle.size,
            rotate: particle.rotation,
            opacity: particle.opacity
          }}
          transition={{ duration: 0.1 }}
        >
          {particle.shape === 'circle' && (
            <div
              className="w-full h-full rounded-full"
              style={{
                backgroundColor: particle.color,
                boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`
              }}
            />
          )}
          {particle.shape === 'square' && (
            <div
              className="w-full h-full"
              style={{
                backgroundColor: particle.color,
                boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`
              }}
            />
          )}
          {particle.shape === 'triangle' && (
            <div
              className="w-0 h-0"
              style={{
                borderLeft: `${particle.size / 2}px solid transparent`,
                borderRight: `${particle.size / 2}px solid transparent`,
                borderBottom: `${particle.size}px solid ${particle.color}`,
                filter: `drop-shadow(0 0 ${particle.size}px ${particle.color})`
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}

// Specialized particle systems
export function HeroParticles() {
  return (
    <>
      <AdvancedParticles
        particleCount={60}
        colors={['#A855F7', '#C084FC']}
        shapes={['circle']}
        speed={0.5}
        size={{ min: 1, max: 4 }}
        opacity={{ min: 0.05, max: 0.2 }}
        interactive={true}
        className="z-0"
      />
      <AdvancedParticles
        particleCount={40}
        colors={['#F97316', '#FB923C']}
        shapes={['square', 'triangle']}
        speed={0.8}
        size={{ min: 2, max: 6 }}
        opacity={{ min: 0.1, max: 0.3 }}
        interactive={true}
        className="z-0"
      />
      <GradientOrbs />
      <EnergyBeams />
    </>
  );
}

// Gradient orbs with pulsing effect
function GradientOrbs() {
  const orbs = Array.from({ length: 8 }, (_, i) => ({
    id: `orb-${i}`,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 100 + 50,
    delay: Math.random() * 5
  }));

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {orbs.map(orb => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full bg-gradient-to-r from-purple-500/10 to-orange-500/10 blur-3xl"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            transform: 'translate(-50%, -50%)'
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.delay
          }}
        />
      ))}
    </div>
  );
}

// Energy beams effect
function EnergyBeams() {
  const beams = Array.from({ length: 5 }, (_, i) => ({
    id: `beam-${i}`,
    angle: Math.random() * 360,
    length: Math.random() * 200 + 100,
    delay: Math.random() * 3
  }));

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {beams.map(beam => (
        <motion.div
          key={beam.id}
          className="absolute left-1/2 top-1/2 h-0.5 origin-left bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
          style={{
            width: `${beam.length}px`,
            rotate: `${beam.angle}deg`,
            transform: 'translate(-50%, -50%)'
          }}
          animate={{
            opacity: [0, 0.5, 0],
            scaleX: [0, 1, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: beam.delay
          }}
        />
      ))}
    </div>
  );
}