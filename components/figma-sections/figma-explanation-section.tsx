'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Figma, Code, Layout, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    icon: Figma,
    title: 'You send me your Figma link',
    description: 'Share your design files and requirements',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Code,
    title: 'I slice and convert into modern Next.js pages',
    description: 'Pixel-perfect conversion with clean code architecture',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Layout,
    title: 'I set up responsive layout + animations + routing',
    description: 'Mobile-first design with smooth interactions',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Send,
    title: 'I send you a live link (Vercel preview) in 3–5 days',
    description: 'Live demo for review and testing',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: CheckCircle,
    title: 'You review, I tweak. You get a deploy-ready repo',
    description: 'One round of revisions included',
    color: 'from-emerald-500 to-emerald-600'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

export function FigmaExplanationSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-card/50 to-background">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-orange-500 to-purple-600 bg-clip-text text-transparent"
          >
            Here&apos;s How We&apos;ll Build It
          </motion.h2>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8 mb-16"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                {/* Step Number */}
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-orange-500/20 text-purple-600 dark:text-purple-400 font-bold text-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${step.color} text-white shadow-lg`}>
                    <step.icon className="h-6 w-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block flex-shrink-0">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Repeat */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Ready to get started?
            </h3>
          </motion.div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919822379976?text=Hi Rajesh, I want to discuss my Figma to Next.js conversion project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-green-600 via-green-500 to-green-600 bg-[length:200%_auto] hover:animate-gradient-shift text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 border-0"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span>📲 Let&apos;s Talk on WhatsApp →</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-green-600 to-green-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Button>
            </a>

            {/* Email CTA */}
            <a
              href="mailto:rajeshshrirao696@gmail.com?subject=Figma to Next.js Project Inquiry"
            >
              <Button 
                variant="outline" 
                size="lg"
                className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-purple-500/30 hover:border-purple-500/60 text-foreground px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 hover:bg-card"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span>📧 Prefer Email? Click Here →</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-orange-500/5 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}