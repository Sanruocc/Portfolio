'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Project } from '@/lib/constants';
import { TECH_ICONS } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 6,
      ease: "easeInOut",
    },
  },
};

const overlayVariants = {
  rest: {
    opacity: 0,
    y: 20,
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const contentVariants = {
  rest: {
    y: 0,
  },
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const techStaggerVariants = {
  rest: {
    opacity: 0,
    y: 10,
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.05,
      duration: 0.2,
    },
  },
};

const techItemVariants = {
  rest: {
    opacity: 0,
    y: 10,
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const buttonVariants = {
  rest: {
    opacity: 0,
    y: 10,
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 0.2,
    },
  },
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const getSizeClasses = () => {
    switch (project.size) {
      case 'large':
        return 'col-span-2 row-span-2';
      case 'medium':
        return 'col-span-1 row-span-2';
      case 'small':
      default:
        return 'col-span-1 row-span-1';
    }
  };

  const getAspectRatio = () => {
    switch (project.size) {
      case 'large':
        return 'aspect-[16/9]';
      case 'medium':
        return 'aspect-[3/4]';
      case 'small':
      default:
        return 'aspect-square';
    }
  };

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      animate="rest"
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-xl',
        getSizeClasses(),
        className
      )}
    >
      {/* Image Container */}
      <div className={cn('relative overflow-hidden', getAspectRatio())}>
        {/* Placeholder Image */}
        <motion.div
          variants={imageVariants}
          className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-orange-500/20 to-blue-500/20"
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/40 to-transparent" />
        </motion.div>

        {/* Results Badge */}
        {project.results && (
          <div className="absolute right-3 top-3 z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white shadow-lg"
            >
              {project.results.value}
            </motion.div>
          </div>
        )}

        {/* Hover Overlay */}
        <motion.div
          variants={overlayVariants}
          className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-card/50 backdrop-blur-sm"
        />

        {/* Content Overlay */}
        <motion.div
          variants={contentVariants}
          className="absolute inset-0 flex flex-col justify-end p-6"
        >
          {/* Default Content (Always Visible) */}
          <div className="relative z-10">
            <h3 className="mb-1 font-heading text-xl font-bold text-foreground sm:text-2xl">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-muted-foreground">
              {project.client} • {project.category}
            </p>
            <div className="mt-2 flex items-center text-xs text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span>View Project</span>
              <ArrowRight className="ml-1 h-3 w-3" />
            </div>
          </div>

          {/* Hover Content */}
          <motion.div
            variants={overlayVariants}
            className="relative z-20 mt-4"
          >
            {/* Description */}
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            {/* Tech Stack */}
            <motion.div
              variants={techStaggerVariants}
              className="mb-4 flex flex-wrap gap-2"
            >
              {project.techStack.map((tech) => {
                const Icon = TECH_ICONS[tech];
                return (
                  <motion.span
                    key={tech}
                    variants={techItemVariants}
                    className="inline-flex items-center gap-1.5 rounded-full bg-secondary/50 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur-sm"
                  >
                    {Icon && <Icon className="h-3 w-3" />}
                    <span>{tech}</span>
                  </motion.span>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={buttonVariants}
              className="flex gap-2"
            >
              {project.links.live && (
                <motion.a
                  variants={techItemVariants}
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  aria-label={`View ${project.title} live demo`}
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>View Live</span>
                </motion.a>
              )}
              {project.links.github && (
                <motion.a
                  variants={techItemVariants}
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-border bg-background/50 px-4 text-xs font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-accent"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>Details</span>
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Accent Border Glow */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent opacity-0 transition-opacity duration-300 group-hover:border-primary/20 group-hover:opacity-100" />
    </motion.article>
  );
}