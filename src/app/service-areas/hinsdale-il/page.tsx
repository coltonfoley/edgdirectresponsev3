import type { Metadata } from 'next';
import Image from 'next/image';
import * as images from '@/lib/images';
import { buildContactHref } from '@/lib/contact-links';
import { generateFAQSchema } from '@/lib/schema';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import Link from 'next/link';
import {
  MapPin,
  ArrowRight,
  CheckCircle2,
  CloudSun,
  Building,
  Home,
  Shield,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Outdoor Living Systems in Hinsdale, IL | Pergolas & Shades | EDG',
  description:
    'Custom motorized pergolas and exterior shades for Hinsdale homes. Serving The Lane, Katherine Legge area, and throughout the Village. Zoning-compliant designs for historic estates.',
  openGraph: {
    title: 'Hinsdale Outdoor Living | Estate Pergolas & Shades | EDG',
    description: 'Outdoor living systems for Hinsdale estates. Motorized pergolas, retractable screens, and glass enclosures planned around the home.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  alternates: {
    canonical: '/service-areas/hinsdale-il',
  },
  keywords: ['hinsdale pergolas', 'hinsdale outdoor living', 'hinsdale il patio', 'pergola installation hinsdale', 'hinsdale backyard'],
};

const localBenefits = [
  'Planning support for village, estate, and historic-area review packages',
  'Older-home and estate outdoor room experience',
  'Western Suburbs-appropriate designs',
  'Licensed & insured for Cook & DuPage Counties',
];

const neighborhoods = [
  {
    name: 'The Lane (Historic District)',
    description:
      'The Lane includes grand estates and historic homes where outdoor additions need to respect the existing architecture. We plan motorized systems, finishes, and sightlines so the new outdoor room feels connected to the property.',
  },
  {
    name: 'Katherine Legge Area',
    description:
      'Properties near Katherine Legge Memorial Park enjoy spacious lots and mature landscapes. Our large-span pergola engineering minimizes posts, preserving sightlines across your property while creating expansive covered entertainment areas. We design with the area\'s wooded character in mind.',
  },
  {
    name: 'Washington Street Corridor',
    description:
      'The Washington Street area features a mix of traditional homes and newer construction. We adapt pergola, screen, and lighting plans to varied architectural styles so the outdoor room feels connected to the home and its downtown-adjacent setting.',
  },
  {
    name: 'Graue Mill Area',
  description:
      'Near the historic Graue Mill and Fullersburg Woods, this area features homes with natural settings. Our motorized systems help you enjoy the wooded surroundings while providing protection from sun and insects. We design to maximize views of the natural landscape.',
  },
];

const localConsiderations = [
  {
    title: 'Historic Preservation',
    description:
      'Historic or architecturally sensitive homes need more than a product brochure. We help prepare drawings, finish information, and placement details so the outdoor room can be reviewed in context.',
    icon: Building,
  },
  {
    title: 'Large Estate Engineering',
    description:
      'Hinsdale\'s expansive properties deserve equally impressive outdoor spaces. Our engineering supports spans up to 24 feet without intermediate posts, creating clean sightlines across your estate.',
    icon: Home,
  },
  {
    title: 'Weather Adaptability',
    description:
      'From summer storms to winter exposure, the final system should account for drainage, louver direction, wind, shade, controls, and how the family will use the patio in spring and fall.',
    icon: CloudSun,
  },
  {
    title: 'Privacy & Security',
    description:
      'Our motorized shades and glass enclosures provide privacy in tight-knit neighborhoods while maintaining airflow and views. Optional wind sensors protect your investment.',
    icon: Shield,
  },
];

const planningNotes = [
  {
    title: 'Respect the home before adding technology',
    description:
      'Hinsdale homeowners often want modern comfort without making the house feel remodeled in the wrong era. Column placement, finish color, louver direction, lighting, and attachment details should be chosen around the architecture first.',
    icon: Building,
  },
  {
    title: 'The outdoor room may be visible from every angle',
    description:
      'On estate lots and prominent village streets, the pergola can be seen from the driveway, lawn, kitchen, and neighboring properties. We plan sightlines and scale so the structure feels calm, not bulky.',
    icon: Home,
  },
  {
    title: 'Plan privacy and comfort together',
    description:
      'Hinsdale patios can need shade, wind control, neighbor screening, heaters, and lighting all at once. A complete plan avoids a beautiful pergola that still leaves the family fighting bugs, glare, or low evening temperatures.',
    icon: Shield,
  },
];

const faqs = [
  {
    question: 'Do I need a permit for a pergola in Hinsdale?',
    answer:
      'Permanent outdoor structures commonly require local review, but the exact path depends on the address, scope, attachment method, setbacks, hardscape coverage, and whether the property has historic-area or HOA considerations. We help verify the right path before design is finalized.',
  },
  {
    question: 'How do you handle snow loads in Hinsdale winters?',
    answer:
      'We specify aluminum pergolas and controls around Illinois winter exposure, then review drainage, louver operation, mounting conditions, electrical routing, and maintenance for the specific site. The goal is a structure that fits the home and performs beyond the main summer season.',
  },
  {
    question: 'Can you work within Hinsdale\'s historic district requirements?',
    answer:
      'Yes, when the project is planned carefully. Historic or architecturally sensitive homes usually need better documentation: renderings, finish samples, placement notes, and product information that show how the outdoor room relates to the existing structure.',
  },
  {
    question: 'What\'s the typical timeline for a Hinsdale project?',
    answer:
      'A custom Hinsdale project can take several weeks for design, review, fabrication, and installation. Historic-area review, HOA input, electrical coordination, and weather can change the schedule, so we set expectations after the site and approval path are clear.',
  },
];

const heroContactHref = buildContactHref({
  type: 'quote',
  product: 'multiple',
  location: 'Hinsdale, IL',
  source: 'hinsdale_hub_hero',
});
const bottomContactHref = buildContactHref({
  type: 'consultation',
  product: 'multiple',
  location: 'Hinsdale, IL',
  source: 'hinsdale_hub_bottom',
});

export default function HinsdaleHubPage() {
  const faqSchema = generateFAQSchema(faqs);

  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Outdoor Living Design & Installation - Hinsdale',
            description:
              'Custom motorized pergolas and exterior shades for Hinsdale homes.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: {
              '@type': 'City',
              name: 'Hinsdale',
            },
            url: 'https://www.edgpatioshade.com/service-areas/hinsdale-il',
            image: `https://www.edgpatioshade.com${images.brand.hero.pergola}`,
          }),
        }}
      />

      {/* ========== HERO ========== */}
      <section className="bg-edg-dark relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-24 pb-16">
        {/* Background Image - Using next/Image */}
        <div className="absolute inset-0">
          <Image
            src={images.brand.hero.pergola}
            alt="Black louvered pergola on a Hinsdale estate"
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        </div>

        <Container className="relative z-10">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: 'Service Areas', href: '/service-areas' },
                { label: 'Hinsdale, IL' },
              ]}
            />
          </div>
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-edg-brand-dark bg-edg-brand/10 border-edg-brand/20 mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
                <MapPin className="h-4 w-4" /> Service Area: Hinsdale, IL
              </span>
              <h1 className="hero-title mb-6 text-white">
                Plan Your Hinsdale Estate With
                <span className="text-edg-brand block">
                  Motorized Outdoor Systems
                </span>
              </h1>
              <p className="text-text-inverse-muted mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
                From the historic estates of The Lane to modern homes near
                Katherine Legge Park, we design engineered shade systems that
                respect Hinsdale&apos;s architectural heritage and fit its review
                expectations.
              </p>
              <Link href={heroContactHref}>
                <Button size="lg" className="px-8 text-lg">
                  Request Hinsdale Site Visit{' '}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ========== LOCAL EXPERTISE ========== */}
      <section className="bg-edg-dark border-t border-white/5 py-8">
        <Container>
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {localBenefits.map((benefit, i) => (
                <span key={i} className="text-text-inverse-muted flex items-center gap-2">
                  <CheckCircle2 className="text-edg-brand-dark h-4 w-4" /> {benefit}
                </span>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ========== NEIGHBORHOODS ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Serving Every Hinsdale Neighborhood
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Hinsdale projects need careful design judgment: historic streets,
                estate lots, wooded settings, and downtown-adjacent homes each
                create different comfort and review needs.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {neighborhoods.map((neighborhood, i) => (
                <Card key={i} variant="muted" padding="lg">
                  <h3 className="mb-3 text-xl font-bold">{neighborhood.name}</h3>
                  <p className="text-text-secondary">{neighborhood.description}</p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== HINSDALE PLANNING NOTES ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="label-editorial-brand mb-4">
                Hinsdale planning notes
              </div>
              <h2 className="section-title mb-4">
                The right outdoor room should look like it belongs.
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                A Hinsdale pergola or screen project is rarely just a shade
                purchase. It is an architectural decision that has to fit the
                home, the lot, the review path, and the way the family wants to
                use the patio after dinner, during shoulder seasons, and when
                guests are over.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {planningNotes.map((note) => (
                <Card key={note.title} variant="muted" padding="lg">
                  <IconWrapper icon={note.icon} variant="brand" size="lg" className="mb-4" />
                  <h3 className="mb-3 text-xl font-bold">{note.title}</h3>
                  <p className="text-text-secondary">{note.description}</p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== LOCAL CONSIDERATIONS ========== */}
      <Section className="section-md bg-surface-muted">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Built for Hinsdale&apos;s Estate Lifestyle
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Our systems are planned around Western Suburbs estates, older homes, privacy needs, and Illinois weather.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {localConsiderations.map((item, i) => (
                <Card key={i} variant="default" padding="lg">
                  <IconWrapper icon={item.icon} variant="brand" size="lg" className="mb-4" />
                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-text-secondary">{item.description}</p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== FAQ ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Common Questions About Hinsdale Projects
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Everything you need to know about outdoor living in Hinsdale.
              </p>
            </div>
            <div className="mx-auto max-w-3xl space-y-4">
              {faqs.map((faq, i) => (
                <Card key={i} variant="muted" padding="lg">
                  <h3 className="mb-3 text-lg font-bold">{faq.question}</h3>
                  <p className="text-text-secondary">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== CTA ========== */}
      <section className="section-md bg-surface-dark text-text-inverse">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-text-inverse mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                Ready to plan your Hinsdale project?
              </h2>
              <p className="text-text-inverse-muted mb-8 text-xl">
                Review the address, historic context, comfort goals, and right system path with our local design team.
              </p>
              <Link href={bottomContactHref}>
                <Button
                  size="lg"
                  className="px-8 text-lg"
                >
                  Start Hinsdale Review{' '}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
