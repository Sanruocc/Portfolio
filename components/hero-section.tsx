"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  }

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <motion.div
        className="max-w-5xl mx-auto text-center pt-16 sm:pt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight"
        >
          Hi, I'm
          <br />
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Rajesh</span>
          <br />
          <span className="text-orange-500">Shrirao</span>
        </motion.h1>

        {/* Status Badge - Moved below heading */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8"
        >
          <motion.div
            className="w-2 h-2 bg-orange-500 rounded-full mr-2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
          <span className="text-orange-500 text-sm font-medium">Available for new opportunities</span>
        </motion.div>

        {/* Intro Text */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          A developer crafting exceptional digital experiences with MERN stack, Next.js, Flutter, and beautiful UX/UI
          design
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="mb-16">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-500/25 group"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Contact Email - Fixed styling */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <Link
            href="mailto:rajeshshrirao696@gmail.com"
            className="group flex items-center text-gray-400 hover:text-orange-500 transition-colors duration-300 no-underline"
          >
            <Mail className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
            <span className="text-lg font-medium">rajeshshrirao696@gmail.com</span>
            <ArrowRight className="ml-3 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-orange-500/3 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-orange-500 rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>
    </section>
  )
}
