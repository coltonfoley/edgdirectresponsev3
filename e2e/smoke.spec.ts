import { expect, test } from '@playwright/test';

const canonicalOrigin = 'https://www.edgpatioshade.com';
const legacyRedirectRoutes = ['/design', '/price', '/pro'];
const customServiceSchemaRoutes = [
  '/systems/pergolas',
  '/systems/shades',
  '/systems/appliances',
  '/commercial/restaurant-patio-enclosures',
  '/service-areas/chicago-il/motorized-pergolas',
  '/service-areas/chicago-il/retractable-screens',
];

function sitemapUrls(xml: string) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
}

async function requestInBatches<T>(
  values: T[],
  batchSize: number,
  request: (value: T) => Promise<void>
) {
  for (let index = 0; index < values.length; index += batchSize) {
    await Promise.all(values.slice(index, index + batchSize).map(request));
  }
}

test.describe('Smoke Tests', () => {
  test('every sitemap route is live with canonical and social metadata', async ({
    request,
  }) => {
    test.setTimeout(90_000);

    const sitemapResponse = await request.get('/sitemap.xml');
    expect(sitemapResponse.status()).toBe(200);
    const urls = sitemapUrls(await sitemapResponse.text());
    expect(urls.length).toBeGreaterThan(80);

    await requestInBatches(urls, 8, async (url) => {
      const pathname = new URL(url).pathname;
      const response = await request.get(pathname);
      const html = await response.text();

      expect(response.status(), pathname).toBe(200);
      expect(html, `${pathname} canonical`).toContain(
        `rel="canonical" href="${canonicalOrigin}${pathname === '/' ? '' : pathname}"`
      );
      expect(html, `${pathname} Open Graph image`).toMatch(
        /property="og:image" content="[^"]+"/
      );
      expect(html, `${pathname} Twitter card`).toMatch(
        /name="twitter:card" content="summary_large_image"/
      );
    });
  });

  test('legacy redirects resolve to a live page', async ({ page }) => {
    for (const route of legacyRedirectRoutes) {
      const response = await page.goto(route);
      expect(response?.status(), route).toBe(200);
    }
  });

  test('custom services use Service schema instead of Product or Offer markup', async ({
    request,
  }) => {
    for (const route of customServiceSchemaRoutes) {
      const response = await request.get(route);
      const html = await response.text();

      expect(response.status(), route).toBe(200);
      expect(html, `${route} service schema`).toContain('"@type":"Service"');
      expect(html, `${route} product schema`).not.toContain(
        '"@type":"Product"'
      );
      expect(html, `${route} offer schema`).not.toContain('"@type":"Offer"');
      expect(html, `${route} aggregate offer`).not.toContain(
        '"@type":"AggregateOffer"'
      );
      expect(html, `${route} aggregate rating`).not.toContain(
        '"@type":"AggregateRating"'
      );
    }
  });

  test('unfinished project profiles stay available but are noindex and excluded from the sitemap', async ({
    request,
  }) => {
    const [projectResponse, sitemapResponse] = await Promise.all([
      request.get('/projects/rosebud'),
      request.get('/sitemap.xml'),
    ]);

    expect(projectResponse.status()).toBe(200);
    expect(await projectResponse.text()).toMatch(/noindex,\s*follow/);
    expect(await sitemapResponse.text()).not.toContain('/projects/rosebud');
  });

  test('robots protects private routes for every declared crawler group', async ({
    request,
  }) => {
    const response = await request.get('/robots.txt');
    const robots = await response.text();

    expect(response.status()).toBe(200);
    for (const crawler of ['Googlebot', 'Bingbot', 'OAI-SearchBot']) {
      const group = robots.match(
        new RegExp(`User-Agent: ${crawler}[\\s\\S]*?(?=User-Agent:|Sitemap:|$)`)
      )?.[0];
      expect(group, crawler).toContain('Disallow: /private/');
    }
  });

  test('retired lead admin readers are not available', async ({ request }) => {
    const [analytics, debug, leadsGet] = await Promise.all([
      request.get('/api/analytics'),
      request.get('/api/debug'),
      request.get('/api/leads'),
    ]);

    expect(analytics.status()).toBe(404);
    expect(debug.status()).toBe(404);
    expect(leadsGet.status()).toBe(405);
  });

  test('lead POST validates bad submissions before external intake', async ({
    request,
  }) => {
    const response = await request.post('/api/leads', {
      data: {
        email: 'not-an-email',
        firstName: '',
      },
    });
    const body = await response.json();

    expect(response.status()).toBe(400);
    expect(body.success).toBe(false);
    expect(body.errors).toContain('Please enter a valid email address');
    expect(body.errors).toContain('First name is required');
  });

  test('lead POST honeypot is filtered before external intake and conversion tracking', async ({
    request,
  }) => {
    const response = await request.post('/api/leads', {
      data: {
        email: 'bot@example.com',
        firstName: 'Bot',
        fax: 'filled-by-bot',
      },
    });
    const body = await response.json();

    expect(response.status()).toBe(201);
    expect(body.success).toBe(true);
    expect(body.accepted).toBe(false);
    expect(body.leadId).toBe('spam-blocked');
  });

  test('the MagnaTrack guide exposes the standard quote form', async ({
    page,
  }) => {
    await page.goto('/guides/magnatrack-screens-cost');

    const form = page.locator('#screen-fit-budget form');
    await expect(form).toBeVisible();
    await expect(form.locator('input[name="fullName"]')).toBeVisible();
    await expect(form.locator('input[name="email"]')).toBeVisible();
    await expect(form.locator('input[name="phone"]')).toBeVisible();
    await expect(
      form.locator('input[name="interest"][value="shades"]')
    ).toBeChecked();
    await expect(form.locator('[required]')).toHaveCount(3);
    await expect(form.locator('fieldset[data-interest-group]')).toHaveAttribute(
      'aria-required',
      'true'
    );
    await expect(form.locator('input[name="location"]')).toHaveCount(0);

    await form
      .getByRole('button', { name: 'Add project details or photos (optional)' })
      .click();
    await expect(form.locator('input[name="location"]')).toBeVisible();
    await expect(form.locator('input[type="file"]')).toBeAttached();
  });

  test('the homepage keeps the quote form compact while supporting multiple interests', async ({
    page,
  }) => {
    await page.goto('/');

    const form = page.locator('form[data-lead-form-id="quote_request"]').first();
    const interestButton = form.getByRole('button', {
      name: 'Select one or more',
    });

    await expect(form).toBeVisible();
    await expect(interestButton).toBeVisible();
    await expect(form.getByLabel('Motorized pergola')).toHaveCount(0);

    await interestButton.click();
    await form.getByLabel('Motorized pergola').check();
    await form.getByLabel('Glass enclosure').check();

    await expect(
      form.getByRole('button', { name: '2 interests selected' })
    ).toBeVisible();
    await expect(form.getByLabel('Motorized pergola')).toBeChecked();
    await expect(form.getByLabel('Glass enclosure')).toBeChecked();
  });

  test('the Screen Fit + Budget pilot emits its own accepted-lead funnel events', async ({
    page,
  }) => {
    await page.goto('/guides/magnatrack-screens-cost');
    await page.evaluate(() => {
      window.dataLayer = [];
    });
    let submittedId = '';
    await page.route('**/api/leads', async (route) => {
      const payload = route.request().postDataJSON() as {
        metadata?: { submission_id?: string };
      };
      submittedId = payload.metadata?.submission_id || '';
      await route.fulfill({
        status: 201,
        contentType: 'application/json',
        body: JSON.stringify({
          success: true,
          accepted: true,
          submissionId: submittedId,
        }),
      });
    });

    const form = page.locator('#screen-fit-budget form');
    await form.locator('input[name="fullName"]').fill('Taylor Jordan');
    await form.locator('input[name="email"]').fill('taylor@example.com');
    await form.locator('input[name="phone"]').fill('815-555-0102');
    await form.getByRole('button', { name: 'Request a Quote' }).click();

    await expect(
      page.getByRole('heading', {
        name: 'Thanks — we received your quote request.',
      })
    ).toBeVisible();

    const eventNames = await page.evaluate(() =>
      (window.dataLayer || [])
        .map((event) => event.event)
        .filter((event): event is string => typeof event === 'string')
    );

    expect(eventNames).toEqual(
      expect.arrayContaining([
        'lead_form_start',
        'lead_form_submit_attempt',
        'screen_fit_budget_form_start',
        'generate_lead',
        'form_submit_success',
        'screen_fit_budget_submit',
      ])
    );
    expect(submittedId).toBeTruthy();
    const successfulEvent = await page.evaluate(() =>
      (window.dataLayer || []).find((event) => event.event === 'generate_lead')
    );
    expect(successfulEvent?.submission_id).toBe(submittedId);
    expect(successfulEvent?.page_path).toBe('/guides/magnatrack-screens-cost');
    expect(successfulEvent?.landing_page).toBe(
      '/guides/magnatrack-screens-cost'
    );
    expect(successfulEvent).not.toHaveProperty('email');
    expect(successfulEvent).not.toHaveProperty('phone');
    expect(JSON.stringify(successfulEvent)).not.toContain('taylor@example.com');
  });

  test('an unchanged retry reuses its anonymous submission ID and emits one success', async ({
    page,
  }) => {
    const submittedIds: string[] = [];
    let attempt = 0;
    await page.route('**/api/leads', async (route) => {
      attempt += 1;
      const payload = route.request().postDataJSON() as {
        metadata?: { submission_id?: string };
      };
      const submissionId = payload.metadata?.submission_id || '';
      submittedIds.push(submissionId);
      await route.fulfill({
        status: attempt === 1 ? 503 : 201,
        contentType: 'application/json',
        body: JSON.stringify(
          attempt === 1
            ? { success: false, errors: ['Temporary intake interruption'] }
            : { success: true, accepted: true, submissionId }
        ),
      });
    });

    await page.goto('/guides/magnatrack-screens-cost');
    await page.evaluate(() => {
      window.dataLayer = [];
    });
    const form = page.locator('#screen-fit-budget form');
    await form.locator('input[name="fullName"]').fill('Taylor Jordan');
    await form.locator('input[name="email"]').fill('taylor@example.com');
    await form.locator('input[name="phone"]').fill('815-555-0102');
    const submit = form.getByRole('button', {
      name: 'Request a Quote',
    });

    await submit.click();
    await expect(form.getByRole('alert')).toContainText(
      'Temporary intake interruption'
    );
    await submit.click();
    await expect(
      page.getByRole('heading', {
        name: 'Thanks — we received your quote request.',
      })
    ).toBeVisible();

    expect(submittedIds).toHaveLength(2);
    expect(submittedIds[0]).toBeTruthy();
    expect(submittedIds[1]).toBe(submittedIds[0]);
    const eventNames = await page.evaluate(() =>
      (window.dataLayer || [])
        .map((event) => event.event)
        .filter((event): event is string => typeof event === 'string')
    );
    expect(
      eventNames.filter((event) => event === 'lead_form_error')
    ).toHaveLength(1);
    expect(
      eventNames.filter((event) => event === 'generate_lead')
    ).toHaveLength(1);
  });

  test('contact form honors CTA query params', async ({ page }) => {
    await page.goto('/contact?type=price&product=saunas&area=Sanibel');

    await expect(
      page.locator('input[name="interest"][value="sauna"]')
    ).toBeChecked();
    await page
      .getByRole('button', { name: 'Add project details or photos (optional)' })
      .click();
    await expect(page.locator('input[name="location"]')).toHaveValue(
      'Sanibel, FL'
    );
  });
});
