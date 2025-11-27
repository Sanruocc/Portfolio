'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Zap, Clock, Code, Globe, GitBranch } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  'Up to 5 pages from Figma',
  'Next.js + Tailwind CSS',
  '100+ Google PageSpeed',
  'SEO semantic markup',
  'Contact form + deployment',
  '1 round of revisions included',
  'GitHub repo + instructions'
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

export function FigmaPackageSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/30">
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
            Everything You Need, Nothing You Don&apos;t
          </motion.h2>
        </motion.div>

        {/* Package Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card/90 to-background border-2 border-purple-500/20 shadow-2xl"
          >
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <div className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 text-white text-sm font-semibold shadow-lg">
                <Zap className="h-4 w-4" />
                <span>Most Popular</span>
              </div>
            </div>

            <div className="p-4 sm:p-6 md:p-8 lg:p-12 pt-12">
              {/* Package Header */}
              <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                  Next.js Speed-Launch Package
                </h3>
                
                <div className="flex flex-col sm:flex-row items-baseline justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                      $349
                    </span>
                    <span className="text-lg sm:text-xl text-gray-500 line-through">$599</span>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-sm sm:text-base text-green-600 font-bold">Save $250</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Limited Time Offer</div>
                  </div>
                </div>

                <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Professional Figma to Next.js conversion with guaranteed 100+ Lighthouse scores
                </p>
                
                {/* Delivery Promise */}
                <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-purple-700 dark:text-purple-300">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Delivered in 3-5 Business Days</span>
                </div>
              </div>

              {/* Features Grid - Mobile Optimized */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-12">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.4,
                          delay: index * 0.05,
                        },
                      },
                    }}
                    className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200 leading-tight">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Delivery Time */}
              <div className="flex items-center justify-center gap-3 mb-8 p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-orange-500/10 border border-purple-500/20">
                <Clock className="h-6 w-6 text-purple-600" />
                <div className="text-center">
                  <div className="font-semibold text-foreground">
                    Delivery Time: 3–5 business days
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Start immediately after payment confirmation
                  </div>
                </div>
              </div>

              {/* Tech Stack Visual */}
              <div className="flex flex-wrap justify-center items-center gap-4 mb-8 p-6 rounded-2xl bg-card/30 border border-border/30">
                <Code className="h-5 w-5 text-purple-600" />
                <span className="font-semibold text-foreground">Powered by:</span>
                {['Next.js', 'Tailwind CSS', 'Vercel', 'TypeScript'].map((tech, index) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-600 dark:text-purple-400 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Buttons - Mobile Optimized */}
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <a
                  href="https://wa.me/919822379976?text=Hi Rajesh, I want to start the $349 Next.js Speed-Launch Package for Figma to Next.js conversion. Please send me the next steps."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-bold rounded-full bg-gradient-to-r from-green-600 via-green-500 to-green-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-0"
                >
                  <span className="flex items-center gap-2 sm:gap-3">
                    <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>Start $349 Package Now</span>
                  </span>
                </a>

                <a
                  href="mailto:rajeshshrirao696@gmail.com?subject=Speed-Launch Package Inquiry - $349&body=Hi Rajesh, I'm interested in the $349 Next.js Speed-Launch Package for my Figma to Next.js conversion project. Please send me details about next steps and timeline."
                  className="group inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-semibold rounded-full border-2 border-purple-500/50 hover:border-purple-500 text-purple-700 dark:text-purple-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                >
                  <span className="flex items-center gap-2 sm:gap-3">
                    <GitBranch className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>Email Quote Request</span>
                  </span>
                </a>
              </div>

              {/* Urgency & Trust Signals */}
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-green-700 dark:text-green-300 font-semibold">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>30-day money-back guarantee</span>
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  ⚡ Limited spots available • 📞 Response within 2 hours • 💳 Secure Stripe payment
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  ✨ 30-day post-delivery support included • 💳 Secure payment via Stripe • 🚀 Free Vercel hosting setup
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-card/50 to-background border border-border/50"
          >
            <h4 className="text-xl font-semibold mb-4 text-foreground">
              Why this price makes sense
            </h4>
            <p className="text-muted-foreground">
              Agencies charge $2,000-5,000 for similar work. I deliver the same quality in 3-5 days 
              at a fraction of the cost, plus you get direct access to the developer who built your site.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}