"use client"

import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"
import { GlassMorphism } from "./ui/glass-morphism"
import { FloatingTechIconsSection } from "./ui/floating-tech-icons"
import { PremiumBadge } from "./ui/premium-badge"

export default function SkillsSection() {
  const skills = [
    "Next.js",
    "Flutter",
    "AI Agent Development",
    "Supabase",
    "Stripe Integration",
    "UI/UX Design",
    "Prompt Engineering",
    "Python Automation",
    "APIs",
    "Dashboard SaaS Development"
  ]

  // Create multiple copies for seamless infinite scroll
  const duplicatedSkills = [...skills, ...skills, ...skills]


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container-responsive">
        <AnimatedSection>
          <div className="text-center margin-responsive">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <span className="text-purple-400 text-xs sm:text-sm font-medium">Technical Excellence</span>
            </div>

            <h2 className="text-responsive-title font-bold text-foreground mb-4 sm:mb-6 purple-neon-text leading-tight">
              Cutting-Edge Technologies That <span className="text-primary">Drive Results</span>
            </h2>
            <p className="text-responsive-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Master-level expertise in the most powerful development stack for building scalable,
              high-performance applications that generate real business value
            </p>
          </div>

          {/* Compact Auto-Scrolling Skills */}
          <div className="relative overflow-hidden bg-card/30 rounded-md border border-border/50 purple-neon-subtle">
            <div className="flex">
              <motion.div
                className="flex gap-1.5 sm:gap-2 py-2 sm:py-2.5 px-3 sm:px-4 whitespace-nowrap"
                animate={{
                  x: [0, '-33.333%']
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {duplicatedSkills.map((skill, index) => (
                  <motion.div
                    key={`${skill}-${index}`}
                    variants={itemVariants}
                    className="flex-shrink-0"
                  >
                    <PremiumBadge
                      variant="purple"
                      size="xs"
                      glow={true}
                      className="text-xs"
                    >
                      {skill}
                    </PremiumBadge>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Subtle scroll indicator */}
            <div className="flex justify-center mt-4">
              <div className="flex items-center gap-1 text-muted-foreground text-xs">
                <div className="w-1 h-1 bg-primary/60 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-primary/60 rounded-full animate-pulse delay-300"></div>
              </div>
            </div>
          </div>


          {/* Floating Tech Icons Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <FloatingTechIconsSection
              animated={true}
              interactive={false}
              physics={false}
              className="opacity-20"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}