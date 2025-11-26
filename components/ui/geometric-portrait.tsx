'use client';

import { motion } from 'framer-motion';

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

export function GeometricPortrait() {
  return (
    <div className="relative h-80 w-80 sm:h-96 sm:w-96">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
      
      {/* Base Circle (Head Shape) */}
      <motion.div
        custom={0.1}
        variants={shapeVariants}
        initial="hidden"
        whileInView="visible"
        animate="float"
        viewport={{ once: true, margin: "-50px" }}
        className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-orange-500/20 backdrop-blur-sm"
      />

      {/* Layer 1: Large Purple Rectangle (Torso) */}
      <motion.div
        custom={0.2}
        variants={shapeVariants}
        initial="hidden"
        whileInView="visible"
        animate="float"
        viewport={{ once: true, margin: "-50px" }}
        className="absolute bottom-16 left-1/2 h-32 w-24 -translate-x-1/2 rounded-2xl bg-gradient-to-b from-purple-600/30 to-purple-400/20 backdrop-blur-sm sm:bottom-20 sm:h-40 sm:w-32"
        style={{
          boxShadow: '0 8px 32px rgba(168, 85, 247, 0.3)',
        }}
      />

      {/* Layer 2: Orange Circle (Face) */}
      <motion.div
        custom={0.3}
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
        className="absolute top-12 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-gradient-to-br from-orange-500/40 to-orange-300/30 backdrop-blur-sm sm:top-16 sm:h-24 sm:w-24"
        style={{
          boxShadow: '0 8px 32px rgba(249, 115, 22, 0.3)',
        }}
      />

      {/* Layer 3: Small Blue Rectangle (Eye/Detail) */}
      <motion.div
        custom={0.4}
        variants={shapeVariants}
        initial="hidden"
        whileInView="visible"
        animate={{
          scale: [1, 1.1, 1],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        viewport={{ once: true, margin: "-50px" }}
        className="absolute top-20 left-1/2 h-3 w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500/60 to-blue-400/50 backdrop-blur-sm sm:top-24 sm:h-4 sm:w-8"
      />

      {/* Layer 4: Horizontal Purple Bar (Mouth/Detail) */}
      <motion.div
        custom={0.5}
        variants={shapeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="absolute top-32 left-1/2 h-2 w-16 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500/40 to-purple-300/30 backdrop-blur-sm sm:top-40 sm:h-2.5 sm:w-20"
      />

      {/* Layer 5: Vertical Orange Bar (Neck) */}
      <motion.div
        custom={0.6}
        variants={shapeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="absolute top-44 left-1/2 h-8 w-3 -translate-x-1/2 rounded-full bg-gradient-to-b from-orange-500/40 to-orange-300/30 backdrop-blur-sm sm:top-56 sm:h-12 sm:w-4"
      />

      {/* Layer 6: Small Purple Square (Shoulder Detail) */}
      <motion.div
        custom={0.7}
        variants={shapeVariants}
        initial="hidden"
        whileInView="visible"
        animate={{
          rotate: [0, 5, 0, -5, 0],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        viewport={{ once: true, margin: "-50px" }}
        className="absolute top-52 left-1/2 h-6 w-6 -translate-x-1/2 rounded-lg bg-gradient-to-br from-purple-600/30 to-purple-400/20 backdrop-blur-sm sm:top-64 sm:h-8 sm:w-8"
        style={{
          boxShadow: '0 4px 16px rgba(168, 85, 247, 0.2)',
        }}
      />

      {/* Layer 7: Horizontal Blue Bar (Arm/Detail) */}
      <motion.div
        custom={0.8}
        variants={shapeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="absolute top-60 left-1/2 h-2 w-24 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500/30 to-blue-400/20 backdrop-blur-sm sm:top-72 sm:h-3 sm:w-32"
      />

      {/* Layer 8: Small Orange Circle (Hand/Detail) */}
      <motion.div
        custom={0.9}
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
        className="absolute top-64 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-orange-500/50 to-orange-300/40 backdrop-blur-sm sm:top-80 sm:h-5 sm:w-5"
        style={{
          boxShadow: '0 4px 16px rgba(249, 115, 22, 0.3)',
        }}
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