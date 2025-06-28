"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardBody, Progress } from "@nextui-org/react"
import { Code, Smartphone, Palette, GraduationCap, User, Calendar, Star, Zap, Heart } from "lucide-react"
import { useRef, useState } from "react"

export default function AboutSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)

  const skills = [
    {
      name: "MERN Stack",
      icon: Code,
      level: 95,
      description: "Divine mastery of MongoDB, Express, React, Node.js",
      gradient: "from-pink-500 to-purple-600",
    },
    {
      name: "Next.js",
      icon: Code,
      level: 90,
      description: "Heavenly full-stack React framework expertise",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      name: "Flutter",
      icon: Smartphone,
      level: 85,
      description: "Cross-platform mobile development with divine precision",
      gradient: "from-pink-600 to-purple-500",
    },
    {
      name: "Android",
      icon: Smartphone,
      level: 80,
      description: "Native Android development with Kotlin mastery",
      gradient: "from-purple-600 to-pink-500",
    },
    {
      name: "UX/UI Design",
      icon: Palette,
      level: 88,
      description: "User-centered design with divine aesthetics",
      gradient: "from-pink-400 to-purple-600",
    },
    {
      name: "TypeScript",
      icon: Code,
      level: 87,
      description: "Type-safe development with heavenly precision",
      gradient: "from-purple-400 to-pink-600",
    },
  ]

  const highlights = [
    { icon: User, label: "Divine Developer", value: "Rajesh Shrirao", gradient: "from-pink-500 to-purple-600" },
    { icon: Calendar, label: "Age of Wisdom", value: "21 Years", gradient: "from-purple-500 to-pink-600" },
    { icon: GraduationCap, label: "Sacred Knowledge", value: "BCA Graduate", gradient: "from-pink-600 to-purple-500" },
  ]

  const stats = [
    { icon: Star, label: "Divine Projects", value: "15+", gradient: "from-pink-500 to-purple-600" },
    { icon: Zap, label: "Technologies Mastered", value: "10+", gradient: "from-purple-500 to-pink-600" },
    { icon: Heart, label: "Lines of Love", value: "50K+", gradient: "from-pink-600 to-purple-500" },
  ]

  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Content */}
          <motion.div style={{ y }} className="space-y-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div
                className="inline-flex items-center px-6 py-3 rounded-full"
                style={{
                  background: "rgba(236, 72, 153, 0.1)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(236, 72, 153, 0.2)",
                }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full mr-3"
                />
                <span className="text-pink-300 font-medium">About Divine Me</span>
              </motion.div>

              <h2 className="text-5xl md:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-600 bg-clip-text text-transparent">
                  MEET
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                  RAJESH
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 text-gray-300 text-lg leading-relaxed"
            >
              <motion.p
                whileHover={{ x: 10, color: "#ec4899" }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer"
              >
                A <span className="text-pink-400 font-bold">divine developer</span> and BCA graduate who transforms code
                into digital poetry. I specialize in crafting celestial experiences with the{" "}
                <span className="text-purple-400 font-bold">MERN stack</span> and{" "}
                <span className="text-pink-400 font-bold">Next.js</span>.
              </motion.p>

              <motion.p
                whileHover={{ x: 10, color: "#8b5cf6" }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer"
              >
                I breathe life into mobile applications with <span className="text-purple-400 font-bold">Flutter</span>{" "}
                and native <span className="text-pink-400 font-bold">Android development</span>, while designing{" "}
                <span className="text-purple-400 font-bold">divine UX/UI</span> experiences that touch souls.
              </motion.p>

              <motion.p
                whileHover={{ x: 10, color: "#ec4899" }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer"
              >
                My mission is to bridge the ethereal gap between functionality and aesthetics, creating digital
                experiences that transcend ordinary expectations.
              </motion.p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.1,
                    y: -10,
                    boxShadow: "0 20px 40px rgba(236, 72, 153, 0.3)",
                  }}
                  className="text-center p-6 rounded-2xl"
                  style={{
                    background: "rgba(139, 92, 246, 0.1)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(139, 92, 246, 0.2)",
                  }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <stat.icon
                      className={`w-8 h-8 mx-auto mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                    />
                  </motion.div>
                  <div
                    className={`text-2xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Skills & Cards */}
          <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }} className="space-y-8">
            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(236, 72, 153, 0.2)",
                  }}
                >
                  <Card
                    className="border-0"
                    style={{
                      background: "rgba(0, 0, 0, 0.4)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(236, 72, 153, 0.2)",
                    }}
                  >
                    <CardBody className="p-6">
                      <div className="flex items-center space-x-4">
                        <motion.div
                          className={`w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r ${item.gradient}`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <item.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <div>
                          <p className="text-gray-400 text-sm font-medium">{item.label}</p>
                          <p
                            className={`text-xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                          >
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
                Divine Skills
              </h3>

              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onHoverStart={() => setHoveredSkill(index)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    whileHover={{ scale: 1.02 }}
                    className="relative"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <motion.div
                          animate={hoveredSkill === index ? { rotate: 360 } : {}}
                          transition={{ duration: 0.5 }}
                        >
                          <skill.icon
                            className={`w-6 h-6 bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent`}
                          />
                        </motion.div>
                        <span className="text-white font-semibold">{skill.name}</span>
                      </div>
                      <span
                        className={`text-sm font-bold bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent`}
                      >
                        {skill.level}%
                      </span>
                    </div>

                    <Progress
                      value={skill.level}
                      className="max-w-full"
                      classNames={{
                        track: "drop-shadow-md border border-default",
                        indicator: `bg-gradient-to-r ${skill.gradient}`,
                        label: "tracking-wider font-medium text-default-600",
                        value: "text-foreground/60",
                      }}
                    />

                    {/* Tooltip */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: hoveredSkill === index ? 1 : 0,
                        y: hoveredSkill === index ? 0 : 10,
                      }}
                      className="absolute -top-12 left-0 z-10 px-3 py-2 text-sm text-white rounded-lg"
                      style={{
                        background: "rgba(0, 0, 0, 0.8)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(236, 72, 153, 0.3)",
                      }}
                    >
                      {skill.description}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Divine Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(236, 72, 153, 0.3)",
              }}
              className="p-8 rounded-2xl border-l-4"
              style={{
                background: "rgba(236, 72, 153, 0.1)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(236, 72, 153, 0.3)",
                borderLeft: "4px solid #ec4899",
              }}
            >
              <p className="text-gray-300 italic text-lg leading-relaxed mb-4">
                "In the realm of code, I find poetry. In the dance of pixels, I discover art. Every line I write is a
                brushstroke on the canvas of digital eternity."
              </p>
              <p className="text-pink-400 font-bold">- Rajesh Shrirao, Divine Developer</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
