import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { HeroFormClient } from '@/components/features/home/HeroFormClient';
import { HeroBackgroundMedia } from '@/components/features/home/HeroBackgroundMedia';
import { ReviewsSection } from '@/components/features/ReviewsSection';
import { ClientLogoBar } from '@/components/features/ClientLogoBar';
import { ImageSlider } from '@/components/ui/ImageSlider';
import * as images from '@/lib/images';
import { buildContactHref } from '@/lib/contact-links';
import { getAllProjects, getProject, type Project } from '@/lib/projects';
import { ArrowRight, Check } from 'lucide-react';

// Pergola images for the slider
const pergolaSliderImages = [
  {
    src: images.systems.pergolas.whitePoolGlass,
    alt: 'White motorized pergola with glass doors by pool',
  },
  {
    src: images.systems.pergolas.grayBronzeWhite,
    alt: 'Gray bronze pergola with white louvers',
  },
  {
    src: images.systems.pergolas.whiteLedStrip,
    alt: 'White pergola with integrated LED lighting',
  },
  {
    src: images.systems.pergolas.blackBladePool,
    alt: 'Black R-Blade pergola by poolside',
  },
];

// Retractable screen images for the slider
const screenSliderImages = [
  {
    src: images.brand.hero.screens,
    alt: 'Motorized retractable screens on patio',
  },
  {
    src: images.systems.shades.hero,
    alt: 'Retractable shade system installed on home',
  },
  {
    src: images.systems.shades.deployed,
    alt: 'Deployed retractable screens blocking wind and bugs',
  },
];

const priorityPlanningLinks = [
  {
    title: 'Motorized Pergola Planning Guide',
    description:
      "Start with EDG's complete guide to cost, structure, drainage, controls, accessories, and system selection.",
    href: '/guides/motorized-pergola-planning',
  },
  {
    title: 'Request a Pergola Quote',
    description:
      'Tell EDG what you are interested in. Project details and photos are optional.',
    href: '/guides/pergola-system-fit-review',
  },
  {
    title: 'Southwest Florida Pergolas',
    description:
      'Review hurricane-rated louvered roof planning for Sanibel, Captiva, Naples, Marco Island, and nearby Gulf Coast homes.',
    href: '/service-areas/southwest-florida',
  },
  {
    title: 'Sanibel Hurricane-Rated Pergolas',
    description:
      'See Miami-Dade rated louvered roof systems, coastal coatings, and permit considerations for Sanibel Island.',
    href: '/service-areas/sanibel-outdoor-living/louvered-pergolas',
  },
  {
    title: 'Chicago Pergola Installation',
    description:
      'Planning a louvered roof in the city? Review wind, drainage, permit, and installer details for Chicago projects.',
    href: '/service-areas/chicago-il/motorized-pergolas',
  },
  {
    title: 'Chicago Retractable Screens',
    description:
      'See how motorized patio screens solve glare, bugs, privacy, and wind on Chicago patios and roof decks.',
    href: '/service-areas/chicago-il/retractable-screens',
  },
  {
    title: 'Chicago Glass Enclosures',
    description:
      'Compare frameless glass enclosure options for patios, pergolas, roof decks, and hospitality spaces.',
    href: '/service-areas/chicago-il/glass-enclosures',
  },
  {
    title: 'Deerfield Motorized Screens',
    description:
      'North Shore homeowners can review screen layouts for covered patios, porches, and outdoor rooms.',
    href: '/service-areas/deerfield-il/retractable-screens',
  },
];

const allProjects = getAllProjects();
const projectCount = allProjects.length;
const photoReadyProjectCount = allProjects.filter(
  (project) => project.hasRealPhotography
).length;
const featuredProjectSlugs = ['karp', 'carmines', 'wade'];
const featuredProjects = featuredProjectSlugs
  .map((slug) => getProject(slug))
  .filter((project): project is Project => Boolean(project));
const homeownerContactHref = buildContactHref({
  type: 'quote',
  source: 'home_residential_directory',
});

export const metadata: Metadata = {
  title: 'Motorized Pergolas & Retractable Screens | EDG Patio & Shade',
  description:
    'EDG Patio & Shade is the design and supply partner for motorized pergolas, retractable screens, and glass enclosures. Full-service installation from Chicago to Milwaukee, with nationwide design and supply for trade partners.',
  keywords: [
    'motorized pergolas',
    'retractable screens',
    'outdoor living chicago',
    'pergola installation',
    'patio shades',
    'edg outdoor',
  ],
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <div className="selection:bg-edg-brand flex min-h-screen flex-col bg-white selection:text-black">
      {/* ========== HERO SECTION ========== */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-24">
        {/* Background Visuals - Optimized for Performance */}
        <div className="absolute inset-0 z-0 bg-black">
          <HeroBackgroundMedia
            poster={images.brand.hero.pergola}
            alt="Motorized pergola installation"
          />
        </div>

        <Container className="relative z-10 w-full">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left: Headline & Copy - Server Rendered for SEO/LCP */}
            <div className="flex flex-col justify-center text-white lg:col-span-7">
              <h1 className="hero-title mb-6 text-white">
                Motorized Pergolas, <br />
                <span className="text-edg-brand">
                  Patio Screens & Glass Enclosures
                </span>
              </h1>

              <p className="mb-8 max-w-xl text-lg leading-relaxed font-medium text-gray-200 md:text-xl">
                EDG helps homeowners and businesses choose the right outdoor
                system, provides a clear quote, and handles local installation
                from Chicago to Milwaukee.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <div className="label-editorial flex items-center gap-2 text-white">
                  <div className="bg-edg-brand h-1 w-1"></div>
                  Local Installation
                </div>
                <div className="label-editorial flex items-center gap-2 text-white">
                  <div className="bg-edg-brand h-1 w-1"></div>
                  Nationwide Trade Supply
                </div>
                <div className="label-editorial flex items-center gap-2 text-white">
                  <div className="bg-edg-brand h-1 w-1"></div>
                  Showroom in Spring Grove
                </div>
              </div>
            </div>

            {/* Right: Conversion Form (Client Component Only) */}
            <div className="flex flex-col justify-center lg:col-span-5 lg:pl-4">
              <HeroFormClient />
            </div>
          </div>
        </Container>
      </section>

      {/* ========== STATEMENT BAR ========== */}
      <section className="border-t border-white/10 bg-black py-8">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-8 text-sm font-medium tracking-widest text-white/60 uppercase">
            <span>Motorized Outdoor Systems</span>
            <span className="hidden md:inline">•</span>
            <span>Design & Supply</span>
            <span className="hidden md:inline">•</span>
            <span>Installation</span>
            <span className="hidden md:inline">•</span>
            <span>Spring Grove Showroom</span>
          </div>
        </Container>
      </section>

      {/* ========== CLIENT LOGO BAR ========== */}
      <ClientLogoBar />

      {/* ========== DIRECTORIES: RESIDENTIAL VS TRADE ========== */}
      <Section className="bg-white py-0">
        <div className="grid md:grid-cols-2">
          {/* Trade / Pro Side */}
          <Link
            href="/trade-partners"
            className="group relative block min-h-[40vh] overflow-hidden bg-black md:min-h-[60vh]"
          >
            {/* Background Image using next/Image */}
            <div className="absolute inset-0">
              <Image
                src={images.brand.hero.pergola}
                alt="Motorized pergola installation"
                fill
                className="object-cover opacity-60 grayscale transition-all duration-700 group-hover:opacity-40 group-hover:grayscale-0"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={60}
              />
            </div>
            <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-transparent"></div>
            <div className="relative z-10 flex h-full flex-col justify-center p-12 md:p-20">
              <div className="mb-4 inline-block border border-white/30 px-3 py-1 text-xs font-bold tracking-widest text-white uppercase backdrop-blur-sm">
                For B2B
              </div>
              <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                Trade Partners
              </h2>
              <p className="mb-8 max-w-sm text-lg text-gray-300">
                Custom home builders, architects, and landscape pros. We handle
                the system spec, engineering, and supply.
              </p>
              <div className="group-hover:text-edg-brand flex items-center text-sm font-bold tracking-wider text-white uppercase transition-colors">
                Partner Program <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </Link>

          {/* Residential Side */}
          <Link
            href={homeownerContactHref}
            className="group relative block min-h-[40vh] overflow-hidden border-t border-white/10 bg-zinc-900 md:min-h-[60vh] md:border-t-0 md:border-l"
          >
            {/* Background Image using next/Image */}
            <div className="absolute inset-0">
              <Image
                src={images.brand.hero.screens}
                alt="Motorized retractable screens on patio"
                fill
                className="object-cover opacity-60 transition-opacity duration-700 group-hover:opacity-40"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={60}
              />
            </div>
            <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-transparent"></div>
            <div className="relative z-10 flex h-full flex-col justify-center p-12 md:p-20">
              <div className="mb-4 inline-block border border-white/30 px-3 py-1 text-xs font-bold tracking-widest text-white uppercase backdrop-blur-sm">
                For Homeowners
              </div>
              <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                Residential Design
              </h2>
              <p className="mb-8 max-w-sm text-lg text-gray-300">
                Explore motorized pergolas, patio screens, and glass enclosures
                with local planning and installation.
              </p>
              <div className="group-hover:text-edg-brand flex items-center text-sm font-bold tracking-wider text-white uppercase transition-colors">
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </Link>
        </div>
      </Section>

      {/* ========== SYSTEMS SHOWCASE ========== */}
      <Section className="py-24 md:py-32">
        <Container>
          <div className="mb-20 max-w-3xl">
            <h2 className="mb-6 text-4xl font-bold tracking-tighter text-black md:text-6xl">
              Engineered for <br /> the elements.
            </h2>
            <p className="text-text-secondary text-xl leading-relaxed">
              We don&apos;t sell &quot;kits&quot;. We design and specify
              architectural-grade systems built to withstand high winds, snow
              loads, and years of use.
            </p>
          </div>

          <div className="space-y-24">
            {/* System 1 - Motorized Louvered Pergolas */}
            <div className="grid items-center gap-12 md:grid-cols-2">
              <ImageSlider
                images={pergolaSliderImages}
                interval={6}
                className="relative aspect-[4/3] bg-gray-100"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 608px"
              />
              <div>
                <div className="label-editorial-brand mb-4">Core Product</div>
                <h3 className="mb-6 text-3xl font-bold md:text-4xl">
                  Motorized Louvered Pergolas
                </h3>
                <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                  Control sun, shade, and rain with the touch of a button. Our
                  systems are extruded aluminum, powder-coated, and engineered
                  for our Midwest climate.
                </p>
                <ul className="mb-8 space-y-4">
                  <li className="flex items-start gap-3">
                    <IconWrapper
                      icon={Check}
                      variant="default"
                      size="sm"
                      className="mt-0.5"
                    />
                    <span className="text-text-primary font-medium">
                      Integrated Drainage Systems
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconWrapper
                      icon={Check}
                      variant="default"
                      size="sm"
                      className="mt-0.5"
                    />
                    <span className="text-text-primary font-medium">
                      Smart Home & App Control
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconWrapper
                      icon={Check}
                      variant="default"
                      size="sm"
                      className="mt-0.5"
                    />
                    <span className="text-text-primary font-medium">
                      Heaters & LED Lighting Integrated
                    </span>
                  </li>
                </ul>
                <div className="flex flex-wrap items-center gap-4">
                  <Link href="/systems/pergolas">
                    <Button variant="secondary" className="px-8 py-3">
                      Explore Motorized Pergolas
                    </Button>
                  </Link>
                  <Link
                    href="/systems/pergolas/configure"
                    className="text-edg-brand-dark inline-flex items-center gap-1.5 text-sm font-bold tracking-wide uppercase hover:underline"
                  >
                    Configure in 3D <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* System 2 - Reversed */}
            <div className="grid items-center gap-12 md:grid-cols-2">
              <ImageSlider
                images={screenSliderImages}
                interval={6}
                className="relative aspect-[4/3] bg-gray-100 md:order-2"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 608px"
              />
              <div className="md:order-1">
                <div className="label-editorial-brand mb-4">Core Product</div>
                <h3 className="mb-6 text-3xl font-bold md:text-4xl">
                  Motorized Screens
                </h3>
                <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                  Featured MagnaTrack by Progressive Screens systems use a
                  magnetic track-guided design for patios that need better bug,
                  sun, privacy, and everyday wind comfort without losing the
                  open-air feel.
                </p>
                <Link href="/systems/shades">
                  <Button variant="secondary" className="px-8 py-3">
                    Explore Motorized Screens
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== PRIORITY PLANNING LINKS ========== */}
      <Section className="border-t border-black/5 bg-white py-20">
        <Container>
          <div className="mb-10 max-w-3xl">
            <div className="label-editorial-brand mb-4">
              Popular Planning Resources
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-4xl">
              Start with the question closest to your project.
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Compare local conditions, screen pricing, and product options,
              then request a quote when you are ready.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {priorityPlanningLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group border-border bg-surface hover:border-edg-brand/50 hover:bg-surface-muted flex h-full flex-col border p-5 transition-colors"
              >
                <h3 className="text-text-primary group-hover:text-edg-brand-text mb-3 text-base font-bold transition-colors">
                  {item.title}
                </h3>
                <p className="text-text-secondary mb-5 flex-1 text-sm leading-relaxed">
                  {item.description}
                </p>
                <div className="text-text-primary flex items-center gap-2 text-xs font-bold tracking-wider uppercase">
                  View Page
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== WHY US (Editorial Style) ========== */}
      <Section className="bg-surface-muted border-t border-black/5 py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="mb-8 max-w-sm text-4xl font-bold tracking-tighter">
                We are not a &quot;Jack of all trades.&quot;
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-zinc-700">
                Most exterior companies do decks, pavers, pools, and &quot;oh
                yeah, we can do a pergola.&quot;
              </p>
              <p className="border-edg-brand border-l-2 pl-6 text-lg text-zinc-700 italic">
                &quot;EDG is different. We specialize exclusively in motorized
                architectural systems. It&apos;s all we do.&quot;
              </p>
            </div>
            <div className="hidden lg:col-span-1 lg:block"></div>
            <div className="space-y-12 lg:col-span-6">
              <div>
                <h3 className="mb-3 text-xl font-bold tracking-wide uppercase">
                  System-Agnostic
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  We aren&apos;t locked into one manufacturer. We carry multiple
                  lines so we can recommend the exact system that fits your
                  aesthetic and budget requirements.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-bold tracking-wide uppercase">
                  In-House Expertise
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  From our design consultants to our installation leads, our
                  team is trained specifically on complex motorized systems. We
                  don&apos;t sub out the critical work.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-bold tracking-wide uppercase">
                  The Showroom
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Don&apos;t buy from a brochure. Visit our Spring Grove
                  facility to see, touch, and operate full-size display units
                  before you decide.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== FEATURED PROJECTS ========== */}
      <Section className="border-border bg-surface-muted border-y py-24">
        <Container>
          <div className="mb-16 text-center">
            <span className="label-editorial-brand mb-4 inline-block">
              Our Work
            </span>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              {photoReadyProjectCount} Finished Project Photo Sets
            </h2>
            <p className="text-text-secondary mx-auto max-w-2xl text-lg leading-relaxed">
              Browse {projectCount} project profiles across residential and
              commercial work. Finished photo sets are highlighted here, with
              more project records available in the full portfolio.
            </p>
          </div>

          {/* Featured Project Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group border-border hover:border-edg-brand block h-full overflow-hidden border bg-white transition-colors"
              >
                <div className="border-border bg-surface-muted relative aspect-[4/3] overflow-hidden border-b">
                  <Image
                    src={project.cardImage}
                    alt={`${project.title} project in ${project.location}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={75}
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 text-xs font-bold tracking-wider uppercase ${
                        project.type === 'Commercial'
                          ? 'bg-edg-brand text-black'
                          : 'bg-white text-black'
                      }`}
                    >
                      {project.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-edg-brand-dark mb-2 text-sm font-bold">
                    {project.location}
                  </div>
                  <h3 className="group-hover:text-edg-brand-dark mb-2 text-xl font-bold transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary mb-5 line-clamp-2 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="text-edg-brand-dark flex items-center gap-2 text-sm font-bold tracking-wider uppercase transition-colors group-hover:text-black">
                    View Project
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All CTA */}
          <div className="mt-16 text-center">
            <Link href="/projects">
              <Button size="lg" variant="outline" className="min-w-[200px]">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* ========== GOOGLE REVIEWS ========== */}
      <ReviewsSection />
    </div>
  );
}
