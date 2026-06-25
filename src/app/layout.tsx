import type { Metadata, Viewport } from 'next';
import { Barlow } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Analytics } from '@vercel/analytics/next';
import { DeferredGoogleTagManager } from '@/components/analytics/DeferredGoogleTagManager';

const barlow = Barlow({
  variable: '--font-barlow',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#42ffc1',
};

export const metadata: Metadata = {
  title: {
    default: 'EDG Patio & Shade | Motorized Pergolas & Retractable Screens | Chicago to Milwaukee',
    template: '%s',
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
    title: 'EDG Patio & Shade | Motorized Pergolas & Outdoor Shades | Chicago to Milwaukee',
    description:
      'Premium motorized pergolas, exterior shades, and glass enclosures. Serving North Chicago to Milwaukee with nationwide design and supply available.',
    url: 'https://www.edgpatioshade.com',
    siteName: 'EDG Patio & Shade',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/brand/hero-pergola.jpg',
        width: 1200,
        height: 630,
        alt: 'EDG Patio & Shade - Motorized Pergolas & Shades',
      },
    ],
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

// JSON-LD Schemas
import { localBusinessSchema, generateOrganizationSchema } from '@/lib/schema';

// Organization schema for enhanced AI entity understanding
const organizationSchema = generateOrganizationSchema();

// WebSite Schema for brand/entity understanding
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'EDG Patio & Shade',
  url: 'https://www.edgpatioshade.com',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={barlow.variable}>
      <head>
        {/* ============================================
            PERFORMANCE OPTIMIZATION: RESOURCE HINTS
            ============================================ */}
        
        {/* Preconnect to critical third-party domains */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Preconnect to image CDN if using external images */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        {/* ============================================
            JSON-LD STRUCTURED DATA
            ============================================ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
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
      <body className="bg-background text-foreground antialiased">
        {/* Skip navigation for keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-edg-dark focus:px-4 focus:py-2 focus:rounded focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="outline-none">
          {children}
        </main>
        <Footer />
        <DeferredGoogleTagManager gtmId="GTM-MJWNZD3F" />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
