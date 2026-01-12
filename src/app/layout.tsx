import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google'
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "EDG | Motorized Pergolas & Outdoor Shades | Chicago to Milwaukee",
    template: "%s | EDG Outdoor Living"
  },
  description: "Premium motorized pergolas, exterior shades, and glass enclosures for the Chicago to Milwaukee region. Serving Lake County, McHenry County, and Southeast Wisconsin. Design, supply & professional installation.",
  keywords: ["motorized pergolas", "exterior shades", "glass enclosures", "outdoor living", "Chicago pergolas", "Milwaukee pergolas", "Lake County IL", "patio covers", "louvered pergolas"],
  authors: [{ name: "EDG Outdoor Living" }],
  creator: "EDG Outdoor Living",
  publisher: "EDG Outdoor Living",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://edgpatioshade.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "EDG | Motorized Pergolas & Outdoor Shades | Chicago to Milwaukee",
    description: "Premium motorized pergolas, exterior shades, and glass enclosures. Serving North Chicago to Milwaukee with design, supply & professional installation.",
    url: "https://edgpatioshade.com",
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
    description: "Premium outdoor living systems for Chicago to Milwaukee. Motorized pergolas, shades & glass enclosures.",
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
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://edgpatioshade.com/#organization",
  name: "EDG Outdoor Living",
  description: "Premium motorized pergolas, exterior shades, and glass enclosures for outdoor living spaces.",
  url: "https://edgpatioshade.com",
  telephone: "+1-815-581-0138",
  email: "info@edgpatioshade.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1802 Holian Drive",
    addressLocality: "Spring Grove",
    addressRegion: "IL",
    postalCode: "60081",
    addressCountry: "US"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.4439,
    longitude: -88.2356
  },
  areaServed: [
    {
      "@type": "State",
      name: "Illinois",
      containsPlace: [
        { "@type": "AdministrativeArea", name: "Lake County" },
        { "@type": "AdministrativeArea", name: "McHenry County" },
        { "@type": "AdministrativeArea", name: "Cook County" }
      ]
    },
    {
      "@type": "State",
      name: "Wisconsin",
      containsPlace: [
        { "@type": "AdministrativeArea", name: "Kenosha County" },
        { "@type": "AdministrativeArea", name: "Racine County" },
        { "@type": "AdministrativeArea", name: "Milwaukee County" }
      ]
    }
  ],
  priceRange: "$$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00"
    }
  ],
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Outdoor Living Systems",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Louvered Pergola Installation",
          description: "Motorized aluminum pergolas with rotating louvers for sun and rain control"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Motorized Exterior Shades",
          description: "Wind-rated exterior screens for heat and glare reduction"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Glass Enclosure Systems",
          description: "Frameless retractable glass walls for weatherproof outdoor spaces"
        }
      }
    ]
  }
};

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
      </body>
    </html>
  );
}
