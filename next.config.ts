import type { NextConfig } from "next";
import { INDEXABLE } from "./app/lib/seo";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async headers() {
    return INDEXABLE ? [] : [{
      source: "/:path*",
      headers: [{ key: "X-Robots-Tag", value: "noindex, follow" }],
    }];
  },
};

export default nextConfig;
