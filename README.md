# Rajesh Shrirao Portfolio

A modern portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and currently migrating from Payload CMS to Sanity CMS for SEO-optimized blogging.

## Features

- 🚀 **Next.js 14** with App Router
- 📝 **CMS Migration** - Transitioning from Payload CMS to Sanity CMS
- 🎨 **Tailwind CSS** for styling
- 📱 **Responsive Design** 
- 🔍 **SEO Optimized** with meta tags, sitemap, and structured data
- ☁️ **Vercel** deployment ready
- 🎭 **Framer Motion** animations
- 🖼️ **Image Upload** and optimization (coming with Sanity)

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **CMS**: Currently migrating from Payload CMS to Sanity CMS
- **Deployment**: Vercel
- **Styling**: Tailwind CSS with custom animations

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd rajesh-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Access the application**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Blog: [http://localhost:3000/blog](http://localhost:3000/blog)

### Current Status

🚧 **CMS Migration in Progress**

This portfolio is currently migrating from Payload CMS to Sanity CMS. 
- Blog functionality is temporarily showing placeholder content
- Static pages (home, projects) are fully functional
- Sanity CMS integration coming soon

### Next Steps for Sanity Integration

1. **Set up Sanity Project**
   - Create a new project at [sanity.io](https://sanity.io)
   - Configure your schema types for blog posts
   - Set up environment variables for Sanity

2. **Configure Environment Variables**
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_READ_TOKEN=your-read-token
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

## Deployment on Vercel

### Automatic Deployment

1. **Connect to Vercel**
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Vercel will automatically detect Next.js

2. **Set Environment Variables**
   In your Vercel dashboard, add these environment variables (after Sanity integration):
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_READ_TOKEN=your-read-token
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   ```

3. **Deploy**
   - Vercel will automatically build and deploy your application
   - Your site will be available at `https://your-project.vercel.app`

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables (after Sanity integration)
vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID
vercel env add NEXT_PUBLIC_SANITY_DATASET
vercel env add SANITY_API_READ_TOKEN
vercel env add NEXT_PUBLIC_SITE_URL

# Redeploy with environment variables
vercel --prod
```

## Content Management

🚧 **Currently Under Migration**

The blog functionality is transitioning from Payload CMS to Sanity CMS. 
During this migration period:
- Static pages (home, projects) are fully functional
- Blog pages show placeholder content
- Full content management will be available after Sanity integration

### SEO Features

- **Meta Tags**: Properly configured meta tags
- **Open Graph**: Social media sharing optimization
- **Sitemap**: Auto-generated at `/sitemap.xml`
- **Image Optimization**: Next.js automatic image optimization

## Project Structure

```
├── app/
│   ├── blog/                     # Blog pages (migrating)
│   │   ├── [slug]/              # Individual blog post pages
│   │   └── page.tsx             # Blog listing page
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   ├── projects/                # Projects pages
│   ├── robots.ts                # Robots.txt generation
│   └── sitemap.ts               # Dynamic sitemap generation
├── components/
│   ├── about-section.tsx        # About section
│   ├── hero-section.tsx         # Hero section
│   ├── navigation.tsx           # Navigation component
│   ├── portfolio-grid.tsx       # Portfolio grid
│   └── ...                      # Other components
├── lib/
│   └── utils.ts                 # Utility functions
├── public/                      # Static assets
├── tailwind.config.ts           # Tailwind configuration
├── next.config.mjs              # Next.js configuration
├── tsconfig.json                # TypeScript configuration
└── vercel.json                  # Vercel deployment config
```

### Styling

The project uses Tailwind CSS. Customize styles in:
- `tailwind.config.ts` - Tailwind configuration
- `app/globals.css` - Global styles
- Component files - Component-specific styles

## Performance

- **Image Optimization**: Next.js automatic image optimization
- **Static Generation**: Static pages are pre-rendered for performance
- **Caching**: Proper caching headers for static assets
- **Bundle Optimization**: Automatic code splitting

## Security

- **Environment Variables**: Sensitive data stored in environment variables
- **CORS**: Properly configured for production
- **TypeScript**: Type safety for better code quality

## Roadmap

- [ ] **Sanity CMS Integration**: Complete migration to Sanity CMS
- [ ] **Blog Content Management**: Full blog functionality with Sanity
- [ ] **Image Gallery**: Enhanced image management
- [ ] **Contact Form**: Functional contact form integration
- [ ] **Analytics**: Performance and user analytics

## Support

For issues and questions:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Check the [Sanity documentation](https://www.sanity.io/docs)
3. Create an issue in this repository

## License

This project is licensed under the MIT License.