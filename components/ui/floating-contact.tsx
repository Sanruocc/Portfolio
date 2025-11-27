'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Mail, X, Phone } from 'lucide-react';

const contactOptions = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/919822379976?text=Hi Rajesh, I\'m interested in working with you',
    color: 'from-green-500 to-green-600',
    hoverColor: 'hover:from-green-600 hover:to-green-700'
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:rajeshshrirao696@gmail.com?subject=Project Inquiry',
    color: 'from-purple-500 to-purple-600',
    hoverColor: 'hover:from-purple-600 hover:to-purple-700'
  }
];

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Floating Action Button Container */}
      <div className="floating-contact-container">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.2, staggerChildren: 0.05 }}
              className="absolute bottom-16 right-0 mb-2 flex flex-col gap-3"
            >
              {contactOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <motion.a
                    key={option.label}
                    href={option.href}
                    target={option.href.startsWith('http') ? '_blank' : undefined}
                    rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: 20, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 20, scale: 0.8 }}
                    transition={{ delay: index * 0.05 }}
                    className={`group relative flex items-center gap-3 bg-card border border-border/50 rounded-2xl px-4 py-3 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:scale-105 ${option.hoverColor}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${option.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-foreground whitespace-nowrap">
                      {option.label}
                    </span>
                    {/* Tooltip arrow */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-l-4 border-l-card border-t-4 border-t-transparent border-b-4 border-b-transparent" />
                  </motion.a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Floating Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`group relative w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 text-white shadow-2xl transition-all duration-300 hover:shadow-purple-500/25 flex items-center justify-center ${
            isOpen ? 'rotate-45' : 'hover:rotate-12'
          }`}
          aria-label="Contact options"
        >
          {/* Pulsing rings for attention */}
          <div className="absolute inset-0 rounded-full">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 animate-ping opacity-20" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 animate-ping opacity-10" style={{ animationDelay: '1s' }} />
          </div>

          {/* Icon */}
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="contact"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <MessageCircle className="w-6 h-6" />
                {/* Notification dot */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Hover text for desktop */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden lg:block">
            <div className="bg-card border border-border/50 rounded-lg px-3 py-2 shadow-lg whitespace-nowrap">
              <span className="text-sm font-medium text-foreground">Quick Contact</span>
              <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-card border-t-4 border-t-transparent border-b-4 border-b-transparent" />
            </div>
          </div>
        </motion.button>

        {/* Quick stats tooltip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="absolute bottom-16 right-0 hidden lg:block"
        >
          <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-lg px-3 py-2 shadow-lg whitespace-nowrap text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Usually responds within 24h</span>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}