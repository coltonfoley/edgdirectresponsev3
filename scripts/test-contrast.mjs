#!/usr/bin/env node
/**
 * Color Contrast Test Script
 * 
 * Tests critical pages for accessibility contrast issues using pa11y.
 * Run this after making color changes to verify compliance.
 * 
 * Usage:
 *   npm run test:contrast
 *   
 * Or directly:
 *   node scripts/test-contrast.mjs
 */

import { execSync } from 'child_process';
import { existsSync } from 'fs';

const BASE_URL = process.env.TEST_URL || 'http://localhost:3000';

// Critical pages to test
const PAGES = [
  '/',
  '/contact',
  '/gallery',
  '/projects',
  '/service-areas',
  '/service-areas/barrington-il',
  '/service-areas/northbrook-il',
  '/commercial',
  '/systems',
  '/design',
];

console.log('🎨 EDG Patio & Shade - Color Contrast Tests');
console.log(`Testing against: ${BASE_URL}\n`);

// Check if pa11y is installed
function checkPa11y() {
  try {
    execSync('which pa11y', { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

// Test a single page
async function testPage(path) {
  const url = `${BASE_URL}${path}`;
  console.log(`\n📄 Testing: ${path}`);
  
  try {
    const output = execSync(
      `pa11y --standard WCAG2AA --reporter json "${url}" 2>/dev/null`,
      { encoding: 'utf-8', timeout: 30000 }
    );
    
    const results = JSON.parse(output);
    const contrastIssues = results.filter(issue => 
      issue.code.includes('contrast') || 
      issue.context.toLowerCase().includes('color')
    );
    
    if (contrastIssues.length === 0) {
      console.log('  ✅ No contrast issues found');
      return { path, passed: true, issues: 0 };
    } else {
      console.log(`  ❌ ${contrastIssues.length} contrast issue(s):`);
      contrastIssues.forEach(issue => {
        console.log(`     - ${issue.message}`);
      });
      return { path, passed: false, issues: contrastIssues.length };
    }
  } catch (error) {
    if (error.status === 2) {
      // pa11y returns exit code 2 when issues are found
      console.log('  ⚠️  Accessibility issues found (check output above)');
      return { path, passed: false, issues: 'unknown' };
    }
    console.log(`  ⚠️  Could not test: ${error.message}`);
    return { path, passed: false, issues: 'error' };
  }
}

// Main test runner
async function runTests() {
  if (!checkPa11y()) {
    console.log('❌ pa11y is not installed. Install it with:');
    console.log('   npm install -g pa11y');
    console.log('\nOr run the development server and use browser DevTools:');
    console.log('   npm run dev');
    console.log('Then open Chrome DevTools → Lighthouse → Accessibility');
    process.exit(1);
  }

  console.log('✅ pa11y found\n');
  console.log('Testing pages for WCAG 2.2 AA contrast compliance...\n');

  const results = [];
  
  for (const page of PAGES) {
    const result = await testPage(page);
    results.push(result);
  }

  // Summary
  console.log('\n' + '='.repeat(50));
  console.log('📊 SUMMARY');
  console.log('='.repeat(50));
  
  const passed = results.filter(r => r.passed).length;
  const failed = results.filter(r => !r.passed).length;
  
  console.log(`\nPages tested: ${results.length}`);
  console.log(`✅ Passed: ${passed}`);
  console.log(`❌ Failed: ${failed}`);
  
  if (failed > 0) {
    console.log('\n⚠️  Some pages have contrast issues. Review the output above.');
    console.log('\nTo fix:');
    console.log('1. Check the specific elements mentioned');
    console.log('2. Update color classes per COLOR_CONTRAST_QUICK_REFERENCE.md');
    console.log('3. Re-run this test');
    process.exit(1);
  } else {
    console.log('\n🎉 All pages pass contrast requirements!');
    process.exit(0);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runTests().catch(err => {
    console.error('Error running tests:', err);
    process.exit(1);
  });
}

export { runTests };
