import type { MetadataRoute } from "next";
import { LOCALES } from "@/lib/i18n";
import { siteUrl } from "@/lib/siteUrl";

export const dynamic = "force-static";

// The public pages, in the order a dancer meets them. Deliberately not
// /welcome or /consent: those belong to one person and are reached with a
// code or a one-time token.
const PATHS = [
  { path: "", priority: 1 },
  { path: "/how-it-works", priority: 0.8 },
  { path: "/dance-styles", priority: 0.8 },
  { path: "/founding-members", priority: 0.8 },
  { path: "/privacy", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return LOCALES.flatMap((locale) =>
    PATHS.map(({ path, priority }) => ({
      url: `${siteUrl}/${locale}${path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority,
      // Every page exists in nine languages. Naming the siblings is what
      // stops Google reading them as duplicates of each other, and lets it
      // serve a Polish dancer the Polish page.
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [l, `${siteUrl}/${l}${path}`])
        ),
      },
    }))
  );
}
