"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  NextJsIcon, 
  ReactIcon, 
  TailwindIcon, 
  TypeScriptIcon,
  NodeJsIcon,
  SupabaseIcon,
  PrismaIcon,
  PythonIcon,
  LLMIcon,
  DatabaseIcon,
  FlutterIcon,
  GitIcon,
  FigmaIcon
} from "@/components/icons";

const techStack = [
  { name: "Next.js", icon: NextJsIcon, category: "Frontend", color: "text-black dark:text-white" },
  { name: "React", icon: ReactIcon, category: "Frontend", color: "text-blue-500" },
  { name: "TypeScript", icon: TypeScriptIcon, category: "Frontend", color: "text-blue-600" },
  { name: "Tailwind", icon: TailwindIcon, category: "Frontend", color: "text-cyan-500" },
  { name: "Supabase", icon: SupabaseIcon, category: "Backend", color: "text-green-600" },
  { name: "PostgreSQL", icon: DatabaseIcon, category: "Database", color: "text-blue-700" },
  { name: "Prisma", icon: PrismaIcon, category: "Database", color: "text-indigo-600" },
  { name: "Node.js", icon: NodeJsIcon, category: "Backend", color: "text-green-600" },
  { name: "Python", icon: PythonIcon, category: "Backend", color: "text-yellow-600" },
  { name: "LLMs", icon: LLMIcon, category: "AI", color: "text-purple-600" },
];

export function TechShowcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // MORE PROMINENT 3D scroll effects
  const rotateX = useTransform(scrollYProgress, [0, 1], [35, -10]); // Increased from 15 to 35
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1.1]); // Increased range from 0.9-1 to 0.7-1.1
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -50]); // Increased from 50 to 150
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);

  // Additional effects for more drama
  const rotateY = useTransform(scrollYProgress, [0, 1], [-15, 15]); // Add Y-axis rotation
  const skewX = useTransform(scrollYProgress, [0, 1], [5, -5]); // Add skew effect

  return (
    <motion.section
      ref={ref}
      id="tech"
      style={{ opacity }}
      className="relative overflow-hidden bg-background px-4 py-32 sm:px-6 lg:px-8"
      aria-label="Tech stack showcase"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />
      
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-purple-950/10" />
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-500/20 blur-[100px] dark:bg-purple-900/20" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-orange-500/20 blur-[100px] dark:bg-orange-900/20" />

      <div className="container relative z-10 mx-auto">
        {/* Header */}
        <motion.div
          style={{ translateY, scale }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <h2 className="mb-4 font-heading text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
            Tech I Work With
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
            A modern, stable stack designed for speed, reliability, and scalability.
          </p>
        </motion.div>

        {/* Tech Grid with PROMINENT 3D Effect */}
        <motion.div
          style={{
            rotateX,
            rotateY,
            scale,
            skewX,
            translateY,
            transformStyle: "preserve-3d",
            perspective: "1000px",
          }}
          className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:gap-8"
        >
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 50, rotate: -10, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: "backOut",
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.1,
                  rotateY: 5,
                  rotateX: 5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group relative"
              >
                <div className="relative z-10 flex flex-col items-center gap-4 rounded-2xl bg-card p-6 text-center transition-all duration-300 hover:bg-card/80 hover:shadow-2xl border border-border/50 hover:border-primary/30">
                  <div className={`${tech.color} transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12`}>
                    <Icon className="h-12 w-12" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">{tech.name}</h3>
                    <p className="text-xs text-muted-foreground">{tech.category}</p>
                  </div>
                  
                  {/* Hover Glow - More prominent */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 via-orange-500/20 to-blue-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  {/* Corner Accents - More visible */}
                  <div className="absolute -top-2 -left-2 h-4 w-4 rounded-tl-lg border-t-2 border-l-2 border-purple-500/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute -top-2 -right-2 h-4 w-4 rounded-tr-lg border-t-2 border-r-2 border-orange-500/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute -bottom-2 -left-2 h-4 w-4 rounded-bl-lg border-b-2 border-l-2 border-blue-500/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute -bottom-2 -right-2 h-4 w-4 rounded-br-lg border-b-2 border-r-2 border-purple-500/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  {/* Floating particles on hover */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -skew-x-12 group-hover:skew-x-0" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats with enhanced animation */}
        <motion.div
          style={{ translateY, scale }}
          className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {[
            { value: "8+", label: "completed builds" },
            { value: "3+", label: "product ecosystems worked on" },
            { value: "Multiple", label: "long-term client partnerships" },
            { value: "Global", label: "ready engineering stack" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 150,
                damping: 10
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="text-center rounded-xl bg-card/50 p-4 border border-border/30 hover:border-primary/30 transition-colors"
            >
              <div className="mb-2 text-3xl font-bold text-primary sm:text-4xl">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}