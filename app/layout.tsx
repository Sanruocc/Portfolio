import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Portfolio | Creative Developer',
    template: '%s | Portfolio',
  },
  description: 'Full-stack developer specializing in modern web applications with React, Next.js, and TypeScript.',
  keywords: ['developer', 'portfolio', 'react', 'nextjs', 'typescript', 'web development'],
  authors: [{ name: 'Developer' }],
  creator: 'Developer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Portfolio',
    title: 'Portfolio | Creative Developer',
    description: 'Full-stack developer specializing in modern web applications.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Creative Developer',
    description: 'Full-stack developer specializing in modern web applications.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
