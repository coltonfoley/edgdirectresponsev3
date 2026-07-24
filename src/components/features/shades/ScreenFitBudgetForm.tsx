'use client';

import { QuoteRequestForm } from '@/components/features/contact/QuoteRequestForm';

export function ScreenFitBudgetForm() {
  return (
    <QuoteRequestForm
      source="magnatrack_screen_quote"
      defaultInterest="shades"
      heading="Request a Screen Quote"
      intro="Start with what you want from the space. Opening details and photos are optional."
      ctaPosition="magnatrack_cost_guide"
      metadata={{
        pilot_name: 'screen_fit_budget',
        pilot_version: 'v2_standard_quote',
      }}
    />
  );
}
