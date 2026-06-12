import Image from 'next/image';
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
import { generateFAQSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Motorized Pergolas Naperville IL | Luxury Louvered Roofs | EDG',
  description:
    'Motorized louvered pergolas for Naperville homes. Local planning for Ashbury, Cress Creek, Tall Grass, downtown patios, HOA review, lighting, heaters, and smart outdoor rooms.',
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
      'Permanent outdoor structures commonly require local review, but the exact requirements depend on the address, attachment method, structure size, easements, HOA rules, and whether the property is in DuPage or Will County. We verify the review path during site planning.',
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

const planningChecklist = [
  'Confirm whether the pergola is solving overhead sun, rain control, privacy, bugs, or a full outdoor room need.',
  'Review HOA expectations, subdivision standards, drainage, electrical routing, and existing patio conditions before finalizing the layout.',
  'Plan screens, heaters, lighting, fans, and smart controls before fabrication so the structure can support the way the family actually uses the patio.',
  'Choose louver direction, post placement, and finish color around the home style, sightlines, and late-day sun instead of only the square footage.',
];

export default function NapervilleMotorizedPergolas() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Motorized Pergolas in Naperville, IL',
    description:
      'Motorized louvered pergola design and installation for Naperville homes, patios, and outdoor living spaces.',
    provider: {
      '@id': 'https://www.edgpatioshade.com/#organization',
    },
    areaServed: {
      '@type': 'City',
      name: 'Naperville',
      addressRegion: 'IL',
    },
    url: 'https://www.edgpatioshade.com/service-areas/naperville-il/motorized-pergolas',
    image: `https://www.edgpatioshade.com${images.pages.price.whitePergolaPool}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
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
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact?area=naperville&product=motorized_pergola">
                  <Button size="lg" className="rounded-full">
                    Get Pricing & Proposal <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/systems/pergolas/configure">
                  <Button size="lg" variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10">
                    Design in 3D <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
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
                <p className="text-muted-foreground mb-8 text-lg text-pretty">
                  Naperville projects often start with a nice patio that still
                  fails at the edges: west sun over dinner, bugs after sunset,
                  subdivision privacy, or rain that sends everyone indoors. A
                  motorized pergola is strongest when it is planned with those
                  everyday problems in mind instead of priced as a standalone roof.
                </p>
                <ul className="mb-8 space-y-4">
                  {[
                    'Permit and HOA documentation support when review is required',
                    'Powder-coated aluminum finishes selected around the home',
                    'Screens, heaters, lighting, and controls planned together',
                    'Site-specific layout for patios, pools, decks, and outdoor kitchens',
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
                <Image
                  src={images.pages.serviceAreas.napervillePergolaPool01}
                  alt="Motorized pergola installation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
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

        {/* Planning Section */}
        <Section className="bg-zinc-100 py-24 dark:bg-zinc-900">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                  Before We Price a Naperville Pergola
                </h2>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  The same footprint can produce very different projects in
                  Naperville. A Cress Creek golf course patio, a downtown
                  historic home, and a Tall Grass backyard may all need a
                  louvered roof, but the approval path, privacy needs, wind
                  exposure, and finish selection are different.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our design review looks beyond size. We want to know how the
                  space is used, what makes it uncomfortable today, and which
                  features should be built into the system now so the outdoor
                  room does not need a second round of retrofits.
                </p>
              </div>
              <div className="rounded-2xl border border-black/5 bg-white p-8 dark:border-white/5 dark:bg-zinc-950">
                <h3 className="mb-6 text-2xl font-bold">
                  Naperville site review checklist
                </h3>
                <ul className="space-y-4">
                  {planningChecklist.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Shield className="text-edg-brand-dark mt-1 h-5 w-5 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
