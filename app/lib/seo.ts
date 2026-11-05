export const SITE_URL = "https://www.zikorra.com";
export const SITE_TITLE = "Zikorra | Home Services & Verified Artisans in Nigeria";
export const SITE_DESCRIPTION =
  "Find verified plumbers, electricians, cleaners and more with Zikorra. Join the customer or artisan waitlist for our Lagos launch and service updates.";

// Unknown hosts default to noindex. Vercel previews stay noindex even if an
// indexing override is accidentally inherited from production.
export const INDEXABLE =
  process.env.NODE_ENV === "production" &&
  process.env.SEO_ALLOW_INDEXING !== "false" &&
  (process.env.VERCEL_ENV
    ? process.env.VERCEL_ENV === "production"
    : process.env.SEO_ALLOW_INDEXING === "true");
