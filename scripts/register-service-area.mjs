
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.join(__dirname, '..');
const SITEMAP_PATH = path.join(PROJECT_ROOT, 'src/app/sitemap.ts');
const SERVICE_INDEX_PATH = path.join(PROJECT_ROOT, 'src/app/service-areas/page.tsx');

// Parse arguments
const args = process.argv.slice(2);
const slugArg = args.find(a => a.startsWith('--slug='));
const nameArg = args.find(a => a.startsWith('--name='));
const descArg = args.find(a => a.startsWith('--desc='));
const communitiesArg = args.find(a => a.startsWith('--communities='));

if (!slugArg || !nameArg) {
    console.error('Usage: node register-service-area.mjs --slug="city-il" --name="City Name" [--desc="..."] [--communities="A,B,C"]');
    process.exit(1);
}

const slug = slugArg.split('=')[1];
const name = nameArg.split('=')[1];
const description = descArg ? descArg.split('=')[1] : `Premium outdoor living covering ${name}.`;
const communities = communitiesArg ? communitiesArg.split('=')[1].split(',') : [name];

// 1. Update Sitemap
try {
    let sitemap = fs.readFileSync(SITEMAP_PATH, 'utf8');
    const newRoute = `'/service-areas/${slug}'`;

    if (!sitemap.includes(newRoute)) {
        // Look for the last item in the array to append
        const lastRouteMatch = sitemap.match(/(\s+)'\/service-areas\/.*',/);

        if (lastRouteMatch) {
            const indentation = lastRouteMatch[1];
            // Insert before the closing bracket of the routes array
            // We find the 'service-areas' section and append
            const insertPoint = sitemap.lastIndexOf("',");
            // Safer: Find the end of the array. The array is roughly lines 7-23.
            // Let's simple regex replace the last entry we know exists or just before the closing ]

            // Regex to find the last route entry and append after it
            const regex = /('\/service-areas\/[^']+',)(\s+)]/;
            const match = sitemap.match(regex);

            if (match) {
                const replacement = `${match[1]}${match[2]}${newRoute},${match[2]}]`;
                sitemap = sitemap.replace(regex, replacement);
                fs.writeFileSync(SITEMAP_PATH, sitemap);
                console.log(`✅ Added ${slug} to sitemap.ts`);
            } else {
                console.warn('Could not find insertion point in sitemap.ts');
            }
        }
    } else {
        console.log(`ℹ️ ${slug} already exists in sitemap.ts`);
    }
} catch (e) {
    console.error('Failed to update sitemap:', e);
}

// 2. Update Service Areas Page
try {
    let pageContent = fs.readFileSync(SERVICE_INDEX_PATH, 'utf8');

    if (!pageContent.includes(`slug: "${slug}"`)) {
        // Construct the new object
        const newEntry = `    {
        name: "${name}",
        slug: "${slug}",
        description: "${description}",
        communities: [${communities.map(c => `"${c.trim()}"`).join(', ')}],
        featured: false,
    },`;

        // Find the end of the serviceAreas array
        // Look for the last closing brace of an object inside the array, followed by comma, newline, and closing bracket
        const arrayEndRegex = /(},\s*];)/;

        if (arrayEndRegex.test(pageContent)) {
            pageContent = pageContent.replace(arrayEndRegex, `},\n${newEntry}\n];`);
            fs.writeFileSync(SERVICE_INDEX_PATH, pageContent);
            console.log(`✅ Added ${name} to service-areas/page.tsx`);
        } else {
            // Try simpler hook: just before "export default"
            const exportDefaultIndex = pageContent.indexOf("export default");
            const endOfArray = pageContent.lastIndexOf("];", exportDefaultIndex);
            if (endOfArray > -1) {
                const before = pageContent.slice(0, endOfArray);
                const after = pageContent.slice(endOfArray);
                fs.writeFileSync(SERVICE_INDEX_PATH, before + `${newEntry}\n` + after);
                console.log(`✅ Added ${name} to service-areas/page.tsx`);
            } else {
                console.warn('Could not find insertion point in service-areas/page.tsx');
            }
        }
    } else {
        console.log(`ℹ️ ${slug} already exists in service-areas/page.tsx`);
    }
} catch (e) {
    console.error('Failed to update service areas page:', e);
}

// 3. Update Navbar Dropdown
const NAVBAR_PATH = path.join(PROJECT_ROOT, 'src/components/ui/Navbar.tsx');
try {
    let navbarContent = fs.readFileSync(NAVBAR_PATH, 'utf8');
    const navHref = `"/service-areas/${slug}"`;

    if (!navbarContent.includes(navHref)) {
        const newNavEntry = `    { href: "/service-areas/${slug}", label: "${name}", desc: "${communities.slice(0, 3).join(', ')}" },`;

        // Find the areasDropdown array
        const areasDropdownRegex = /(const areasDropdown = \[)([\s\S]*?)(\];)/;
        const match = navbarContent.match(areasDropdownRegex);

        if (match) {
            navbarContent = navbarContent.replace(areasDropdownRegex, `$1$2${newNavEntry}\n$3`);
            fs.writeFileSync(NAVBAR_PATH, navbarContent);
            console.log(`✅ Added ${name} to Navbar dropdown`);
        } else {
            console.warn('Could not find areasDropdown in Navbar.tsx');
        }
    } else {
        console.log(`ℹ️ ${slug} already exists in Navbar.tsx`);
    }
} catch (e) {
    console.error('Failed to update Navbar:', e);
}
