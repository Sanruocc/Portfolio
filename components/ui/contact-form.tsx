'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  WhatsAppIcon, 
  CheckIcon, 
  LoaderIcon, 
  ArrowRightIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon
} from '../icons';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name must be less than 50 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  projectType: z.enum(['Website for Service Business', 'AI Automation', 'Template/Product Purchase', 'Other'], {
    required_error: 'Please select a project type',
  }),
  message: z.string().min(10, 'Message must be at least 10 characters').max(500, 'Message must be less than 500 characters'),
  budget: z.enum(['₹25k - ₹50k', '₹50k - ₹1L', '₹1L+', 'Not sure yet'], {
    required_error: 'Please select a budget range',
  }).optional(),
  honeypot: z.string().optional(), // Honeypot field for bots
});

type ContactFormData = z.infer<typeof contactSchema>;

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "backOut",
    },
  },
};

const successVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "backOut",
    },
  },
};

const errorShake = {
  x: [0, -10, 10, -10, 10, 0],
  transition: {
    duration: 0.5,
  },
};

interface ContactFormProps {
  onSuccess?: () => void;
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      projectType: 'Website for Service Business',
      budget: 'Not sure yet',
    },
  });

  const messageValue = watch('message', '');

  const onSubmit = async (data: ContactFormData) => {
    // Check honeypot
    if (data.honeypot) {
      return; // Bot detected, don't submit
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        reset();
        onSuccess?.();
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // Show toast notification (could be implemented separately)
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        variants={successVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6 text-center"
      >
        <motion.div
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.6, ease: "backOut" }}
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20"
        >
          <CheckIcon className="h-8 w-8 text-green-500" />
        </motion.div>
        
        <div>
          <h3 className="mb-2 font-heading text-2xl font-bold text-foreground">
            Message Sent!
          </h3>
          <p className="text-muted-foreground">
            Thanks! I&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <motion.a
          href="https://wa.me/919876543210?text=Hi Rajesh, I'd like to discuss a project"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-green-700 sm:w-auto"
        >
          <WhatsAppIcon className="h-5 w-5" />
          <span>Message on WhatsApp</span>
        </motion.a>
      </motion.div>
    );
  }

  return (
    <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
      {/* Left Column - Form (60%) */}
      <div className="lg:col-span-2">
        <motion.div
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="mb-8">
            <h2 className="mb-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Let&apos;s Build Something Great
            </h2>
            <p className="text-lg text-muted-foreground">
              Have a project in mind? Let&apos;s talk about how I can help your business grow.
            </p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Honeypot Field */}
            <input type="text" className="hidden" {...register('honeypot')} />

            {/* Name Field */}
            <motion.div variants={fieldVariants} className="relative">
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name *
              </label>
              <input
                id="name"
                type="text"
                {...register('name')}
                className={`w-full rounded-xl border bg-card px-4 py-3 text-foreground transition-all placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                  errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-border'
                }`}
                placeholder="Enter your name"
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              <AnimatePresence>
                {errors.name && (
                  <motion.p
                    id="name-error"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-1 text-sm text-red-500"
                  >
                    {errors.name.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Email Field */}
            <motion.div variants={fieldVariants} className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email *
              </label>
              <input
                id="email"
                type="email"
                inputMode="email"
                {...register('email')}
                className={`w-full rounded-xl border bg-card px-4 py-3 text-foreground transition-all placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                  errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-border'
                }`}
                placeholder="your@email.com"
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              <AnimatePresence>
                {errors.email && (
                  <motion.p
                    id="email-error"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-1 text-sm text-red-500"
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Phone Field */}
            <motion.div variants={fieldVariants} className="relative">
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Phone (Optional)
              </label>
              <input
                id="phone"
                type="tel"
                inputMode="tel"
                {...register('phone')}
                className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground transition-all placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="+91 98765 43210"
              />
            </motion.div>

            {/* Project Type */}
            <motion.div variants={fieldVariants} className="relative">
              <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                Project Type *
              </label>
              <select
                id="projectType"
                {...register('projectType')}
                className={`w-full rounded-xl border bg-card px-4 py-3 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                  errors.projectType ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-border'
                }`}
                aria-describedby={errors.projectType ? 'projectType-error' : undefined}
              >
                <option value="Website for Service Business">Website for Service Business</option>
                <option value="AI Automation">AI Automation</option>
                <option value="Template/Product Purchase">Template/Product Purchase</option>
                <option value="Other">Other</option>
              </select>
              <AnimatePresence>
                {errors.projectType && (
                  <motion.p
                    id="projectType-error"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-1 text-sm text-red-500"
                  >
                    {errors.projectType.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Message Field */}
            <motion.div variants={fieldVariants} className="relative">
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message * ({messageValue.length}/500)
              </label>
              <textarea
                id="message"
                rows={5}
                {...register('message')}
                className={`w-full rounded-xl border bg-card px-4 py-3 text-foreground transition-all placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none ${
                  errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-border'
                }`}
                placeholder="Tell me about your project..."
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              <AnimatePresence>
                {errors.message && (
                  <motion.p
                    id="message-error"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-1 text-sm text-red-500"
                  >
                    {errors.message.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Budget Range */}
            <motion.div variants={fieldVariants} className="relative">
              <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                Budget Range (Optional)
              </label>
              <select
                id="budget"
                {...register('budget')}
                className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="Not sure yet">Not sure yet</option>
                <option value="₹25k - ₹50k">₹25k - ₹50k</option>
                <option value="₹50k - ₹1L">₹50k - ₹1L</option>
                <option value="₹1L+">₹1L+</option>
              </select>
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={fieldVariants}>
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
                whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-orange-500 px-6 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-purple-500/25 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <span className="flex items-center justify-center gap-2">
                    <LoaderIcon className="h-5 w-5 animate-spin" />
                    <span>Sending...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <span>Send Message</span>
                    <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                )}
              </motion.button>
            </motion.div>

            {/* Error Message */}
            <AnimatePresence>
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-500"
                >
                  {errorMessage}
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>

      {/* Right Column - Quick Contact (40%) */}
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-6"
        >
          <div>
            <h3 className="mb-4 font-heading text-xl font-bold text-foreground">
              Prefer to message directly?
            </h3>
            
            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/919876543210?text=Hi Rajesh, I'd like to discuss a project"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              animate={{
                boxShadow: [
                  '0 0 0 0 rgba(16, 185, 129, 0)',
                  '0 0 0 10px rgba(16, 185, 129, 0.2)',
                  '0 0 0 0 rgba(16, 185, 129, 0)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex items-center justify-center gap-3 rounded-full bg-green-600 px-6 py-4 text-sm font-semibold text-white transition-all hover:bg-green-700"
            >
              <WhatsAppIcon className="h-5 w-5" />
              <span>Chat on WhatsApp</span>
            </motion.a>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <MailIcon className="h-4 w-4" />
              <button
                onClick={() => copyToClipboard('rajesh@example.com')}
                className="hover:text-foreground"
              >
                rajesh@example.com
              </button>
            </div>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <MapPinIcon className="h-4 w-4" />
              <span>Pune, India (available for remote projects)</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <ClockIcon className="h-4 w-4" />
              <span>Usually responds within 24 hours</span>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="mb-3 text-sm font-medium text-foreground">Follow Me</h4>
            <div className="flex gap-3">
              <motion.a
                href="https://github.com/rajesh"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: 'hsl(var(--primary))' }}
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="GitHub"
              >
                <GitHubIcon className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/rajesh"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: 'hsl(var(--primary))' }}
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com/rajesh"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: 'hsl(var(--primary))' }}
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Twitter"
              >
                <TwitterIcon className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}