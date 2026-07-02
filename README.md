# Zikorra — Landing Page

Marketing/waitlist landing page for **Zikorra**, Nigeria's managed home and property service platform. Connects customers and property owners with verified artisans for repairs, maintenance, inspections, and property care — with clear quotes, documented progress, and payment released only after job confirmation.

Built with [Next.js](https://nextjs.org) (App Router) and [Tailwind CSS](https://tailwindcss.com).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Stack

- **Next.js 16** (App Router) — see `AGENTS.md` before assuming any API works the way you remember; this version has breaking changes from older training data. Docs are vendored at `node_modules/next/dist/docs/`.
- **React 19**
- **Tailwind CSS v4** — theme tokens (brand color, fonts) are defined in `app/globals.css` via `@theme inline`, not a `tailwind.config.js`.
- **lucide-react** for icons that aren't custom brand assets.
- **next/font** — Geist is the site-wide default (loaded in `app/layout.tsx`); Manrope is loaded separately in a couple of components where the design calls for it specifically.

## Project structure

```
app/
  layout.tsx           Root layout, fonts, metadata
  page.tsx              Assembles the page from section components
  globals.css           Tailwind import + theme tokens (brand color, fonts)
  components/
    Hero.tsx             Hero heading, badge, waitlist form
    ServiceStrip.tsx      Full-bleed photo strip + "Service Flow" card
    Features.tsx          Three-column feature highlights
    HowItHelps.tsx         Artisan/customer card exports + copy
    Faq.tsx                 Accordion FAQ (client component)
    CtaSection.tsx           Bottom waitlist CTA + contact info card
    Footer.tsx                Oversized wordmark footer
    WaitlistForm.tsx           Shared email capture form (used in Hero + CTA)
    PlaceholderImage.tsx        Thin wrapper around next/image (fixed aspect box, cover/contain)
public/
  icons/                 Small UI icons (badge icon, mail icon)
  images/
    hero/                 hero-strip-1..4 — the ServiceStrip photo row
    how-it-helps/          artisan-card / customer-card — full Figma exports
```

## Adding/replacing images

Image slots are wired to fixed paths under `public/images/` and `public/icons/` — drop a file in with the expected name and it appears automatically, no code changes needed. Ask before adding a new slot so the filename/aspect-ratio convention stays consistent.

A couple of format notes learned the hard way:

- **Prefer real vector SVGs for small icons, PNG/JPG for photos.** Figma will sometimes export an "SVG" that's actually a giant raster image (megabytes) wrapped in SVG tags when the layer has an image fill or unflattened effect — check the file size after exporting; a real vector icon should be a few KB at most.
- Card-style UI exports (e.g. `how-it-helps/*.png`) are rendered with `object-contain`, not `object-cover`, so they won't get cropped if the aspect ratio is slightly off — but matching the export's actual pixel dimensions in the component avoids letterboxing.

## Notes

- The waitlist form is presentational only — it doesn't call an API yet. Submitting shows a local "you're on the list" confirmation.
- The page is a single scrolling document (`app/page.tsx`); there's no header/nav section yet, matching the current design.
