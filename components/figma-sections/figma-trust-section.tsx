'use client';

import { motion } from 'framer-motion';
import { Shield, Code, Eye, DollarSign, CheckCircle2 } from 'lucide-react';

const guarantees = [
  {
    icon: Code,
    title: 'You own the code 100%',
    description: 'Full intellectual property rights transferred to you'
  },
  {
    icon: Eye,
    title: 'Built clean, not bloated',
    description: 'Optimized code without unnecessary dependencies'
  },
  {
    icon: Shield,
    title: 'No shady outsourcing',
    description: 'Everything done by me, not contractors'
  },
  {
    icon: DollarSign,
    title: 'Clear pricing, zero surprises',
    description: 'No hidden costs or scope creep'
  }
];

const tools = [
  { name: 'Next.js', color: 'text-gray-700', description: 'React framework' },
  { name: 'Vercel', color: 'text-gray-700', description: 'Deployment platform' },
  { name: 'Tailwind', color: 'text-blue-600', description: 'CSS framework' },
  { name: 'Supabase', color: 'text-green-600', description: 'Backend database' },
  { name: 'Stripe', color: 'text-indigo-600', description: 'Payment processing' }
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

export function FigmaTrustSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-card/30 to-background">
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
            You Keep All Rights. No Nonsense. No Lock-In.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Complete transparency and ownership. Your project, your code, your rights.
          </motion.p>
        </motion.div>

        {/* Guarantees Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-card/80 backdrop-blur-sm p-8 text-center border border-border/50 hover:border-green-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                    <guarantee.icon className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                
                <div className="text-lg font-bold mb-3 text-foreground">
                  {guarantee.title}
                </div>
                
                <div className="text-sm text-muted-foreground">
                  {guarantee.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="relative p-8 rounded-3xl bg-gradient-to-br from-card/80 to-background border-2 border-green-500/20 shadow-2xl"
          >
            {/* Security Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 text-white text-sm font-semibold shadow-lg">
                <Shield className="h-4 w-4" />
                <span>100% Secure & Transparent</span>
              </div>
            </div>

            <div className="pt-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Your Peace of Mind is Guaranteed
                </h3>
                <p className="text-muted-foreground">
                  I&apos;m so confident in my work that I offer these ironclad guarantees
                </p>
              </div>

              {/* Guarantee Points */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">Money-Back Guarantee</div>
                    <div className="text-sm text-muted-foreground">
                      If you&apos;re not 100% satisfied with the code quality, get a full refund
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">Source Code Ownership</div>
                    <div className="text-sm text-muted-foreground">
                      You own everything - no licensing fees or restrictions
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">Free Support</div>
                    <div className="text-sm text-muted-foreground">
                      30 days of free revisions and deployment assistance
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">Direct Developer Contact</div>
                    <div className="text-sm text-muted-foreground">
                      No middlemen - you work directly with me throughout
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tools Logos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <h3 className="text-xl font-semibold mb-6 text-muted-foreground">
              Trusted tools and platforms
            </h3>
            
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
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
                  className="group hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="text-center">
                    <div className={`font-bold text-xl mb-1 ${tool.color}`}>
                      {tool.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {tool.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Final Trust Message */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20"
          >
            <h4 className="text-lg font-semibold mb-3 text-foreground">
              💎 Premium service without premium agency prices
            </h4>
            <p className="text-muted-foreground">
              You get enterprise-level quality, direct access to the developer, 
              and complete ownership of your codebase.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}