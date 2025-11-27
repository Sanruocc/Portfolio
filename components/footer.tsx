'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  GitHubIcon, 
  LinkedInIcon, 
  MailIcon
} from './icons';

const navItems = [
  { href: '#projects', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://github.com', icon: GitHubIcon, label: 'GitHub' },
  { href: 'https://linkedin.com', icon: LinkedInIcon, label: 'LinkedIn' },
  { href: 'mailto:rajeshshrirao696@gmail.com', icon: MailIcon, label: 'Email' },
];

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-border/10">
      {/* Subtle gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-purple-500/5" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-purple-500/5" />
      
      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-16 lg:py-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">
                Rajesh Shrirao
              </h3>
              <p className="text-muted-foreground text-base lg:text-lg">
                Crafting premium web experiences and AI-powered digital products.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-1 flex justify-center lg:justify-start">
              <nav className="flex items-center gap-8" role="navigation" aria-label="Footer navigation">
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-light tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase"
                  >
                    {item.label}
                    {index < navItems.length - 1 && (
                      <span className="ml-8 text-muted-foreground/30">•</span>
                    )}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Social Links */}
            <div className="lg:col-span-1 flex justify-center lg:justify-end">
              <div className="flex items-center gap-4">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group p-2 rounded-full hover:bg-secondary/50 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divider Line */}
        <div className="h-px bg-border/10" />

        {/* Bottom Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="py-8"
        >
          <p className="text-center text-sm text-muted-foreground">
            © Rajesh Shrirao
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
