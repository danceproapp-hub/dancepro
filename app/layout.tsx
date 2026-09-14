import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const siteUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DancePro — Find Your Next Dance Partner",
    template: "%s | DancePro",
  },
  description:
    "The professional network for ballroom and Latin dancers — partners, coaching, competitions, and a marketplace for shoes, dresses, and gowns. Join the founding members.",
  openGraph: {
    title: "DancePro — Find Your Next Dance Partner",
    description:
      "The professional network for ballroom and Latin dancers. Partners, coaching, competitions, and the marketplace — all in one place.",
    siteName: "DancePro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DancePro — Find Your Next Dance Partner",
    description:
      "The professional network for ballroom and Latin dancers. Partners, coaching, competitions, and the marketplace — all in one place.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${dmSans.variable}`}>
      <body className="flex min-h-screen flex-col bg-ink font-sans text-paper antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
