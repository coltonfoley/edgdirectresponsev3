import { test, expect } from '@playwright/test';

// Routes extracted from sitemap.ts
const routes = [
  '/',
  '/systems/pergolas',
  '/systems/shades',
  '/systems/enclosures',
  '/systems/appliances',
  '/commercial',
  '/contact',
  '/design',
  '/projects',
  '/gallery',
  '/guides/planning-guide',
  '/guides/planning-guide/read',
  '/price',
  '/pro',
  '/privacy',
  '/terms',
  '/service-areas',
  '/service-areas/naperville-il',
  '/service-areas/barrington-il',
  '/service-areas/oak-brook-il',
  '/service-areas/lake-geneva-wi',
  '/service-areas/hinsdale-il',
  '/service-areas/sanibel-outdoor-living',
  '/service-areas/northbrook-il',
  '/commercial/west-loop',
  '/commercial/chicago-hospitality-outdoor-living',
  '/commercial/restaurant-patio-enclosures',
  '/commercial/country-club-outdoor-spaces',
  '/commercial/hotel-roof-deck-systems',
  '/service-areas/sanibel-outdoor-living/louvered-pergolas',
  '/service-areas/sanibel-outdoor-living/zoning-guide',
  '/service-areas/barrington-il/motorized-pergolas',
  '/service-areas/barrington-il/zoning-guide',
  '/service-areas/northbrook-il/motorized-pergolas',
  '/service-areas/northbrook-il/zoning-guide',
  '/guides',
  '/guides/louvered-pergolas',
  '/guides/pergola-vs-patio-cover',
  '/commercial/hotel-pergolas',
  '/commercial/restaurant-patio-solutions',
  '/service-areas/wilmette-il',
  '/service-areas/wilmette-il/zoning-guide',
  '/service-areas/wilmette-il/louvered-pergolas',
  '/service-areas/winnetka-il',
  '/service-areas/winnetka-il/zoning-guide',
  '/service-areas/winnetka-il/louvered-pergolas',
  '/html-sitemap',
];

test.describe('Smoke Tests', () => {
  for (const route of routes) {
    test(`should load ${route} with 200 OK`, async ({ page }) => {
      const response = await page.goto(route);
      // Allow 200 OK or 304 Not Modified (though 304 is rare in this context)
      // or redirects (3xx) if they land on a valid page, but strict smoke usually expects 200
      expect(response?.status()).toBe(200);
    });
  }
});
