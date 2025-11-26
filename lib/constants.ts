import { NextJsIcon, ReactIcon, TailwindIcon, NodeJsIcon, TypeScriptIcon, ApiIcon, WebsiteIcon } from '@/components/icons';

export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'Websites' | 'Automation' | 'Templates';
  description: string;
  techStack: string[];
  image: string;
  results?: {
    label: string;
    value: string;
  };
  links: {
    live?: string;
    github?: string;
  };
  featured?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'SaaS Marketing Platform',
    client: 'TechStart Inc',
    category: 'Websites',
    description: 'High-converting SaaS landing page with advanced analytics integration. Built to showcase product features and drive trial signups with a 15% conversion rate.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    image: '/api/placeholder/800/600',
    results: {
      label: 'Conversion Rate',
      value: '↑ 15%'
    },
    links: {
      live: 'https://example.com',
      github: 'https://github.com'
    },
    featured: true,
    size: 'large'
  },
  {
    id: '2',
    title: 'AI Content Automation',
    client: 'ContentCo',
    category: 'Automation',
    description: 'Automated content generation system that reduced manual work by 80%. Integrates with multiple platforms and includes custom analytics dashboard.',
    techStack: ['Node.js', 'OpenAI API', 'PostgreSQL', 'React'],
    image: '/api/placeholder/600/800',
    results: {
      label: 'Time Saved',
      value: '80%'
    },
    links: {
      live: 'https://example.com',
      github: 'https://github.com'
    },
    featured: true,
    size: 'large'
  },
  {
    id: '3',
    title: 'Portfolio Template Pack',
    client: 'Personal Project',
    category: 'Templates',
    description: 'Premium portfolio templates for designers and developers. Fully customizable with modern animations and mobile-first design.',
    techStack: ['Next.js', 'Tailwind', 'TypeScript'],
    image: '/api/placeholder/600/600',
    links: {
      live: 'https://example.com',
      github: 'https://github.com'
    },
    size: 'medium'
  },
  {
    id: '4',
    title: 'E-commerce Website',
    client: 'ShopLocal',
    category: 'Websites',
    description: 'Modern e-commerce platform with payment integration and inventory management. Optimized for mobile and fast loading times.',
    techStack: ['Next.js', 'Stripe', 'Tailwind', 'TypeScript'],
    image: '/api/placeholder/600/600',
    results: {
      label: 'Lighthouse Score',
      value: '⚡ 95+'
    },
    links: {
      live: 'https://example.com',
      github: 'https://github.com'
    },
    size: 'medium'
  },
  {
    id: '5',
    title: 'Workflow Automation Tool',
    client: 'AgencyFlow',
    category: 'Automation',
    description: 'Custom automation system for digital agencies. Streamlines client onboarding and project management workflows.',
    techStack: ['Node.js', 'API', 'MongoDB', 'React'],
    image: '/api/placeholder/600/600',
    links: {
      live: 'https://example.com',
      github: 'https://github.com'
    },
    size: 'small'
  },
  {
    id: '6',
    title: 'Landing Page Template',
    client: 'Personal Project',
    category: 'Templates',
    description: 'Conversion-focused landing page template with A/B testing capabilities and analytics integration.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    image: '/api/placeholder/600/600',
    links: {
      live: 'https://example.com',
      github: 'https://github.com'
    },
    size: 'small'
  }
];

export const TECH_ICONS: Record<string, React.ComponentType<{ className?: string }> | null> = {
  'Next.js': NextJsIcon,
  'React': ReactIcon,
  'Tailwind': TailwindIcon,
  'Node.js': NodeJsIcon,
  'TypeScript': TypeScriptIcon,
  'API': ApiIcon,
  'MongoDB': null,
  'PostgreSQL': null,
  'Stripe': null,
  'Framer Motion': null,
  'HTML': null,
  'CSS': null,
  'JavaScript': null
};

export const CATEGORIES = ['All', 'Websites', 'Automation', 'Templates'] as const;