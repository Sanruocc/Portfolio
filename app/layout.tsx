import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import PageTransition from "../components/page-transition"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rajesh Shrirao - Full-Stack Web Developer | Next.js, React & AI Solutions",
  description: "Portfolio showcasing 3 flagship web development projects: InvoiceFlowMe (SaaS), Shoply (E-Commerce), and AI Guru (AI Support Bot). Specializing in Next.js, React, and modern web applications.",
  keywords: ["Next.js developer", "Full-Stack Developer", "React", "Web Development", "SaaS", "E-Commerce", "AI Integration", "Stripe", "MongoDB", "TypeScript"],
  authors: [{ name: "Rajesh Shrirao" }],
  creator: "Rajesh Shrirao",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://rajeshshrirao.vercel.app'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Rajesh Shrirao - Full-Stack Web Developer",
    description: "Portfolio showcasing 3 flagship web development projects: SaaS, E-Commerce, and AI solutions",
    siteName: "Rajesh Shrirao Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajesh Shrirao - Full-Stack Web Developer",
    description: "Portfolio showcasing 3 flagship web development projects",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className={`${inter.className} bg-background`}>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}
