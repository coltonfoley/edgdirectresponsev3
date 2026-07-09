#!/usr/bin/env node
/**
 * Verifies local source guardrails for the design-consistency rollout.
 *
 * This script is read-only. It codifies the SEO, lead-flow, CTA, and
 * design-token exception scans that were previously captured as prose.
 */

import { execFileSync } from 'node:child_process';
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join, relative, sep } from 'node:path';

const OUTPUT_PATH = process.env.VERIFY_SOURCE_OUTPUT || '';
const ROOT = process.cwd();
const SENSITIVE_DIFF_PATHS = [
  'src/app/api',
  'src/hooks/useLeadSubmission.ts',
  'src/lib/analytics.ts',
  'src/lib/rainmaker-api.ts',
  'src/app/sitemap.ts',
  'src/app/robots.ts',
  'src/app/layout.tsx',
  'src/lib/site-routes.ts',
  'src/lib/projects-data.ts',
  'src/lib/projects.ts',
];
const EXPECTED_SENSITIVE_DIFFS = [
  'src/app/layout.tsx',
  'src/lib/projects-data.ts',
  'src/lib/site-routes.ts',
];
const SOURCE_EXTENSIONS = new Set(['.ts', '.tsx']);
const SOURCE_SCAN_ROOTS = ['src/app', 'src/components', 'src/lib'];
const APP_COMPONENT_ROOTS = ['src/app', 'src/components'];
const SUPABASE_SCAN_ROOTS = ['src/app', 'src/components', 'src/lib', 'src/hooks'];
const LARGE_ROUNDED_PATTERN = /\brounded-(xl|2xl|3xl|full)\b/g;
const SHADOW_PATTERN = /\bshadow-(sm|md|lg|xl|2xl)\b/g;
const CONTACT_QUERY_PATTERN = /\/contact\?/g;
const PROOF_RISK_PATTERN =
  /365-day|\$0 Lost|pay for the system|pay for itself|revenue engine|true four-season|year-round entertaining/gi;
const SUPABASE_PATTERN = /supabase/gi;

const ALLOWED_LARGE_ROUNDED = [
  {
    path: 'src/app/guides/planning-guide/read/GuideReadClient.tsx',
    token: 'rounded-full',
    reason: 'noindex planning-guide reader loading spinner',
  },
];
const ALLOWED_SHADOW_PATHS = new Map([
  [
    'src/components/layout/Navbar.tsx',
    'desktop navigation flyout depth treatment',
  ],
]);

function runGit(args) {
  return execFileSync('git', args, {
    cwd: ROOT,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
}

function relativePath(path) {
  return relative(ROOT, path).split(sep).join('/');
}

function extname(path) {
  const index = path.lastIndexOf('.');
  return index === -1 ? '' : path.slice(index);
}

function walk(path) {
  if (!existsSync(path)) return [];

  const stats = statSync(path);
  if (stats.isFile()) return [path];

  return readdirSync(path, { withFileTypes: true }).flatMap((entry) => {
    const child = join(path, entry.name);
    if (entry.isDirectory()) return walk(child);
    return child;
  });
}

function sourceFiles(roots) {
  return roots
    .flatMap((root) => walk(join(ROOT, root)))
    .filter((path) => SOURCE_EXTENSIONS.has(extname(path)))
    .map(relativePath)
    .sort();
}

function pageAndLayoutFiles() {
  return sourceFiles(['src/app']).filter((path) =>
    /\/(?:page|layout)\.(tsx|ts)$/.test(path)
  );
}

function findPatternMatches(files, pattern) {
  return files.flatMap((path) => {
    const source = readFileSync(join(ROOT, path), 'utf8');
    return [...source.matchAll(pattern)].map((match) => {
      const line = source.slice(0, match.index).split('\n').length;
      return {
        path,
        line,
        match: match[0],
      };
    });
  });
}

function compareSets(actual, expected) {
  const sortedActual = [...actual].sort();
  const sortedExpected = [...expected].sort();

  return {
    actual: sortedActual,
    expected: sortedExpected,
    missingExpected: sortedExpected.filter((path) => !sortedActual.includes(path)),
    unexpected: sortedActual.filter((path) => !sortedExpected.includes(path)),
  };
}

function sensitiveDiffCheck() {
  const diffArgs = ['--name-only', '--', ...SENSITIVE_DIFF_PATHS];
  const actual = new Set(
    [
      runGit(['diff', ...diffArgs]),
      runGit(['diff', '--cached', ...diffArgs]),
    ]
      .join('\n')
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
  );

  const comparison = compareSets(actual, EXPECTED_SENSITIVE_DIFFS);
  return {
    name: 'sensitive diff scope',
    ok:
      comparison.missingExpected.length === 0 &&
      comparison.unexpected.length === 0,
    ...comparison,
  };
}

function metadataClientCheck() {
  const matches = pageAndLayoutFiles().filter((path) => {
    const source = readFileSync(join(ROOT, path), 'utf8');
    return /^\s*['"]use client['"]/m.test(source);
  });

  return {
    name: 'metadata-bearing page/layout client boundary',
    ok: matches.length === 0,
    matches,
  };
}

function contactQueryCheck() {
  const matches = findPatternMatches(
    sourceFiles(APP_COMPONENT_ROOTS),
    CONTACT_QUERY_PATTERN
  );

  return {
    name: 'literal page-context contact query links',
    ok: matches.length === 0,
    matches,
  };
}

function proofRiskCheck() {
  const matches = findPatternMatches(sourceFiles(SOURCE_SCAN_ROOTS), PROOF_RISK_PATTERN);

  return {
    name: 'risky proof-language phrases',
    ok: matches.length === 0,
    matches,
  };
}

function supabaseSourceCheck() {
  const matches = findPatternMatches(sourceFiles(SUPABASE_SCAN_ROOTS), SUPABASE_PATTERN);

  return {
    name: 'Supabase active-source wording',
    ok: matches.length === 0,
    matches,
  };
}

function largeRoundedCheck() {
  const matches = findPatternMatches(
    sourceFiles(APP_COMPONENT_ROOTS),
    LARGE_ROUNDED_PATTERN
  );
  const unapproved = matches.filter(
    (match) =>
      !ALLOWED_LARGE_ROUNDED.some(
        (allowed) => allowed.path === match.path && allowed.token === match.match
      )
  );

  return {
    name: 'large rounded design-token exceptions',
    ok: unapproved.length === 0,
    matches,
    allowed: ALLOWED_LARGE_ROUNDED,
    unapproved,
  };
}

function shadowCheck() {
  const matches = findPatternMatches(sourceFiles(APP_COMPONENT_ROOTS), SHADOW_PATTERN);
  const unapproved = matches.filter((match) => !ALLOWED_SHADOW_PATHS.has(match.path));

  return {
    name: 'soft shadow design-token exceptions',
    ok: unapproved.length === 0,
    matches,
    allowedPaths: Object.fromEntries(ALLOWED_SHADOW_PATHS),
    unapproved,
  };
}

const checks = [
  sensitiveDiffCheck(),
  metadataClientCheck(),
  contactQueryCheck(),
  proofRiskCheck(),
  supabaseSourceCheck(),
  largeRoundedCheck(),
  shadowCheck(),
];

const failures = checks.filter((check) => !check.ok);
const summary = {
  checkedAt: new Date().toISOString(),
  ok: failures.length === 0,
  passCount: checks.length - failures.length,
  failureCount: failures.length,
  checks,
};

console.log('Design-consistency source guardrail verifier');
checks.forEach((check) => {
  const count =
    'matches' in check
      ? check.matches.length
      : 'actual' in check
        ? check.actual.length
        : 0;
  console.log(`${check.ok ? 'pass' : 'FAIL'} ${check.name}: ${count}`);
});

if (OUTPUT_PATH) {
  mkdirSync(dirname(join(ROOT, OUTPUT_PATH)), { recursive: true });
  writeFileSync(OUTPUT_PATH, `${JSON.stringify(summary, null, 2)}\n`);
  console.log(`Wrote ${OUTPUT_PATH}`);
}

if (!summary.ok) {
  failures.forEach((check) => {
    console.error(`FAIL ${check.name}`);
    if ('unexpected' in check && check.unexpected.length > 0) {
      console.error(`  unexpected: ${check.unexpected.join(', ')}`);
    }
    if ('missingExpected' in check && check.missingExpected.length > 0) {
      console.error(`  missing expected: ${check.missingExpected.join(', ')}`);
    }
    if ('unapproved' in check && check.unapproved.length > 0) {
      check.unapproved.forEach((match) =>
        console.error(`  ${match.path}:${match.line}: ${match.match}`)
      );
    }
    if ('matches' in check && !('unapproved' in check)) {
      check.matches.forEach((match) =>
        console.error(`  ${match.path}:${match.line}: ${match.match}`)
      );
    }
  });
  process.exit(1);
}

console.log(`Source guardrails passed: ${summary.passCount}/${checks.length}`);
