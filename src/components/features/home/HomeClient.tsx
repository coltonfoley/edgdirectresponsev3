'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { IconWrapper } from '@/components/ui/IconWrapper';

import { FadeIn } from '@/components/ui/FadeIn';
import {
  ArrowRight,
  Check,
} from 'lucide-react';
import { useState } from 'react';
import { useLeadSubmission } from '@/hooks/useLeadSubmission';
import Link from 'next/link';

export default function HomeClient() {
  return (
    <main className="flex min-h-screen flex-col bg-white selection:bg-edg-brand selection:text-black">
      {/* ========== HERO SECTION ========== */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-24">
        {/* Background Visuals */}
        <div className="absolute inset-0 z-0 bg-black">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/pergolas/pergola-hero.jpg"
            className="h-full w-full object-cover opacity-60"
          >
            <source
              src="/images/enclosures/commercial-pergola-video-clip-01.mp4"
              type="video/mp4"
            />
          </video>
          {/* subtle gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
        </div>

        <Container className="relative z-10 w-full">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left: Headline & Copy */}
            <div className="flex flex-col justify-center text-white lg:col-span-7">
              <FadeIn>
                <h1 className="hero-title mb-6 text-white">
                  Motorized <br />
                  <span className="text-edg-brand">Pergolas & Screens</span>
                </h1>

                <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-200 md:text-xl font-medium">
                  We are the design and supply partner for professionals nationwide, and the full-service installer for homeowners from Chicago to Milwaukee.
                </p>

                <div className="flex flex-wrap items-center gap-6">
                  <div className="label-editorial flex items-center gap-2 text-white">
                    <div className="h-1 w-1 bg-edg-brand"></div>
                    System Agnostic
                  </div>
                  <div className="label-editorial flex items-center gap-2 text-white">
                    <div className="h-1 w-1 bg-edg-brand"></div>
                    Engineering Support
                  </div>
                  <div className="label-editorial flex items-center gap-2 text-white">
                    <div className="h-1 w-1 bg-edg-brand"></div>
                    Showroom in Spring Grove
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right: Conversion Form */}
            <div className="flex flex-col justify-center lg:col-span-5 lg:pl-8">
              <FadeIn delay={0.2}>
                <HeroForm />
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ========== STATEMENT BAR ========== */}
      <section className="bg-black py-8 border-t border-white/10">
        <Container>
          <div className="flex flex-wrap justify-between items-center gap-8 text-white/60 text-sm font-medium uppercase tracking-widest">
            <span>Specialty Outdoor Systems</span>
            <span className="hidden md:inline">•</span>
            <span>Design & Supply</span>
            <span className="hidden md:inline">•</span>
            <span>Installation</span>
            <span className="hidden md:inline">•</span>
            <span>Established Partner</span>
          </div>
        </Container>
      </section>

      {/* ========== DIRECTORIES: RESIDENTIAL VS TRADE ========== */}
      <Section className="bg-white py-0">
        <div className="grid md:grid-cols-2">
          {/* Trade / Pro Side */}
          <Link href="/trade-partners" className="group relative block min-h-[40vh] md:min-h-[60vh] overflow-hidden bg-black">
            {/* Background Image using next/Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/pergolas/pergola-hero.jpg"
                alt="Motorized pergola installation"
                fill
                className="object-cover opacity-60 grayscale transition-all duration-700 group-hover:opacity-40 group-hover:grayscale-0"
                sizes="50vw"
              />
            </div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            <div className="relative h-full flex flex-col justify-center p-12 md:p-20 z-10">
              <div className="mb-4 inline-block border border-white/30 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm">
                For B2B
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Trade Partners</h2>
              <p className="text-gray-300 max-w-sm mb-8 text-lg">
                Custom home builders, architects, and landscape pros. We handle the system spec, engineering, and supply.
              </p>
              <div className="flex items-center text-white font-bold uppercase tracking-wider text-sm group-hover:text-edg-brand transition-colors">
                Partner Program <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </Link>

          {/* Residential Side */}
          <Link href="/design" className="group relative block min-h-[40vh] md:min-h-[60vh] overflow-hidden bg-zinc-900 border-t md:border-t-0 md:border-l border-white/10">
            {/* Background Image using next/Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/motorized-retractable-screens-patio.jpg"
                alt="Motorized retractable screens on patio"
                fill
                className="object-cover opacity-60 transition-opacity duration-700 group-hover:opacity-40"
                sizes="50vw"
              />
            </div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            <div className="relative h-full flex flex-col justify-center p-12 md:p-20 z-10">
              <div className="mb-4 inline-block border border-white/30 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm">
                For Homeowners
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Residential Design</h2>
              <p className="text-gray-300 max-w-sm mb-8 text-lg">
                Upgrade your home with the definitive motorized systems. Full-service planning and installation.
              </p>
              <div className="flex items-center text-white font-bold uppercase tracking-wider text-sm group-hover:text-edg-brand transition-colors">
                Start Planning <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </Link>
        </div>
      </Section>

      {/* ========== SYSTEMS SHOWCASE ========== */}
      <Section className="py-24 md:py-32">
        <Container>
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black mb-6">
              Engineered for <br /> the elements.
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed">
              We don&apos;t sell &quot;kits&quot;. We design and specify architectural-grade systems built to withstand high winds, snow loads, and years of use.
            </p>
          </div>

          <div className="space-y-24">
            {/* System 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                <Image
                  src="/images/pergolas/pergola-hero.jpg"
                  alt="Motorized louvered pergola"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <div className="label-editorial-brand mb-4">Core Product</div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Motorized Louvered Pergolas</h3>
                <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                  Control sun, shade, and rain with the touch of a button. Our systems are extruded aluminum, powder-coated, and engineered for our Midwest climate.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <IconWrapper icon={Check} variant="default" size="sm" className="mt-0.5" />
                    <span className="text-text-primary font-medium">Integrated Drainage Systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconWrapper icon={Check} variant="default" size="sm" className="mt-0.5" />
                    <span className="text-text-primary font-medium">Smart Home & App Control</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconWrapper icon={Check} variant="default" size="sm" className="mt-0.5" />
                    <span className="text-text-primary font-medium">Heaters & LED Lighting Integrated</span>
                  </li>
                </ul>
                <Link href="/systems/pergolas">
                  <Button variant="secondary" className="px-8 py-3">
                    Explore Pergolas
                  </Button>
                </Link>
              </div>
            </div>

            {/* System 2 - Reversed */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2 relative aspect-[4/3] bg-gray-100 overflow-hidden">
                <Image
                  src="/images/motorized-retractable-screens-patio.jpg"
                  alt="Motorized retractable screens"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="md:order-1">
                <div className="label-editorial-brand mb-4">Core Product</div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Retractable Screens</h3>
                <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                  MagnaTrack technology ensures your screens never get stuck or blown out of their tracks. Block 95% of wind, bugs, and UV rays without losing your view.
                </p>
                <Link href="/systems/shades">
                  <Button variant="secondary" className="px-8 py-3">
                    Explore Screens
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== WHY US (Editorial Style) ========== */}
      <Section className="bg-surface-muted py-24 md:py-32 border-t border-black/5">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <h2 className="text-4xl font-bold tracking-tighter mb-8 max-w-sm">
                We are not a &quot;Jack of all trades.&quot;
              </h2>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                Most exterior companies do decks, pavers, pools, and &quot;oh yeah, we can do a pergola.&quot;
              </p>
              <p className="text-lg text-text-secondary border-l-2 border-edg-brand pl-6 italic">
                &quot;EDG is different. We specialize exclusively in motorized architectural systems. It&apos;s all we do.&quot;
              </p>
            </div>
            <div className="lg:col-span-1 hidden lg:block"></div>
            <div className="lg:col-span-6 space-y-12">
              <div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">System-Agnostic</h3>
                <p className="text-text-secondary leading-relaxed">
                  We aren&apos;t locked into one manufacturer. We carry multiple lines so we can recommend the exact system that fits your aesthetic and budget requirements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">In-House Expertise</h3>
                <p className="text-text-secondary leading-relaxed">
                  From our design consultants to our installation leads, our team is trained specifically on complex motorized systems. We don&apos;t sub out the critical work.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">The Showroom</h3>
                <p className="text-text-secondary leading-relaxed">
                  Don&apos;t buy from a brochure. Visit our Spring Grove facility to see, touch, and operate full-size display units before you decide.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== CTA (Black) ========== */}
      <Section className="bg-black py-32 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
              Ready to start?
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
              Whether you have blueprints ready or just a rough idea, we can help you verify feasibility and costs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Link href="/contact">
                <Button size="lg" className="min-w-[200px]">
                  Book Consultation
                </Button>
              </Link>
              <Link href="/guides/planning-guide">
                <Button size="lg" variant="outline" className="min-w-[200px]">
                  Get Planning Guide
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

function HeroForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    projectType: '',
    message: 'Requested from Homepage Hero',
  });

  const { submitLead, loading, error, success } = useLeadSubmission();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitLead({
      ...formData,
      customerType: 'homeowner',
      source: 'hero_form',
    });
  };

  if (success) {
    return (
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-8 border border-white/20 text-center">
        <div className="bg-edg-brand mx-auto mb-6 flex h-16 w-16 items-center justify-center text-black">
          <Check className="h-8 w-8" />
        </div>
        <h3 className="mb-2 text-2xl font-bold text-white">
          Message Received
        </h3>
        <p className="text-gray-300">
          We&apos;ll be in touch shortly to discuss your project.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md bg-black/80 p-8 border border-white/10 shadow-2xl backdrop-blur-sm">
      <div className="mb-6 text-white">
        <h3 className="text-xl font-bold uppercase tracking-wide">Request Information</h3>
        <p className="text-sm text-gray-400">Get pricing or verify feasibility for your project.</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            disabled={loading}
            onChange={handleChange}
            className="input-editorial-dark"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            disabled={loading}
            onChange={handleChange}
            className="input-editorial-dark"
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          disabled={loading}
          onChange={handleChange}
          className="input-editorial-dark"
        />
        <input
          type="text"
          name="location"
          placeholder="Zip Code"
          required
          disabled={loading}
          onChange={handleChange}
          className="input-editorial-dark"
        />
        <select
          name="projectType"
          required
          disabled={loading}
          onChange={handleChange}
          defaultValue=""
          className="input-editorial-dark appearance-none"
        >
          <option value="" disabled className="text-black">
            Project Type...
          </option>
          <option value="pergola" className="text-black">
            Louvered Pergola
          </option>
          <option value="shades" className="text-black">
            Motorized Shades
          </option>
          <option value="enclosure" className="text-black">
            Glass Enclosure
          </option>
          <option value="commercial" className="text-black">
            Commercial Project
          </option>
        </select>
        <Button
          type="submit"
          disabled={loading}
          className="w-full py-4 text-base"
        >
          {loading ? 'Sending...' : 'Get Started'}
        </Button>
        {error && (
          <div className="mt-2 text-center text-sm text-red-400">
            {error}
          </div>
        )}
      </form>
    </div>
  );
}
