'use client';

import { QuoteRequestForm } from '@/components/features/contact/QuoteRequestForm';

export function PergolaBudgetRangeForm() {
  return (
    <QuoteRequestForm
      source="pergola_page_quote"
      defaultInterest="pergola"
      heading="Request a Pergola Quote"
      intro="Name, email, phone, and interest are all we need to start. Add dimensions, project details, or photos only if you want to."
      ctaPosition="pergola_page"
    />
  );
}
