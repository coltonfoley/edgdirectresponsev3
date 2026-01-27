# EDG SEO Tracking - Looker Studio Dashboard Template

This document provides the specification for setting up a comprehensive SEO tracking dashboard in Google Looker Studio (formerly Data Studio).

## Prerequisites

Before setting up the dashboard, ensure you have:

1. **Google Search Console** - Property verified for edgpatioshade.com
2. **Google Analytics 4** - Configured in your GTM container (GTM-MJWNZD3F)
3. **Looker Studio** - Access at https://lookerstudio.google.com

---

## Data Sources to Connect

### 1. Google Search Console

**Connection:** Looker Studio > Add Data > Google Search Console

**Data to pull:**
- Site Impression (Search appearance)
- URL Impression (Page-level data)

**Key dimensions:**
- Query (keyword)
- Page (URL path)
- Device
- Country
- Date

**Key metrics:**
- Impressions
- Clicks
- CTR
- Average Position

---

### 2. Google Analytics 4

**Connection:** Looker Studio > Add Data > Google Analytics > GA4

**Key dimensions:**
- Landing page
- Session source/medium
- Device category
- City/Region
- Date

**Key metrics:**
- Sessions
- Users
- Engaged sessions
- Conversions (book_call_click, phone_click, generate_lead)
- Engagement rate

---

## Dashboard Pages

### Page 1: SEO Overview

**Purpose:** High-level view of organic search performance

**Scorecards (top row):**
| Metric | Source | Comparison |
|--------|--------|------------|
| Total Organic Clicks | GSC | vs previous period |
| Total Impressions | GSC | vs previous period |
| Average Position | GSC | vs previous period |
| Organic Conversions | GA4 | vs previous period |

**Charts:**

1. **Organic Traffic Trend** (Time series)
   - X-axis: Date
   - Y-axis: Clicks (GSC)
   - Add comparison line for impressions

2. **Top Keywords Table**
   - Columns: Query, Clicks, Impressions, CTR, Position
   - Sort by: Clicks (descending)
   - Show top 20

3. **Click Distribution by Device** (Pie chart)
   - Dimension: Device
   - Metric: Clicks

---

### Page 2: Service Area Performance

**Purpose:** Track how each service area page performs in search

**Filter:** Page URL (dropdown with service area pages)

**Scorecards:**
| Page | Clicks | Impressions | Avg Position | Conversions |
|------|--------|-------------|--------------|-------------|

**Service Area Pages to Track:**
```
/service-areas/lake-geneva-wi
/service-areas/hinsdale-il
/service-areas/barrington-il
/service-areas/naperville-il
/service-areas/oak-brook-il
/service-areas/north-shore-chicago
/service-areas/lake-county-il
/service-areas/mchenry-county-il
/service-areas/southeast-wisconsin
```

**Charts:**

1. **Page Performance Comparison** (Bar chart)
   - Dimension: Page
   - Metrics: Clicks, Conversions (blended)

2. **Ranking Trend by Page** (Time series)
   - Break down by page
   - Metric: Average Position

3. **Keywords Driving Traffic to Each Page** (Table)
   - Filter by selected page
   - Show: Query, Clicks, CTR, Position

---

### Page 3: Keyword Rankings

**Purpose:** Deep dive into keyword performance and ranking changes

**Scorecards:**
- Keywords in Top 3
- Keywords in Top 10
- Keywords with Position Improvement
- Keywords with Position Decline

**Charts:**

1. **Keyword Position Distribution** (Histogram)
   - X-axis: Position buckets (1-3, 4-10, 11-20, 21-50, 50+)
   - Y-axis: Count of keywords

2. **Top Opportunity Keywords** (Table)
   - Filter: Position between 4-20 (striking distance)
   - Columns: Query, Impressions, Clicks, Position
   - Sort by: Impressions (desc)

3. **Position Changes Over Time** (Time series)
   - Show average position trend
   - Add comparison period

---

### Page 4: Conversions & ROI

**Purpose:** Connect SEO traffic to business outcomes

**Data Source:** GA4 + GSC (blended)

**Scorecards:**
| Metric | Source |
|--------|--------|
| Total Organic Sessions | GA4 |
| Organic Conversions | GA4 |
| Conversion Rate | GA4 |
| Leads from Organic | Internal Dashboard |

**Charts:**

1. **Conversion Funnel** (Funnel chart)
   - Impressions > Clicks > Sessions > Conversions

2. **Conversions by Landing Page** (Table)
   - Show which pages drive the most conversions
   - Columns: Page, Sessions, Conversions, Conv. Rate

3. **Conversion Trend** (Time series)
   - Track conversions over time
   - Compare to traffic

---

## Filters to Add (Global)

1. **Date Range** - Default: Last 28 days, with comparison
2. **Device** - Desktop / Mobile / Tablet
3. **Page** - Dropdown with key pages
4. **Country** - Default: United States

---

## Calculated Fields

### 1. Conversion Rate (GSC + GA4 blend)
```
Conversions / Clicks * 100
```

### 2. Opportunity Score
```
Impressions * (1 - CTR) * (IF Position > 3 AND Position <= 20 THEN 1 ELSE 0)
```
*Identifies high-impression, low-CTR keywords in striking distance*

### 3. Traffic Value Estimate
```
Clicks * 5
```
*Estimate $5/click value for outdoor living keywords*

---

## Implementation Steps

### Step 1: Create New Report
1. Go to https://lookerstudio.google.com
2. Click "Create" > "Report"
3. Name it "EDG SEO Performance Dashboard"

### Step 2: Add Data Sources
1. Add Google Search Console (Site Impression)
2. Add Google Search Console (URL Impression)
3. Add GA4 property

### Step 3: Build Pages
Follow the page specifications above, creating each page with the described charts and tables.

### Step 4: Configure Sharing
1. Click "Share"
2. Add team members with "View" or "Edit" access
3. Optionally schedule email delivery

---

## GTM Event Configuration

Ensure these events are configured in GTM (GTM-MJWNZD3F) to track in GA4:

| Event Name | Trigger | Parameters |
|------------|---------|------------|
| `book_call_click` | Click on booking CTAs | conversion_name, value |
| `phone_click` | Click on phone links | conversion_name, value |
| `generate_lead` | Form submission | source, value, currency |

**In GA4:** Mark these events as conversions under Admin > Events.

---

## Quick Setup Links

- **Google Search Console:** https://search.google.com/search-console
- **Google Analytics 4:** https://analytics.google.com
- **Looker Studio:** https://lookerstudio.google.com
- **GTM Container:** https://tagmanager.google.com (GTM-MJWNZD3F)
- **Internal Dashboard:** /admin/seo-dashboard

---

## Maintenance

- **Weekly:** Review top keywords and position changes
- **Monthly:** Check for new keyword opportunities
- **Quarterly:** Compare performance trends and adjust SEO strategy
