"use client";

import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import { useRef, useState } from "react";

interface MagneticTextProps {
  text: string;
  className?: string;
  strength?: number;
  enableMagnetic?: boolean;
}

export function MagneticText({ 
  text, 
  className = "", 
  strength = 0.5,
  enableMagnetic = true 
}: MagneticTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring values
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !enableMagnetic) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set((e.clientX - centerX) * strength);
    mouseY.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`inline-block cursor-default ${className}`}
    >
      {text}
    </motion.div>
  );
}

interface MagneticLetterProps {
  children: string;
  index: number;
  isHovered: boolean;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  strength?: number;
}

function MagneticLetter({ 
  children, 
  index, 
  isHovered, 
  mouseX, 
  mouseY, 
  strength = 0.8 
}: MagneticLetterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  
  const x = useTransform(mouseX, (val: number) => {
    if (!isHovered || !ref.current) return 0;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const distance = Math.abs(val - centerX);
    const maxDistance = 200;
    
    if (distance < maxDistance) {
      const force = (maxDistance - distance) / maxDistance;
      return val * force * strength * (index % 2 === 0 ? 1 : -1);
    }
    return 0;
  });
  
  const y = useTransform(mouseY, (val: number) => {
    if (!isHovered || !ref.current) return 0;
    const rect = ref.current.getBoundingClientRect();
    const centerY = rect.top + rect.height / 2;
    const distance = Math.abs(val - centerY);
    const maxDistance = 200;
    
    if (distance < maxDistance) {
      const force = (maxDistance - distance) / maxDistance;
      return val * force * strength * (index % 3 === 0 ? 1 : -1);
    }
    return 0;
  });
  
  const rotate = useTransform(mouseX, (val: number) => {
    if (!isHovered) return 0;
    return val * 0.01 * (index % 2 === 0 ? 1 : -1);
  });
  
  const scale = useTransform(mouseX, (val: number) => {
    if (!isHovered) return 1;
    const distance = Math.abs(val);
    const maxDistance = 200;
    
    if (distance < maxDistance) {
      const force = (maxDistance - distance) / maxDistance;
      return 1 + force * 0.3;
    }
    return 1;
  });

  return (
    <motion.span
      ref={ref}
      style={{ x, y, rotate, scale }}
      className="inline-block origin-center"
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.span>
  );
}

interface MagneticTextLettersProps {
  text: string;
  className?: string;
  strength?: number;
  as?: keyof JSX.IntrinsicElements;
}

export function MagneticTextLetters({ 
  text, 
  className = "", 
  strength = 0.8,
  as: Component = "div" 
}: MagneticTextLettersProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const letters = text.split("");

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`inline-block cursor-default ${className}`}
      style={{ display: "inline-block" }}
    >
      {letters.map((letter, index) => (
        <MagneticLetter
          key={index}
          index={index}
          isHovered={isHovered}
          mouseX={mouseX}
          mouseY={mouseY}
          strength={strength}
        >
          {letter === " " ? "\u00A0" : letter}
        </MagneticLetter>
      ))}
    </motion.div>
  );
}