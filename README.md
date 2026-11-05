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
- **next/font** — Geist is the site-wide default (loaded in `app/layout.tsx`); Geist Mono is also configured for monospace text.

## Project structure

```
app/
  layout.tsx             Root layout, fonts, metadata, analytics
  page.tsx               Assembles the redesigned sections in display order
  globals.css            Tailwind import and theme tokens
  components/
    Hero.tsx             Hero copy, floating tools, categories, photo strip
    HeroNav.tsx          Site header and navigation
    HowItHelps.tsx       Customer and artisan app cards
    TrustFeatures.tsx    Verification, booking, and payment highlights
    ServiceCategories.tsx  Coloured service list
    Testimonials.tsx     Customer review cards
    Faq.tsx              Animated FAQ accordion
    HowItWorks.tsx       Experience accordion and illustration
    FindHelp.tsx         Service pills and customer app link
    ContactSection.tsx   Patterned contact banner
    Footer.tsx           Footer navigation and waitlist dialog
    WaitlistForm.tsx     Email/phone capture form
public/
  icons/                 Brand, category, and trust icons
  images/                Hero, app mockups, experience, and contact artwork
```

## Adding/replacing images

Image slots are wired to fixed paths under `public/images/` and `public/icons/` — drop a file in with the expected name and it appears automatically, no code changes needed. Ask before adding a new slot so the filename/aspect-ratio convention stays consistent.

A couple of format notes learned the hard way:

- **Prefer real vector SVGs for small icons, PNG/JPG for photos.** Figma will sometimes export an "SVG" that's actually a giant raster image (megabytes) wrapped in SVG tags when the layer has an image fill or unflattened effect — check the file size after exporting; a real vector icon should be a few KB at most.
- Card-style UI exports (e.g. `how-it-helps/*.png`) are rendered with `object-contain`, not `object-cover`, so they won't get cropped if the aspect ratio is slightly off — but matching the export's actual pixel dimensions in the component avoids letterboxing.

## Notes

- App download links open the waitlist dialog until store URLs are available.
- The waitlist form submits email or phone details to the configured service and handles success and failure states.
- The page is a single scrolling document (`app/page.tsx`), with the header preserved in `HeroNav.tsx`.
- Social and legal footer items are placeholders until their destination URLs are supplied.
