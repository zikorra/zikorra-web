import type { MetadataRoute } from "next";
import { INDEXABLE, SITE_URL } from "./lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // One public page; fragments, dialogs and metadata routes are not pages.
  // Omit lastModified rather than inventing a fresh timestamp on each build.
  return INDEXABLE ? [{ url: `${SITE_URL}/` }] : [];
}
