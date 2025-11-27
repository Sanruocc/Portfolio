'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What if I have more than 5 pages?',
    answer: 'No problem! I can scale the quote based on your project size. Just share your Figma design, and I\'ll give you an accurate price estimate for any number of pages. For complex projects with 6+ pages, I can offer a volume discount.'
  },
  {
    question: 'What if I need backend/API functionality?',
    answer: 'I support modern backend solutions like Supabase for databases, authentication, and storage, plus Stripe for payments. I can also integrate with your existing APIs. Just let me know your requirements, and I\'ll include it in the scope.'
  },
  {
    question: 'Do you work with complex Figma files?',
    answer: 'Yes! I can handle anything from simple landing pages to complex multi-page websites. This includes advanced animations, custom components, responsive breakpoints, and even design system implementation.'
  },
  {
    question: 'What if I need changes after delivery?',
    answer: 'The $349 package includes one round of revisions within 7 days of delivery. Additional changes can be quoted separately at $75/hour. I believe in getting it right the first time!'
  },
  {
    question: 'Can you deploy my website?',
    answer: 'Absolutely! I provide free deployment on Vercel, complete with custom domain setup, SSL certificates, and CI/CD pipeline. You\'ll also get a fully documented GitHub repository.'
  },
  {
    question: 'What about SEO and performance?',
    answer: 'Every site I build includes semantic HTML markup, optimized images, meta tags, structured data, and Google PageSpeed scores of 90-100. Your site will be SEO-ready from day one.'
  },
  {
    question: 'How do payments work?',
    answer: 'I use Stripe for secure payments. 50% upfront to start the project, 50% upon delivery. No hidden fees, no surprises. You\'ll receive detailed invoices and all work is backed by a money-back guarantee.'
  },
  {
    question: 'Do you provide ongoing maintenance?',
    answer: 'Yes! After the initial 30-day support period, I offer ongoing maintenance packages starting at $150/month for content updates, security patches, and small modifications.'
  }
];

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

export function FigmaFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-orange-500 to-purple-600 bg-clip-text text-transparent"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground"
          >
            Everything you need to know about the Figma to Next.js conversion process
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-4 sm:p-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-purple-500/20 rounded-xl"
              >
                <div className="flex items-start gap-3 sm:gap-4 flex-1">
                  <div className="flex-shrink-0 mt-0.5">
                    <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 dark:text-gray-200 pr-2 sm:pr-4 leading-tight">
                    {faq.question}
                  </h3>
                </div>
                
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="pl-9 border-l-2 border-purple-500/20 ml-2.5">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA after FAQ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-2xl bg-gradient-to-br from-card/80 to-background border border-border/50"
          >
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              I&apos;m here to help! Reach out and I&apos;ll personally answer any questions about your project.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/919822379976?text=Hi Rajesh, I have questions about your Figma to Next.js service"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                💬 WhatsApp Me
              </a>
              <a
                href="mailto:rajeshshrirao696@gmail.com?subject=Figma to Next.js Service Questions"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-purple-500/30 text-foreground font-semibold hover:bg-purple-500/10 transition-all duration-300"
              >
                📧 Send Email
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}