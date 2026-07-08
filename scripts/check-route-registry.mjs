import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const repoRoot = process.cwd();
const appDir = join(repoRoot, 'src', 'app');
const registryPath = join(repoRoot, 'src', 'lib', 'site-routes.ts');

if (!existsSync(registryPath)) {
  console.error('Route registry not found at src/lib/site-routes.ts');
  process.exit(1);
}

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    return fullPath;
  });
}

function routeFromPagePath(filePath) {
  const relativePath = relative(appDir, filePath).split(sep).join('/');
  const routePath = relativePath.replace(/\/page\.(tsx|ts)$/, '');
  if (routePath === 'page.tsx' || routePath === 'page.ts') return '/';
  return `/${routePath}`;
}

const registrySource = readFileSync(registryPath, 'utf8');
const registeredRoutes = new Set(
  [...registrySource.matchAll(/href:\s*'([^']+)'/g)].map((match) => match[1])
);

const generatedRoutes = new Set(['/projects/[slug]']);
const appRoutes = walk(appDir)
  .filter((filePath) => /\/page\.(tsx|ts)$/.test(filePath))
  .map(routeFromPagePath)
  .filter((route) => !generatedRoutes.has(route));

const missing = appRoutes.filter((route) => !registeredRoutes.has(route));

if (missing.length > 0) {
  console.error('Routes missing from src/lib/site-routes.ts:');
  missing.forEach((route) => console.error(`- ${route}`));
  process.exit(1);
}

console.log(
  `Route registry check passed: ${appRoutes.length} static app routes registered, ${generatedRoutes.size} generated route acknowledged.`
);
