import type { Metadata } from 'next';
import { ConfiguratorApp } from './ConfiguratorApp';

export const metadata: Metadata = {
  title: 'Pergola Configurator — Design Your Azenco R-Blade in 3D | EDG',
  description:
    'Use our free 3D pergola configurator to design your custom Azenco R-Blade motorized louvered pergola. Choose size, color, mount type, and add-ons. Get a quote in 1 business day.',
  keywords: [
    'pergola configurator',
    'design your pergola',
    'pergola 3D visualizer',
    'azenco r-blade configurator',
    'custom pergola designer',
    'motorized pergola quote',
  ],
  alternates: { canonical: '/systems/pergolas/configure' },
  openGraph: {
    title: 'Design Your Custom Pergola in 3D — Free Configurator | EDG',
    description:
      'Configure your Azenco R-Blade motorized pergola in real-time 3D. Size, color, mount type, LED lighting, screens and more. Free quote in 1 business day.',
    url: 'https://www.edgpatioshade.com/systems/pergolas/configure',
    siteName: 'EDG Patio & Shade',
    images: [
      {
        url: 'https://www.edgpatioshade.com/images/brand/hero-pergola.jpg',
        width: 1200,
        height: 630,
        alt: 'Azenco R-Blade motorized louvered pergola configurator',
      },
    ],
    type: 'website',
  },
};

const configuratorSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.edgpatioshade.com' },
        { '@type': 'ListItem', position: 2, name: 'Systems', item: 'https://www.edgpatioshade.com/systems' },
        { '@type': 'ListItem', position: 3, name: 'Motorized Pergolas', item: 'https://www.edgpatioshade.com/systems/pergolas' },
        { '@type': 'ListItem', position: 4, name: 'Configurator', item: 'https://www.edgpatioshade.com/systems/pergolas/configure' },
      ],
    },
    {
      '@type': 'Product',
      name: 'Azenco R-Blade Motorized Louvered Pergola',
      description:
        'Premium motorized pergola with adjustable louvers up to 16 ft wide and 23 ft deep. Powder-coated aluminum in four standard colors. Freestanding or wall-mounted. Optional LED lighting, motorized screens, infrared heater, and smart home integration.',
      brand: { '@type': 'Brand', name: 'Azenco' },
      url: 'https://www.edgpatioshade.com/systems/pergolas/configure',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          minPrice: '25000',
          priceCurrency: 'USD',
          description: 'Starting price — final price depends on size and options',
        },
        seller: { '@type': 'Organization', name: 'EDG Patio & Shade' },
        areaServed: 'Chicago-Milwaukee corridor',
      },
    },
    {
      '@type': 'WebPage',
      name: 'Pergola Configurator',
      url: 'https://www.edgpatioshade.com/systems/pergolas/configure',
      description: 'Interactive 3D configurator for the Azenco R-Blade motorized louvered pergola.',
      mainEntity: {
        '@type': 'SoftwareApplication',
        name: 'EDG Pergola Configurator',
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Web Browser',
      },
    },
  ],
};

export default function ConfigurePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(configuratorSchema) }}
      />
      {/*
        Static SEO content — visible to crawlers, hidden from users behind the
        full-screen canvas overlay. Provides keyword-rich text for indexing.
      */}
      <div className="sr-only" aria-hidden="true">
        <h2>Azenco R-Blade 3D Pergola Configurator</h2>
        <p>
          Design your custom motorized louvered pergola online. Use our free 3D configurator
          to visualize the Azenco R-Blade in your preferred size, color, and configuration
          before requesting a quote.
        </p>
        <h2>Configuration Options</h2>
        <ul>
          <li>Width: 8 to 16 feet</li>
          <li>Depth: 8 to 23 feet</li>
          <li>Mount type: Freestanding (4-post) or Wall-Mounted (2-post)</li>
          <li>Frame colors: Traffic White (RAL 9016), Jet Black (RAL 9005), Anthracite (RAL 7016), Sparkle Grey (RAL 9007)</li>
          <li>Louver position: 0° fully closed to 90° fully open</li>
          <li>Add-ons: Integrated LED lighting, motorized zip screens, infrared heater, wind and rain sensors, smart home integration</li>
        </ul>
        <h2>Why Choose the Azenco R-Blade?</h2>
        <p>
          The R-Blade is rated for 190 mph winds, handles up to 100 lbs/sq ft of snow load,
          and carries Miami-Dade NOA hurricane approval. Whisper-quiet motors rotate louvers
          0–90° for full sun, shade, or watertight rain protection. Compatible with Alexa,
          Google Home, and Apple HomeKit.
        </p>
        <p>
          EDG Patio &amp; Shade serves the Chicago-Milwaukee corridor with full design, supply,
          permitting, and white-glove installation. Response within 1 business day.
        </p>
      </div>
      <ConfiguratorApp />
    </>
  );
}
