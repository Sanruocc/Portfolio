import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { GlobalProviders } from '@/components/global-providers';
import { FloatingContact } from '@/components/ui/floating-contact';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rajesh Shrirao | Full-Stack Developer & Web Designer in Pune, India',
  description: 'Premium SaaS-style websites for service businesses in India. Specializing in web design, AI automation, and digital products for doctors, dentists, and professionals across Pune and Mumbai.',
  keywords: [
    'web designer Pune',
    'web developer India',
    'SaaS websites India',
    'freelance developer Pune',
    'website design for doctors India',
    'AI automation developer',
    'Next.js developer Pune',
    'Mumbai web designer',
    'full-stack developer India',
    'web development services Pune',
    'professional website design',
    'digital product development'
  ],
  authors: [{ name: 'Rajesh Shrirao' }],
  creator: 'Rajesh Shrirao',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://rajeshshrirao.com',
    title: 'Rajesh Shrirao | Full-Stack Developer & Web Designer',
    description: 'Premium web experiences for service businesses in India',
    siteName: 'Rajesh Shrirao Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rajesh Shrirao - Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rajesh Shrirao | Full-Stack Developer',
    description: 'Building premium web experiences for Indian service businesses',
    images: ['/twitter-image.jpg'],
    creator: '@rajeshshrirao',
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
  metadataBase: new URL('https://rajeshshrirao.com'),
  alternates: {
    canonical: '/',
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
    <html lang='en' suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17705589248"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17705589248');
          `
        }} />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans bg-background text-foreground antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <GlobalProviders>
            <Navigation />
            <main id='main-content'>{children}</main>
            <Footer />
            <FloatingContact />
          </GlobalProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}
