# SEO implementation — 5 November 2026

## Scope and initial findings

Audited the actual Next.js 16.2.10 App Router repository. The working tree was clean when SEO work began. Media-scroll changes requested during the audit were completed in separate commits; unrelated work was preserved.

There is one public document: `/`. Section anchors and the waitlist dialog are part of that page, not separate sitemap URLs. Metadata routes serve icons, robots and sitemap. No private, account, admin, search, API or unfinished page routes exist. Unknown paths use Next.js's genuine 404 response.

Live HTTP checks confirmed Vercel hosting and this redirect chain:

`http://zikorra.com/` → 308 `https://zikorra.com/` → 308 `https://www.zikorra.com/` → 200.

The canonical production origin is **https://www.zikorra.com**. Deployment is managed outside the repository: no deployment manifest or credentials were found. No deployment, push, Search Console submission or account change was performed.

Initial gaps: title and description only; no canonical, social cards, sitemap, robots policy or JSON-LD. The header's “What we do” anchor was broken. The waitlist input lacked an accessible name. Existing local builds depended on downloading Google Fonts.

Zikorra is a home-services platform serving customers and artisans, not a fabricated local contracting business. Existing FAQ copy says **launching in Lagos**, with other cities planned. Metadata and a visible launch note reflect that scope. No street address, nationwide availability, prices, rating, endorsement or review claim was added. Existing testimonial content remains supplied design content; its authenticity still needs owner confirmation before launch.

## Implemented

- Native Next.js metadata: descriptive title/description, absolute canonical, Open Graph and Twitter large-image card, locale, application name, existing icon and a 180px Apple touch icon.
- A 1200×630 social image using the actual Zikorra symbol, wordmark and existing painter photo. Image URL: `/images/social/zikorra-share.png`. No remote image dependency.
- Root-only `sitemap.xml`, excluding fragments, dialogs, metadata endpoints and errors. No invented `lastmod` timestamps or SEO priority scores.
- `robots.txt` allows crawling and references the production sitemap only for indexable builds.
- Production/preview policy centralized in `app/lib/seo.ts`; previews have both HTML `noindex, follow` and an `X-Robots-Tag` header. Their sitemap has no URLs. Crawling stays allowed so bots can see the directive. This is **not** authentication or a guarantee that an already indexed URL disappears immediately.
- Native trailing-slash normalization. Existing Vercel protocol/host redirects are preserved. Homepage tracking query variants canonicalize to the homepage; no query-dependent page content exists. No unjustified obsolete-URL redirects or keyword/location pages were introduced.
- Safely serialized JSON-LD for Organization and WebSite with stable absolute IDs, logo, public support email and descriptions matching site content. No LocalBusiness, Review, AggregateRating, Offers, FAQ rich-result claim, fake address or unnecessary homepage breadcrumbs.
- Server-rendered page content and metadata, one H1, semantic main/header/navigation, skip link, working service anchor and stable customer/artisan section anchors. The waitlist dialog now has its linked ID.
- Accessible waitlist input name and validation announcement. Existing FAQ/experience buttons retain expansion semantics and keyboard support.
- Measured low-contrast copy and links were darkened while preserving the visual identity. Full accessibility compliance is not claimed.
- Locally bundled variable Geist Latin WOFF2 (~29KB), `font-display: swap`, and upstream SIL Open Font License. Removed the unused Google-hosted mono font download. No Google Fonts request is needed at build time; Next.js still preloads the primary font.
- Existing responsive image dimensions/sizes, deferred image loading, and optimized silent H.264 videos are retained. The above-the-fold LCP is text, so no blanket image preloads were added.
- Existing GA4 measurement ID and integration are preserved. No tracking provider or token was invented.

## Environment and indexing policy

Values are build-time settings: rebuild after changing them. `.env.example` contains commented public placeholders and no secrets.

| Build environment | Indexing |
| --- | --- |
| Vercel `VERCEL_ENV=production` | Enabled by default |
| Vercel preview/development | Disabled, even with `SEO_ALLOW_INDEXING=true` |
| Unknown/non-Vercel host | Disabled by default |
| Non-Vercel production + `SEO_ALLOW_INDEXING=true` | Enabled |
| Any environment + `SEO_ALLOW_INDEXING=false` | Disabled |
| Next.js development | Disabled |

For Vercel production, leave `SEO_ALLOW_INDEXING` unset (or set true). **Do not set false in the production environment.** For non-Vercel staging, leave unset or false. Unknown hosts fail closed to protect accidental staging deployments. Enable Vercel's deployment protection for confidential previews; robots directives are not access control.

Optional `GOOGLE_SITE_VERIFICATION` accepts the public HTML verification token obtained from Search Console. Do not put a full HTML tag there. DNS verification is also supported externally and needs no code change.

## Verification performed

- `npm run lint` and `npx tsc --noEmit` pass.
- `SEO_ALLOW_INDEXING=true npm run build` passes with native Turbopack; all public routes are prerendered. The first restricted build stalled; rerunning with process permissions succeeded. Fonts are now local, so no font-fetch bypass or mocked build was needed.
- Served the actual production build using `npm run start -- --port 3100`; tested with headless installed Chrome through temporary Playwright tooling outside the repository.
- Homepage: 200; exactly one title, description, canonical and H1; expected robots, Open Graph and Twitter fields; two parseable JSON-LD nodes; one main landmark; no page JavaScript errors.
- Homepage with `?utm_source=seo-test`: same canonical. Next.js serializes the root canonical without a trailing slash; browser URL normalization resolves it to the same `/` URL used in the sitemap.
- Missing path: 404 with `noindex`, not a soft 404. Share image: 200, 1200×630. Apple icon: generated at 180×180. All rendered images loaded after scrolling; no broken hash destinations found.
- Production robots includes the canonical sitemap. Sitemap includes only the homepage and omits last-modified dates.
- A separately built `VERCEL_ENV=preview SEO_ALLOW_INDEXING=true` site was served and checked: HTML `noindex`, response header `noindex, follow`, empty sitemap and crawlable robots without a production sitemap link. Environment-policy matrix also passed.
- Browser checks at 375, 390, 768 and 1440px: no document-level horizontal overflow. Full mobile screenshot inspected. Dialog opens from app links, labelled waitlist input exists, Escape closes it, FAQ toggles, and gallery scrolling respects reduced-motion preferences.
- Mobile Lighthouse against the final local production build: **performance 99, accessibility 100, SEO 100; LCP 1.1s, CLS 0, total blocking time 110ms**. Earlier concurrent cold run scored performance 58 and accessibility 96; it reported an unattributable long task and contrast failures. Contrast was fixed; final audit ran without the browser interaction audit competing for resources. Scores are environment-specific lab measurements, **not** real-user Core Web Vitals or a full accessibility/SEO certification. INP was not established from real-user data.
- Temporary audit outputs: `/tmp/zikorra-seo-audit.json`, `/tmp/zikorra-lighthouse-final.json`, `/tmp/zikorra-mobile-seo.png`. They are local artifacts, not committed source files.

## Outstanding owner actions and limitations

1. Review and deploy the committed changes through the normal deployment process. The live site was inspected for domain/hosting evidence; this new build has **not** been deployed or validated on the production host.
2. Verify `zikorra.com` in Google Search Console using a DNS domain property (recommended) or the optional HTML token. Submit `https://www.zikorra.com/sitemap.xml` **after deployment**. Use URL Inspection to check the canonical homepage and request recrawling if appropriate. No indexing, ranking, submission or rich-result eligibility is claimed.
3. Confirm production indexing environment settings, HTTP/HTTPS and www redirects after deployment, including preview deployment protection. Changing build settings needs a rebuild.
4. Validate deployed structured data using Google's Rich Results Test / Schema.org Validator and inspect actual sharing previews. Local JSON syntax and expected fields were checked; an external validator was not submitted. Social platforms may cache old images.
5. Confirm real launch coverage, testimonial authenticity and permission before publishing claims. Provide actual social profiles, app-store URLs, privacy policy and terms. Existing inert social/legal placeholders are retained at the owner's explicit request; they are not fabricated crawlable pages or schema `sameAs` values.
6. Consider substantive customer/artisan/service pages only when there are real unique details: live app links, booking/onboarding rules, confirmed service coverage, support policies and launch availability. No thin SEO pages were created.
7. Actual iPhone/Android device policies, Data Saver, Low Power Mode and mobile video autoplay were not hardware-tested. Muted inline autoplay and gesture retries are implemented, but browsers may still restrict playback. Media can be bandwidth-intensive; watch field performance after launch.
8. Waitlist submissions and live analytics events were not sent during testing to avoid creating external records. Monitor their real operation and Search Console indexing after deployment.

## References consulted

- Installed Next.js 16.2.10 docs: metadata/OG images, robots, sitemap, JSON-LD, local fonts and videos under `node_modules/next/dist/docs/`.
- [Google: canonical URL consolidation](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls): canonical hints belong in rendered HTML and should be consistent.
- [Google: block indexing with noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing): crawlers need access to see noindex; robots is not access control.
- [Google: Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization): use accurate organization details and validate deployed markup.
- Font source: Google's official Geist Latin variable WOFF2 distribution; license from [Vercel Geist](https://github.com/vercel/geist-font/blob/main/LICENSE.txt).

## Social links follow-up

The owner supplied Instagram, Facebook, TikTok and X URLs. Footer placeholders now link to these destinations; the LinkedIn placeholder was replaced by TikTok. The concatenated Facebook/TikTok input was separated, and profile tracking query parameters were removed. Instagram, TikTok and X profile URLs are also included in Organization `sameAs`. Facebook uses the supplied `/share/` link in the footer; it is omitted from `sameAs` until a stable canonical page/profile URL is supplied. Destination account ownership is owner-provided, not independently verified. Legal placeholders remain pending. This follow-up does not change or revalidate the Lighthouse scores above.
