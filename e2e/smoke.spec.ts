import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { expect, test } from '@playwright/test';

function getStaticSitemapRoutes() {
  const sitemapSource = readFileSync(
    join(process.cwd(), 'src/app/sitemap.ts'),
    'utf8'
  );

  return [...sitemapSource.matchAll(/url:\s*'([^']+)'/g)].map(
    (match) => match[1]
  );
}

const legacyRedirectRoutes = ['/design', '/price', '/pro'];
const routes = [
  ...new Set([...getStaticSitemapRoutes(), ...legacyRedirectRoutes]),
];

test.describe('Smoke Tests', () => {
  for (const route of routes) {
    test(`loads ${route}`, async ({ page }) => {
      const response = await page.goto(route);

      expect(response?.status()).toBe(200);
    });
  }

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

  test('lead POST honeypot accepts spam without external intake', async ({
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
    expect(body.leadId).toBe('spam-blocked');
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
