import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/siteUrl";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // A welcome page belongs to one dancer and is reached with their
      // code; a consent page is reached with a one-time token. Neither
      // should be crawled, indexed, or turned up by a search for someone's
      // name. The token pages are protected by the token itself — this
      // just keeps them out of results.
      disallow: ["/api/", "/*/welcome", "/*/consent"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
