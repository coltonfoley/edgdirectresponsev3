import type { Metadata } from 'next';
import { ConfiguratorApp } from './ConfiguratorApp';

export const metadata: Metadata = {
  title: 'Motorized Pergola Configurator | 3D Planning Tool | EDG',
  description:
    'Use EDG’s 3D pergola configurator to explore size, color, mount type, louvers, screens, lighting, and controls before a System Fit Review.',
  keywords: [
    'pergola configurator',
    'design your pergola',
    'pergola 3D visualizer',
    'motorized pergola configurator',
    'custom pergola designer',
    'louvered roof planning tool',
  ],
  alternates: { canonical: '/systems/pergolas/configure' },
  openGraph: {
    title: 'Design Your Custom Pergola in 3D — Free Configurator | EDG',
    description:
      'Explore a representative motorized pergola configuration in real-time 3D, then send the site context to EDG for system-fit planning.',
    url: 'https://www.edgpatioshade.com/systems/pergolas/configure',
    siteName: 'EDG Patio & Shade',
    images: [
      {
        url: 'https://www.edgpatioshade.com/images/brand/hero-pergola.jpg',
        width: 1200,
        height: 630,
        alt: 'Motorized louvered pergola configurator',
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
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.edgpatioshade.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Systems',
          item: 'https://www.edgpatioshade.com/systems',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Motorized Pergolas',
          item: 'https://www.edgpatioshade.com/systems/pergolas',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Configurator',
          item: 'https://www.edgpatioshade.com/systems/pergolas/configure',
        },
      ],
    },
    {
      '@type': 'WebPage',
      name: 'Pergola Configurator',
      url: 'https://www.edgpatioshade.com/systems/pergolas/configure',
      description:
        'Interactive 3D planning tool for exploring a representative motorized louvered pergola configuration.',
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
        Static planning content for non-visual and crawler contexts. The visual
        tool is representative; final system selection happens after site review.
      */}
      <div className="sr-only">
        <h2>Motorized Louvered Pergola 3D Configurator</h2>
        <p>
          Explore a representative motorized louvered pergola online. Use this
          3D configurator to think through size, color, mount type, louver
          angle, lighting, screens, heat, and controls before requesting a
          project-specific System Fit Review.
        </p>
        <h2>Configuration Options</h2>
        <ul>
          <li>Width: 8 to 16 feet</li>
          <li>Depth: 8 to 23 feet</li>
          <li>Mount type: Freestanding (4-post) or Wall-Mounted (2-post)</li>
          <li>
            Frame colors: Traffic White (RAL 9016), Jet Black (RAL 9005),
            Anthracite (RAL 7016), Sparkle Grey (RAL 9007)
          </li>
          <li>Louver position: 0° fully closed to 90° fully open</li>
          <li>
            Add-ons: Integrated LED lighting, motorized zip screens, infrared
            heater, wind and rain sensors, smart home integration
          </li>
        </ul>
        <h2>Why Use The Pergola Configurator?</h2>
        <p>
          A configurator helps buyers visualize a direction, but it does not
          replace system-fit planning. EDG reviews the actual site, exposure,
          structure, drainage, budget, accessories, and review path before
          recommending the manufacturer and system that fit the job.
        </p>
        <p>
          EDG Patio &amp; Shade serves the Chicago-Milwaukee corridor with full
          design, supply, permitting support, and installation coordination.
        </p>
      </div>
      <ConfiguratorApp />
    </>
  );
}
