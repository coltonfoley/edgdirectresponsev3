'use client';

import { QuoteRequestForm } from '@/components/features/contact/QuoteRequestForm';

export function HeroFormClient() {
  return (
    <QuoteRequestForm
      source="hero_form"
      theme="dark"
      heading="Request a Quote"
      intro="Start with what you want from the space."
      ctaPosition="homepage_hero"
      layout="compact"
      className="w-full max-w-lg"
    />
  );
}
