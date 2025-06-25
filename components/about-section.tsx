"use client"

import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Smartphone, Palette, GraduationCap, User, Calendar, Award, Coffee, Zap } from "lucide-react"
import AnimatedSection from "./animated-section"
import { useRef, useState } from "react"

export default function AboutSection() {
  const skillsRef = useRef(null)
  const isSkillsInView = useInView(skillsRef, { once: true, margin: "-100px" })
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)

  const skills = [
    {
      name: "MERN Stack",
      icon: Code,
      color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      level: 90,
      description: "MongoDB, Express.js, React, Node.js",
    },
    {
      name: "Next.js",
      icon: Code,
      color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      level: 85,
      description: "Full-stack React framework",
    },
    {
      name: "Flutter",
      icon: Smartphone,
      color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      level: 80,
      description: "Cross-platform mobile development",
    },
    {
      name: "Android",
      icon: Smartphone,
      color: "bg-green-500/10 text-green-400 border-green-500/20",
      level: 75,
      description: "Native Android with Kotlin",
    },
    {
      name: "UX/UI Design",
      icon: Palette,
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      level: 85,
      description: "User-centered design & prototyping",
    },
    {
      name: "TypeScript",
      icon: Code,
      color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
      level: 80,
      description: "Type-safe JavaScript development",
    },
  ]

  const highlights = [
    { icon: User, label: "Developer", value: "Rajesh Shrirao" },
    { icon: Calendar, label: "Age", value: "21 Years" },
    { icon: GraduationCap, label: "Education", value: "BCA" },
  ]

  const stats = [
    { icon: Award, label: "Projects Completed", value: "15+" },
    { icon: Coffee, label: "Cups of Coffee", value: "500+" },
    { icon: Zap, label: "Technologies", value: "10+" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <AnimatedSection>
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20">
                  <motion.div
                    className="w-2 h-2 bg-orange-500 rounded-full mr-2"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <span className="text-orange-500 text-sm font-medium">About Me</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Hi, I'm <span className="text-orange-500">Rajesh</span>
                </h2>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <motion.p className="transition-all duration-300 hover:text-white" whileHover={{ x: 10 }}>
                  A passionate developer and BCA graduate specializing in full-stack development with the{" "}
                  <span className="text-orange-500 font-medium">MERN stack</span> and modern frameworks like
                  <span className="text-blue-400 font-medium"> Next.js</span>.
                </motion.p>

                <motion.p className="transition-all duration-300 hover:text-white" whileHover={{ x: 10 }}>
                  I create seamless mobile experiences with <span className="text-cyan-400 font-medium">Flutter</span>{" "}
                  and native <span className="text-green-400 font-medium">Android development</span>, while bringing
                  designs to life through <span className="text-purple-400 font-medium">intuitive UX/UI</span> with
                  smooth animations.
                </motion.p>

                <motion.p className="transition-all duration-300 hover:text-white" whileHover={{ x: 10 }}>
                  My goal is to bridge the gap between functionality and aesthetics, creating digital experiences that
                  are both powerful and delightful to use.
                </motion.p>
              </div>
            </AnimatedSection>

            {/* Skills with Progress Bars */}
            <AnimatedSection delay={0.4}>
              <div className="space-y-6" ref={skillsRef}>
                <h3 className="text-2xl font-semibold text-white mb-6">Technical Skills</h3>
                <motion.div
                  className="space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isSkillsInView ? "visible" : "hidden"}
                >
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={skillVariants}
                      className="group"
                      onHoverStart={() => setHoveredSkill(index)}
                      onHoverEnd={() => setHoveredSkill(null)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <skill.icon
                            className={`w-5 h-5 ${
                              skill.color.includes("orange")
                                ? "text-orange-500"
                                : skill.color.includes("blue")
                                  ? "text-blue-400"
                                  : skill.color.includes("cyan")
                                    ? "text-cyan-400"
                                    : skill.color.includes("green")
                                      ? "text-green-400"
                                      : skill.color.includes("purple")
                                        ? "text-purple-400"
                                        : "text-indigo-400"
                            }`}
                          />
                          <span className="text-white font-medium">{skill.name}</span>
                        </div>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>

                      <div className="relative">
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full ${
                              skill.color.includes("orange")
                                ? "bg-orange-500"
                                : skill.color.includes("blue")
                                  ? "bg-blue-400"
                                  : skill.color.includes("cyan")
                                    ? "bg-cyan-400"
                                    : skill.color.includes("green")
                                      ? "bg-green-400"
                                      : skill.color.includes("purple")
                                        ? "bg-purple-400"
                                        : "bg-indigo-400"
                            }`}
                            initial={{ width: 0 }}
                            animate={isSkillsInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                          />
                        </div>

                        {/* Skill Description Tooltip */}
                        <motion.div
                          className="absolute -top-12 left-0 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg shadow-lg z-10"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{
                            opacity: hoveredSkill === index ? 1 : 0,
                            y: hoveredSkill === index ? 0 : 10,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {skill.description}
                          <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </AnimatedSection>

            {/* Fun Stats */}
            <AnimatedSection delay={0.6}>
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                  >
                    <stat.icon className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column - Info Cards */}
          <div className="space-y-6">
            <AnimatedSection delay={0.3}>
              <div className="grid gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-gray-900/50 border-gray-800 hover:border-orange-500/30 transition-all duration-500 hover:bg-gray-900/70 group">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <motion.div
                            className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center group-hover:bg-orange-500/20 transition-colors duration-300"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <item.icon className="w-6 h-6 text-orange-500" />
                          </motion.div>
                          <div>
                            <p className="text-gray-400 text-sm font-medium">{item.label}</p>
                            <p className="text-white text-lg font-semibold">{item.value}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* Experience Summary Card */}
            <AnimatedSection delay={0.6}>
              <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-700 hover:border-orange-500/30 transition-all duration-500 group">
                <CardContent className="p-8 text-center">
                  <div className="space-y-4">
                    <motion.div
                      className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-orange-500/20 transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Code className="w-8 h-8 text-orange-500" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Full-Stack Developer</h3>
                      <p className="text-gray-400 leading-relaxed">
                        Crafting end-to-end solutions from responsive web applications to mobile experiences, with a
                        keen eye for design and user experience.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Interactive Quote */}
            <AnimatedSection delay={0.8}>
              <motion.div
                className="bg-gradient-to-r from-orange-500/10 to-transparent p-6 rounded-lg border-l-4 border-orange-500"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-300 italic text-lg leading-relaxed">
                  "Code is like humor. When you have to explain it, it's bad."
                </p>
                <p className="text-orange-500 text-sm mt-2">- Cory House</p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <AnimatedSection delay={0.8} className="mt-20">
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </AnimatedSection>
      </div>
    </section>
  )
}
