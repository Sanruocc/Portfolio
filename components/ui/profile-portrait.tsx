'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const shapeVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  }),
  float: {
    y: [0, -5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function ProfilePortrait() {
  return (
    <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
      
      {/* Background Circle */}
      <motion.div
        custom={0.1}
        variants={shapeVariants}
        initial="hidden"
        whileInView="visible"
        animate="float"
        viewport={{ once: true, margin: "-50px" }}
        className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-orange-500/20 backdrop-blur-sm"
      />

      {/* Profile Image Container */}
      <motion.div
        custom={0.2}
        variants={shapeVariants}
        initial="hidden"
        whileInView="visible"
        animate={{
          y: [0, -8, 0],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          },
        }}
        viewport={{ once: true, margin: "-50px" }}
        className="absolute inset-4 rounded-full overflow-hidden border-2 border-purple-500/40 shadow-2xl"
        style={{
          boxShadow: '0 8px 32px rgba(168, 85, 247, 0.3)',
        }}
      >
        <Image
          src="/Gemini_Generated_Image_7y4i697y4i697y4i.png"
          alt="Rajesh Shrirao - Full-Stack Developer"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 16rem, (max-width: 1024px) 20rem, 24rem"
        />
      </motion.div>

      {/* Geometric Accent Elements */}
      
      {/* Top Left Corner Accent */}
      <motion.div
        custom={0.3}
        variants={shapeVariants}
        initial="hidden"
        whileInView="visible"
        animate={{
          rotate: [0, 10, 0],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        viewport={{ once: true, margin: "-50px" }}
        className="absolute top-4 left-4 h-6 w-6 rounded-lg bg-gradient-to-br from-purple-600/40 to-purple-400/30 backdrop-blur-sm"
        style={{
          boxShadow: '0 4px 16px rgba(168, 85, 247, 0.3)',
        }}
      />

      {/* Bottom Right Corner Accent */}
      <motion.div
        custom={0.4}
        variants={shapeVariants}
        initial="hidden"
        whileInView="visible"
        animate={{
          scale: [1, 1.2, 1],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          },
        }}
        viewport={{ once: true, margin: "-50px" }}
        className="absolute bottom-4 right-4 h-5 w-5 rounded-full bg-gradient-to-br from-orange-500/50 to-orange-300/40 backdrop-blur-sm"
        style={{
          boxShadow: '0 4px 16px rgba(249, 115, 22, 0.3)',
        }}
      />

      {/* Top Right Decorative Element */}
      <motion.div
        custom={0.5}
        variants={shapeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="absolute top-8 right-8 h-3 w-12 rounded-full bg-gradient-to-r from-blue-500/40 to-blue-300/30 backdrop-blur-sm"
      />

      {/* Bottom Left Decorative Element */}
      <motion.div
        custom={0.6}
        variants={shapeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="absolute bottom-8 left-8 h-2 w-8 rounded-full bg-gradient-to-r from-purple-500/40 to-purple-300/30 backdrop-blur-sm"
      />

      {/* Floating Particles */}
      <motion.div
        custom={1.0}
        variants={shapeVariants}
        initial="hidden"
        whileInView="visible"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        viewport={{ once: true, margin: "-50px" }}
        className="absolute top-8 right-8 h-2 w-2 rounded-full bg-purple-500/40 sm:top-12 sm:right-12"
      />

      <motion.div
        custom={1.1}
        variants={shapeVariants}
        initial="hidden"
        whileInView="visible"
        animate={{
          y: [0, -15, 0],
          opacity: [0.4, 0.7, 0.4],
          transition: {
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          },
        }}
        viewport={{ once: true, margin: "-50px" }}
        className="absolute bottom-20 left-8 h-1.5 w-1.5 rounded-full bg-orange-500/40 sm:bottom-24 sm:left-12"
      />

      <motion.div
        custom={1.2}
        variants={shapeVariants}
        initial="hidden"
        whileInView="visible"
        animate={{
          y: [0, -25, 0],
          opacity: [0.2, 0.6, 0.2],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          },
        }}
        viewport={{ once: true, margin: "-50px" }}
        className="absolute top-32 left-12 h-1 w-1 rounded-full bg-blue-500/30 sm:top-40 sm:left-16"
      />

      {/* Accent Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 via-orange-500/10 to-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}