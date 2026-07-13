# Search Console clean-measurement guide — 2026-07-13

Use this alongside the dated organic-search audit. It does not replace Google Search Console totals.

## Why this exists

The April 12–July 11 export contains a visible cohort of templated queries that generated 16,829 impressions and no clicks. The largest family begins with `automated retractable pergolas`; smaller families use templated Deerfield screen phrases or two similar exact phrases. These rows can materially depress the blended CTR and average-position story.

The cohort is a **review flag, not proof of bot traffic**. Official clicks, impressions, CTR, and position must always be reported exactly as Search Console provides them. Use the secondary view only to understand whether real customer-intent queries are improving underneath the unusual cohort.

## Repeatable report

Run the included command against the audit snapshot:

```bash
npm run seo:gsc-report
```

Run it against a fresh pair of Search Console CSV exports:

```bash
npm run seo:gsc-report -- --chart=/absolute/path/Chart.csv --queries=/absolute/path/Queries.csv
```

The command prints:

- official property totals from the daily Chart export;
- visible query-export totals;
- an indicative visible-query view with the review cohort removed;
- the highest-impression, non-flagged queries ranking in positions 4–20;
- brand/non-brand and intent labels for opportunity triage.

## Weekly measurement views

Keep these views separate:

1. Official property total: the source-of-truth KPI.
2. Branded queries: EDG name variants.
3. Non-branded commercial intent: restaurant, pergola, screen, enclosure, price, and geographic searches.
4. Review cohort: templated query families tracked separately without deleting or rewriting official totals.
5. Pilot page/query group: the restaurant enclosure page and its restaurant/commercial patio query cluster.

## Restaurant pilot scorecard

Compare 28 days after release with the previous 28 days, and also check the same weekday-adjusted period when practical. Filter the page to `/commercial/restaurant-patio-enclosures`, then review its queries.

Primary signal:

- non-branded clicks and CTR improve after at least 500 impressions;
- average position for the restaurant cluster moves toward page one;
- the page remains the main result for restaurant enclosure queries.

Guardrails:

- do not call a winner before 500 impressions or 28 days;
- do not combine branded and non-branded results;
- watch for query cannibalization with `/commercial/restaurant-patio-solutions`;
- confirm lead quality and commercial inquiries, not clicks alone;
- annotate releases, indexing requests, and major SERP changes.
