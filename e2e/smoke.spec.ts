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
});
