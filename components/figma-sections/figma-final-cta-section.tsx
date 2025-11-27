'use client';

import { motion } from 'framer-motion';
import { Zap, Clock, CheckCircle, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  '5-day delivery',
  'Built by a full-stack dev, not an agency',
  'Trusted stack: Next.js, Tailwind, Vercel',
  'Clear quote. No risk.'
];

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

export function FigmaFinalCTASection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-background via-card/30 to-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-orange-500/5 to-purple-500/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Main CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            <span className="text-foreground">Ready to Convert Your Design</span>{' '}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-orange-500 to-purple-600 dark:from-purple-400 dark:via-orange-400 dark:to-purple-400 bg-[length:200%_auto] animate-gradient-shift">
              into Production-Grade Code?
            </span>
          </motion.h2>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center gap-3 p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-purple-500/30 transition-all duration-300"
            >
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
              <span className="text-foreground font-semibold">{benefit}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
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
            <p className="text-xl text-muted-foreground">
              Start your Figma to Next.js conversion today
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            {/* Primary CTA - WhatsApp - Mobile Optimized */}
            <a
              href="https://wa.me/919822379976?text=Hi Rajesh, I'm ready to start my Figma to Next.js conversion project. Please send me details about the $349 Speed-Launch Package and next steps."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-full bg-gradient-to-r from-green-600 via-green-500 to-green-600 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-0"
            >
              <span className="flex items-center gap-3 sm:gap-4">
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                <span>Start Project Now</span>
                <div className="flex items-center gap-1 text-xs sm:text-sm font-normal opacity-90">
                  <span className="hidden sm:inline">•</span>
                  <span>$349</span>
                </div>
              </span>
              {/* Sparkle effects */}
              <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-white/30 rounded-full animate-pulse" />
              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </a>

            {/* Secondary CTA - Email - Mobile Optimized */}
            <a
              href="mailto:rajeshshrirao696@gmail.com?subject=Ready to Start Figma to Next.js Project - $349 Package&body=Hi Rajesh, I'm ready to start my Figma to Next.js conversion project. Please send me details about the $349 Speed-Launch Package, timeline, and next steps."
              className="group inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-semibold rounded-full border-2 border-purple-500/50 hover:border-purple-500 text-purple-700 dark:text-purple-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center gap-3 sm:gap-4">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                <span>Get Quote via Email</span>
              </span>
            </a>
          </div>

          {/* Urgency Message */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2 text-muted-foreground"
          >
            <Clock className="h-5 w-5" />
            <span>Average response time: Under 2 hours during business hours</span>
          </motion.div>
        </motion.div>

        {/* Social Proof Bar */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 pt-16 border-t border-border/50"
        >
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by developers and startups worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {[
                { label: '40+ Projects Delivered', color: 'text-purple-600' },
                { label: '100% Success Rate', color: 'text-green-600' },
                { label: '3+ Years Experience', color: 'text-blue-600' },
                { label: '5-Star Client Reviews', color: 'text-orange-600' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.4,
                        delay: index * 0.1,
                      },
                    },
                  }}
                  className="flex items-center gap-2"
                >
                  <Zap className="h-4 w-4 text-muted-foreground" />
                  <span className={`font-semibold text-sm ${stat.color}`}>
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-card/80 to-background border border-border/50 shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              🎯 Your Next.js Website is Just 5 Days Away
            </h3>
            <p className="text-muted-foreground mb-6">
              Don&apos;t let your beautiful Figma designs stay as just designs. 
              Convert them into fast, SEO-optimized, production-ready websites that actually convert visitors into customers.
            </p>
            <div className="text-sm text-muted-foreground">
              💡 Pro tip: The sooner you start, the sooner you&apos;ll have a live website generating results for your business.
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}