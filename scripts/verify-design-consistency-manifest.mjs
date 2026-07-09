#!/usr/bin/env node
/**
 * Verifies the design-consistency approval-safe staging manifest.
 *
 * This script is intentionally read-only. It compares the manifest to the
 * current local change set and runs a non-mutating git-add dry run.
 */

import { execFileSync } from 'node:child_process';
import {
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join } from 'node:path';

const MANIFEST_PATH =
  'docs/codex/design-consistency-staging-manifest-2026-07-09.md';
const OUTPUT_PATH = process.env.VERIFY_MANIFEST_OUTPUT || '';
const APPROVAL_SAFE_SCOPES = [
  'src/app',
  'src/components',
  'src/lib',
  'scripts/test-contrast.mjs',
  'scripts/verify-design-consistency-routes.mjs',
  'scripts/verify-design-consistency-manifest.mjs',
  'scripts/verify-design-consistency-source.mjs',
  'docs/codex/design-consistency-audit-2026-07-08.md',
  'docs/codex/design-consistency-implementation-status-2026-07-09.md',
  'docs/codex/design-consistency-staging-manifest-2026-07-09.md',
  'docs/codex/design-consistency-phase-5-runbook-2026-07-09.md',
  'docs/codex/design-consistency-approval-packet-2026-07-09.md',
  'docs/codex/design-consistency-requirement-evidence-2026-07-09.md',
  'docs/codex/design-consistency-route-family-map-2026-07-09.md',
  'docs/codex/design-consistency-lead-flow-guardrail-2026-07-09.md',
  'docs/codex/design-consistency-seo-metadata-guardrail-2026-07-09.md',
  'docs/codex/design-consistency-live-verification-url-list-2026-07-09.md',
];
const EXCLUDED_PREFIXES = [
  'output/',
  'docs/codex/design-consistency-audit-2026-07-08-screenshots/',
  'docs/codex/seo-audit-implementation-plan-2026-07-06.md',
  '.next/',
  '.next-stale-',
  'tmp/',
];

function runGit(args) {
  return execFileSync('git', args, {
    cwd: process.cwd(),
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
}

function extractManifestPaths() {
  const source = readFileSync(MANIFEST_PATH, 'utf8');
  const match = source.match(
    /## Approval-Safe Stage Set[\s\S]*?```text\n([\s\S]*?)\n```/
  );

  if (!match) {
    throw new Error(`Could not find Approval-Safe Stage Set in ${MANIFEST_PATH}`);
  }

  return match[1]
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
}

function parsePorcelainStatus(output) {
  return output
    .split('\0')
    .filter(Boolean)
    .map((entry) => ({
      status: entry.slice(0, 2),
      path: entry.slice(3),
    }));
}

function getApprovalSafeChangedPaths() {
  const output = runGit([
    'status',
    '--porcelain=v1',
    '-z',
    '--',
    ...APPROVAL_SAFE_SCOPES,
  ]);

  return parsePorcelainStatus(output);
}

function uniqueSorted(values) {
  return [...new Set(values)].sort();
}

function isExcludedPath(path) {
  return EXCLUDED_PREFIXES.some((prefix) => path.startsWith(prefix));
}

function getDeletedTrackedPaths(paths, statusEntries) {
  const deleted = new Set(
    runGit(['ls-files', '--deleted', '--', ...paths])
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
  );

  statusEntries
    .filter((entry) => entry.status.includes('D'))
    .forEach((entry) => deleted.add(entry.path));

  return deleted;
}

function getDryRunPaths(paths, deletedTrackedPaths, changedPaths) {
  const pathsForDryRun = paths.filter((path) => !deletedTrackedPaths.has(path));
  const output = runGit(['add', '--dry-run', '--', ...pathsForDryRun]);
  const matches = [...output.matchAll(/(?:add|remove) '([^']+)'/g)].map(
    (match) => match[1]
  );
  return uniqueSorted([...matches, ...deletedTrackedPaths, ...changedPaths]);
}

const manifestPaths = uniqueSorted(extractManifestPaths());
const statusEntries = getApprovalSafeChangedPaths();
const changedPaths = uniqueSorted(statusEntries.map((entry) => entry.path));
const deletedTrackedPaths = getDeletedTrackedPaths(manifestPaths, statusEntries);
const dryRunPaths = getDryRunPaths(manifestPaths, deletedTrackedPaths, changedPaths);

const missingFromManifest = changedPaths.filter(
  (path) => !manifestPaths.includes(path)
);
const extraInManifest = manifestPaths.filter(
  (path) => !changedPaths.includes(path)
);
const duplicateManifestPaths =
  extractManifestPaths().length - manifestPaths.length;
const missingFilesOnDisk = manifestPaths.filter(
  (path) => !existsSync(join(process.cwd(), path)) && !deletedTrackedPaths.has(path)
);
const excludedPathsInManifest = manifestPaths.filter(isExcludedPath);
const dryRunMissing = manifestPaths.filter((path) => !dryRunPaths.includes(path));
const dryRunExtra = dryRunPaths.filter((path) => !manifestPaths.includes(path));

const failures = [
  ...(duplicateManifestPaths > 0
    ? [`duplicate manifest paths: ${duplicateManifestPaths}`]
    : []),
  ...(missingFromManifest.length > 0
    ? [`changed approval-safe paths missing from manifest: ${missingFromManifest.length}`]
    : []),
  ...(extraInManifest.length > 0
    ? [`manifest paths not currently changed: ${extraInManifest.length}`]
    : []),
  ...(missingFilesOnDisk.length > 0
    ? [`manifest files missing on disk without tracked deletion: ${missingFilesOnDisk.length}`]
    : []),
  ...(excludedPathsInManifest.length > 0
    ? [`excluded paths present in manifest: ${excludedPathsInManifest.length}`]
    : []),
  ...(dryRunMissing.length > 0
    ? [`git add dry-run did not report manifest paths: ${dryRunMissing.length}`]
    : []),
  ...(dryRunExtra.length > 0
    ? [`git add dry-run reported extra paths: ${dryRunExtra.length}`]
    : []),
];

const summary = {
  checkedAt: new Date().toISOString(),
  manifestPath: MANIFEST_PATH,
  manifestPathCount: manifestPaths.length,
  changedPathCount: changedPaths.length,
  dryRunPathCount: dryRunPaths.length,
  deletedTrackedPaths: [...deletedTrackedPaths].sort(),
  duplicateManifestPaths,
  missingFromManifest,
  extraInManifest,
  missingFilesOnDisk,
  excludedPathsInManifest,
  dryRunMissing,
  dryRunExtra,
  ok: failures.length === 0,
  failures,
};

console.log('Design-consistency staging manifest verifier');
console.log(`Manifest paths: ${summary.manifestPathCount}`);
console.log(`Approval-safe changed paths: ${summary.changedPathCount}`);
console.log(`Git add dry-run paths: ${summary.dryRunPathCount}`);
console.log(
  `Tracked deletions: ${summary.deletedTrackedPaths.join(', ') || 'none'}`
);
console.log(`Missing from manifest: ${summary.missingFromManifest.length}`);
console.log(`Extra in manifest: ${summary.extraInManifest.length}`);
console.log(`Missing files on disk: ${summary.missingFilesOnDisk.length}`);
console.log(`Excluded paths in manifest: ${summary.excludedPathsInManifest.length}`);
console.log(`Dry-run missing paths: ${summary.dryRunMissing.length}`);
console.log(`Dry-run extra paths: ${summary.dryRunExtra.length}`);

if (OUTPUT_PATH) {
  mkdirSync(dirname(join(process.cwd(), OUTPUT_PATH)), { recursive: true });
  writeFileSync(OUTPUT_PATH, `${JSON.stringify(summary, null, 2)}\n`);
  console.log(`Wrote ${OUTPUT_PATH}`);
}

if (!summary.ok) {
  summary.failures.forEach((failure) => console.error(`FAIL ${failure}`));
  process.exit(1);
}

console.log('Manifest verifier passed');
