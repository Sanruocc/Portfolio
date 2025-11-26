'use client';

import { FadeIn } from '@/components/animations/motion-wrapper';

const skills = [
  'TypeScript', 'React', 'Next.js', 'Node.js',
  'Tailwind CSS', 'PostgreSQL', 'GraphQL', 'AWS',
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-4"
      aria-label="About section"
    >
      <div className="container mx-auto max-w-4xl">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            I am a full-stack developer passionate about creating elegant solutions
            to complex problems. With expertise in modern web technologies, I build
            applications that are both beautiful and performant.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <h3 className="mt-12 text-xl font-semibold">Skills</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-secondary px-4 py-2 text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
