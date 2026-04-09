import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const targets = [
  'node_modules/next/dist/lib/metadata/resolve-metadata.js',
  'node_modules/next/dist/esm/lib/metadata/resolve-metadata.js',
];

const search = `    if (openGraph) {
        // If there's openGraph information but not configured in twitter,
        // inherit them from openGraph metadata.
`;

const replacement = `    if (openGraph && twitter) {
        // Only inherit openGraph fields when twitter metadata is explicitly configured.
        // This preserves openGraph tags without auto-generating twitter:* tags.
`;

let visitedTargets = 0;

for (const relativeTarget of targets) {
  const absoluteTarget = path.join(process.cwd(), relativeTarget);

  if (!existsSync(absoluteTarget)) {
    continue;
  }

  visitedTargets += 1;

  const source = readFileSync(absoluteTarget, 'utf8');

  if (source.includes(replacement)) {
    console.log(`Already patched ${relativeTarget}`);
    continue;
  }

  if (!source.includes(search)) {
    throw new Error(`Unable to find metadata patch target in ${relativeTarget}`);
  }

  writeFileSync(absoluteTarget, source.replace(search, replacement), 'utf8');
  console.log(`Patched ${relativeTarget}`);
}

if (visitedTargets === 0) {
  console.warn('No Next metadata resolver files were found to patch.');
}
