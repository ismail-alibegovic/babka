# Babka Blend & Bakery

Bosnian-first, bilingual bakery and café website for Sarajevo. Next.js App Router, React, TypeScript, Tailwind CSS and GSAP.

## Run

```sh
npm install
npm run dev
npm run build
npm run typecheck
```

## Content

Edit `lib/content.ts` for Bosnian/English copy, products and business links. Routes: `/`, `/menu`, `/our-story`, `/visit`; English versions under `/en`. Styles and mint brand tokens are in `app/globals.css`.

## Deployment

Import into Vercel using the Next.js preset and `npm run build`. No database or secrets required. Set `NEXT_PUBLIC_SITE_URL` if connecting a custom domain.

## Photography

All photographs are labelled illustrative AI-generated placeholders, not actual Babka products or premises. See `ASSETS.md`. Prices and opening hours link to current business listings. Fonts retain their SIL OFL licenses.

The counter-inspired signature mint is approximately `#87B1AB`. Native anchors provide page navigation and language switching.
