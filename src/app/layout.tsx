import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google'
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "EDG | Motorized Pergolas & Outdoor Shades | Chicago to Milwaukee",
    template: "%s | EDG Outdoor Living"
  },
  description: "Premium motorized pergolas, exterior shades, and glass enclosures. Full-service installation for the Chicago to Milwaukee region, with nationwide design and supply available.",
  keywords: ["motorized pergolas", "exterior shades", "glass enclosures", "outdoor living", "Chicago pergolas", "Milwaukee pergolas", "Lake County IL", "patio covers", "louvered pergolas"],
  authors: [{ name: "EDG Outdoor Living" }],
  creator: "EDG Outdoor Living",
  publisher: "EDG Outdoor Living",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.edgpatioshade.com"),

  openGraph: {
    title: "EDG | Motorized Pergolas & Outdoor Shades | Chicago to Milwaukee",
    description: "Premium motorized pergolas, exterior shades, and glass enclosures. Serving North Chicago to Milwaukee with nationwide design and supply available.",
    url: "https://www.edgpatioshade.com",
    siteName: "EDG Outdoor Living",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EDG Outdoor Living - Motorized Pergolas & Shades",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EDG | Motorized Pergolas & Outdoor Shades",
    description: "Premium outdoor living systems. Serving Chicago to Milwaukee with nationwide design and supply for motorized pergolas, shades, and glass enclosures.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// LocalBusiness JSON-LD Schema
import { localBusinessSchema } from "@/lib/schema";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        {children}
        <Footer />
        <GoogleTagManager gtmId="GTM-MJWNZD3F" />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
