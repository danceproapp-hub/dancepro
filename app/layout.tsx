import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    "The professional network connecting ballroom and DanceSport dancers worldwide. Join the founding members building the network before the app launches.",
  openGraph: {
    title: "DancePro — Find Your Next Dance Partner",
    description:
      "The professional network connecting ballroom and DanceSport dancers worldwide.",
    siteName: "DancePro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DancePro — Find Your Next Dance Partner",
    description:
      "The professional network connecting ballroom and DanceSport dancers worldwide.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-ink font-sans text-paper antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
