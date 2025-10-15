# Sitemap Fix Instructions

## Changes Made

1. **Fixed `sitemap.ts`**:
   - Changed to proper async function
   - Added dynamic blog posts and projects from Sanity
   - Included all pages: home, /blog, /projects, and all dynamic routes
   - Set default URL to https://invoiceflowme.vercel.app

2. **Updated `robots.ts`**:
   - Fixed to block /studio/ and /api/ paths
   - Set default URL to https://invoiceflowme.vercel.app

## Required: Set Vercel Environment Variable

**CRITICAL**: You must set the `NEXT_PUBLIC_SITE_URL` environment variable in Vercel:

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your project (invoiceflowme)
3. Go to **Settings** → **Environment Variables**
4. Add a new variable:
   - **Name**: `NEXT_PUBLIC_SITE_URL`
   - **Value**: `https://invoiceflowme.vercel.app`
   - **Environment**: Select all (Production, Preview, Development)
5. Click **Save**
6. **Redeploy** your application for changes to take effect

## After Deployment

1. Wait 2-3 minutes for deployment to complete
2. Verify sitemap works: Visit https://invoiceflowme.vercel.app/sitemap.xml
3. Verify robots.txt: Visit https://invoiceflowme.vercel.app/robots.txt

## Submit to Google Search Console

1. Go to Google Search Console: https://search.google.com/search-console
2. Select your property
3. Go to **Sitemaps** in the left menu
4. Remove the old sitemap if it shows errors
5. Add new sitemap URL: `https://invoiceflowme.vercel.app/sitemap.xml`
6. Click **Submit**

Google typically processes sitemaps within 24-48 hours after successful submission.

## Troubleshooting

If sitemap still shows errors:
- Check that all environment variables are set in Vercel
- Ensure Sanity CMS is properly configured with valid project ID
- Check Vercel deployment logs for any errors
- Verify sitemap.xml is accessible and returns valid XML (not HTML error page)
