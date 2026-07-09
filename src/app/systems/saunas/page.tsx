import type { Metadata } from 'next';
import SaunasPageClient from './SaunasPageClient';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Custom Sauna Installation Chicago & Milwaukee | EDG Patio & Shade',
  description:
    'Premium sauna design and installation for your home or backyard. Traditional Finnish steam, infrared, and barrel saunas — professionally specified and installed in Chicago & Milwaukee.',
  alternates: {
    canonical: '/systems/saunas',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Custom Sauna Installation | EDG Patio & Shade',
    description:
      'Indoor and outdoor sauna installation — traditional steam, infrared, and barrel-style — tailored to your space.',
  },
};

const saunasFAQSchema = generateFAQSchema([
  {
    question: 'How much does a sauna installation cost?',
    answer: 'Sauna installations typically range from $8,000 to $40,000+, depending on the model, size (2–3, 4, or 5–6 person), site prep requirements, and electrical work. EDG reviews the location, access, electrical path, and model direction before preparing a detailed quote.',
  },
  {
    question: 'Can saunas be used outdoors in winter?',
    answer: 'Outdoor sauna cabins can be specified for cold-climate exterior use when the model, placement, base, electrical path, ventilation, and owner maintenance expectations are reviewed before installation.',
  },
  {
    question: 'How long does sauna installation take?',
    answer: 'Most sauna installations are completed in 1–2 days on site. The full process—including site assessment, electrical planning, delivery, and installation—typically takes 4–8 weeks from consultation to your first session.',
  },
  {
    question: 'Do outdoor saunas require permits or electrical work?',
    answer: 'Yes. Outdoor saunas require an electrical connection, and many municipalities require a permit for the structure. EDG coordinates site planning, electrical requirements, and permit documentation around the selected installation path.',
  },
  {
    question: 'What types of saunas do you install?',
    answer: 'We specialize in traditional Finnish-style outdoor sauna cabins built from ThermoWood®, available in 2–3, 4, and 5–6 person models. These are wood-burning or electric-heated cabins designed for outdoor installation.',
  },
]);

const saunasBreadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Systems', url: '/systems' },
  { name: 'Saunas', url: '/systems/saunas' },
]);

export default function SaunasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(saunasBreadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(saunasFAQSchema),
        }}
      />
      <SaunasPageClient />
    </>
  );
}
