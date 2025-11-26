'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  GitHubIcon, 
  LinkedInIcon, 
  TwitterIcon, 
  MailIcon, 
  WhatsAppIcon,
  NextJsIcon,
  TailwindIcon
} from './icons';
import { ThemeToggle } from './ui/theme-toggle';

const navItems = [
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://github.com', icon: GitHubIcon, label: 'GitHub' },
  { href: 'https://linkedin.com', icon: LinkedInIcon, label: 'LinkedIn' },
  { href: 'https://twitter.com', icon: TwitterIcon, label: 'Twitter' },
  { href: 'mailto:contact@example.com', icon: MailIcon, label: 'Email' },
  { href: 'https://wa.me/919890000000', icon: WhatsAppIcon, label: 'WhatsApp' },
];

export function Footer() {
  return (
    <footer className="relative bg-[#0A0A0F] border-t border-[#1A1A24]">
      {/* Decorative gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-50" />
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNSIgY3k9IjUiIHI9IjEiIGZpbGw9IiNGRkZGRkYiLz48Y2lyY2xlIGN4PSI1NSIgY3k9IjUiIHI9IjEiIGZpbGw9IiNGRkZGRkYiLz48Y2lyY2xlIGN4PSI1IiBjeT0iNTUiIHI9IjEiIGZpbGw9IiNGRkZGRkYiLz48Y2lyY2xlIGN4PSI1NSIgY3k9IjU1IiByPSIxIiBmaWxsPSIjRkZGRkZGIi8+PC9zdmc+')]" />
      
      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Row 1: Brand & Tagline */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-12 border-b border-[#1A1A24]"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-2"
              aria-label="Rajesh Shrirao - Home"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">RS</span>
                </div>
                <span className="sr-only">Rajesh Shrirao</span>
              </div>
            </Link>

            {/* Tagline */}
            <p className="text-center text-gray-400 text-sm md:text-base font-medium max-w-md">
              Building premium web experiences in India
            </p>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </motion.div>

        {/* Row 2: Links & Info */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="py-12 border-b border-[#1A1A24]"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Column 1: Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <nav className="flex flex-col gap-3" role="navigation" aria-label="Footer navigation">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group relative text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm w-fit"
                  >
                    <span className="relative">
                      {item.label}
                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 2: Connect */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                Connect
              </h3>
              <div className="flex flex-col gap-3">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3: Location & Availability */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                Location & Availability
              </h3>
              <div className="flex flex-col gap-3 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <span>📍</span>
                  <span>Pune, India (born in Surat)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🌏</span>
                  <span>Available for remote projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>⏰</span>
                  <span>IST timezone</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Row 3: Legal & Credits */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="py-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            {/* Copyright */}
            <p>
              © 2024 Rajesh Shrirao. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                Terms
              </Link>
            </div>

            {/* Built with */}
            <div className="flex items-center gap-2">
              <span>Built with</span>
              <div className="flex items-center gap-1">
                <NextJsIcon className="w-4 h-4" />
                <span className="text-purple-400">Next.js</span>
              </div>
              <span>&</span>
              <div className="flex items-center gap-1">
                <TailwindIcon className="w-4 h-4" />
                <span className="text-cyan-400">Tailwind</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
