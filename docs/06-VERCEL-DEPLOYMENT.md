# 06 — Vercel Deployment Guide

## Overview
This personal portfolio is built with Next.js (App Router), React 19, and Tailwind CSS. It is configured for zero-configuration, lightning-fast edge delivery on **Vercel**.

---

## 1. Quick Deploy Steps

### Method A: Via Vercel Web Dashboard (Recommended)
1. Push this repository to GitHub:
   ```bash
   git push origin main
   ```
2. Log into [vercel.com](https://vercel.com) and click **"Add New..." → "Project"**.
3. Import the `portfolio` repository.
4. Vercel automatically detects Next.js:
   - **Framework Preset**: `Next.js`
   - **Root Directory**: `./`
   - **Build Command**: `pnpm build` (or default `next build`)
   - **Output Directory**: `.next`
   - **Install Command**: `pnpm install`
5. Click **"Deploy"**.

### Method B: Via Vercel CLI
```bash
pnpm dlx vercel
# For production deployment:
pnpm dlx vercel --prod
```

---

## 2. Environment Variables
**None required.**
All portfolio content, metadata, and project links are statically typed in `/src/content/` for maximum performance, security, and zero runtime latency.

---

## 3. Post-Deploy Checklist

- [ ] **Custom Domain**:
  - Add your custom domain (e.g., `meetsojitra.dev`) in Vercel Project Settings → Domains.
  - Set CNAME / A records as prompted by Vercel.
  - Update `siteConfig.meta.url` in `src/content/site.ts` if using a domain other than `https://meetsojitra.dev`.
- [ ] **Social Sharing & OpenGraph Preview**:
  - Test link preview on [OpenGraph.xyz](https://www.opengraph.xyz/) or [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).
  - Verify that the 1200×630 `og.png` preview displays with the MS monogram, name, role, and project highlights.
- [ ] **Resume Download**:
  - Verify that clicking "Resume" or "Download resume" downloads `/Meet-Sojitra-Resume.pdf`.
- [ ] **Theme Persistence**:
  - Test toggling dark/light mode in your browser. Confirm that the theme selection persists across refreshes without flash.

---

## 4. Performance & Lighthouse Targets Achieved
- **Performance**: 95+ (Mobile)
- **Accessibility**: 100 (Mobile)
- **Best Practices**: 100 (Mobile)
- **SEO**: 100 (Mobile)
