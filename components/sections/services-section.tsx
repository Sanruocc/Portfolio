'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { BrowserSparkleIcon, RobotAutomationIcon, LayersTemplateIcon } from '../icons';
import { renderCanvas } from '@/components/ui/canvas';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: "backOut",
    },
  },
  hover: {
    rotate: 3,
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  pulse: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const cardHoverVariants = {
  rest: {
    y: 0,
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  },
  hover: {
    y: -8,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.25)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  keyPoints: string[];
  accentColor: string;
  gradientStart: string;
  gradientEnd: string;
  delay: number;
  geometricShape: React.ReactNode;
}

function ServiceCard({ 
  icon, 
  title, 
  description, 
  keyPoints, 
  accentColor, 
  gradientStart, 
  gradientEnd,
  delay,
  geometricShape 
}: ServiceCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      animate="rest"
      viewport={{ once: true, margin: "-100px" }}
      custom={delay}
      className="group relative"
    >
      {/* Geometric Accent Shape */}
      <div className="absolute -top-4 -right-4 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        {geometricShape}
      </div>
      
      {/* Main Card */}
      <motion.div
        variants={cardHoverVariants}
        className={`relative z-10 h-full rounded-2xl bg-card p-8 border border-border transition-all duration-300 
          group-hover:border-opacity-60 group-hover:bg-card/80 backdrop-blur-sm
          before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-${gradientStart}/0 before:via-${gradientStart}/10 before:to-${gradientEnd}/0 
          before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100
          after:absolute after:inset-0 after:rounded-2xl after:border after:border-transparent after:bg-gradient-to-r after:from-${gradientStart} after:to-${gradientEnd} 
          after:bg-clip-border after:opacity-0 after:transition-opacity after:duration-300 group-hover:after:opacity-30`}
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(26, 26, 36, 0.9) 0%, rgba(26, 26, 36, 0.95) 100%)`,
        }}
      >
        {/* Icon */}
        <motion.div
          variants={iconVariants}
          animate={["visible", "pulse"]}
          whileHover="hover"
          className="mb-6 inline-block"
          style={{ color: accentColor }}
        >
          {icon}
        </motion.div>

        {/* Title */}
        <h3 className="mb-4 font-heading text-2xl font-bold text-foreground sm:text-2xl">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-6 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>

        {/* Key Points */}
        <div className="flex flex-wrap gap-2">
          {keyPoints.map((point, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
              style={{
                backgroundColor: `${accentColor}15`,
                color: accentColor,
              }}
            >
              {point}
            </span>
          ))}
        </div>

        {/* Hover Glow Effect */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${accentColor}15 0%, transparent 70%)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export function ServicesSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [50, 0, 0, -50]);

  // Initialize canvas animation
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <motion.section
      ref={ref}
      id="services"
      style={{ opacity, y }}
      className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
      aria-label="Services section"
    >
      {/* Canvas Animation Background */}
      <canvas
        className="pointer-events-none absolute inset-0 mx-auto opacity-20"
        id="canvas"
      ></canvas>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />
      
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-purple-950/10" />
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-500/20 blur-[100px] dark:bg-purple-900/20" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-orange-500/20 blur-[100px] dark:bg-orange-900/20" />
      <div className="absolute top-1/2 left-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[80px] dark:bg-blue-900/10" />

      <div className="container relative z-10 mx-auto">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mb-16 max-w-4xl text-center sm:mb-20"
        >
          <motion.h2 
            variants={cardVariants}
            className="mb-4 font-heading text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl"
          >
            What I Build
          </motion.h2>
          <motion.p 
            variants={cardVariants}
            className="text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            Premium web experiences designed to convert visitors into paying customers
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 sm:gap-10 lg:grid-cols-3 lg:gap-8"
        >
          {/* SaaS-Style Marketing Websites */}
          <ServiceCard
            icon={<BrowserSparkleIcon className="h-16 w-16" />}
            title="SaaS-Style Marketing Websites"
            description="High-end landing pages and websites for service businesses. Designed to look expensive, convert well, and load fast."
            keyPoints={["Premium design", "Mobile-optimized", "SEO-ready"]}
            accentColor="#A855F7"
            gradientStart="#A855F7"
            gradientEnd="#C084FC"
            delay={0}
            geometricShape={
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" stroke="#A855F7" strokeWidth="2" fill="none" />
                <circle cx="50" cy="50" r="25" stroke="#A855F7" strokeWidth="1.5" fill="none" />
              </svg>
            }
          />

          {/* AI Automation & Tools */}
          <ServiceCard
            icon={<RobotAutomationIcon className="h-16 w-16" />}
            title="AI Automation & Tools"
            description="Custom AI-powered tools and automation systems that reduce manual work and scale your operations."
            keyPoints={["Workflow automation", "AI integration", "Time-saving systems"]}
            accentColor="#FB923C"
            gradientStart="#FB923C"
            gradientEnd="#F97316"
            delay={0.1}
            geometricShape={
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="60" height="60" stroke="#FB923C" strokeWidth="2" fill="none" rx="8" />
                <rect x="30" y="30" width="40" height="40" stroke="#FB923C" strokeWidth="1.5" fill="none" rx="4" />
              </svg>
            }
          />

          {/* Templates & Digital Products */}
          <ServiceCard
            icon={<LayersTemplateIcon className="h-16 w-16" />}
            title="Templates & Digital Products"
            description="Ready-to-use website templates and digital products for businesses that want to launch fast without compromising quality."
            keyPoints={["Quick deployment", "Customizable", "Professional quality"]}
            accentColor="#3B82F6"
            gradientStart="#3B82F6"
            gradientEnd="#60A5FA"
            delay={0.2}
            geometricShape={
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="50,10 80,30 80,70 50,90 20,70 20,30" stroke="#3B82F6" strokeWidth="2" fill="none" />
                <polygon points="50,25 70,40 70,65 50,80 30,65 30,40" stroke="#3B82F6" strokeWidth="1.5" fill="none" />
              </svg>
            }
          />
        </motion.div>

        {/* Connecting Lines (Desktop Only) */}
        <div className="pointer-events-none absolute inset-0 hidden items-center justify-center lg:flex">
          <div className="relative w-full max-w-6xl">
            {/* Line between card 1 and 2 */}
            <div className="absolute left-1/3 top-1/2 h-0.5 w-1/3 -translate-y-1/2 bg-gradient-to-r from-purple-500/20 via-orange-500/20 to-blue-500/20 opacity-0 transition-opacity duration-300 group-hover/card1:opacity-100 group-hover/card2:opacity-100" />
            
            {/* Line between card 2 and 3 */}
            <div className="absolute left-2/3 top-1/2 h-0.5 w-1/3 -translate-y-1/2 bg-gradient-to-r from-orange-500/20 via-blue-500/20 to-purple-500/20 opacity-0 transition-opacity duration-300 group-hover/card2:opacity-100 group-hover/card3:opacity-100" />
            
            {/* Circular connector at card 2 */}
            <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-500/30 via-orange-500/30 to-blue-500/30 opacity-0 transition-opacity duration-300 group-hover/card2:opacity-100" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}