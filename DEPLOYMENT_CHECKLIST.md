# 🚀 Deployment Checklist for Birds by Feather

## Pre-Deployment Steps

### 1. Domain Setup
- [ ] Register custom domain (required for Google AdSense)
- [ ] Configure DNS settings
- [ ] Set up SSL certificate (HTTPS)

### 2. Environment Variables
- [ ] Create `.env.local` file (copy from `.env.example`)
- [ ] Add your actual domain URL to `NEXT_PUBLIC_SITE_URL`
- [ ] Update all hardcoded `birdsbyfeather.com` references in code to your domain

### 3. Update Configuration Files
- [ ] Update domain in `/app/layout.tsx` (metadata base)
- [ ] Update domain in `/app/sitemap.ts`
- [ ] Update domain in `/app/robots.ts`
- [ ] Update domain in all metadata files

### 4. Google Services Setup
- [ ] Create Google Analytics 4 property
- [ ] Get GA Measurement ID
- [ ] Add GA ID to `.env.local`

### 5. Build & Test Locally
```bash
npm run build
npm run start
```
- [ ] Test all pages load correctly
- [ ] Verify sitemap at `/sitemap.xml`
- [ ] Verify robots.txt at `/robots.txt`
- [ ] Test mobile responsiveness
- [ ] Check console for errors

## Deployment

### Recommended: Vercel (Free for Next.js)

1. **Initial Setup**
   ```bash
   npm install -g vercel
   vercel login
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Add Environment Variables in Vercel Dashboard**
   - Go to Project Settings → Environment Variables
   - Add `NEXT_PUBLIC_SITE_URL`
   - Add `NEXT_PUBLIC_GA_ID`
   - Add `NEXT_PUBLIC_ADSENSE_ID` (after approval)

4. **Connect Custom Domain**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Alternative: Netlify

1. **Deploy via Git**
   - Connect GitHub repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`

2. **Environment Variables**
   - Add in Site Settings → Build & deploy → Environment

## Post-Deployment

### 1. Verify Deployment
- [ ] All pages accessible
- [ ] Images loading correctly
- [ ] Navigation working
- [ ] Forms functional (if any)
- [ ] Mobile version working

### 2. Google Search Console
- [ ] Add property to Search Console
- [ ] Verify ownership (multiple methods available)
- [ ] Submit sitemap: `https://yourdomain.com/sitemap.xml`
- [ ] Request indexing for main pages:
  - `/` (homepage)
  - `/nests`
  - `/about`
  - `/contact`
  - `/privacy`

### 3. Bing Webmaster Tools
- [ ] Add site to Bing Webmaster Tools
- [ ] Verify ownership
- [ ] Submit sitemap
- [ ] OR import from Google Search Console (faster)

### 4. Analytics Verification
- [ ] Visit your site
- [ ] Check Google Analytics Real-Time report
- [ ] Verify tracking is working

### 5. Performance Testing
- [ ] Run Google PageSpeed Insights
- [ ] Run GTmetrix
- [ ] Check Core Web Vitals
- [ ] Test on mobile devices

### 6. SEO Checks
- [ ] Verify meta tags with [Meta Tags](https://metatags.io/)
- [ ] Test Open Graph with [OpenGraph.xyz](https://www.opengraph.xyz/)
- [ ] Validate structured data with [Schema Markup Validator](https://validator.schema.org/)
- [ ] Check mobile-friendly with [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

## Google AdSense Application

### Prerequisites (Check Before Applying)
- [ ] Site has custom domain (NOT .vercel.app or .netlify.app)
- [ ] Site is HTTPS enabled
- [ ] Site has 15+ quality pages
- [ ] Site has been live for 1-6 months
- [ ] Site receives regular traffic (50-100+ visitors/day recommended)
- [ ] Privacy Policy page is accessible
- [ ] About page has detailed information
- [ ] Contact page is functional
- [ ] No copyright violations
- [ ] Content is original and valuable

### Application Process
1. **Apply for AdSense**
   - Go to [Google AdSense](https://www.google.com/adsense)
   - Click "Get Started"
   - Enter your domain
   - Fill out application

2. **Add AdSense Code**
   - Code already integrated in `/components/AdSense.tsx`
   - Just need to add your Publisher ID to `.env.local` when you get it

3. **Wait for Approval**
   - Usually takes 1-2 weeks
   - May take up to 4 weeks
   - You'll receive email notification

4. **After Approval**
   - Add `NEXT_PUBLIC_ADSENSE_ID` to environment variables
   - Redeploy site
   - Create ad units in AdSense dashboard
   - Place ads using `AdUnit` component

## Ongoing Maintenance

### Weekly
- [ ] Check Google Analytics traffic
- [ ] Monitor Search Console for errors
- [ ] Add new bird nest cameras (if available)
- [ ] Respond to any user feedback

### Monthly
- [ ] Review top-performing pages
- [ ] Check broken links
- [ ] Update any seasonal information
- [ ] Review AdSense performance (if approved)

### Quarterly
- [ ] Content audit and updates
- [ ] SEO performance review
- [ ] Technical SEO audit
- [ ] Add new features or content sections

## Quick Command Reference

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```

## Important URLs to Monitor

- Google Analytics: https://analytics.google.com
- Google Search Console: https://search.google.com/search-console
- Bing Webmaster: https://www.bing.com/webmasters
- Google AdSense: https://www.google.com/adsense
- PageSpeed Insights: https://pagespeed.web.dev
- Schema Validator: https://validator.schema.org

## Support Resources

- Next.js Docs: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- Google AdSense Help: https://support.google.com/adsense
- Search Console Help: https://support.google.com/webmasters

---

**Note**: Keep this checklist updated as you complete items. Good luck with your deployment! 🎉
