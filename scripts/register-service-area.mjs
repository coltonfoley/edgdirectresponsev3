import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.join(__dirname, '..');
const SITEMAP_PATH = path.join(PROJECT_ROOT, 'src/app/sitemap.ts');
const SERVICE_INDEX_PATH = path.join(
  PROJECT_ROOT,
  'src/app/service-areas/page.tsx'
);
const NAVBAR_PATH = path.join(PROJECT_ROOT, 'src/components/layout/Navbar.tsx');

function getArg(name) {
  const prefix = `--${name}=`;
  const value = process.argv.slice(2).find((arg) => arg.startsWith(prefix));
  return value ? value.slice(prefix.length).trim() : '';
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function tsString(value) {
  return value.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

const slug = getArg('slug');
const name = getArg('name');
const description =
  getArg('desc') || `Premium outdoor living covering ${name}.`;
const communities = getArg('communities')
  ? getArg('communities')
      .split(',')
      .map((community) => community.trim())
      .filter(Boolean)
  : [name];

if (!slug || !name) {
  console.error(
    'Usage: node register-service-area.mjs --slug="city-il" --name="City Name" [--desc="..."] [--communities="A,B,C"]'
  );
  process.exit(1);
}

const routePath = `/service-areas/${slug}`;
const slugPattern = new RegExp(`slug:\\s*['"]${escapeRegExp(slug)}['"]`);
const hrefPattern = new RegExp(`href:\\s*['"]${escapeRegExp(routePath)}['"]`);

// 1. Update sitemap.ts
try {
  let sitemap = fs.readFileSync(SITEMAP_PATH, 'utf8');
  const routePattern = new RegExp(`url:\\s*['"]${escapeRegExp(routePath)}['"]`);

  if (routePattern.test(sitemap)) {
    console.log(`${slug} already exists in sitemap.ts`);
  } else {
    const newRoute = `    { url: '${routePath}', priority: 0.8 },\n`;
    const nextSection = /\n    \/\/ Deep Links/;

    if (!nextSection.test(sitemap)) {
      throw new Error('Could not find the service-area insertion point');
    }

    sitemap = sitemap.replace(nextSection, `\n${newRoute}    // Deep Links`);
    fs.writeFileSync(SITEMAP_PATH, sitemap);
    console.log(`Added ${slug} to sitemap.ts`);
  }
} catch (error) {
  console.error('Failed to update sitemap:', error);
  process.exitCode = 1;
}

// 2. Update service-areas/page.tsx
try {
  let pageContent = fs.readFileSync(SERVICE_INDEX_PATH, 'utf8');

  if (slugPattern.test(pageContent)) {
    console.log(`${slug} already exists in service-areas/page.tsx`);
  } else {
    const newEntry = `  {
    name: '${tsString(name)}',
    slug: '${tsString(slug)}',
    description:
      '${tsString(description)}',
    region: 'Service Area',
  },
`;
    const insertPoint = /\n];\n\nconst priorityLocalPages = \[/;

    if (!insertPoint.test(pageContent)) {
      throw new Error('Could not find the serviceAreas insertion point');
    }

    pageContent = pageContent.replace(
      insertPoint,
      `\n${newEntry}];\n\nconst priorityLocalPages = [`
    );
    fs.writeFileSync(SERVICE_INDEX_PATH, pageContent);
    console.log(`Added ${name} to service-areas/page.tsx`);
  }
} catch (error) {
  console.error('Failed to update service areas page:', error);
  process.exitCode = 1;
}

// 3. Update Navbar dropdown
try {
  let navbarContent = fs.readFileSync(NAVBAR_PATH, 'utf8');

  if (hrefPattern.test(navbarContent)) {
    console.log(`${slug} already exists in Navbar.tsx`);
  } else {
    const newNavEntry = `  {
    href: '${routePath}',
    label: '${tsString(name)}',
    desc: '${tsString(communities.slice(0, 3).join(', '))}',
  },
`;
    const insertPoint = /\n];\n\nexport function Navbar\(\)/;

    if (!insertPoint.test(navbarContent)) {
      throw new Error('Could not find the locationsDropdown insertion point');
    }

    navbarContent = navbarContent.replace(
      insertPoint,
      `\n${newNavEntry}];\n\nexport function Navbar()`
    );
    fs.writeFileSync(NAVBAR_PATH, navbarContent);
    console.log(`Added ${name} to Navbar dropdown`);
  }
} catch (error) {
  console.error('Failed to update Navbar:', error);
  process.exitCode = 1;
}
