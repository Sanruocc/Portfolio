'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { WhatsAppIcon, HamburgerIcon, CloseIcon, ArrowRightIcon } from './icons';
import { cn } from '@/lib/utils';
import { useScrollDirection, useActiveSection } from '@/lib/hooks';

const navItems = [
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

const serviceItems = [
  { href: '/figma-to-nextjs', label: 'Figma → Next.js' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollDirection = useScrollDirection();
  const activeSection = useActiveSection(navItems.map(item => item.href.substring(1)));
  const { scrollY } = useScroll();

  // Enhanced scroll behavior with motion values
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(10, 10, 15, 0)', 'rgba(10, 10, 15, 0.85)']
  );
  
  const backdropFilter = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(20px)']
  );
  
  const borderColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.08)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const isVisible = scrollDirection === 'up' || !isScrolled;

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
        }}
        style={{
          backgroundColor,
          backdropFilter,
          borderBottomColor: borderColor,
          height: 'var(--header-height, 70px)'
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className='fixed top-0 left-0 right-0 z-50 border-b'
      >
        {/* Skip to content link for accessibility */}
        <a
          href='#main-content'
          className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:text-sm'
        >
          Skip to content
        </a>
        
        <div className='container mx-auto h-full px-4 sm:px-6 flex items-center justify-between'>
          {/* Logo */}
          <Link
            href='/'
            className='font-heading text-xl font-bold tracking-tight group sm:text-2xl'
            onClick={() => setIsOpen(false)}
            aria-label='Rajesh Shrirao - Home'
          >
            <span className='text-foreground group-hover:text-primary transition-colors duration-300'>Rajesh Shrirao</span>
            <span className='text-accent inline-block w-1.5 h-1.5 rounded-full ml-1 mb-0.5 group-hover:scale-125 transition-transform duration-300' />
          </Link>

          {/* Desktop Nav */}
          <nav
            className='hidden md:flex items-center gap-8 bg-white/3 px-6 py-2 rounded-full border border-white/8 backdrop-blur-lg'
            role='navigation'
            aria-label='Main navigation'
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative px-1 py-2 text-sm font-medium transition-all duration-300 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background rounded-sm',
                  activeSection === item.href.substring(1) ? 'text-foreground' : 'text-muted-foreground'
                )}
                aria-current={activeSection === item.href.substring(1) ? 'page' : undefined}
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId='activeTab'
                    className='absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/50 via-accent to-accent/50'
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            
            {/* Service CTA */}
            <div className='border-l border-white/10 pl-6'>
              <Link
                href={serviceItems[0].href}
                className='group relative px-4 py-2 text-sm font-semibold bg-gradient-to-r from-purple-600 to-orange-500 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-background'
              >
                <span className='relative z-10 flex items-center gap-2'>
                  <span>{serviceItems[0].label}</span>
                  <ArrowRightIcon className='w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300' />
                </span>
                <div className='absolute inset-0 bg-gradient-to-r from-purple-700 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full' />
              </Link>
            </div>
          </nav>

          {/* CTA Button */}
          <div className='hidden md:flex items-center'>
            <a
              href='https://wa.me/919822379976?text=Hi%20Rajesh,%20I%27m%20interested%20in%20working%20with%20you'
              target='_blank'
              rel='noopener noreferrer'
              className='group flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-foreground border border-white/15 rounded-full bg-white/2 hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-background'
              aria-label='Contact via WhatsApp'
            >
              <span>Let&apos;s Talk</span>
              <WhatsAppIcon className='w-4 h-4 text-green-500 group-hover:scale-110 transition-transform duration-300' />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className='md:hidden relative z-50 p-2 -mr-2 text-foreground/80 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background rounded-lg'
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode='wait'>
              {isOpen ? (
                <motion.div
                  key='close'
                  initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <CloseIcon className='w-6 h-6' />
                </motion.div>
              ) : (
                <motion.div
                  key='menu'
                  initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <HamburgerIcon className='w-6 h-6' />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='fixed inset-0 z-40 bg-black/70 backdrop-blur-lg md:hidden'
              onClick={() => setIsOpen(false)}
              aria-hidden='true'
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className='fixed top-0 right-0 bottom-0 z-50 w-80 max-w-full bg-gradient-to-b from-background/98 to-background/95 backdrop-blur-2xl border-l border-white/10 p-8 md:hidden shadow-2xl'
              role='dialog'
              aria-modal='true'
              aria-label='Mobile menu'
            >
              <div className='flex flex-col h-full pt-24'>
                <nav className='flex flex-col gap-4' role='navigation' aria-label='Mobile navigation'>
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ x: 60, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.1 + index * 0.05,
                        type: 'spring',
                        stiffness: 300,
                        damping: 20
                      }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          'flex items-center justify-between px-4 py-3 text-lg font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background',
                          activeSection === item.href.substring(1)
                            ? 'text-primary bg-primary/10'
                            : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                        )}
                        onClick={() => setIsOpen(false)}
                        aria-current={activeSection === item.href.substring(1) ? 'page' : undefined}
                      >
                        {item.label}
                        <ArrowRightIcon className={cn('w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300', activeSection === item.href.substring(1) && 'opacity-100 translate-x-0')} />
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* Service CTA - Mobile */}
                  <motion.div
                    initial={{ x: 60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.1 + navItems.length * 0.05,
                      type: 'spring',
                      stiffness: 300,
                      damping: 20
                    }}
                  >
                    <Link
                      href={serviceItems[0].href}
                      className='flex items-center justify-between px-4 py-3 text-lg font-semibold bg-gradient-to-r from-purple-600 to-orange-500 text-white rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-background'
                      onClick={() => setIsOpen(false)}
                    >
                      <span className='flex items-center gap-2'>
                        <span>{serviceItems[0].label}</span>
                      </span>
                      <ArrowRightIcon className='w-4 h-4 opacity-80' />
                    </Link>
                  </motion.div>
                </nav>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, type: 'spring', stiffness: 300 }}
                  className='mt-auto pt-8'
                >
                  <a
                    href='https://wa.me/919822379976?text=Hi%20Rajesh,%20I%27m%20interested%20in%20working%20with%20you'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center justify-center gap-3 w-full bg-gradient-to-r from-accent to-accent/80 text-white font-medium py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-background'
                    onClick={() => setIsOpen(false)}
                  >
                    Let&apos;s Talk
                    <WhatsAppIcon className='w-5 h-5' />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
