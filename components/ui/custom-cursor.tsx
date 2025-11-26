'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'link' | 'button' | 'click'>('default');
  const [isClicked, setIsClicked] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorSize = useMotionValue(8);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const cursorSizeSpring = useSpring(cursorSize, springConfig);

  // Trail effect
  const trailRef = useRef<(HTMLDivElement | null)[]>([]);
  const trailPositions = useRef<Array<{ x: number; y: number }>>([]);

  const updateCursorSize = useCallback((type: string) => {
    switch (type) {
      case 'link':
        cursorSize.set(24);
        break;
      case 'button':
        cursorSize.set(32);
        break;
      default:
        cursorSize.set(8);
    }
  }, [cursorSize]);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - cursorSize.get() / 2);
      cursorY.set(e.clientY - cursorSize.get() / 2);
      
      // Update trail positions
      trailPositions.current.unshift({ x: e.clientX, y: e.clientY });
      if (trailPositions.current.length > 3) {
        trailPositions.current.pop();
      }

      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => {
      setIsClicked(true);
      cursorSize.set(6);
      setTimeout(() => {
        setIsClicked(false);
        updateCursorSize(cursorType);
      }, 100);
    };

    // Add hover event listeners
    const handleLinkEnter = () => {
      setCursorType('link');
      cursorSize.set(24);
    };
    
    const handleLinkLeave = () => {
      setCursorType('default');
      cursorSize.set(8);
    };

    const handleButtonEnter = () => {
      setCursorType('button');
      cursorSize.set(32);
    };
    
    const handleButtonLeave = () => {
      setCursorType('default');
      cursorSize.set(8);
    };

    // Attach event listeners
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    
    // Query all interactive elements
    const links = document.querySelectorAll('a, button, [role="button"]');
    const buttons = document.querySelectorAll('button, .btn, [data-cursor="button"]');
    
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkEnter);
      link.addEventListener('mouseleave', handleLinkLeave);
    });
    
    buttons.forEach(button => {
      button.addEventListener('mouseenter', handleButtonEnter);
      button.addEventListener('mouseleave', handleButtonLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkEnter);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
      
      buttons.forEach(button => {
        button.removeEventListener('mouseenter', handleButtonEnter);
        button.removeEventListener('mouseleave', handleButtonLeave);
      });
    };
  }, [cursorX, cursorY, cursorSize, isVisible, cursorType, updateCursorSize]);

  // Don't show on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  const getCursorClass = () => {
    switch (cursorType) {
      case 'link':
        return 'rounded-full bg-primary/20 border-2 border-primary';
      case 'button':
        return 'rounded-lg bg-primary/30 border border-primary/50';
      default:
        return 'rounded-full bg-primary/20 border border-primary/50';
    }
  };

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className={`pointer-events-none fixed left-0 top-0 z-50 hidden md:block mix-blend-difference ${getCursorClass()}`}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: cursorSizeSpring,
          height: cursorSizeSpring,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isClicked ? 0.8 : 1,
        }}
        transition={{ duration: 0.1 }}
      >
        <div className='absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary' />
      </motion.div>

      {/* Trail effect (3 dots) */}
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          ref={el => { trailRef.current[index] = el; }}
          className='pointer-events-none fixed left-0 top-0 z-40 hidden h-2 w-2 rounded-full bg-primary/30 mix-blend-difference md:block'
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            opacity: isVisible ? 0.3 - (index * 0.1) : 0,
          }}
          animate={{
            scale: 1 - (index * 0.2),
          }}
          transition={{
            duration: 0.3,
            delay: index * 0.05,
          }}
        />
      ))}
    </>
  );
}