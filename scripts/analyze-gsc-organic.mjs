#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const defaultEvidence = path.join(
  process.cwd(),
  'docs/codex/organic-search-ctr-position-audit-2026-07-13-evidence'
);

const args = Object.fromEntries(
  process.argv.slice(2).map((argument) => {
    const [key, ...value] = argument.replace(/^--/, '').split('=');
    return [key, value.join('=') || true];
  })
);

if (args.help) {
  console.log(`Usage: npm run seo:gsc-report -- [options]

Options:
  --chart=PATH    Search Console Chart.csv export
  --queries=PATH  Search Console Queries.csv export
  --help          Show this help

Without options, the command reads the dated audit evidence under docs/codex/.`);
  process.exit(0);
}

const chartPath = path.resolve(
  String(args.chart || path.join(defaultEvidence, 'last-3-months', 'Chart.csv'))
);
const queriesPath = path.resolve(
  String(
    args.queries ||
      path.join(defaultEvidence, 'last-3-months-vs-previous', 'Queries.csv')
  )
);

function parseCsv(source) {
  const rows = [];
  let row = [];
  let value = '';
  let quoted = false;

  for (let index = 0; index < source.length; index += 1) {
    const character = source[index];
    const next = source[index + 1];

    if (character === '"' && quoted && next === '"') {
      value += '"';
      index += 1;
    } else if (character === '"') {
      quoted = !quoted;
    } else if (character === ',' && !quoted) {
      row.push(value);
      value = '';
    } else if ((character === '\n' || character === '\r') && !quoted) {
      if (character === '\r' && next === '\n') index += 1;
      row.push(value);
      if (row.some((cell) => cell !== '')) rows.push(row);
      row = [];
      value = '';
    } else {
      value += character;
    }
  }

  if (value || row.length) {
    row.push(value);
    rows.push(row);
  }

  const [headers, ...records] = rows;
  return records.map((record) =>
    Object.fromEntries(
      headers.map((header, index) => [header, record[index] || ''])
    )
  );
}

function readCsv(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing Search Console export: ${filePath}`);
  }
  return parseCsv(fs.readFileSync(filePath, 'utf8'));
}

function number(value) {
  return (
    Number(
      String(value || '0')
        .replaceAll(',', '')
        .replace('%', '')
    ) || 0
  );
}

function sum(rows, key) {
  return rows.reduce((total, row) => total + number(row[key]), 0);
}

function weightedPosition(rows, impressionsKey, positionKey) {
  const impressions = sum(rows, impressionsKey);
  if (!impressions) return 0;
  return (
    rows.reduce(
      (total, row) =>
        total + number(row[impressionsKey]) * number(row[positionKey]),
      0
    ) / impressions
  );
}

function metricKeys(headers) {
  return {
    clicks: headers.find((header) => /Clicks$/.test(header)),
    impressions: headers.find((header) => /Impressions$/.test(header)),
    position: headers.find((header) => /Position$/.test(header)),
  };
}

const exactReviewQueries = new Set([
  'magnatrack motorized retractable screens',
  'patio enclosure supplier',
]);

function isReviewCohort(query) {
  const normalized = query.toLowerCase().trim();
  return (
    normalized.startsWith('automated retractable pergolas ') ||
    normalized.startsWith('deerfield il ') ||
    exactReviewQueries.has(normalized)
  );
}

function isBrandQuery(query) {
  return /(^|\s)(edg|edg patio|edgpatio|edg shade|edg direct)(\s|$)/i.test(
    query
  );
}

function intent(query) {
  if (/restaurant|commercial patio|hospitality/i.test(query))
    return 'restaurant';
  if (/cost|price|pricing|how much/i.test(query)) return 'pricing';
  if (/screen|magnatrack|magna track/i.test(query)) return 'screens';
  if (/pergola|louvered roof/i.test(query)) return 'pergolas';
  if (
    /near me|chicago|illinois|wisconsin|florida|\bil\b|\bwi\b|\bfl\b/i.test(
      query
    )
  ) {
    return 'geographic';
  }
  return 'other';
}

const chart = readCsv(chartPath);
const queries = readCsv(queriesPath);
const chartKeys = metricKeys(Object.keys(chart[0] || {}));
const queryKeys = metricKeys(Object.keys(queries[0] || {}));

if (!chartKeys.clicks || !chartKeys.impressions || !chartKeys.position) {
  throw new Error(
    'Chart export is missing Clicks, Impressions, or Position columns.'
  );
}
if (!queryKeys.clicks || !queryKeys.impressions || !queryKeys.position) {
  throw new Error(
    'Queries export is missing Clicks, Impressions, or Position columns.'
  );
}

const official = {
  clicks: sum(chart, chartKeys.clicks),
  impressions: sum(chart, chartKeys.impressions),
  position: weightedPosition(chart, chartKeys.impressions, chartKeys.position),
};
official.ctr = official.impressions
  ? official.clicks / official.impressions
  : 0;

const reviewRows = queries.filter((row) => isReviewCohort(row['Top queries']));
const visible = {
  clicks: sum(queries, queryKeys.clicks),
  impressions: sum(queries, queryKeys.impressions),
};
const review = {
  rows: reviewRows.length,
  clicks: sum(reviewRows, queryKeys.clicks),
  impressions: sum(reviewRows, queryKeys.impressions),
};
const indicativeClean = {
  clicks: official.clicks - review.clicks,
  impressions: official.impressions - review.impressions,
};
indicativeClean.ctr = indicativeClean.impressions
  ? indicativeClean.clicks / indicativeClean.impressions
  : 0;

const opportunities = queries
  .filter((row) => !isReviewCohort(row['Top queries']))
  .filter((row) => {
    const position = number(row[queryKeys.position]);
    return (
      number(row[queryKeys.impressions]) >= 25 &&
      position >= 4 &&
      position <= 20
    );
  })
  .sort(
    (left, right) =>
      number(right[queryKeys.impressions]) - number(left[queryKeys.impressions])
  )
  .slice(0, 20)
  .map((row) => ({
    query: row['Top queries'],
    clicks: number(row[queryKeys.clicks]),
    impressions: number(row[queryKeys.impressions]),
    ctr: `${((number(row[queryKeys.clicks]) / number(row[queryKeys.impressions])) * 100).toFixed(2)}%`,
    position: number(row[queryKeys.position]).toFixed(1),
    brand: isBrandQuery(row['Top queries']) ? 'brand' : 'non-brand',
    intent: intent(row['Top queries']),
  }));

console.log('\nEDG organic-search measurement report');
console.log(`Chart: ${path.relative(process.cwd(), chartPath)}`);
console.log(`Queries: ${path.relative(process.cwd(), queriesPath)}\n`);
console.table([
  {
    view: 'Official property totals',
    clicks: official.clicks,
    impressions: official.impressions,
    ctr: `${(official.ctr * 100).toFixed(2)}%`,
    position: official.position.toFixed(1),
  },
  {
    view: 'Visible query export',
    clicks: visible.clicks,
    impressions: visible.impressions,
    ctr: visible.impressions
      ? `${((visible.clicks / visible.impressions) * 100).toFixed(2)}%`
      : '0.00%',
    position: 'query rows only',
  },
  {
    view: 'Indicative property totals minus review cohort',
    clicks: indicativeClean.clicks,
    impressions: indicativeClean.impressions,
    ctr: `${(indicativeClean.ctr * 100).toFixed(2)}%`,
    position: 'not recalculated',
  },
]);

console.log(
  `Review cohort: ${review.rows} visible query rows, ${review.clicks} clicks, ${review.impressions} impressions.`
);
console.log(
  'Guardrail: this cohort is a measurement review flag, not proof of bot traffic. Keep official Search Console totals unchanged.'
);
console.log('\nHighest-impression, non-flagged queries in positions 4-20:');
console.table(opportunities);
