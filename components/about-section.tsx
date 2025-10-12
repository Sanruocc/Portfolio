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
      name: "Next.js",
      icon: Code,
      color: "bg-primary/10 text-primary border-primary/20",
      level: 95,
      description: "Full-stack React framework for production apps",
    },
    {
      name: "Flutter",
      icon: Smartphone,
      color: "bg-primary/10 text-primary border-primary/20",
      level: 90,
      description: "Cross-platform mobile development with Dart",
    },
    {
      name: "AI Agent Development",
      icon: Code,
      color: "bg-accent/10 text-accent border-accent/20",
      level: 85,
      description: "Building intelligent automation systems",
    },
    {
      name: "Supabase",
      icon: Code,
      color: "bg-primary/10 text-primary border-primary/20",
      level: 88,
      description: "Backend-as-a-Service with real-time capabilities",
    },
    {
      name: "Stripe Integration",
      icon: Code,
      color: "bg-accent/10 text-accent border-accent/20",
      level: 92,
      description: "Payment processing and subscription management",
    },
    {
      name: "UI/UX Design",
      icon: Palette,
      color: "bg-primary/10 text-primary border-primary/20",
      level: 90,
      description: "Creating beautiful and intuitive user experiences",
    },
    {
      name: "Prompt Engineering",
      icon: Code,
      color: "bg-accent/10 text-accent border-accent/20",
      level: 85,
      description: "Optimizing AI interactions and responses",
    },
    {
      name: "Python Automation",
      icon: Code,
      color: "bg-primary/10 text-primary border-primary/20",
      level: 80,
      description: "Scripting and workflow automation solutions",
    },
  ]

  const highlights = [
    { icon: Award, label: "Expertise", value: "Full-Stack Development" },
    { icon: Zap, label: "Specialization", value: "AI & Automation" },
    { icon: Code, label: "Focus", value: "Revenue-Driven Solutions" },
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
    },
  }

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto padding-responsive">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-6 lg:space-y-8">
            <AnimatedSection>
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                  <motion.div
                    className="w-2 h-2 bg-accent rounded-full mr-2"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <span className="text-accent text-sm font-medium">About Me</span>
                </div>

                <h2 className="text-responsive-title font-bold text-foreground leading-tight purple-neon-text">
                  Architect of <span className="text-primary">Digital Innovation</span>
                </h2>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-4 sm:space-y-6 text-muted-foreground text-responsive-body leading-relaxed">
                <motion.p className="transition-all duration-300 hover:text-foreground text-lg" whileHover={{ x: 10 }}>
                  I transform ambitious business visions into <span className="text-accent font-medium">revenue-generating digital experiences</span>.
                  Clients don't just get code—they get <span className="text-primary font-medium">strategic technology partnerships</span> that drive measurable growth
                  and unlock unprecedented potential.
                </motion.p>

                <motion.p className="transition-all duration-300 hover:text-foreground text-lg" whileHover={{ x: 10 }}>
                  Specializing in <span className="text-primary font-medium">Next.js enterprise applications</span>, 
                  <span className="text-blue-400 font-medium"> Flutter mobile solutions</span>, and 
                  <span className="text-accent font-medium"> AI automation systems</span> that eliminate bottlenecks and 
                  multiply productivity. Every line of code serves a business purpose.
                </motion.p>

                <motion.p className="transition-all duration-300 hover:text-foreground text-lg" whileHover={{ x: 10 }}>
                  My approach combines <span className="text-purple-400 font-medium">cutting-edge technology</span> with 
                  <span className="text-yellow-400 font-medium"> business intelligence</span>, creating solutions that don't just work—they 
                  <span className="text-green-400 font-medium"> generate ROI from day one</span>.
                </motion.p>
              </div>
            </AnimatedSection>

            {/* Skills with Progress Bars */}
            <AnimatedSection delay={0.4}>
              <div className="space-y-4 sm:space-y-6" ref={skillsRef}>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 purple-neon-text">Technical Skills</h3>
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
                              skill.color.includes("primary")
                                ? "text-primary"
                                : "text-accent"
                            }`}
                          />
                          <span className="text-foreground font-medium">{skill.name}</span>
                        </div>
                        <span className="text-muted-foreground text-sm">{skill.level}%</span>
                      </div>

                      <div className="relative">
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full bg-gradient-to-r ${
                              skill.color.includes("primary")
                                ? "from-primary to-purple-400"
                                : "from-accent to-yellow-400"
                            }`}
                            initial={{ width: 0 }}
                            animate={isSkillsInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                          />
                        </div>

                        {/* Skill Description Tooltip */}
                        <motion.div
                          className="absolute -top-12 left-0 bg-card border border-border text-foreground text-sm px-3 py-2 rounded-lg shadow-lg z-10"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{
                            opacity: hoveredSkill === index ? 1 : 0,
                            y: hoveredSkill === index ? 0 : 10,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {skill.description}
                          <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-card"></div>
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
                    className="text-center p-4 bg-card/30 rounded-lg hover:bg-card/50 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                  >
                    <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                    <div className="text-xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column - Profile & Info Cards */}
          <div className="space-y-8">
            {/* Profile Image Section */}
            <AnimatedSection delay={0.1}>
              <div className="text-center">
                <motion.div
                  className="relative inline-block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto">
                    {/* Static Border */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 p-1">
                      <div className="w-full h-full rounded-full bg-background p-2">
                        <img
                          src="/profile.JPG"
                          alt="Rajesh Shrirao - Full Stack Developer"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center text-xs font-bold text-black"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      ✓
                    </motion.div>
                    
                    <motion.div
                      className="absolute -bottom-2 -left-2 px-3 py-1 bg-purple-500/20 rounded-full border border-purple-500/30"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <span className="text-purple-300 text-xs font-medium">Available</span>
                    </motion.div>
                  </div>
                </motion.div>
                
                <motion.div
                  className="mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-foreground mb-2 purple-neon-text">Rajesh Shrirao</h3>
                  <p className="text-muted-foreground">21 • BCA Graduate • Full-Stack Developer</p>
                  <div className="flex justify-center mt-4">
                    <div className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-yellow-500/20 rounded-full border border-purple-500/30">
                      <span className="text-purple-300 text-sm font-medium">Elite Developer</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
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
                    <Card className="bg-card/50 border-border hover:border-primary/30 transition-all duration-500 hover:bg-card/70 group">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <motion.div
                            className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <item.icon className="w-6 h-6 text-accent" />
                          </motion.div>
                          <div>
                            <p className="text-muted-foreground text-sm font-medium">{item.label}</p>
                            <p className="text-foreground text-lg font-semibold">{item.value}</p>
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
              <Card className="bg-gradient-to-br from-card/50 to-muted/30 border-border hover:border-primary/30 transition-all duration-500 group">
                <CardContent className="p-8 text-center">
                  <div className="space-y-4">
                    <motion.div
                      className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Code className="w-8 h-8 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">Full-Stack Developer</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Crafting intelligent solutions from Next.js web applications to Flutter mobile experiences, 
                        with AI automation and exceptional user design.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Interactive Quote */}
            <AnimatedSection delay={0.8}>
              <motion.div
                className="bg-gradient-to-r from-accent/10 to-transparent p-6 rounded-lg border-l-4 border-accent"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-muted-foreground italic text-lg leading-relaxed">
                  "The best way to predict the future is to create it with intelligent automation."
                </p>
                <p className="text-accent text-sm mt-2">- My Development Philosophy</p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <AnimatedSection delay={0.8} className="mt-20">
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
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
