import type { MetadataRoute } from "next";
import { INDEXABLE, SITE_URL } from "./lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    // Allow crawling on previews so crawlers can read the noindex directive.
    rules: { userAgent: "*", allow: "/" },
    ...(INDEXABLE ? { sitemap: `${SITE_URL}/sitemap.xml` } : {}),
  };
}
