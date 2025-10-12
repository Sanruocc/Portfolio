# Sanity CMS Setup Guide

## ✅ What's Been Done

1. **Installed Sanity Packages:**
   - `@sanity/client` - Core Sanity client
   - `@sanity/image-url` - Image URL builder
   - `sanity` - Sanity Studio
   - `@sanity/vision` - GROQ query testing tool

2. **Created Schema Files:**
   - Blog Post schema (`sanity/schemas/blogPost.ts`)
   - Project schema (`sanity/schemas/project.ts`)
   - Author schema (`sanity/schemas/author.ts`)
   - Category schema (`sanity/schemas/category.ts`)

3. **Set Up Configuration:**
   - Sanity config file (`sanity.config.ts`)
   - Sanity client (`lib/sanity.client.ts`)
   - Sanity queries (`lib/sanity.queries.ts`)
   - TypeScript types (`lib/sanity.types.ts`)

4. **Created Studio Route:**
   - Sanity Studio accessible at `/studio` route

5. **Updated Blog Pages:**
   - Blog listing page now fetches from Sanity
   - Ready to display blog posts from CMS

## 🚀 Next Steps

### Step 1: Create or Connect Sanity Project

You have a Sanity organization called "personal portfolio" (ID: `tgkpdnq7`).

**Option A: Create a New Project** (Recommended if you don't have one)

Run this command in your terminal:
\`\`\`bash
npm create sanity@latest -- --project tgkpdnq7 --dataset production --create-project "Portfolio CMS" --output-path ./studio-config
\`\`\`

**Option B: Use Existing Project**

If you already have a Sanity project, you can find your Project ID at https://sanity.io/manage

### Step 2: Update Environment Variables

1. Copy your Project ID from Sanity dashboard
2. Open `.env.local` file
3. Update these values:
   \`\`\`env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your-token-here  # Optional for now
   \`\`\`

### Step 3: Get API Token (Optional but Recommended)

1. Go to https://sanity.io/manage
2. Select your project
3. Navigate to **API** → **Tokens**
4. Create a new token with **Editor** permissions
5. Copy the token to your `.env.local` file

### Step 4: Start Development Server

\`\`\`bash
npm run dev
\`\`\`

### Step 5: Access Sanity Studio

1. Open http://localhost:3000/studio
2. Sign in with your Sanity account
3. Start creating content!

## 📝 Creating Your First Blog Post

1. Navigate to http://localhost:3000/studio
2. Click on "Blog Post" in the left sidebar
3. Fill in the required fields:
   - **Title**: Your blog post title
   - **Slug**: Auto-generated from title (click "Generate")
   - **Published at**: Select date and time
   - **Excerpt**: Short description (max 200 chars)
   - **Author**: Create an author first (see below)
   - **Categories**: Create categories first (see below)
   - **Body**: Your blog post content (supports rich text, images, code)

4. Click **Publish** when ready

## 👤 Creating an Author

1. Go to "Author" in the Studio
2. Fill in:
   - **Name**: Your name
   - **Slug**: Auto-generate
   - **Image**: Upload your photo (optional)
   - **Bio**: Brief description (optional)
3. Click **Publish**

## 🏷️ Creating Categories

1. Go to "Category" in the Studio
2. Fill in:
   - **Title**: Category name (e.g., "Web Development", "Tutorial")
   - **Slug**: Auto-generate
   - **Description**: Optional description
3. Click **Publish**

## 🎨 Creating Projects

1. Go to "Project" in the Studio
2. Fill in the project details:
   - **Title**: Project name
   - **Slug**: Auto-generate
   - **Subtitle**: Brief tagline
   - **Description**: Short project description
   - **Tech Stack**: Array of technologies used
   - **Features**: List of key features
   - **Main Image**: Upload project screenshot
   - **Live URL**: Link to live project
   - **GitHub URL**: Link to repository
   - And more detailed fields...
3. Toggle **Featured** to show on homepage
4. Set **Order** to control display position
5. Click **Publish**

## 🔧 Troubleshooting

### "No project ID found"
- Make sure you've updated `.env.local` with your Sanity project ID
- Restart the dev server after changing environment variables

### "Cannot connect to Sanity"
- Check your internet connection
- Verify your project ID is correct
- Make sure the dataset name matches (usually "production")

### "Permission denied"
- Make sure you're logged in to Sanity
- Check your API token has the correct permissions
- Try regenerating the token

## 📚 Useful Commands

\`\`\`bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
\`\`\`

## 🌐 Deployment

### Deploying to Vercel

1. Push your code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN`
   - `NEXT_PUBLIC_SITE_URL` (your Vercel URL)
4. Deploy!

### CORS Settings for Production

After deploying, update Sanity CORS settings:

1. Go to https://sanity.io/manage
2. Select your project
3. Navigate to **API** → **CORS Origins**
4. Add your production URL (e.g., `https://yoursite.vercel.app`)

## 📖 Documentation

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)

## 🎉 You're All Set!

Your portfolio is now powered by Sanity CMS. You can:
- ✅ Create and manage blog posts
- ✅ Manage project portfolio
- ✅ Organize content with categories
- ✅ Upload and optimize images
- ✅ Preview content before publishing

Happy content creating! 🚀
