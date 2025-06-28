"use client"

import { motion } from "framer-motion"
import { Button } from "@nextui-org/react"
import { ArrowRight, Mail, Sparkles } from "lucide-react"
import Link from "next/link"
// import Spline from "@splinetool/react-spline"
import Divine3DBackground from "./divine-3d-background"

export default function HeroSection() {
  const textVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
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
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Divine 3D Background */}
      <div className="absolute inset-0 z-0">
        <Divine3DBackground />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Floating status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
          className="inline-flex items-center px-6 py-3 rounded-full mb-8"
          style={{
            background: "rgba(236, 72, 153, 0.1)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(236, 72, 153, 0.2)",
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            <Sparkles className="w-4 h-4 text-pink-400 mr-3" />
          </motion.div>
          <span className="text-pink-300 font-medium">Available for Divine Projects</span>
        </motion.div>

        {/* Main heading with gradient text */}
        <motion.div variants={textVariants} initial="hidden" animate="visible" className="mb-8">
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black leading-none">
            <motion.span
              className="block bg-gradient-to-r from-pink-400 via-purple-400 to-pink-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              style={{
                backgroundSize: "300% 100%",
              }}
            >
              RAJESH
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
              style={{
                backgroundSize: "300% 100%",
              }}
            >
              SHRIRAO
            </motion.span>
          </h1>
        </motion.div>

        {/* Subtitle with typing effect */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mb-12">
          <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 font-light">
            <motion.span
              className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              Full-Stack Wizard
            </motion.span>
            <br />
            <span className="text-lg sm:text-xl lg:text-2xl">Crafting Digital Experiences with Divine Precision</span>
          </p>
        </motion.div>

        {/* CTA Buttons with glass morphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(236, 72, 153, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 border-0 shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
                backdropFilter: "blur(20px)",
              }}
              endContent={<ArrowRight className="w-5 h-5" />}
            >
              Explore My Universe
            </Button>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(139, 92, 246, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              as={Link}
              href="mailto:rajeshshrirao696@gmail.com"
              size="lg"
              variant="bordered"
              className="px-8 py-4 text-lg font-semibold text-purple-300 border-purple-400/50 backdrop-blur-md"
              startContent={<Mail className="w-5 h-5" />}
            >
              Let's Connect
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating tech stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {["MERN", "Next.js", "Flutter", "Android", "UX/UI"].map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 + index * 0.1 }}
              whileHover={{
                scale: 1.1,
                y: -5,
                boxShadow: "0 10px 25px rgba(236, 72, 153, 0.3)",
              }}
              className="px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: "rgba(139, 92, 246, 0.1)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(139, 92, 246, 0.2)",
                color: "rgba(236, 72, 153, 0.9)",
              }}
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-8 h-12 border-2 border-pink-400/50 rounded-full flex justify-center"
          >
            <motion.div
              className="w-1 h-3 bg-gradient-to-b from-pink-400 to-purple-600 rounded-full mt-2"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
