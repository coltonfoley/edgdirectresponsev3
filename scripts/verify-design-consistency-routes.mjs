#!/usr/bin/env node
/**
 * Verifies the design-consistency Phase 5 route contract against a base URL.
 *
 * Default target is local preview. For approved production verification, run:
 * VERIFY_BASE_URL=https://www.edgpatioshade.com node scripts/verify-design-consistency-routes.mjs
 */

import { existsSync, readFileSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, sep } from 'node:path';

const ROUTE_DOC = 'docs/codex/design-consistency-live-verification-url-list-2026-07-09.md';
const APP_DIR = join(process.cwd(), 'src', 'app');
const PROJECTS_DATA_PATH = join(process.cwd(), 'src', 'lib', 'projects-data.ts');
const BASE_URL = normalizeOrigin(process.env.VERIFY_BASE_URL || process.argv[2] || 'http://127.0.0.1:3000');
const CANONICAL_ORIGIN = normalizeOrigin(process.env.VERIFY_CANONICAL_ORIGIN || 'https://www.edgpatioshade.com');
const OUTPUT_PATH = process.env.VERIFY_OUTPUT || '';
const CONCURRENCY = Number(process.env.VERIFY_CONCURRENCY || 8);
const NOINDEX_ROUTE = '/guides/planning-guide/read';
const LEGACY_REDIRECTS = [
  { source: '/design', destination: '/contact' },
  { source: '/price', destination: '/contact' },
  { source: '/pro', destination: '/trade-partners' },
];
const LEGACY_REDIRECT_ROUTES = LEGACY_REDIRECTS.map((redirect) => redirect.source);
const SITE_CHECK_PATHS = ['/sitemap.xml', '/robots.txt'];
const IGNORED_INTERNAL_PATH_PREFIXES = [
  '/_next/',
  '/api/',
  '/images/',
  '/favicon',
];
const IGNORED_INTERNAL_PATH_EXTENSIONS = /\.(avif|css|gif|ico|jpg|jpeg|js|json|pdf|png|svg|txt|webp|xml|zip)$/i;

const SOURCE_GUARDRAILS = [
  {
    name: 'root layout analytics and measurement shell',
    path: 'src/app/layout.tsx',
    requiredSnippets: [
      'DeferredGoogleTagManager',
      'gtmId="GTM-MJWNZD3F"',
      '<SpeedInsights />',
      '<Analytics />',
      '<LandingPageTracker />',
    ],
  },
  {
    name: 'lead hook posts to website intake and tracks conversion',
    path: 'src/hooks/useLeadSubmission.ts',
    requiredSnippets: [
      "fetch('/api/leads'",
      "event: 'generate_lead'",
      "event: 'form_submit_success'",
      "event: 'form_submit_blocked'",
    ],
  },
  {
    name: 'lead API keeps Rainmaker handoff path',
    path: 'src/app/api/leads/route.ts',
    requiredSnippets: [
      'getRainmakerLeadIntakeUrl',
      'RAINMAKER_API_KEY',
      'createRainmakerLead',
      "storage: 'rainmaker'",
    ],
  },
  {
    name: 'analytics metadata keeps landing and query context',
    path: 'src/lib/analytics.ts',
    requiredSnippets: [
      'window.dataLayer',
      'edg_landing_page',
      'query_string',
      'market_param',
      'location_param',
    ],
  },
];

function normalizeOrigin(value) {
  return new URL(value).origin;
}

function routeUrl(route, origin = BASE_URL) {
  return new URL(route, `${origin}/`).toString();
}

function expectedCanonical(route) {
  return routeUrl(route, CANONICAL_ORIGIN);
}

function extractRouteContract() {
  const source = readFileSync(ROUTE_DOC, 'utf8');
  const section = source.match(
    /## Full Source-Derived Production URL Candidate Set[\s\S]*?```text\n([\s\S]*?)\n```/
  );

  if (!section) {
    throw new Error(`Could not find full route contract in ${ROUTE_DOC}`);
  }

  return section[1]
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('/'));
}

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    return fullPath;
  });
}

function routeFromPagePath(filePath) {
  const relativePath = relative(APP_DIR, filePath).split(sep).join('/');
  const routePath = relativePath
    .replace(/\/page\.(tsx|ts)$/, '')
    .replace(/^page\.(tsx|ts)$/, '');

  return routePath ? `/${routePath}` : '/';
}

function deriveSourceRouteContract() {
  if (!existsSync(APP_DIR)) {
    throw new Error(`Missing app directory: ${APP_DIR}`);
  }

  if (!existsSync(PROJECTS_DATA_PATH)) {
    throw new Error(`Missing project data: ${PROJECTS_DATA_PATH}`);
  }

  const staticRoutes = walk(APP_DIR)
    .filter((filePath) => /\/page\.(tsx|ts)$/.test(filePath))
    .map(routeFromPagePath)
    .filter((route) => route !== '/projects/[slug]');

  const projectsData = readFileSync(PROJECTS_DATA_PATH, 'utf8');
  const projectRoutes = [...projectsData.matchAll(/^\s+id:\s*["']([^"']+)["']/gm)].map(
    (match) => `/projects/${match[1]}`
  );

  return [...new Set([...staticRoutes, ...projectRoutes])].sort();
}

function compareRouteSets(documentedRoutes, sourceRoutes) {
  const documented = [...new Set(documentedRoutes)].sort();
  const source = [...new Set(sourceRoutes)].sort();

  return {
    documentedCount: documented.length,
    sourceCount: source.length,
    missingFromDocument: source.filter((route) => !documented.includes(route)),
    extraInDocument: documented.filter((route) => !source.includes(route)),
  };
}

function matchMetaContent(html, name) {
  const pattern = new RegExp(
    `<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']+)["'][^>]*>`,
    'i'
  );
  return html.match(pattern)?.[1]?.trim() || '';
}

function matchCanonical(html) {
  const pattern = /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["'][^>]*>/i;
  return html.match(pattern)?.[1]?.trim() || '';
}

function matchTitle(html) {
  return html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.replace(/\s+/g, ' ').trim() || '';
}

function jsonLdCount(html) {
  return (html.match(/<script[^>]+type=["']application\/ld\+json["'][^>]*>/gi) || []).length;
}

function expectedSitemapUrls(routes) {
  return routes
    .filter((route) => route !== NOINDEX_ROUTE)
    .map((route) => expectedCanonical(route))
    .sort();
}

function normalizeUrl(value) {
  try {
    return new URL(value).toString();
  } catch {
    return value;
  }
}

function normalizePathname(pathname) {
  return pathname.replace(/\/+$/, '') || '/';
}

function decodeHtmlAttribute(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function isIgnoredHref(href) {
  const normalized = href.trim().toLowerCase();

  return (
    !normalized ||
    normalized.startsWith('#') ||
    normalized.startsWith('mailto:') ||
    normalized.startsWith('tel:') ||
    normalized.startsWith('sms:') ||
    normalized.startsWith('javascript:') ||
    normalized.startsWith('data:') ||
    normalized.startsWith('blob:')
  );
}

function isIgnoredInternalPath(pathname) {
  return (
    IGNORED_INTERNAL_PATH_PREFIXES.some((prefix) => pathname.startsWith(prefix)) ||
    IGNORED_INTERNAL_PATH_EXTENSIONS.test(pathname)
  );
}

function extractAnchorHrefs(html) {
  return [...html.matchAll(/<a\b[^>]*\shref=(["'])(.*?)\1/gi)]
    .map((match) => decodeHtmlAttribute(match[2]).trim())
    .filter(Boolean);
}

function auditInternalLinks(html, route, allowedInternalPaths) {
  const contactLinks = [];
  const internalLinks = [];
  const unknownInternalLinks = [];
  const seenUnknown = new Set();

  for (const href of extractAnchorHrefs(html)) {
    if (isIgnoredHref(href)) continue;

    let url;
    try {
      url = new URL(href, routeUrl(route));
    } catch {
      const key = `invalid:${href}`;
      if (!seenUnknown.has(key)) {
        unknownInternalLinks.push({ href, pathname: '', search: '', reason: 'invalid URL' });
        seenUnknown.add(key);
      }
      continue;
    }

    if (![BASE_URL, CANONICAL_ORIGIN].includes(url.origin)) {
      continue;
    }

    const pathname = normalizePathname(url.pathname);
    if (isIgnoredInternalPath(pathname)) continue;

    const link = {
      href,
      pathname,
      search: url.search,
    };

    internalLinks.push(link);

    if (pathname === '/contact') {
      contactLinks.push(link);
    }

    if (!allowedInternalPaths.has(pathname)) {
      const key = `${pathname}${url.search}`;
      if (!seenUnknown.has(key)) {
        unknownInternalLinks.push({ ...link, reason: 'not in route contract' });
        seenUnknown.add(key);
      }
    }
  }

  return {
    internalLinkCount: internalLinks.length,
    contactLinks,
    unknownInternalLinks,
  };
}

function verifySourceGuardrails() {
  const checks = SOURCE_GUARDRAILS.map((guardrail) => {
    const result = {
      name: guardrail.name,
      path: guardrail.path,
      ok: false,
      missingSnippets: [],
    };

    try {
      const source = readFileSync(join(process.cwd(), guardrail.path), 'utf8');
      result.missingSnippets = guardrail.requiredSnippets.filter(
        (snippet) => !source.includes(snippet)
      );
      result.ok = result.missingSnippets.length === 0;
    } catch (error) {
      result.missingSnippets = [
        error instanceof Error ? error.message : String(error),
      ];
    }

    return result;
  });

  return {
    ok: checks.every((check) => check.ok),
    passCount: checks.filter((check) => check.ok).length,
    failureCount: checks.filter((check) => !check.ok).length,
    checks,
  };
}

async function verifyRoute(route, allowedInternalPaths) {
  const url = routeUrl(route);
  const startedAt = Date.now();
  const result = {
    route,
    url,
    status: 0,
    ok: false,
    title: '',
    canonical: '',
    expectedCanonical: expectedCanonical(route),
    robots: '',
    jsonLdCount: 0,
    internalLinkCount: 0,
    contactLinkCount: 0,
    contactLinks: [],
    unknownInternalLinks: [],
    durationMs: 0,
    failures: [],
  };

  try {
    const response = await fetch(url, { redirect: 'follow' });
    result.status = response.status;
    result.finalUrl = response.url;
    result.durationMs = Date.now() - startedAt;

    if (response.status >= 400) {
      result.failures.push(`HTTP ${response.status}`);
      return result;
    }

    const html = await response.text();
    result.title = matchTitle(html);
    result.canonical = matchCanonical(html);
    result.robots = matchMetaContent(html, 'robots');
    result.jsonLdCount = jsonLdCount(html);
    const linkAudit = auditInternalLinks(html, route, allowedInternalPaths);
    result.internalLinkCount = linkAudit.internalLinkCount;
    result.contactLinkCount = linkAudit.contactLinks.length;
    result.contactLinks = linkAudit.contactLinks;
    result.unknownInternalLinks = linkAudit.unknownInternalLinks;

    if (!result.title) {
      result.failures.push('missing title');
    }

    if (!result.canonical) {
      result.failures.push('missing canonical');
    } else if (normalizeUrl(result.canonical) !== normalizeUrl(result.expectedCanonical)) {
      result.failures.push(`canonical mismatch: ${result.canonical}`);
    }

    const robots = result.robots.toLowerCase();
    if (route === NOINDEX_ROUTE) {
      if (!robots.includes('noindex')) {
        result.failures.push('reader route missing noindex');
      }
    } else if (robots.includes('noindex')) {
      result.failures.push(`unexpected noindex: ${result.robots}`);
    }

    if (result.jsonLdCount === 0) {
      result.failures.push('missing JSON-LD');
    }

    if (result.unknownInternalLinks.length > 0) {
      result.failures.push(
        `unknown internal links: ${result.unknownInternalLinks.length}`
      );
    }

    result.ok = result.failures.length === 0;
    return result;
  } catch (error) {
    result.durationMs = Date.now() - startedAt;
    result.failures.push(error instanceof Error ? error.message : String(error));
    return result;
  }
}

async function verifySitemap(routes) {
  const sitemapUrl = routeUrl('/sitemap.xml');
  const expectedUrls = expectedSitemapUrls(routes);
  const result = {
    url: sitemapUrl,
    status: 0,
    ok: false,
    locCount: 0,
    expectedLocCount: expectedUrls.length,
    missingLocs: [],
    extraLocs: [],
    failures: [],
  };

  try {
    const response = await fetch(sitemapUrl, { redirect: 'follow' });
    result.status = response.status;

    if (response.status >= 400) {
      result.failures.push(`HTTP ${response.status}`);
      return result;
    }

    const xml = await response.text();
    const locs = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => normalizeUrl(match[1]));
    const uniqueLocs = [...new Set(locs)].sort();
    const expected = expectedUrls.map(normalizeUrl);

    result.locCount = uniqueLocs.length;
    result.missingLocs = expected.filter((url) => !uniqueLocs.includes(url));
    result.extraLocs = uniqueLocs.filter((url) => !expected.includes(url));

    if (result.locCount !== result.expectedLocCount) {
      result.failures.push(`expected ${result.expectedLocCount} loc URLs, found ${result.locCount}`);
    }

    if (result.missingLocs.length > 0) {
      result.failures.push(`missing sitemap locs: ${result.missingLocs.length}`);
    }

    if (result.extraLocs.length > 0) {
      result.failures.push(`extra sitemap locs: ${result.extraLocs.length}`);
    }

    result.ok = result.failures.length === 0;
    return result;
  } catch (error) {
    result.failures.push(error instanceof Error ? error.message : String(error));
    return result;
  }
}

async function verifyRobots() {
  const robotsUrl = routeUrl('/robots.txt');
  const expectedSitemap = `Sitemap: ${CANONICAL_ORIGIN}/sitemap.xml`;
  const requiredLines = [
    'User-Agent: *',
    'Disallow: /api/',
    'Disallow: /admin/',
    'User-Agent: Googlebot',
    'User-Agent: Bingbot',
    'User-Agent: OAI-SearchBot',
    expectedSitemap,
  ];
  const result = {
    url: robotsUrl,
    status: 0,
    ok: false,
    missingLines: [],
    failures: [],
  };

  try {
    const response = await fetch(robotsUrl, { redirect: 'follow' });
    result.status = response.status;

    if (response.status >= 400) {
      result.failures.push(`HTTP ${response.status}`);
      return result;
    }

    const text = await response.text();
    result.missingLines = requiredLines.filter((line) => !text.includes(line));

    if (result.missingLines.length > 0) {
      result.failures.push(`missing robots lines: ${result.missingLines.join(', ')}`);
    }

    result.ok = result.failures.length === 0;
    return result;
  } catch (error) {
    result.failures.push(error instanceof Error ? error.message : String(error));
    return result;
  }
}

async function verifyRedirect({ source, destination }) {
  const url = routeUrl(source);
  const result = {
    source,
    destination,
    url,
    status: 0,
    location: '',
    ok: false,
    failures: [],
  };

  try {
    const response = await fetch(url, { redirect: 'manual' });
    result.status = response.status;
    result.location = response.headers.get('location') || '';

    if (![301, 302, 307, 308].includes(response.status)) {
      result.failures.push(`expected redirect status, got ${response.status}`);
    }

    if (!result.location) {
      result.failures.push('missing location header');
    } else {
      const locationUrl = new URL(result.location, url);
      if (normalizePathname(locationUrl.pathname) !== destination) {
        result.failures.push(`expected ${destination}, got ${locationUrl.pathname}`);
      }
    }

    result.ok = result.failures.length === 0;
    return result;
  } catch (error) {
    result.failures.push(error instanceof Error ? error.message : String(error));
    return result;
  }
}

async function mapWithConcurrency(items, limit, mapper) {
  const results = [];
  let nextIndex = 0;

  async function worker() {
    while (nextIndex < items.length) {
      const index = nextIndex;
      nextIndex += 1;
      results[index] = await mapper(items[index], index);
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

const routes = extractRouteContract();
const sourceRoutes = deriveSourceRouteContract();
const routeContractComparison = compareRouteSets(routes, sourceRoutes);
const startedAt = new Date().toISOString();

console.log(`Design-consistency route verifier`);
console.log(`Base URL: ${BASE_URL}`);
console.log(`Canonical origin: ${CANONICAL_ORIGIN}`);
console.log(`Documented routes: ${routes.length}`);
console.log(`Source-derived routes: ${sourceRoutes.length}`);

if (
  routeContractComparison.missingFromDocument.length > 0 ||
  routeContractComparison.extraInDocument.length > 0
) {
  console.error(`Route contract does not match current source.`);

  if (routeContractComparison.missingFromDocument.length > 0) {
    console.error(`Missing from document:`);
    routeContractComparison.missingFromDocument.forEach((route) => console.error(`- ${route}`));
  }

  if (routeContractComparison.extraInDocument.length > 0) {
    console.error(`Extra in document:`);
    routeContractComparison.extraInDocument.forEach((route) => console.error(`- ${route}`));
  }

  process.exit(1);
}

console.log(`Route contract matches current source.`);

const allowedInternalPaths = new Set([
  ...routes,
  ...LEGACY_REDIRECT_ROUTES,
  ...SITE_CHECK_PATHS,
]);
const sourceGuardrails = verifySourceGuardrails();
console.log(
  `${sourceGuardrails.ok ? 'pass' : 'FAIL'} source guardrails ${sourceGuardrails.passCount}/${sourceGuardrails.checks.length}`
);

sourceGuardrails.checks
  .filter((check) => !check.ok)
  .forEach((check) => {
    console.error(
      `Source guardrail failed: ${check.path} missing ${check.missingSnippets.join(', ')}`
    );
  });

const results = await mapWithConcurrency(routes, CONCURRENCY, async (route) => {
  const result = await verifyRoute(route, allowedInternalPaths);
  console.log(`${result.ok ? 'pass' : 'FAIL'} ${route} ${result.status} ${result.durationMs}ms`);
  return result;
});

const sitemap = await verifySitemap(routes);
console.log(
  `${sitemap.ok ? 'pass' : 'FAIL'} /sitemap.xml ${sitemap.status} ${sitemap.locCount}/${sitemap.expectedLocCount} locs`
);

const robots = await verifyRobots();
console.log(`${robots.ok ? 'pass' : 'FAIL'} /robots.txt ${robots.status}`);

const redirectChecks = await mapWithConcurrency(
  LEGACY_REDIRECTS,
  CONCURRENCY,
  async (redirect) => {
    const result = await verifyRedirect(redirect);
    console.log(
      `${result.ok ? 'pass' : 'FAIL'} redirect ${result.source} -> ${result.destination} ${result.status}`
    );
    return result;
  }
);

const failures = results.filter((result) => !result.ok);
const sourceGuardrailFailures = sourceGuardrails.checks
  .filter((check) => !check.ok)
  .map((check) => ({
    route: `source guardrail: ${check.path}`,
    status: 0,
    failures: [`missing: ${check.missingSnippets.join(', ')}`],
  }));
const siteFailures = [
  ...(!sitemap.ok ? [{ route: '/sitemap.xml', status: sitemap.status, failures: sitemap.failures }] : []),
  ...(!robots.ok ? [{ route: '/robots.txt', status: robots.status, failures: robots.failures }] : []),
];
const redirectFailures = redirectChecks
  .filter((check) => !check.ok)
  .map((check) => ({
    route: `redirect: ${check.source}`,
    status: check.status,
    failures: check.failures,
  }));
const summary = {
  checkedAt: startedAt,
  baseUrl: BASE_URL,
  canonicalOrigin: CANONICAL_ORIGIN,
  routeCount: routes.length,
  sourceRouteCount: sourceRoutes.length,
  routeContractComparison,
  passCount: results.length - failures.length,
  failureCount: failures.length,
  siteCheckPassCount: Number(sitemap.ok) + Number(robots.ok),
  siteCheckFailureCount: siteFailures.length,
  redirectPassCount: redirectChecks.filter((check) => check.ok).length,
  redirectFailureCount: redirectFailures.length,
  redirectChecks,
  sourceGuardrails,
  totalInternalLinks: results.reduce((sum, result) => sum + result.internalLinkCount, 0),
  totalContactLinks: results.reduce((sum, result) => sum + result.contactLinkCount, 0),
  unknownInternalLinkCount: results.reduce(
    (sum, result) => sum + result.unknownInternalLinks.length,
    0
  ),
  sitemap,
  robots,
  noindexRoutes: results.filter((result) => result.robots.toLowerCase().includes('noindex')).map((result) => result.route),
  minJsonLdCount: Math.min(...results.map((result) => result.jsonLdCount)),
  maxJsonLdCount: Math.max(...results.map((result) => result.jsonLdCount)),
  failures: [
    ...failures.map((result) => ({
      route: result.route,
      status: result.status,
      failures: result.failures,
      unknownInternalLinks: result.unknownInternalLinks,
    })),
    ...siteFailures,
    ...redirectFailures,
    ...sourceGuardrailFailures,
  ],
  results,
};

if (OUTPUT_PATH) {
  mkdirSync(dirname(join(process.cwd(), OUTPUT_PATH)), { recursive: true });
  writeFileSync(OUTPUT_PATH, `${JSON.stringify(summary, null, 2)}\n`);
  console.log(`Wrote ${OUTPUT_PATH}`);
}

console.log(`Summary: ${summary.passCount}/${summary.routeCount} passed, ${summary.failureCount} failed`);
console.log(`Site checks: ${summary.siteCheckPassCount}/2 passed, ${summary.siteCheckFailureCount} failed`);
console.log(
  `Legacy redirects: ${summary.redirectPassCount}/${LEGACY_REDIRECTS.length} passed, ${summary.redirectFailureCount} failed`
);
console.log(
  `Source guardrails: ${sourceGuardrails.passCount}/${sourceGuardrails.checks.length} passed, ${sourceGuardrails.failureCount} failed`
);
console.log(`Sitemap locs: ${sitemap.locCount}/${sitemap.expectedLocCount}`);
console.log(`JSON-LD count range: ${summary.minJsonLdCount}-${summary.maxJsonLdCount}`);
console.log(`Noindex routes: ${summary.noindexRoutes.join(', ') || 'none'}`);
console.log(`Internal links checked: ${summary.totalInternalLinks}`);
console.log(`Contact links found: ${summary.totalContactLinks}`);
console.log(`Unknown internal links: ${summary.unknownInternalLinkCount}`);

if (
  failures.length > 0 ||
  siteFailures.length > 0 ||
  redirectFailures.length > 0 ||
  sourceGuardrailFailures.length > 0
) {
  process.exit(1);
}
