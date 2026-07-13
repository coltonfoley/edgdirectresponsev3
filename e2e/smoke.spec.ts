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

  test('the MagnaTrack guide exposes the Screen Fit + Budget pilot', async ({
    page,
  }) => {
    await page.goto('/guides/magnatrack-screens-cost');

    const form = page.locator('#screen-fit-budget form');
    await expect(form).toBeVisible();
    await expect(form.locator('input[name="firstName"]')).toBeVisible();
    await expect(form.locator('input[name="email"]')).toBeVisible();
    await expect(form.locator('input[name="location"]')).toBeVisible();
    await expect(form.locator('select[name="mainProblem"]')).toBeVisible();
  });

  test('the Screen Fit + Budget pilot emits its own accepted-lead funnel events', async ({
    page,
  }) => {
    await page.goto('/guides/magnatrack-screens-cost');
    await page.evaluate(() => {
      window.dataLayer = [];
    });
    await page.route('**/api/leads', async (route) => {
      await route.fulfill({
        status: 201,
        contentType: 'application/json',
        body: JSON.stringify({ success: true, accepted: true }),
      });
    });

    const form = page.locator('#screen-fit-budget form');
    await form.locator('input[name="firstName"]').fill('Taylor');
    await form.locator('input[name="email"]').fill('taylor@example.com');
    await form.locator('input[name="location"]').fill('Barrington, IL');
    await form
      .locator('select[name="mainProblem"]')
      .selectOption('Privacy');
    await form
      .getByRole('button', { name: 'Get My Screen Fit + Budget Range' })
      .click();

    await expect(
      page.getByRole('heading', { name: 'Your screen review is in.' })
    ).toBeVisible();

    const eventNames = await page.evaluate(() =>
      (window.dataLayer || [])
        .map((event) => event.event)
        .filter((event): event is string => typeof event === 'string')
    );

    expect(eventNames).toEqual(
      expect.arrayContaining([
        'form_start',
        'screen_fit_budget_form_start',
        'generate_lead',
        'form_submit_success',
        'screen_fit_budget_submit',
      ])
    );
  });

  test('contact form honors CTA query params', async ({ page }) => {
    await page.goto('/contact?type=price&product=saunas&area=Sanibel');

    await expect(page.locator('select[name="projectType"]')).toHaveValue(
      'sauna'
    );
    await expect(page.locator('input[name="location"]')).toHaveValue(
      'Sanibel'
    );
  });
});
