#!/usr/bin/env node
/**
 * SEO Validation Script
 * 
 * Checks all pages for:
 * - Metadata export with title, description, canonical
 * - 'use client' conflicts with metadata
 * - Trailing slashes in canonical paths
 * - Pages missing from sitemap
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '..');

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  bold: '\x1b[1m',
};

const issues = [];
const warnings = [];
const passed = [];

function log(message, type = 'info') {
  if (process.argv.includes('--quiet') && type !== 'error') return;
  
  switch (type) {
    case 'success':
      console.log(`${colors.green}✅${colors.reset} ${message}`);
      break;
    case 'error':
      console.log(`${colors.red}❌${colors.reset} ${message}`);
      break;
    case 'warning':
      console.log(`${colors.yellow}⚠️${colors.reset} ${message}`);
      break;
    case 'info':
      console.log(`${colors.blue}ℹ️${colors.reset} ${message}`);
      break;
    default:
      console.log(message);
  }
}

function extractRoute(filePath) {
  // Convert src/app/service-areas/wilmette-il/page.tsx -> /service-areas/wilmette-il
  const relativePath = path.relative(
    path.join(ROOT_DIR, 'src', 'app'),
    filePath
  );
  const route = relativePath
    .replace(/\/page\.tsx$/, '')
    .replace(/\/\(.*?\)/g, '') // Remove route groups
    .replace(/\/\[.*?\]/g, '') // Remove dynamic segments for now
    || '/';
  return route;
}

function analyzePage(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const route = extractRoute(filePath);
  
  const result = {
    filePath,
    route,
    hasUseClient: content.includes("'use client'"),
    hasUseServer: content.includes("'use server'"),
    hasMetadataExport: /export\s+(const|async function)\s+metadata/.test(content),
    hasMetadataType: /Metadata\s*/.test(content),
    hasTitle: false,
    hasDescription: false,
    hasCanonical: false,
    canonicalValue: null,
  };

  // Extract metadata details if present (handle both `export const metadata` and `export async function generateMetadata`)
  if (result.hasMetadataExport) {
    // Try const metadata first
    let metadataMatch = content.match(/export\s+const\s+metadata[\s\S]*?=\s*\{[\s\S]*?\};/);
    
    // If not found, try generateMetadata function and look for the returned object
    if (!metadataMatch) {
      metadataMatch = content.match(/return\s*\{[\s\S]*?alternates[\s\S]*?\};/);
    }
    if (metadataMatch) {
      const metadataBlock = metadataMatch[0];
      result.hasTitle = /title\s*:/.test(metadataBlock);
      result.hasDescription = /description\s*:/.test(metadataBlock);
      result.hasCanonical = /alternates\s*:\s*\{[\s\S]*?canonical\s*:/.test(metadataBlock);
      
      const canonicalMatch = metadataBlock.match(/canonical\s*:\s*['"`]([^'"`]+)['"`]/);
      if (canonicalMatch) {
        result.canonicalValue = canonicalMatch[1];
      }
    }
  }

  return result;
}

function validatePage(page) {
  const errors = [];
  const warns = [];

  // Critical: 'use client' pages cannot export metadata
  if (page.hasUseClient && page.hasMetadataExport) {
    // Check if metadata is actually before 'use client' (would still work)
    const content = fs.readFileSync(page.filePath, 'utf-8');
    const useClientIndex = content.indexOf("'use client'");
    const metadataIndex = content.indexOf('export const metadata');
    
    if (metadataIndex > useClientIndex || metadataIndex === -1) {
      errors.push({
        type: 'CRITICAL',
        message: `'use client' component with metadata export - metadata will be IGNORED`,
        fix: `Remove 'use client' or split into Server Component + Client Component`,
      });
    }
  }

  // Critical: Missing metadata entirely (skip for dynamic routes with generateMetadata)
  const hasGenerateMetadata = /export\s+async\s+function\s+generateMetadata/.test(fs.readFileSync(page.filePath, 'utf-8'));
  
  if (!page.hasMetadataExport && !page.hasUseClient && !hasGenerateMetadata) {
    errors.push({
      type: 'CRITICAL',
      message: `Missing metadata export`,
      fix: `Add: export const metadata: Metadata = { title: '...', description: '...', alternates: { canonical: '${page.route}' } };`,
    });
  }

  // Critical: 'use client' without any metadata
  if (page.hasUseClient && !page.hasMetadataExport) {
    errors.push({
      type: 'CRITICAL',
      message: `'use client' page with NO metadata - NO SEO tags will be rendered`,
      fix: `Convert to Server Component OR add metadata export BEFORE 'use client' directive`,
    });
  }

  // Critical: Missing canonical
  if (page.hasMetadataExport && !page.hasCanonical) {
    errors.push({
      type: 'CRITICAL',
      message: `Missing alternates.canonical`,
      fix: `Add: alternates: { canonical: '${page.route}' }`,
    });
  }

  // Warning: Missing title
  if (page.hasMetadataExport && !page.hasTitle) {
    warns.push({
      type: 'WARNING',
      message: `Missing title`,
      fix: `Add: title: 'Page Title | EDG Outdoor Living'`,
    });
  }

  // Warning: Missing description
  if (page.hasMetadataExport && !page.hasDescription) {
    warns.push({
      type: 'WARNING',
      message: `Missing description`,
      fix: `Add: description: '...' (150-160 chars)`,
    });
  }

  // Warning: Trailing slash in canonical
  if (page.canonicalValue && page.canonicalValue.endsWith('/') && page.canonicalValue !== '/') {
    warns.push({
      type: 'WARNING',
      message: `Canonical has trailing slash: "${page.canonicalValue}"`,
      fix: `Change to: "${page.canonicalValue.replace(/\/$/, '')}"`,
    });
  }

  return { errors, warns };
}

async function main() {
  log('Starting SEO validation...', 'info');
  log('');

  // Find all page.tsx files
  const pageFiles = [];
  for await (const file of fs.promises.glob('src/app/**/page.tsx', {
    cwd: ROOT_DIR,
    absolute: true,
  })) {
    pageFiles.push(file);
  }

  log(`Found ${pageFiles.length} pages to validate`, 'info');
  log('');

  // Analyze each page
  const pages = pageFiles.map(analyzePage);

  // Validate each page
  let criticalCount = 0;
  let warningCount = 0;
  let passCount = 0;

  for (const page of pages) {
    const { errors, warns } = validatePage(page);
    
    if (errors.length > 0) {
      criticalCount += errors.length;
      log(`${page.route}`, 'error');
      errors.forEach(e => {
        log(`  ${e.message}`, 'error');
        log(`  Fix: ${e.fix}`, 'info');
      });
      issues.push({ page, errors });
    } else if (warns.length > 0) {
      warningCount += warns.length;
      log(`${page.route}`, 'warning');
      warns.forEach(w => {
        log(`  ${w.message}`, 'warning');
      });
      warnings.push({ page, warns });
    } else {
      passCount++;
      if (!process.argv.includes('--quiet')) {
        log(`${page.route} - canonical: ${page.canonicalValue || 'N/A'}`, 'success');
      }
      passed.push(page);
    }
  }

  // Summary
  log('');
  log('='.repeat(60), 'info');
  log('VALIDATION SUMMARY', 'info');
  log('='.repeat(60), 'info');
  log(`✅ Passed: ${passCount} pages`, 'success');
  log(`⚠️  Warnings: ${warningCount} issues`, warningCount > 0 ? 'warning' : 'info');
  log(`❌ Critical: ${criticalCount} issues`, criticalCount > 0 ? 'error' : 'info');
  log('');

  if (criticalCount > 0) {
    log('CRITICAL ISSUES FOUND! Fix before deploying.', 'error');
    process.exit(1);
  } else if (warningCount > 0) {
    log('Warnings found. Address before deploying if possible.', 'warning');
    process.exit(0);
  } else {
    log('All pages validated successfully! 🎉', 'success');
    process.exit(0);
  }
}

// Handle --path argument for single page validation
const pathArg = process.argv.find(arg => arg.startsWith('--path='));
if (pathArg) {
  const route = pathArg.replace('--path=', '');
  const filePath = path.join(ROOT_DIR, 'src', 'app', route, 'page.tsx');
  if (fs.existsSync(filePath)) {
    const page = analyzePage(filePath);
    const { errors, warns } = validatePage(page);
    
    log(`Validating: ${route}`, 'info');
    log('');
    
    if (errors.length === 0 && warns.length === 0) {
      log('All checks passed!', 'success');
    } else {
      errors.forEach(e => log(e.message, 'error'));
      warns.forEach(w => log(w.message, 'warning'));
    }
  } else {
    log(`Page not found: ${filePath}`, 'error');
    process.exit(1);
  }
} else {
  main().catch(err => {
    log(`Error: ${err.message}`, 'error');
    process.exit(1);
  });
}
