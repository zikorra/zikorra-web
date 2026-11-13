import type { MetadataRoute } from "next";
import { INDEXABLE, SITE_URL } from "./lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Include public pages, excluding fragments, dialogs and metadata routes.
  // Omit lastModified rather than inventing a fresh timestamp on each build.
  return INDEXABLE
    ? ["/", "/privacy-policy", "/terms-of-service"].map((path) => ({ url: `${SITE_URL}${path}` }))
    : [];
}
