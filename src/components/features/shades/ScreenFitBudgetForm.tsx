'use client';

import { QuoteRequestForm } from '@/components/features/contact/QuoteRequestForm';

export function ScreenFitBudgetForm() {
  return (
    <QuoteRequestForm
      source="magnatrack_screen_quote"
      defaultInterest="shades"
      heading="Request a Screen Quote"
      intro="Name, email, phone, and interest are all we need to start. Opening details and photos are optional."
      ctaPosition="magnatrack_cost_guide"
      metadata={{
        pilot_name: 'screen_fit_budget',
        pilot_version: 'v2_standard_quote',
      }}
    />
  );
}
