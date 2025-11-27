'use client';

import { motion } from 'framer-motion';
import { 
  WhatsAppIcon, 
  MailIcon,
  MapPinIcon,
  ClockIcon
} from '../icons';

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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

interface ContactSectionProps {
  onSuccess?: () => void;
}

export function ContactForm({ onSuccess }: ContactSectionProps) {
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // Show toast notification (could be implemented separately)
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="max-w-4xl mx-auto"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h2 className="mb-4 font-heading text-4xl lg:text-5xl font-bold text-foreground">
          Let's Work Together
        </h2>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
          Ready to build something amazing? Get in touch and let's discuss your project.
        </p>
      </motion.div>

      {/* Contact Options */}
      <motion.div 
        variants={itemVariants}
        className="grid md:grid-cols-2 gap-8 mb-16"
      >
        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/919822379976?text=Hi Rajesh, I'd like to discuss a project"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-600 to-green-700 p-8 text-white shadow-xl transition-all hover:shadow-2xl hover:shadow-green-500/25"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-green-400/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          
          <div className="relative z-10 flex items-center gap-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <WhatsAppIcon className="w-8 h-8" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">WhatsApp</h3>
              <p className="text-green-100 text-sm">Quick chat about your project</p>
            </div>
          </div>
          
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/5 rounded-full blur-xl" />
        </motion.a>

        {/* Email Button */}
        <motion.a
          href="mailto:rajeshshrirao696@gmail.com?subject=Project Inquiry"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 p-8 text-white shadow-xl transition-all hover:shadow-2xl hover:shadow-purple-500/25"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-400/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          
          <div className="relative z-10 flex items-center gap-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <MailIcon className="w-8 h-8" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Email</h3>
              <p className="text-purple-100 text-sm">Detailed project discussion</p>
            </div>
          </div>
          
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/5 rounded-full blur-xl" />
        </motion.a>
      </motion.div>

      {/* Contact Info */}
      <motion.div 
        variants={itemVariants}
        className="grid sm:grid-cols-3 gap-6 text-center"
      >
        <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card/50 border border-border/50">
          <MapPinIcon className="w-6 h-6 text-muted-foreground" />
          <div>
            <h4 className="font-semibold text-foreground mb-1">Location</h4>
            <p className="text-sm text-muted-foreground">Pune, India</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card/50 border border-border/50">
          <ClockIcon className="w-6 h-6 text-muted-foreground" />
          <div>
            <h4 className="font-semibold text-foreground mb-1">Response Time</h4>
            <p className="text-sm text-muted-foreground">Usually within 24 hours</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card/50 border border-border/50">
          <MailIcon className="w-6 h-6 text-muted-foreground" />
          <div>
            <h4 className="font-semibold text-foreground mb-1">Email</h4>
            <button
              onClick={() => copyToClipboard('rajeshshrirao696@gmail.com')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Click to copy
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}