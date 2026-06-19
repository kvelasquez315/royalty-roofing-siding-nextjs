# royalty-roofing-siding (Next.js)

Next.js (App Router) port of the original Vite/React landing page — visually and
behaviorally identical, rebuilt for Vercel.

## Stack
- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v4, Radix/shadcn, framer-motion, lucide-react

## Page / SEO
- Title: Free Siding Estimate | Royalty Roofing and Siding | Omaha, NE
- robots: noindex, nofollow (paid-ad landing page)

## Tracking preserved
- Google Ads tag (AW-931355603). (No GTM/GA4 — matches the original.) Includes Open Graph tags.
- Form still posts to its original GoHighLevel/LeadConnector webhook.

## Images
Localized to `public/images/` (webp converted to PNG). No external CDN dependency.

## What changed from the original
- Vite → Next.js App Router (`src/app/`). Single route `/`, 404 → `not-found`.
- Removed Manus tooling, Express static server, wouter, unused OAuth/Map/ManusDialog.
- Head tags moved into `src/app/layout.tsx`.
- `import.meta.env.VITE_*` → `process.env.NEXT_PUBLIC_*` where present.

## Develop / build / deploy
```bash
npm install
npm run dev            # http://localhost:3000
npm run build && npm start
```
Deploy: import to Vercel (framework auto-detects as Next.js; no vercel.json needed).
