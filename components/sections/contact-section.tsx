'use client';

import { motion } from 'framer-motion';
import { ContactForm } from '@/components/ui/contact-form';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export function ContactSection() {
  return (
    <motion.section
      id="contact"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative overflow-hidden bg-gradient-to-br from-background via-purple-950/20 to-orange-950/20 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
      aria-label="Contact section"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />
      
      {/* Background Gradients */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-500/20 blur-[100px] dark:bg-purple-900/20" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-orange-500/20 blur-[100px] dark:bg-orange-900/20" />
      
      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-10 h-4 w-4 rounded-full bg-purple-500/30 blur-sm"
        />
        <motion.div
          animate={{
            x: [0, -40, 40, 0],
            y: [0, 40, -40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-32 left-20 h-3 w-3 rounded-full bg-orange-500/30 blur-sm"
        />
        <motion.div
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute top-1/2 left-1/2 h-2 w-2 rounded-full bg-blue-500/20 blur-sm"
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl">
        <ContactForm onSuccess={() => {}} />
      </div>
    </motion.section>
  );
}
