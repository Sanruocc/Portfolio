'use client';

import { ExternalLink, Github } from 'lucide-react';
import { FadeIn } from '@/components/animations/motion-wrapper';

const projects = [
  {
    title: 'Project One',
    description: 'A modern web application built with Next.js and TypeScript.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Project Two',
    description: 'Full-stack e-commerce platform with real-time features.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Project Three',
    description: 'Mobile-first dashboard with data visualization.',
    tags: ['React', 'D3.js', 'GraphQL'],
    github: '#',
    demo: '#',
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-secondary/30 py-24 px-4"
      aria-label="Projects section"
    >
      <div className="container mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h2>
          <p className="mt-4 text-muted-foreground">
            A selection of my recent work and side projects.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <article className="group rounded-xl border border-border bg-background p-6 transition-all hover:shadow-lg">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-secondary px-2 py-1 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-2">
                  <a
                    href={project.github}
                    className="inline-flex h-9 items-center justify-center rounded-lg px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="inline-flex h-9 items-center justify-center rounded-lg px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                    aria-label={`View ${project.title} demo`}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
