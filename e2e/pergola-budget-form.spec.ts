import { expect, test } from '@playwright/test';

test('pergola page provides the standard quote-request path', async ({
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

  const primaryCta = page.locator('a[href="#pergola-budget-range"]').first();
  await expect(primaryCta).toHaveText('Request a Quote');
  await expect(primaryCta).toHaveAttribute('href', '#pergola-budget-range');
  await primaryCta.click();

  const form = page.locator('#pergola-budget-range form');
  await expect(form).toBeVisible();

  await form.getByRole('button', { name: 'Add shade' }).click();
  await form.getByRole('button', { name: 'Continue' }).click();
  await expect(form.locator('fieldset[data-interest-group]')).toHaveAttribute(
    'aria-required',
    'true'
  );
  await expect(form.getByLabel('Motorized pergola')).toBeChecked();
  await form.getByLabel('Glass enclosure').check();
  await expect(form.getByLabel('Glass enclosure')).toBeChecked();
  await form.getByRole('button', { name: 'Continue' }).click();
  await form.getByLabel('Project location (optional)').fill('60081');
  await form.getByRole('button', { name: 'Continue' }).click();
  await form.getByLabel('Full name').fill('Website Test');
  await form.getByLabel('Email').fill('website-test@example.com');
  await form.getByLabel('Phone').fill('815-555-0103');
  await form.getByRole('button', { name: 'Request a Quote' }).click();

  await expect(
    page.getByRole('heading', {
      name: 'Thanks — we received your quote request.',
    })
  ).toBeVisible();
  expect(submittedBody).toMatchObject({
    firstName: 'Website',
    lastName: 'Test',
    email: 'website-test@example.com',
    phone: '815-555-0103',
    location: '60081',
    projectType: 'multiple',
    customerType: 'homeowner',
    source: 'pergola_page_quote',
  });
  expect(submittedBody?.message).toContain(
    'Interests: Motorized pergola, Glass enclosure'
  );
  expect(submittedBody?.message).toContain('Goals: Add shade');
  expect(submittedBody?.metadata).toMatchObject({
    selected_goals: 'shade',
    goal_count: 1,
    selected_interests: 'pergola|enclosure',
    interest_count: 2,
  });
});
