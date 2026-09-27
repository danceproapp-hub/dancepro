/**
 * The public address of the site.
 *
 * VERCEL_URL is the per-deployment host (dancepro-abc123-….vercel.app),
 * which sits behind deployment protection: a social scraper following an
 * og:image URL built from it gets Vercel's login page, not the card. The
 * production alias is the one that is public.
 *
 * Reading it from the environment rather than hardcoding means a custom
 * domain works the day it is pointed here, with no code change: metadata,
 * robots.txt and the sitemap all follow.
 */
const host =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

export const siteUrl = host ? `https://${host}` : "http://localhost:3000";
