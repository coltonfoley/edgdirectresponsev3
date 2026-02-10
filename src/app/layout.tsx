import type { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import { Barlow } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Analytics } from '@vercel/analytics/react';

const barlow = Barlow({
  variable: '--font-barlow',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'EDG Patio & Shade | Motorized Pergolas & Retractable Screens | Chicago to Milwaukee',
    template: '%s | EDG Patio & Shade',
  },
  description:
    'EDG Patio & Shade is the design and supply partner for motorized pergolas, retractable screens, and glass enclosures. Full-service installation for the Chicago-Milwaukee corridor, with nationwide design and supply for trade partners.',
  keywords: [
    'motorized pergolas',
    'exterior shades',
    'glass enclosures',
    'outdoor living',
    'Chicago pergolas',
    'Milwaukee pergolas',
    'Lake County IL',
    'patio covers',
    'louvered pergolas',
  ],
  authors: [{ name: 'EDG Patio & Shade' }],
  creator: 'EDG Patio & Shade',
  publisher: 'EDG Patio & Shade',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.edgpatioshade.com'),
  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'EDG | Motorized Pergolas & Outdoor Shades | Chicago to Milwaukee',
    description:
      'Premium motorized pergolas, exterior shades, and glass enclosures. Serving North Chicago to Milwaukee with nationwide design and supply available.',
    url: 'https://www.edgpatioshade.com',
    siteName: 'EDG Patio & Shade',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: images.assets.ogImage,
        width: 1200,
        height: 630,
        alt: 'EDG Patio & Shade - Motorized Pergolas & Shades',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EDG | Motorized Pergolas & Outdoor Shades',
    description:
      'Premium outdoor living systems. Serving Chicago to Milwaukee with nationwide design and supply for motorized pergolas, shades, and glass enclosures.',
    images: [images.assets.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// LocalBusiness JSON-LD Schema
import { localBusinessSchema } from '@/lib/schema';
import * as images from '@/lib/images';


// WebSite Schema for Sitelinks Search Box
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'EDG Patio & Shade',
  url: 'https://www.edgpatioshade.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.edgpatioshade.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body
        className={`${barlow.variable} bg-background text-foreground antialiased`}
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
