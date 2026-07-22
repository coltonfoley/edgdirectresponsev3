#!/usr/bin/env node
/**
 * Color contrast and rendered-structure smoke test for critical EDG website pages.
 *
 * This uses Playwright from the repo dependency tree, so the check works in a
 * local path with spaces and does not depend on a globally installed pa11y.
 */

import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const BASE_URL = process.env.TEST_URL || 'http://127.0.0.1:3000';
const COLOR_SCHEME = process.env.COLOR_SCHEME === 'dark' ? 'dark' : 'light';
const VIEWPORTS = [
  { label: 'desktop-top', width: 1440, height: 900, scrollY: 0 },
  { label: 'desktop-scrolled', width: 1440, height: 900, scrollY: 900 },
  { label: 'mobile-top', width: 390, height: 844, scrollY: 0 },
];
const PAGES = [
  '/',
  '/contact',
  '/gallery',
  '/projects',
  '/projects/karp',
  '/service-areas',
  '/service-areas/barrington-il',
  '/service-areas/northbrook-il',
  '/service-areas/northbrook-il/motorized-pergolas',
  '/service-areas/wilmette-il/louvered-pergolas',
  '/commercial',
  '/systems',
  '/systems/appliances',
  '/systems/saunas',
  '/guides',
  '/guides/louvered-pergolas',
  '/html-sitemap',
  '/privacy',
  '/showroom',
];

function pageUrl(route) {
  return new URL(route, BASE_URL).toString();
}

async function testPage(browser, route, viewport) {
  const page = await browser.newPage({
    viewport: { width: viewport.width, height: viewport.height },
    colorScheme: COLOR_SCHEME,
  });
  const url = pageUrl(route);
  const label = `${route} [${viewport.label}]`;

  try {
    const response = await page.goto(url, {
      // The gallery can keep background image requests active after its visible
      // page has rendered. Waiting for network idle turns that normal behavior
      // into a false contrast-regression failure in CI.
      waitUntil: 'domcontentloaded',
      timeout: 30_000,
    });

    if (!response || response.status() >= 400) {
      return {
        route: label,
        passed: false,
        issues: [
          {
            text: `Page returned ${response?.status() || 'no response'}`,
            ratio: 0,
            required: 4.5,
            selector: 'document',
          },
        ],
      };
    }

    await page.evaluate((scrollY) => {
      const targetY = Math.min(scrollY, document.body.scrollHeight - window.innerHeight);
      window.scrollTo(0, Math.max(0, targetY));
    }, viewport.scrollY);

    // `domcontentloaded` lets the test begin before Next's optimized, lazy
    // images have all finished streaming. Wait only for the visible images
    // that this check will inspect; waiting for every network request makes
    // the gallery route hang on intentional background-image work.
    await page
      .waitForFunction(
        () => {
          const isVisibleNearViewport = (image) => {
            const style = window.getComputedStyle(image);
            const rect = image.getBoundingClientRect();

            return (
              style.display !== 'none' &&
              style.visibility !== 'hidden' &&
              Number(style.opacity || 1) > 0.05 &&
              rect.width > 0 &&
              rect.height > 0 &&
              rect.bottom >= -200 &&
              rect.top <= window.innerHeight + 200
            );
          };

          return [...document.images]
            .filter(isVisibleNearViewport)
            .every((image) => image.complete && image.naturalWidth > 0);
        },
        undefined,
        { timeout: 20_000 }
      )
      .catch(() => {});

    const structureIssues = await page.evaluate(() => {
      function elementPath(element) {
        const parts = [];
        let current = element;

        while (current && current.nodeType === Node.ELEMENT_NODE && parts.length < 4) {
          let part = current.tagName.toLowerCase();

          if (current.id) {
            part += `#${current.id}`;
            parts.unshift(part);
            break;
          }

          if (current.classList.length) {
            part += `.${[...current.classList].slice(0, 2).join('.')}`;
          }

          parts.unshift(part);
          current = current.parentElement;
        }

        return parts.join(' > ');
      }

      function isVisible(element) {
        const style = window.getComputedStyle(element);
        const rect = element.getBoundingClientRect();

        return (
          style.display !== 'none' &&
          style.visibility !== 'hidden' &&
          Number(style.opacity || 1) > 0.05 &&
          rect.width > 0 &&
          rect.height > 0
        );
      }

      function isNearViewport(element) {
        const rect = element.getBoundingClientRect();

        return rect.bottom >= -200 && rect.top <= window.innerHeight + 200;
      }

      const issues = [];
      const visibleH1s = [...document.querySelectorAll('h1')].filter(isVisible);
      const main = document.querySelector('main');
      const scrollWidth = document.documentElement.scrollWidth;
      const clientWidth = document.documentElement.clientWidth;
      const frameworkOverlay = document.querySelector(
        '[data-nextjs-dialog-overlay], [data-nextjs-toast], nextjs-portal'
      );
      const brokenNearViewportImages = [...document.images].filter((image) => {
        if (!isVisible(image) || !isNearViewport(image)) return false;
        // A cold CI runner can still be processing a valid lazy-loaded image.
        // Only report an image as broken once the browser says its request has
        // completed without producing image data.
        return image.complete && image.naturalWidth === 0;
      });

      if (frameworkOverlay) {
        issues.push({
          text: 'Framework error overlay is visible',
          selector: elementPath(frameworkOverlay),
          type: 'structure',
        });
      }

      if (!main || (main.textContent || '').trim().length < 200) {
        issues.push({
          text: 'Main content is missing or unexpectedly short',
          selector: main ? elementPath(main) : 'main',
          type: 'structure',
        });
      }

      if (visibleH1s.length !== 1) {
        issues.push({
          text: `Expected 1 visible h1, found ${visibleH1s.length}`,
          selector: 'h1',
          type: 'structure',
        });
      }

      if (scrollWidth > clientWidth + 2) {
        issues.push({
          text: `Horizontal overflow: scrollWidth ${scrollWidth}, clientWidth ${clientWidth}`,
          selector: 'document',
          type: 'structure',
        });
      }

      brokenNearViewportImages.slice(0, 5).forEach((image) => {
        issues.push({
          text: 'Visible image near viewport did not load',
          selector: elementPath(image),
          type: 'structure',
        });
      });

      return issues;
    });

    const contrastIssues = await page.evaluate(() => {
      const MIN_NORMAL_TEXT = 4.5;
      const MIN_LARGE_TEXT = 3;
      const DEFAULT_PAGE_BACKGROUND = { r: 255, g: 255, b: 255, a: 1 };
      const SKIP_TAGS = new Set(['SCRIPT', 'STYLE', 'SVG', 'NOSCRIPT']);

      function parseColor(value) {
        const rgbMatch = value.match(
          /^rgba?\((\d+(?:\.\d+)?),\s*(\d+(?:\.\d+)?),\s*(\d+(?:\.\d+)?)(?:,\s*(\d?(?:\.\d+)?))?\)$/
        );

        if (rgbMatch) {
          return {
            r: Number(rgbMatch[1]),
            g: Number(rgbMatch[2]),
            b: Number(rgbMatch[3]),
            a: rgbMatch[4] === undefined ? 1 : Number(rgbMatch[4]),
          };
        }

        const oklabMatch = value.match(
          /^oklab\(\s*([+-]?\d*\.?\d+%?)\s+([+-]?\d*\.?\d+)\s+([+-]?\d*\.?\d+)(?:\s*\/\s*([+-]?\d*\.?\d+%?))?\s*\)$/
        );

        if (oklabMatch) {
          return oklabToRgb(
            parseCssNumber(oklabMatch[1]),
            Number(oklabMatch[2]),
            Number(oklabMatch[3]),
            parseAlpha(oklabMatch[4])
          );
        }

        const oklchMatch = value.match(
          /^oklch\(\s*([+-]?\d*\.?\d+%?)\s+([+-]?\d*\.?\d+%?)\s+([+-]?\d*\.?\d+)(?:deg)?(?:\s*\/\s*([+-]?\d*\.?\d+%?))?\s*\)$/
        );

        if (oklchMatch) {
          const lightness = parseCssNumber(oklchMatch[1]);
          const chroma = parseCssNumber(oklchMatch[2]);
          const hue = (Number(oklchMatch[3]) * Math.PI) / 180;

          return oklabToRgb(
            lightness,
            chroma * Math.cos(hue),
            chroma * Math.sin(hue),
            parseAlpha(oklchMatch[4])
          );
        }

        const labMatch = value.match(
          /^lab\(\s*([+-]?\d*\.?\d+%?)\s+([+-]?\d*\.?\d+%?)\s+([+-]?\d*\.?\d+%?)(?:\s*\/\s*([+-]?\d*\.?\d+%?))?\s*\)$/
        );

        if (labMatch) {
          return labToRgb(
            parseLabLightness(labMatch[1]),
            parseLabAxis(labMatch[2]),
            parseLabAxis(labMatch[3]),
            parseAlpha(labMatch[4])
          );
        }

        const lchMatch = value.match(
          /^lch\(\s*([+-]?\d*\.?\d+%?)\s+([+-]?\d*\.?\d+%?)\s+([+-]?\d*\.?\d+)(?:deg)?(?:\s*\/\s*([+-]?\d*\.?\d+%?))?\s*\)$/
        );

        if (lchMatch) {
          const lightness = parseLabLightness(lchMatch[1]);
          const chroma = parseLabChroma(lchMatch[2]);
          const hue = (Number(lchMatch[3]) * Math.PI) / 180;

          return labToRgb(
            lightness,
            chroma * Math.cos(hue),
            chroma * Math.sin(hue),
            parseAlpha(lchMatch[4])
          );
        }

        return null;
      }

      function parseCssNumber(value) {
        return value.endsWith('%') ? Number(value.slice(0, -1)) / 100 : Number(value);
      }

      function parseLabLightness(value) {
        return value.endsWith('%') ? Number(value.slice(0, -1)) : Number(value);
      }

      function parseLabAxis(value) {
        return value.endsWith('%') ? Number(value.slice(0, -1)) * 1.25 : Number(value);
      }

      function parseLabChroma(value) {
        return value.endsWith('%') ? Number(value.slice(0, -1)) * 1.5 : Number(value);
      }

      function parseAlpha(value) {
        if (!value) return 1;
        return value.endsWith('%') ? Number(value.slice(0, -1)) / 100 : Number(value);
      }

      function toSrgbChannel(value) {
        const clamped = Math.min(1, Math.max(0, value));
        return clamped <= 0.0031308
          ? 12.92 * clamped * 255
          : (1.055 * Math.pow(clamped, 1 / 2.4) - 0.055) * 255;
      }

      function oklabToRgb(lightness, a, b, alpha) {
        const lPrime = lightness + 0.3963377774 * a + 0.2158037573 * b;
        const mPrime = lightness - 0.1055613458 * a - 0.0638541728 * b;
        const sPrime = lightness - 0.0894841775 * a - 1.291485548 * b;
        const l = lPrime ** 3;
        const m = mPrime ** 3;
        const s = sPrime ** 3;

        return {
          r: toSrgbChannel(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s),
          g: toSrgbChannel(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s),
          b: toSrgbChannel(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s),
          a: alpha,
        };
      }

      function labToRgb(lightness, a, b, alpha) {
        const epsilon = 6 / 29;
        const fy = (lightness + 16) / 116;
        const fx = fy + a / 500;
        const fz = fy - b / 200;
        const inverseLab = (value) =>
          value > epsilon
            ? value ** 3
            : 3 * epsilon ** 2 * (value - 4 / 29);

        const x = 0.96422 * inverseLab(fx);
        const y = inverseLab(fy);
        const z = 0.82521 * inverseLab(fz);

        return {
          r: toSrgbChannel(3.1341359569958707 * x - 1.6173863321612538 * y - 0.4906619460083532 * z),
          g: toSrgbChannel(-0.978795502912089 * x + 1.916254567259524 * y + 0.03344273116131949 * z),
          b: toSrgbChannel(0.07195537988411677 * x - 0.2289768264158322 * y + 1.405386058324125 * z),
          a: alpha,
        };
      }

      function isTransparentColorValue(value) {
        if (value === 'transparent') return true;

        const color = parseColor(value);
        if (color) return color.a <= 0.05;

        return /\/\s*0(?:\D|$)/.test(value);
      }

      function composite(foreground, background) {
        const alpha = foreground.a + background.a * (1 - foreground.a);

        if (alpha === 0) {
          return { r: 0, g: 0, b: 0, a: 0 };
        }

        return {
          r:
            (foreground.r * foreground.a +
              background.r * background.a * (1 - foreground.a)) /
            alpha,
          g:
            (foreground.g * foreground.a +
              background.g * background.a * (1 - foreground.a)) /
            alpha,
          b:
            (foreground.b * foreground.a +
              background.b * background.a * (1 - foreground.a)) /
            alpha,
          a: alpha,
        };
      }

      function luminance({ r, g, b }) {
        const values = [r, g, b].map((channel) => {
          const value = channel / 255;
          return value <= 0.03928
            ? value / 12.92
            : Math.pow((value + 0.055) / 1.055, 2.4);
        });

        return 0.2126 * values[0] + 0.7152 * values[1] + 0.0722 * values[2];
      }

      function contrastRatio(foreground, background) {
        const light = Math.max(luminance(foreground), luminance(background));
        const dark = Math.min(luminance(foreground), luminance(background));
        return (light + 0.05) / (dark + 0.05);
      }

      function elementPath(element) {
        const parts = [];
        let current = element;

        while (current && current.nodeType === Node.ELEMENT_NODE && parts.length < 4) {
          let part = current.tagName.toLowerCase();

          if (current.id) {
            part += `#${current.id}`;
            parts.unshift(part);
            break;
          }

          if (current.classList.length) {
            part += `.${[...current.classList].slice(0, 2).join('.')}`;
          }

          parts.unshift(part);
          current = current.parentElement;
        }

        return parts.join(' > ');
      }

      function isVisible(element) {
        const style = window.getComputedStyle(element);
        const rect = element.getBoundingClientRect();

        return (
          style.display !== 'none' &&
          style.visibility !== 'hidden' &&
          Number(style.opacity || 1) > 0.05 &&
          rect.width > 0 &&
          rect.height > 0
        );
      }

      function isVisuallyHidden(element) {
        const style = window.getComputedStyle(element);
        return (
          element.classList.contains('sr-only') ||
          style.clip === 'rect(0px, 0px, 0px, 0px)' ||
          style.clipPath === 'inset(50%)' ||
          (style.position === 'absolute' &&
            Number.parseFloat(style.width || '0') <= 1 &&
            Number.parseFloat(style.height || '0') <= 1)
        );
      }

      function isInViewport(element) {
        const rect = element.getBoundingClientRect();

        return (
          rect.bottom >= 0 &&
          rect.right >= 0 &&
          rect.top <= window.innerHeight &&
          rect.left <= window.innerWidth
        );
      }

      function hasVisibleTextChild(element) {
        return [...element.children].some((child) => {
          if (!isVisible(child)) return false;
          return (child.innerText || '').trim().length > 0;
        });
      }

      function hasUnmeasurableBackground(element) {
        let current = element;

        while (current && current.nodeType === Node.ELEMENT_NODE) {
          const style = window.getComputedStyle(current);
          if (style.backgroundImage && style.backgroundImage !== 'none') {
            return true;
          }
          current = current.parentElement;
        }

        return false;
      }

      function hasMediaBackdrop(element) {
        const elementRect = element.getBoundingClientRect();
        let container = element.parentElement;
        let depth = 0;

        while (container && depth < 6) {
          const containerRect = container.getBoundingClientRect();
          const backdropFound = [...container.querySelectorAll('img, picture, video')].some(
            (media) => {
              const style = window.getComputedStyle(media);
              const rect = media.getBoundingClientRect();
              const isPositionedBackdrop =
                style.position === 'absolute' || style.position === 'fixed';
              const substantiallyCoversContainer =
                rect.width >= containerRect.width * 0.5 &&
                rect.height >= containerRect.height * 0.5;
              const overlapsElement =
                rect.bottom >= elementRect.top &&
                rect.top <= elementRect.bottom &&
                rect.right >= elementRect.left &&
                rect.left <= elementRect.right;

              return (
                isPositionedBackdrop &&
                substantiallyCoversContainer &&
                overlapsElement
              );
            }
          );

          if (backdropFound) return true;

          container = container.parentElement;
          depth += 1;
        }

        return false;
      }

      function isMediaCardText(element) {
        const link = element.closest('a');
        return Boolean(link?.querySelector('img, picture, video'));
      }

      function isTransparentFixedHeaderText(element) {
        const header = element.closest('header');

        return Boolean(
          header &&
            window.getComputedStyle(header).position === 'fixed' &&
            isTransparentColorValue(window.getComputedStyle(header).backgroundColor)
        );
      }

      function effectiveBackground(element) {
        const lineage = [];
        let current = element;

        while (current && current.nodeType === Node.ELEMENT_NODE) {
          lineage.unshift(current);
          current = current.parentElement;
        }

        return lineage.reduce((background, item) => {
          const colorValue = window.getComputedStyle(item).backgroundColor;
          const color = parseColor(colorValue);
          if (!color || color.a <= 0) return background;

          return color.a < 1 ? composite(color, background) : color;
        }, DEFAULT_PAGE_BACKGROUND);
      }

      function isLargeText(style) {
        const fontSize = Number.parseFloat(style.fontSize || '16');
        const rawWeight = style.fontWeight;
        const fontWeight =
          rawWeight === 'bold' ? 700 : Number.parseInt(rawWeight, 10) || 400;

        return fontSize >= 24 || (fontSize >= 18.66 && fontWeight >= 700);
      }

      return [...document.querySelectorAll('body *')]
        .flatMap((element) => {
          if (SKIP_TAGS.has(element.tagName)) return [];
          if (isVisuallyHidden(element)) return [];
          if (!isVisible(element) || !isInViewport(element) || hasVisibleTextChild(element)) return [];
          if (isTransparentFixedHeaderText(element)) return [];
          if (hasUnmeasurableBackground(element)) return [];
          if (hasMediaBackdrop(element)) return [];
          if (isMediaCardText(element)) return [];

          const text = (element.innerText || '').replace(/\s+/g, ' ').trim();
          if (!text) return [];

          const style = window.getComputedStyle(element);
          const foreground = parseColor(style.color);
          const background = effectiveBackground(element);

          if (!foreground) return [];

          const foregroundOnBackground =
            foreground.a < 1 ? composite(foreground, background) : foreground;
          const ratio = contrastRatio(foregroundOnBackground, background);
          const required = isLargeText(style) ? MIN_LARGE_TEXT : MIN_NORMAL_TEXT;

          if (ratio >= required) return [];

          return [
            {
              text: text.slice(0, 90),
              ratio: Number(ratio.toFixed(2)),
              required,
              selector: elementPath(element),
            },
          ];
        })
        .slice(0, 20);
    });

    const issues = [...structureIssues, ...contrastIssues];

    return { route: label, passed: issues.length === 0, issues };
  } finally {
    await page.close();
  }
}

async function runTests() {
  console.log('EDG Patio & Shade - Color Contrast and Structure Tests');
  console.log(`Testing against: ${BASE_URL}`);
  console.log(`Browser color preference: ${COLOR_SCHEME}`);
  console.log(
    `Viewports: ${VIEWPORTS.map((viewport) => viewport.label).join(', ')}\n`
  );

  const browser = await chromium.launch();
  const results = [];

  try {
    for (const route of PAGES) {
      for (const viewport of VIEWPORTS) {
        process.stdout.write(`Testing ${route} [${viewport.label}] ... `);
        const result = await testPage(browser, route, viewport);
        results.push(result);

        if (result.passed) {
          console.log('pass');
        } else {
          console.log(`fail (${result.issues.length} issue(s))`);
          result.issues.slice(0, 5).forEach((issue) => {
            console.log(
              issue.type === 'structure'
                ? `  - ${issue.selector}: "${issue.text}"`
                : `  - ${issue.selector}: "${issue.text}" ratio ${issue.ratio}:1, needs ${issue.required}:1`
            );
          });
        }
      }
    }
  } finally {
    await browser.close();
  }

  const failed = results.filter((result) => !result.passed);

  console.log('\nSummary');
  console.log(`Pages tested: ${results.length}`);
  console.log(`Passed: ${results.length - failed.length}`);
  console.log(`Failed: ${failed.length}`);

  if (failed.length) {
    process.exit(1);
  }
}

const currentFile = fileURLToPath(import.meta.url);
const invokedFile = process.argv[1] ? path.resolve(process.argv[1]) : '';

if (currentFile === invokedFile) {
  runTests().catch((error) => {
    console.error('Error running contrast tests:', error.message);
    process.exit(1);
  });
}

export { runTests };
