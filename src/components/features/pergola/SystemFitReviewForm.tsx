'use client';

import { QuoteRequestForm } from '@/components/features/contact/QuoteRequestForm';

export function SystemFitReviewForm() {
  return (
    <QuoteRequestForm
      source="pergola_quote_page"
      defaultInterest="pergola"
      heading="Request a Pergola Quote"
      intro="Tell us how to reach you and what you are interested in. Site details and photos are optional."
      ctaPosition="pergola_quote_page"
      metadata={{
        pilot_name: 'pergola_system_fit',
        pilot_version: 'v2_standard_quote',
      }}
    />
  );
}
