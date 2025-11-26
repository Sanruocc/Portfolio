'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from '@/components/ui/project-card';
import { PROJECTS, CATEGORIES, type Project } from '@/lib/constants';
import { MagneticContainer } from '@/components/ui/magnetic-button';
import { FeaturedProjectScroll } from '@/components/ui/featured-project-scroll';

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

const headerVariants = {
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

const filterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const emptyVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

interface FilterTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

function FilterTabs({ activeCategory, onCategoryChange }: FilterTabsProps) {
  return (
    <motion.div
      variants={filterVariants}
      className="flex flex-wrap justify-center gap-2 sm:gap-3"
      role="tablist"
      aria-label="Project categories"
    >
      {CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`
            relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300
            sm:px-5 sm:py-2.5 sm:text-base
            ${
              activeCategory === category
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
            }
          `}
          role="tab"
          aria-selected={activeCategory === category}
          aria-controls={`panel-${category.toLowerCase()}`}
        >
          {category}
          {activeCategory === category && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 rounded-full bg-primary"
              style={{ zIndex: -1 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </button>
      ))}
    </motion.div>
  );
}

function EmptyState() {
  return (
    <motion.div
      variants={emptyVariants}
      initial="hidden"
      animate="visible"
      className="col-span-full row-span-full flex flex-col items-center justify-center py-20 text-center"
    >
      <div className="mb-6 text-6xl opacity-20">🚧</div>
      <h3 className="mb-3 font-heading text-2xl font-bold text-foreground">
        Coming Soon
      </h3>
      <p className="max-w-md text-muted-foreground">
        Working on exciting projects — check back soon!
      </p>
    </motion.div>
  );
}

export function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return PROJECTS;
    }
    return PROJECTS.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
      aria-label="Projects showcase"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />
      
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-purple-950/10" />
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-500/20 blur-[100px] dark:bg-purple-900/20" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-orange-500/20 blur-[100px] dark:bg-orange-900/20" />

      <div className="container relative z-10 mx-auto">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          className="mx-auto mb-12 max-w-4xl text-center sm:mb-16"
        >
          <h2 className="mb-4 font-heading text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
            Recent Work
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Real projects for real businesses — from design to deployment
          </p>
        </motion.div>

        {/* Featured Project - Scroll Animation */}
        <div className="mb-20">
          <FeaturedProjectScroll />
        </div>

        {/* Filter Tabs */}
        <motion.div
          variants={filterVariants}
          className="mb-12 sm:mb-16"
        >
          <FilterTabs
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            role="tabpanel"
            id={`panel-${activeCategory.toLowerCase()}`}
            aria-labelledby={`tab-${activeCategory.toLowerCase()}`}
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))
            ) : (
              <EmptyState />
            )}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          variants={headerVariants}
          className="mx-auto mt-16 max-w-2xl text-center sm:mt-20"
        >
          <h3 className="mb-4 font-heading text-2xl font-bold text-foreground sm:text-3xl">
            Want to work together?
          </h3>
          <p className="mb-8 text-muted-foreground">
            Let's build something amazing for your business
          </p>
          <MagneticContainer strength={0.2}>
            <a
              href="#contact"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 px-6 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-purple-500/25 sm:h-14 sm:px-8 sm:text-base"
            >
              <span>Start a Project</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </MagneticContainer>
        </motion.div>
      </div>
    </motion.section>
  );
}