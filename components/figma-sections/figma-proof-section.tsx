'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Code, Zap, Users, Star, Globe } from 'lucide-react';

const stats = [
  {
    icon: Code,
    value: '3+',
    label: 'years working with React / Next.js',
    description: 'Proven expertise in modern React ecosystem'
  },
  {
    icon: Users,
    value: '40+',
    label: 'frontends built for clients',
    description: 'SaaS, agencies, and personal brands'
  },
  {
    icon: Star,
    value: '90-100',
    label: 'Google Lighthouse scores',
    description: 'Guaranteed performance optimization'
  },
  {
    icon: Globe,
    value: '100%',
    label: 'Hosted on Vercel',
    description: 'Professional deployment with CI/CD'
  }
];

const techStack = [
  'Next.js', 'Tailwind CSS', 'Supabase', 'Stripe', 'LangChain'
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

export function FigmaProofSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/50">
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
            Why Developers and Startups Trust My Build Quality
          </motion.h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-card/80 backdrop-blur-sm p-8 text-center border border-border/50 hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-orange-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-purple-500/20 to-orange-500/20">
                    <stat.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
                
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                
                <div className="font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Testimonial */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-card/80 to-background border border-border/50">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-1 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 text-white text-sm font-semibold">
                  <Star className="h-4 w-4 fill-current" />
                  <span>Client Testimonial</span>
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl text-muted-foreground mb-4 italic">
                &ldquo;Rajesh delivered exactly what we needed — lightweight, fast, and accurate.&rdquo;
              </blockquote>
              
              <div className="text-foreground font-semibold">
                — Client from 🇵🇱 Poland
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <motion.h3
            variants={itemVariants}
            className="text-xl font-semibold mb-8 text-muted-foreground"
          >
            Stack: {techStack.join(' • ')}
          </motion.h3>
          
          {/* Tech Logos */}
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center items-center gap-6 opacity-60"
          >
            {[
              { name: 'Next.js', color: 'text-gray-700' },
              { name: 'Vercel', color: 'text-gray-700' },
              { name: 'Tailwind', color: 'text-blue-600' },
              { name: 'Supabase', color: 'text-green-600' },
              { name: 'Stripe', color: 'text-indigo-600' }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                className={`font-mono font-semibold ${tech.color} hover:opacity-100 transition-opacity duration-300`}
              >
                {tech.name}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}