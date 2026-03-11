import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Shield,
  Zap,
  Settings,
  Sun,
  MapPin,
  HelpCircle,
  Home,
} from 'lucide-react';
import { Metadata } from 'next';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Motorized Pergolas Naperville IL | Luxury Louvered Roofs | EDG',
  description:
    'Upgrade your Naperville patio with a custom motorized pergola. Remote-controlled louvered roofs, integrated lighting, and weather sensors. 100% turnkey installation.',
  alternates: {
    canonical: '/service-areas/naperville-il/motorized-pergolas',
  },
};

const features = [
  {
    title: 'Smart Louver Control',
    description:
      'Adjust from 0° to 150° using your smartphone or remote to track the sun or block rain instantly.',
    icon: Settings,
  },
  {
    title: 'Integrated Weather Sensors',
    description:
      'Automatically closes the roof when it detects rain and opens in high winds to prevent damage.',
    icon: Shield,
  },
  {
    title: 'All-Season Utility',
    description:
      'Equipped with integrated heaters and LED lighting to make your Naperville patio usable year-round.',
    icon: Zap,
  },
  {
    title: 'Frameless Design',
    description:
      'Sleek, modern aluminum construction that provides maximum shade without blocking your garden views.',
    icon: Sun,
  },
];

const neighborhoods = [
  {
    name: 'Ashbury',
    description:
      'Elegant estate homes benefit from custom pergola designs that complement the sophisticated architecture while maximizing outdoor entertaining space.',
  },
  {
    name: 'Cress Creek',
    description:
      'Golf course properties enjoy panoramic views through frameless aluminum structures that frame the fairways without obstructing sightlines.',
  },
  {
    name: 'Tall Grass',
    description:
      'New construction homes integrate seamlessly with smart home automation, allowing residents to control their outdoor environment from anywhere.',
  },
  {
    name: 'Downtown Naperville',
    description:
      'Historic properties near the Riverwalk gain modern outdoor functionality while respecting the traditional character of the neighborhood.',
  },
  {
    name: 'Southeast Naperville Estates',
    description:
      'Spacious lots accommodate expansive pergola installations with room for full outdoor kitchens, fire features, and multiple seating areas.',
  },
];

const faqs = [
  {
    question: 'Do I need a permit for a motorized pergola in Naperville?',
    answer:
      'Yes, permits are typically required for motorized pergola installations in Naperville. The specific requirements depend on your property location, setback distances, and the structure size. Our team handles the entire permit process for you. For detailed information about Naperville\'s zoning regulations, setbacks, and permit requirements, visit our comprehensive ',
    link: {
      text: 'Naperville Zoning Guide',
      href: '/service-areas/naperville-il/zoning-guide',
    },
  },
  {
    question: 'How much does a motorized pergola cost in Naperville?',
    answer:
      'Motorized pergola installations in Naperville typically range from $45,000 to $85,000 depending on size, features, and customization options. Smaller residential systems start around $45K, while larger estates with integrated lighting, heating, and automation features can reach $85K or more. We provide detailed proposals after a complimentary site survey.',
  },
  {
    question: 'How long does installation take?',
    answer:
      'From deposit to completion, most motorized pergola projects take 6-10 weeks. This includes engineering review, permit acquisition, custom fabrication, and scheduling. The on-site installation typically requires 2-3 days for standard residential projects. Commercial installations or complex custom designs may require additional time.',
  },
];

export default function NapervilleMotorizedPergolas() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Luxury Motorized Pergola System - Naperville',
            image: `https://www.edgpatioshade.com${images.pages.price.whitePergolaPool}`,
            description:
              'Premium motorized louvered roof systems for Naperville estates, featuring integrated lighting and heating.',
            brand: {
              '@type': 'Brand',
              name: 'EDG Patio & Shade',
            },
            offers: {
              '@type': 'Offer',
              url: 'https://www.edgpatioshade.com/service-areas/naperville-il/motorized-pergolas',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
            },
          }),
        }}
      />
      <main className="min-h-screen bg-white dark:bg-black">
        {/* Hero */}
        <Section className="bg-edg-dark pt-32 pb-20 text-white">
          <Container>
            <Link
              href="/service-areas/naperville-il"
              className="hover:text-edg-brand-dark mb-8 inline-flex items-center text-sm text-zinc-300 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Naperville
            </Link>
            <Breadcrumb
              items={[
                { label: 'Service Areas', href: '/service-areas' },
                { label: 'Naperville, IL', href: '/service-areas/naperville-il' },
                { label: 'Motorized Pergolas' },
              ]}
              className="mb-6"
            />
            <div className="max-w-4xl">
              <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                Motorized Pergolas <br /> for Naperville Living
              </h1>
              <p className="mb-8 text-xl leading-relaxed text-gray-300">
                Why wait for perfect weather? Our smart louvered roof systems
                give you 100% control over your outdoor environment in
                Naperville.
              </p>
              <Link href="/contact?area=naperville&product=motorized_pergola">
                <Button size="lg" className="rounded-full">
                  Get Pricing & Proposal <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </Container>
        </Section>

        {/* Features */}
        <Section className="bg-white py-24 dark:bg-zinc-950">
          <Container>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-black/5 bg-zinc-50 p-8 dark:border-white/5 dark:bg-zinc-900"
                >
                  <feature.icon className="text-edg-brand-dark mb-6 h-10 w-10" />
                  <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Local Social Proof Alternative */}
        <Section className="overflow-hidden bg-zinc-100 py-24 dark:bg-zinc-900">
          <Container>
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                  Naperville's Premier Turnkey Provider
                </h2>
                <p className="text-muted-foreground mb-8 text-lg text-pretty">
                  From the Ashbury subdivision to the heart of the Riverwalk, we
                  provide complete, engineered solutions. We don't just sell
                  pergolas; we design and install systems that increase the
                  value and utility of your Naperville home.
                </p>
                <ul className="mb-8 space-y-4">
                  {[
                    'Miami-Dade Hurricane Rated engineering',
                    'Powder-coated aircraft-grade aluminum',
                    'Seamless integration with existing architecture',
                    'Licensed and insured Naperville installation crews',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 font-medium"
                    >
                      <Shield className="text-edg-brand-dark h-5 w-5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact?area=naperville">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="rounded-full"
                  >
                    Schedule Site Survey
                  </Button>
                </Link>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={images.pages.serviceAreas.napervillePergolaPool01}
                  alt="Motorized pergola installation"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* Local Neighborhoods Section */}
        <Section className="bg-white py-24 dark:bg-zinc-950">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <MapPin className="text-edg-brand-dark mx-auto mb-6 h-12 w-12" />
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Serving Naperville's Finest Neighborhoods
              </h2>
              <p className="text-muted-foreground mb-12 text-lg">
                We design motorized pergolas that complement the unique character
                of each Naperville community, from modern subdivisions to historic
                districts.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {neighborhoods.map((neighborhood) => (
                <div
                  key={neighborhood.name}
                  className="rounded-2xl border border-black/5 bg-zinc-50 p-6 dark:border-white/5 dark:bg-zinc-900"
                >
                  <h3 className="mb-3 text-lg font-bold">{neighborhood.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {neighborhood.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-muted-foreground">
                Don't see your neighborhood? We serve all of{' '}
                <Link
                  href="/service-areas/naperville-il"
                  className="text-edg-brand-dark hover:underline"
                >
                  Naperville and surrounding areas
                </Link>
                .
              </p>
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <Section className="bg-zinc-100 py-24 dark:bg-zinc-900">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <HelpCircle className="text-edg-brand-dark mx-auto mb-6 h-12 w-12" />
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Common Questions About Motorized Pergolas in Naperville
                </h2>
                <p className="text-muted-foreground text-lg">
                  Everything you need to know before investing in your outdoor living space.
                </p>
              </div>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-black/5 bg-white p-8 dark:border-white/5 dark:bg-zinc-950"
                  >
                    <h3 className="mb-4 text-lg font-bold">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                      {faq.link && (
                        <>
                          <Link
                            href={faq.link.href}
                            className="text-edg-brand-dark hover:underline"
                          >
                            {faq.link.text}
                          </Link>
                          .
                        </>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Enhanced CTA Section */}
        <Section className="bg-edg-dark py-24 text-white">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <Home className="text-edg-brand-dark mx-auto mb-6 h-12 w-12" />
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Ready to Transform Your Naperville Outdoor Space?
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-300">
                Whether you're in a new construction home in Tall Grass or a
                historic property near the Riverwalk, we bring the same
                engineering rigor to every project. Our showroom in Spring Grove
                is just 45 minutes away—come see the systems in action before
                you decide.
              </p>
              <p className="mb-10 text-zinc-300">
                Schedule a complimentary site survey and receive a detailed
                proposal tailored to your Naperville property.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact?area=naperville&product=motorized_pergola">
                  <Button size="lg" className="rounded-full">
                    Get Your Free Proposal <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full border-white/20 text-white hover:bg-white/10"
                  >
                    Schedule Showroom Visit
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}
