# EDG Outdoor Living Website Structure

> **Complete Visual Sitemap & URL Architecture**

---

## Legend

```
🏠 Homepage
📄 Static Page
🛍️ Product/Service Page
📍 Location Page
📚 Content/Guide Page
🔒 Utility Page
📊 Admin/Dashboard
```

---

## Site Architecture Tree

```
EDG Outdoor Living (www.edgpatioshade.com)
│
├── 🏠 Homepage /
│   ├── Hero Section (Video Background)
│   ├── Lead Capture Form
│   ├── Service Directory (Trade vs Residential)
│   └── Systems Showcase
│
├── 🛍️ SYSTEMS (Product Category)
│   │
│   ├── 📄 /systems (Systems Overview)
│   │
│   ├── 🛍️ CORE PRODUCTS
│   │   ├── /systems/pergolas (Louvered Pergolas)
│   │   ├── /systems/shades (Retractable Screens)
│   │   └── /systems/enclosures (Glass Enclosures)
│   │
│   └── 🛍️ COMPLETE YOUR SPACE
│       ├── /systems/appliances (Outdoor Kitchens)
│       ├── /systems/heating (Heating Systems)
│       ├── /systems/furniture (Outdoor Furniture)
│       └── /systems/umbrellas (Umbrella Systems)
│
├── 📍 SERVICE AREAS (Location Hub)
│   │
│   ├── 📄 /service-areas (All Locations Index)
│   │
│   ├── 📍 North Shore Chicago
│   │   ├── /service-areas/wilmette-il
│   │   │   ├── /service-areas/wilmette-il/louvered-pergolas
│   │   │   └── /service-areas/wilmette-il/zoning-guide
│   │   ├── /service-areas/winnetka-il
│   │   │   ├── /service-areas/winnetka-il/louvered-pergolas
│   │   │   └── /service-areas/winnetka-il/zoning-guide
│   │   └── /service-areas/northbrook-il
│   │       ├── /service-areas/northbrook-il/motorized-pergolas
│   │       └── /service-areas/northbrook-il/zoning-guide
│   │
│   ├── 📍 Western Suburbs
│   │   ├── /service-areas/naperville-il
│   │   │   ├── /service-areas/naperville-il/motorized-pergolas
│   │   │   └── /service-areas/naperville-il/zoning-guide
│   │   ├── /service-areas/oak-brook-il
│   │   └── /service-areas/hinsdale-il
│   │
│   ├── 📍 Northwest Suburbs
│   │   └── /service-areas/barrington-il
│   │       ├── /service-areas/barrington-il/motorized-pergolas
│   │       └── /service-areas/barrington-il/zoning-guide
│   │
│   ├── 📍 Wisconsin
│   │   └── /service-areas/lake-geneva-wi
│   │
│   └── 📍 Florida
│       └── /service-areas/sanibel-outdoor-living
│           ├── /service-areas/sanibel-outdoor-living/louvered-pergolas
│           └── /service-areas/sanibel-outdoor-living/zoning-guide
│
├── 🏢 COMMERCIAL
│   │
│   ├── 📄 /commercial (Commercial Overview)
│   │
│   └── 📄 SPECIALTY PAGES
│       ├── /commercial/chicago-hospitality-outdoor-living
│       ├── /commercial/country-club-outdoor-spaces
│       ├── /commercial/hotel-pergolas
│       ├── /commercial/hotel-roof-deck-systems
│       ├── /commercial/restaurant-patio-enclosures
│       ├── /commercial/restaurant-patio-solutions
│       └── /commercial/west-loop
│
├── 🤝 TRADE PARTNERS (B2B)
│   └── 📄 /trade-partners
│       └── (Nationwide design & supply program)
│
├── 📚 GUIDES & RESOURCES
│   │
│   ├── 📄 /guides (Knowledge Base Index)
│   │
│   └── 📚 ARTICLES
│       ├── /guides/louvered-pergolas
│       ├── /guides/pergola-vs-patio-cover
│       └── /guides/planning-guide
│           └── /guides/planning-guide/read (Download Page)
│
├── 📸 PORTFOLIO
│   ├── 📄 /gallery (Visual Portfolio)
│   └── 📄 /projects → redirects to /gallery
│       └── /projects/[slug] (Individual Project Pages)
│
├── 📍 SHOWROOM
│   └── 📄 /showroom (Spring Grove Location)
│
├── 📄 COMPANY PAGES
│   ├── /design (Design Process)
│   ├── /price (Pricing Information)
│   ├── /pro (For Professionals)
│   ├── /contact (Contact Form)
│   └── /html-sitemap (HTML Sitemap)
│
└── 🔒 UTILITY PAGES
    ├── /privacy (Privacy Policy)
    ├── /terms (Terms of Service)
    └── /sitemap.xml (XML Sitemap)
```

---

## Page Count Summary

| Category | Count |
|----------|-------|
| **Homepage** | 1 |
| **System Pages** | 8 |
| **Service Area Hubs** | 9 |
| **Service Area Deep Pages** | 12 (product/zoning guides) |
| **Commercial Pages** | 8 |
| **Trade Partners** | 1 |
| **Guide Articles** | 4 |
| **Portfolio** | 2 (gallery + projects) |
| **Showroom** | 1 |
| **Company Pages** | 6 |
| **Utility Pages** | 3 |
| **Admin** | 1 |
| **TOTAL** | **~56 pages** |

---

## URL Patterns Explained

### Product Pages
```
/systems/[product]
```
Example: `/systems/pergolas`

### Location Hub Pages
```
/service-areas/[city]
```
Example: `/service-areas/wilmette-il`

### Location + Product Pages (Deep Content)
```
/service-areas/[city]/[product]
```
Example: `/service-areas/wilmette-il/louvered-pergolas`

### Location Zoning Guides
```
/service-areas/[city]/zoning-guide
```
Example: `/service-areas/wilmette-il/zoning-guide`

### Commercial Specialty Pages
```
/commercial/[industry]-[service]
```
Example: `/commercial/restaurant-patio-enclosures`

---

## Internal Linking Structure

```
HOMEPAGE
├── Links TO → All System Pages
├── Links TO → Service Areas Index
├── Links TO → Trade Partners
├── Links TO → Gallery
└── Links TO → Contact

SYSTEM PAGES
├── Links TO → Related Systems
├── Links TO → Service Areas
└── Links TO → Contact

SERVICE AREA PAGES
├── Links TO → System Pages
├── Links TO → Other Service Areas
├── Links TO → Gallery
└── Links TO → Contact

COMMERCIAL PAGES
├── Links TO → Systems
└── Links TO → Contact
```

---

## SEO Architecture Highlights

### 1. Hub & Spoke Model
- **Hub:** `/service-areas` lists all locations
- **Spokes:** Individual city pages link to specific services
- **Deep Spokes:** Product-specific location pages

### 2. Content Silos
- **Products:** `/systems/*` (8 pages)
- **Locations:** `/service-areas/*` (21 pages)
- **Commercial:** `/commercial/*` (8 pages)
- **Education:** `/guides/*` (4 pages)

### 3. Geographic Clustering
- North Shore: 3 locations
- Western Suburbs: 3 locations
- Northwest Suburbs: 1 location
- Wisconsin: 1 location
- Florida: 1 location

---

## Navigation Flow

```
                    ┌─────────────┐
                    │   HOMEPAGE  │
                    └──────┬──────┘
                           │
       ┌───────────────────┼───────────────────┐
       │                   │                   │
       ▼                   ▼                   ▼
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   SYSTEMS   │    │   AREAS     │    │   TRADE     │
│  (Products) │    │ (Locations) │    │  (B2B)      │
└──────┬──────┘    └──────┬──────┘    └──────┬──────┘
       │                   │                   │
       ▼                   ▼                   ▼
  ┌─────────┐        ┌─────────┐        ┌─────────┐
  │ Pergolas│        │Wilmette │        │ Partners│
  │ Screens │        │Winnetka │        │ Program │
  │ Glass   │        │N'brook  │        │         │
  └────┬────┘        └────┬────┘        └────┬────┘
       │                   │                   │
       └───────────────────┼───────────────────┘
                           │
                           ▼
                    ┌─────────────┐
                    │   CONTACT   │
                    │  (Convert)  │
                    └─────────────┘
```

---

## Key Entry Points

| Entry Point | Purpose |
|-------------|---------|
| `/` | Main homepage, brand awareness |
| `/systems/pergolas` | Primary product search |
| `/service-areas/[city]` | Local SEO landing |
| `/commercial` | B2B lead gen |
| `/trade-partners` | National B2B program |
| `/guides/planning-guide` | Lead magnet download |
| `/gallery` | Visual proof/portfolio |

---

## Redirects in Place

| From | To | Status |
|------|-----|--------|
| `/projects` | `/gallery` | 302 Temporary |
| `/locations/*` | `/service-areas/*` | 301 Permanent |

---

*Generated: 2026-02-09*  
*Total Pages: ~56*  
*Max Depth: 4 levels*
