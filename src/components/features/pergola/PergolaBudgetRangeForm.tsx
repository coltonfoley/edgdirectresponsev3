'use client';

import { QuoteRequestForm } from '@/components/features/contact/QuoteRequestForm';

export function PergolaBudgetRangeForm() {
  return (
    <QuoteRequestForm
      source="pergola_page_quote"
      defaultInterest="pergola"
      heading="Request a Pergola Quote"
      intro="Start with what you want from the space. Details and photos are optional."
      ctaPosition="pergola_page"
    />
  );
}
