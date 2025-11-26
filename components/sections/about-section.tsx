'use client';

import { motion } from 'framer-motion';
import { GeometricPortrait } from '@/components/ui/geometric-portrait';
import { 
  NextJsIcon, 
  ReactIcon, 
  TailwindIcon, 
  TypeScriptIcon,
  NodeJsIcon,
  RestApiIcon,
  JsonIcon,
  FlutterIcon,
  GitIcon,
  VSCodeIcon,
  FigmaIcon,
  AiIcon,
  StrategyIcon,
  CommunicationIcon,
  QualityIcon,
  ResultsIcon
} from '@/components/icons';

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

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

const techItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "backOut",
    },
  },
  hover: {
    scale: 1.05,
    color: 'hsl(var(--primary))',
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay,
      ease: "backOut",
    },
  }),
};

const approachVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const techStack = [
  { name: 'Next.js', icon: NextJsIcon, category: 'Frontend' },
  { name: 'React', icon: ReactIcon, category: 'Frontend' },
  { name: 'TypeScript', icon: TypeScriptIcon, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: TailwindIcon, category: 'Frontend' },
  { name: 'Node.js', icon: NodeJsIcon, category: 'Backend' },
  { name: 'REST APIs', icon: RestApiIcon, category: 'Backend' },
  { name: 'JSON', icon: JsonIcon, category: 'Backend' },
  { name: 'Flutter', icon: FlutterIcon, category: 'Mobile' },
  { name: 'Git', icon: GitIcon, category: 'Tools' },
  { name: 'VS Code', icon: VSCodeIcon, category: 'Tools' },
  { name: 'Figma', icon: FigmaIcon, category: 'Tools' },
  { name: 'AI Tools', icon: AiIcon, category: 'AI' },
];

const currentFocus = [
  {
    icon: '🎨',
    title: 'Web Agency',
    description: 'Pune & Mumbai service businesses',
  },
  {
    icon: '🤖',
    title: 'AI Tools',
    description: 'Automation products for scalability',
  },
  {
    icon: '📦',
    title: 'Templates',
    description: 'Ready-to-use premium website kits',
  },
];

const quickFacts = [
  { value: '21', label: 'Age & Energy' },
  { value: 'Pune', label: 'Base City (born in Surat)' },
  { value: '2024', label: 'Started Agency Journey' },
  { value: '∞', label: 'Learning Mode' },
];

const approachPoints = [
  {
    icon: StrategyIcon,
    title: 'Strategic thinking',
    description: 'Not just coding',
  },
  {
    icon: CommunicationIcon,
    title: 'Clear communication',
    description: 'Systems over endless calls',
  },
  {
    icon: QualityIcon,
    title: 'Premium quality',
    description: 'Charge what you\'re worth',
  },
  {
    icon: ResultsIcon,
    title: 'Results-focused',
    description: 'Business outcomes > tech hype',
  },
];

export function AboutSection() {
  return (
    <motion.section
      id="about"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
      aria-label="About section"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />
      
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-purple-950/10" />
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-500/20 blur-[100px] dark:bg-purple-900/20" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-orange-500/20 blur-[100px] dark:bg-orange-900/20" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Left Column - Visual */}
          <motion.div
            variants={sectionVariants}
            className="flex items-center justify-center lg:justify-start"
          >
            <div className="group relative">
              <GeometricPortrait />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="space-y-12">
            
            {/* Section 1: Introduction */}
            <motion.div variants={sectionVariants}>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-orange-500/10 px-3 py-1 text-xs font-medium text-purple-600 dark:text-purple-300">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex h-full w-full rounded-full bg-purple-500"></span>
                </span>
                About Me
              </div>
              
              <h2 className="mb-3 font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                Rajesh Shrirao
              </h2>
              
              <p className="mb-6 text-base font-medium text-muted-foreground sm:text-lg">
                Full-Stack Developer | AI Automation Builder | 21 | Pune, India
              </p>
              
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  I'm a freelance developer building premium web experiences for service businesses across India — from Pune to Mumbai and beyond. I specialize in creating SaaS-style websites that don't just look good, but actually convert visitors into customers.
                </p>
                <p>
                  Born in Surat, based in Pune, I'm growing a web design agency focused on helping doctors, dentists, and professional service providers stand out online. My approach combines clean design, strategic thinking, and modern tech to build websites that work as hard as you do.
                </p>
                <p>
                  Beyond client work, I'm building AI-powered tools and digital products to help businesses automate workflows and scale without burning out. Long-term vision: build a semi-automated company where AI handles the repetitive stuff, so I can focus on strategy and creative problem-solving.
                </p>
              </div>
            </motion.div>

            {/* Section 2: Tech Stack */}
            <motion.div variants={sectionVariants}>
              <h3 className="mb-6 font-heading text-2xl font-bold text-foreground sm:text-3xl">
                What I Work With
              </h3>
              
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {techStack.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={tech.name}
                      variants={techItemVariants}
                      whileHover="hover"
                      className="flex flex-col items-center gap-2 rounded-lg bg-secondary/30 p-4 text-center backdrop-blur-sm transition-colors hover:bg-secondary/50"
                    >
                      <Icon className="h-6 w-6" />
                      <span className="text-xs font-medium text-foreground sm:text-sm">
                        {tech.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {tech.category}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Section 3: Current Focus */}
            <motion.div variants={sectionVariants}>
              <h3 className="mb-6 font-heading text-2xl font-bold text-foreground sm:text-3xl">
                What I'm Building Now
              </h3>
              
              <div className="grid gap-4 sm:grid-cols-3">
                {currentFocus.map((item, index) => (
                  <motion.div
                    key={item.title}
                    custom={index * 0.1}
                    variants={statVariants}
                    className="rounded-xl border border-border bg-card p-4 text-center transition-all hover:border-primary/30 hover:shadow-md"
                  >
                    <div className="mb-2 text-2xl">{item.icon}</div>
                    <h4 className="mb-1 font-semibold text-foreground">{item.title}</h4>
                    <p className="text-xs text-muted-foreground sm:text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Section 4: Quick Facts */}
            <motion.div variants={sectionVariants}>
              <h3 className="mb-6 font-heading text-2xl font-bold text-foreground sm:text-3xl">
                Quick Facts
              </h3>
              
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {quickFacts.map((fact, index) => (
                  <motion.div
                    key={fact.label}
                    custom={index * 0.1}
                    variants={statVariants}
                    className="rounded-xl border border-border bg-card p-4 text-center transition-all hover:border-primary/30 hover:shadow-md"
                  >
                    <div className="mb-1 text-2xl font-bold text-primary sm:text-3xl">
                      {fact.value}
                    </div>
                    <p className="text-xs text-muted-foreground sm:text-sm">{fact.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Section 5: Working With Me */}
            <motion.div variants={sectionVariants}>
              <h3 className="mb-6 font-heading text-2xl font-bold text-foreground sm:text-3xl">
                My Approach
              </h3>
              
              <div className="space-y-4">
                {approachPoints.map((point, index) => {
                  const Icon = point.icon;
                  return (
                    <motion.div
                      key={point.title}
                      variants={approachVariants}
                      custom={index}
                      className="flex items-start gap-4"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{point.title}</h4>
                        <p className="text-sm text-muted-foreground">{point.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
