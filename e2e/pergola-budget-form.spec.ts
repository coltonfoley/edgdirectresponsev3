import { expect, test } from '@playwright/test';

test('pergola page provides a short budget-range lead path', async ({
  page,
}) => {
  let submittedBody: Record<string, unknown> | undefined;

  await page.route('**/api/leads', async (route) => {
    submittedBody = route.request().postDataJSON() as Record<string, unknown>;
    await route.fulfill({
      status: 201,
      contentType: 'application/json',
      body: JSON.stringify({
        success: true,
        accepted: true,
        leadId: 'rainmaker:test-pergola-budget',
        submissionId: 'test-pergola-budget-submission',
      }),
    });
  });

  await page.goto('/systems/pergolas');

  const primaryCta = page
    .getByRole('link', {
      name: 'Get My Pergola Budget Range',
    })
    .first();
  await expect(primaryCta).toHaveAttribute('href', '#pergola-budget-range');
  await primaryCta.click();

  const form = page.getByRole('form', { name: 'Pergola budget range form' });
  await expect(form).toBeVisible();
  await expect(form.locator('[required]')).toHaveCount(4);

  await form.getByLabel('First name').fill('Website Test');
  await form.getByLabel('Email').fill('website-test@example.com');
  await form.getByLabel('Project city or ZIP').fill('60081');
  await form
    .getByLabel('What are you hoping to build?')
    .selectOption('Motorized louvered pergola');
  await form
    .getByRole('button', { name: 'Get My Pergola Budget Range' })
    .click();

  await expect(page.getByText('Your pergola request is in.')).toBeVisible();
  expect(submittedBody).toMatchObject({
    firstName: 'Website Test',
    email: 'website-test@example.com',
    location: '60081',
    projectType: 'pergola',
    customerType: 'homeowner',
    source: 'pergola_budget_range',
  });
});
