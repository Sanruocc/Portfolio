# SEO & Deployment Optimization Guide

This guide covers the comprehensive SEO and deployment optimizations implemented for Rajesh Shrirao's portfolio website.

## Table of Contents

1. [SEO Configuration](#seo-configuration)
2. [Metadata Setup](#metadata-setup)
3. [Structured Data (JSON-LD)](#structured-data-json-ld)
4. [Performance Optimizations](#performance-optimizations)
5. [Deployment Configuration](#deployment-configuration)
6. [Post-Deployment Checklist](#post-deployment-checklist)

## SEO Configuration

### Metadata (app/layout.tsx)

The site includes comprehensive metadata optimized for Indian service businesses:

- **Title**: "Rajesh Shrirao | Full-Stack Developer & Web Designer in Pune, India"
- **Description**: Premium SaaS-style websites targeting doctors, dentists, and professionals
- **Keywords**: Optimized for Pune, Mumbai, and India-based searches
- **Open Graph**: Complete social sharing configuration
- **Twitter Card**: Large image summary cards
- **Canonical URLs**: Proper canonicalization

### Robots.txt (app/robots.ts)

Enhanced robots configuration:
- Allows all user agents to main content
- Disallows API routes and admin sections
- Special Googlebot rules with crawl delay
- Includes sitemap reference

### Sitemap (app/sitemap.ts)

Dynamic sitemap with:
- Homepage (priority 1, weekly updates)
- About page (priority 0.8, monthly updates)
- Projects page (priority 0.9, weekly updates)
- Services page (priority 0.8, monthly updates)
- Contact page (priority 0.7, yearly updates)

## Metadata Setup

### Environment Variables (.env.example)

Required environment variables:
```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://rajeshshrirao.com
NEXT_PUBLIC_SITE_NAME=Rajesh Shrirao Portfolio

# Email Configuration
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
FROM_EMAIL=Rajesh Shrirao Portfolio <noreply@rajeshshrirao.com>
CONTACT_EMAIL=contact@rajeshshrirao.com

# CORS
ALLOWED_ORIGIN=https://rajeshshrirao.com

# WhatsApp
WHATSAPP_NUMBER=91xxxxxxxxxx

# Analytics (Optional)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
NEXT_PUBLIC_UMAMI_WEBSITE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

### Social Images

Place the following images in the `public/` directory:

1. **og-image.jpg** (1200x630px)
   - Professional headshot
   - Name and title
   - Contact information
   - Website URL

2. **twitter-image.jpg** (1200x600px)
   - Optimized for Twitter sharing
   - Branding and key messaging

## Structured Data (JSON-LD)

### Person Schema
- Full name and job title
- Contact information
- Address (Pune, Maharashtra, India)
- Social media profiles
- Skills and expertise

### Organization Schema
- Business name and description
- Contact points with multiple languages
- Service offerings

### Local Business Schema
- Pune-specific location data
- Geographic coordinates
- Service areas

### Website Schema
- Site information
- Search action configuration

## Performance Optimizations

### Next.js Configuration (next.config.mjs)

**Image Optimization:**
- AVIF and WebP formats
- Multiple device sizes
- Optimized image sizes

**Security Headers:**
- HSTS with preload
- X-Frame-Options: DENY
- Content-Security-Policy
- X-Content-Type-Options: nosniff
- Referrer-Policy
- Permissions-Policy

**Performance Features:**
- SWC minification
- Gzip compression
- Package import optimization
- Bundle size analysis

## Deployment Configuration

### Vercel (vercel.json)

**Features:**
- Mumbai region deployment (bom1)
- Custom headers for security
- Redirect rules
- Function timeouts
- Environment variables

**Deployment:**
```bash
npm run deploy:vercel
```

### Netlify (netlify.toml)

**Features:**
- Build configuration
- Context-specific environment variables
- Security headers
- Caching strategies
- Redirect rules

**Deployment:**
```bash
npm run deploy:netlify
```

### Package.json Scripts

**Development:**
```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Start production server
```

**Optimization:**
```bash
npm run build:analyze       # Build with bundle analysis
npm run build:production    # Production build with NODE_ENV
npm run export              # Static export
```

**SEO & Analytics:**
```bash
npm run sitemap:generate    # Generate sitemap
npm run seo:audit          # Lighthouse CI audit
```

## Post-Deployment Checklist

### 1. Verify Environment Variables
- [ ] Set all required environment variables in production
- [ ] Verify email configuration works
- [ ] Test contact form submission

### 2. Search Engine Registration
- [ ] Submit sitemap to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Register with Indian search directories

### 3. Social Media Verification
- [ ] Add Twitter card validator
- [ ] Test Open Graph with Facebook Debugger
- [ ] Verify LinkedIn sharing

### 4. Analytics Setup
- [ ] Install Google Analytics
- [ ] Set up goal tracking
- [ ] Configure conversion tracking
- [ ] Add Umami analytics (optional)

### 5. Performance Monitoring
- [ ] Run Lighthouse audit (target: 90+)
- [ ] Check Core Web Vitals
- [ ] Monitor page speed
- [ ] Set up performance alerts

### 6. SEO Validation
- [ ] Check structured data with Google's Testing Tool
- [ ] Verify meta tags
- [ ] Test robots.txt
- [ ] Validate sitemap

### 7. Security Checks
- [ ] SSL certificate verification
- [ ] Security headers check
- [ ] CSP validation
- [ ] Run security audit

### 8. Content Review
- [ ] Proofread all content
- [ ] Check for broken links
- [ ] Verify images load correctly
- [ ] Test on multiple devices

### 9. Backup & Monitoring
- [ ] Set up automated backups
- [ ] Configure uptime monitoring
- [ ] Set up error tracking
- [ ] Enable log monitoring

### 10. Legal Compliance
- [ ] Add privacy policy
- [ ] Add terms of service
- [ ] GDPR compliance (if applicable)
- [ ] Add cookie consent banner

## Local Testing

Before deployment, test locally:

```bash
# Build the project
npm run build

# Run production server locally
npm run start

# Check bundle size
npm run build:analyze

# Run SEO audit
npm run seo:audit
```

## Performance Targets

- **Lighthouse Performance**: 90+
- **Lighthouse SEO**: 100
- **Lighthouse Accessibility**: 90+
- **Lighthouse Best Practices**: 90+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## Monitoring & Maintenance

### Weekly
- Check Google Search Console for errors
- Review analytics data
- Monitor page load speeds

### Monthly
- Update content and projects
- Review and update keywords
- Check for broken links
- Update sitemap if needed

### Quarterly
- Full SEO audit
- Performance optimization review
- Security updates
- Content refresh

## Troubleshooting

### Common Issues

**Images not loading:**
- Check image paths in public directory
- Verify Next.js Image component usage
- Check Content Security Policy

**SEO tags not working:**
- Verify metadata in layout.tsx
- Check for proper export
- Test with social media validators

**Contact form not sending:**
- Verify Resend API key
- Check environment variables
- Test API endpoint

**Performance issues:**
- Run bundle analyzer
- Check image optimization
- Review lazy loading implementation

## Additional Resources

- [Next.js SEO Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Netlify Deployment Guide](https://docs.netlify.com/)

## Support

For questions or issues:
1. Check this guide first
2. Review Next.js documentation
3. Consult SEO best practices
4. Contact development team

---

**Last Updated**: 2025-11-26
**Version**: 1.0
**Maintained By**: Rajesh Shrirao