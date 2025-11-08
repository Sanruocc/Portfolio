# Deployment Checklist for Sitemap Fix

## Problem
The sitemap is not showing after deployment because the `NEXT_PUBLIC_SITE_URL` environment variable is not properly configured in Vercel.

## Solution Applied

### Code Changes
1. **Updated `app/sitemap.ts`**: Now fallbacks to `VERCEL_URL` if `NEXT_PUBLIC_SITE_URL` is not set
2. **Updated `app/robots.ts`**: Same fallback mechanism for consistency
3. **Updated `.env.example`**: Added clear instructions for setting the site URL

### How It Works
The sitemap and robots.txt now use a priority system:
1. First: `NEXT_PUBLIC_SITE_URL` (if set in Vercel)
2. Second: `VERCEL_URL` (automatically provided by Vercel)
3. Last: Fallback to default URL

## Vercel Configuration Steps

### Option 1: Set Custom Domain (Recommended)
If you have a custom domain:
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add:
   - **Name**: `NEXT_PUBLIC_SITE_URL`
   - **Value**: `https://yourdomain.com` (your custom domain)
   - **Environment**: Select all (Production, Preview, Development)
5. Click **Save**

### Option 2: Use Vercel Auto-Generated URL
If using Vercel's generated URL (e.g., `rajeshshrirao.vercel.app`):
1. Go to your project dashboard
2. Copy your production URL from the project overview
3. Go to **Settings** → **Environment Variables**
4. Add:
   - **Name**: `NEXT_PUBLIC_SITE_URL`
   - **Value**: `https://rajeshshrirao.vercel.app` (your actual Vercel URL)
   - **Environment**: Production only
5. Click **Save**

### Option 3: Let It Auto-Detect (Automatic)
With the updated code, if you don't set `NEXT_PUBLIC_SITE_URL`:
- Vercel will automatically use the `VERCEL_URL` environment variable
- This works out of the box without any configuration
- **No manual setup required!**

## After Configuration

### 1. Redeploy
After setting environment variables:
```bash
git add .
git commit -m "fix: update sitemap to auto-detect Vercel deployment URL"
git push
```
Or trigger a redeploy from Vercel dashboard.

### 2. Verify Sitemap (wait 2-3 minutes after deployment)
Visit these URLs to confirm:
- `https://your-site.vercel.app/sitemap.xml`
- `https://your-site.vercel.app/robots.txt`

Both should load successfully with correct URLs.

### 3. Test Locally
```bash
npm run build
npm start
# Visit http://localhost:3000/sitemap.xml
```

## Submit to Google Search Console

Once verified:
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property
3. Go to **Sitemaps** in left menu
4. Remove old sitemap if showing errors
5. Add new sitemap: `https://your-site.vercel.app/sitemap.xml`
6. Click **Submit**

Google typically processes within 24-48 hours.

## Troubleshooting

### Sitemap shows 404
- Wait 2-3 minutes after deployment
- Clear browser cache and try again
- Check Vercel deployment logs for build errors

### Sitemap has wrong URLs
- Verify `NEXT_PUBLIC_SITE_URL` is set correctly in Vercel
- Ensure you redeployed after setting the variable
- Check that the variable is set for the correct environment (Production)

### Sitemap is empty or missing blog posts
- Verify Sanity CMS is properly configured
- Check `NEXT_PUBLIC_SANITY_PROJECT_ID` environment variable
- Test the Sanity query in Sanity Studio vision tool

## Quick Check
Run this to test sitemap generation locally:
```bash
npm run build
npm start
curl http://localhost:3000/sitemap.xml
```

## What Changed
- ✅ Sitemap now auto-detects Vercel deployment URL
- ✅ Robots.txt uses same URL detection
- ✅ No manual configuration required (but recommended for production)
- ✅ Falls back gracefully if variables not set
