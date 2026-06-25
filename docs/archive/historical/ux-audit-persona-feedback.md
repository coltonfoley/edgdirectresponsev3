# EDG Patio & Shade - Persona-Based UX Audit

**Date:** February 2026  
**Method:** 4 independent buyer persona audits  
**Auditors:** Sarah (Homeowner), Mike (Builder), Jennifer (Restaurant Owner), David (Landscape Architect)

---

## Executive Summary

| Persona | Overall Score | Conversion Likelihood | Top Friction Point |
|---------|---------------|----------------------|-------------------|
| Sarah (Homeowner) | 6/10 | Maybe - needs trust signals | Missing reviews/testimonials |
| Mike (Builder) | 6.5/10 | Maybe - will call but not commit | No self-service CAD library |
| Jennifer (Restaurant) | B Grade (≈7/10) | Interested but hesitant | No pricing/financing info |
| David (Architect) | 5/10 | Second option only | No downloadable technical resources |

**Overall Theme:** The site demonstrates expertise and local knowledge effectively, but lacks the "trust infrastructure" and "self-service resources" that sophisticated buyers need to move from "interested" to "committed."

---

## Cross-Persona Analysis

### 🔴 Critical Issues (Affecting Multiple Personas)

#### 1. Missing Reviews & Social Proof
**Affected:** Sarah (Critical), Jennifer (High), Mike (Medium)

**Evidence:**
- Sarah: "Missing reviews: After my contractor nightmare, I won't call without seeing verified customer reviews"
- Jennifer: "Weak case study depth... clicking through to project pages, there's no detailed ROI data"
- Mike: Wants to see Barrington-area projects before committing

**Impact:** High-income buyers and commercial clients won't commit without third-party validation.

#### 2. No Self-Service Technical Resources
**Affected:** Mike (Critical), David (Critical), Jennifer (Medium)

**Evidence:**
- Mike: "NO downloadable CAD details - I need DWG files for foundation plans, structural connections"
- David: "NO downloadable CAD blocks or DWG files on the website - I have to contact them and wait"
- Jennifer: Missing operational details that could be in a technical FAQ

**Impact:** Professional specifiers will go to competitors with online libraries.

#### 3. Pricing Opacity
**Affected:** Sarah (High), Jennifer (High), Mike (Medium)

**Evidence:**
- Sarah: "No ballpark ranges on the main site... I need to know if we're talking $30K or $130K"
- Jennifer: "No pricing guidance... Is this $30K or $130K? Can't even ballpark budget"
- Mike: "No online quote estimator for ballpark pricing"

**Impact:** Qualified prospects self-select out before contacting.

#### 4. Timeline Uncertainty
**Affected:** Sarah (Critical), Jennifer (High)

**Evidence:**
- Sarah: "Memorial Day is my deadline... Can they deliver?"
- Jennifer: "Will I make my May 1st opening goal? No urgency guidance"

**Impact:** Time-sensitive projects go to competitors who provide clear timeline guidance.

---

### 🟡 Secondary Issues (Persona-Specific)

#### For Homeowners (Sarah)
- No team/credentials page
- Missing before/after transformations
- No video content showing systems in operation
- No nighttime/dusk shots for entertaining
- Showroom page has placeholder images
- No calendar booking integration

#### For Builders (Mike)
- Two conflicting trade pages (/pro and /trade-partners)
- No trade discount percentage published
- No Barrington-specific builder information
- No dedicated account rep mentioned
- No installer certification program

#### For Restaurants (Jennifer)
- No restaurant-specific ROI calculator
- No financing/leasing options mentioned
- No liability/insurance guidance
- Missing operational details (noise, cleaning, power outages)
- No mention of Chicago restaurant references she can call

#### For Architects (David)
- No Revit families or BIM objects
- No CSI MasterFormat specifications
- No engineering stamps or PE relationships displayed
- No continuing education/CEU opportunities
- No professional references from other architects

---

## Actionable Recommendations

### 🎯 HIGH PRIORITY (Do First)

#### 1. Add Testimonials & Reviews Section
**Type:** Content Addition  
**Effort:** Medium  
**Impact:** HIGH  
**Personas:** Sarah, Jennifer, Mike

**Implementation:**
- Create `/testimonials` page with 6-8 detailed reviews
- Include: photo, location, project type, quote, star rating
- Prioritize North Shore (Winnetka, Wilmette, Northbrook) and Barrington
- Add testimonials to homepage (3 featured)
- Include video testimonials if available
- Add Google Reviews badge/integration

**Success Metric:** Contact form submissions increase 20%+

---

#### 2. Create Trade Portal with CAD Library
**Type:** Feature Development  
**Effort:** HIGH  
**Impact:** HIGH  
**Personas:** Mike, David

**Implementation:**
- Create `/trade-portal` with login
- Immediate access to:
  - DWG CAD blocks (foundation, connection details, elevations)
  - Revit families
  - Specification templates (CSI format)
  - Technical cut sheets
  - Loading tables and charts
  - Installation manuals
- Registration requires: license verification, business info
- Show "Trade Pricing" after login (not public)

**Alternative (Quick Win):** Create `/downloads` page with email-gated CAD files while portal is built.

**Success Metric:** 50+ trade partner registrations in 90 days

---

#### 3. Add Pricing Guidance Pages
**Type:** Content Addition  
**Effort:** Medium  
**Impact:** HIGH  
**Personas:** Sarah, Jennifer, Mike

**Implementation:**
- Create `/price-guide` with:
  - "Pergola projects typically range from $35,000 to $95,000+ installed"
  - Breakdown by size (small/medium/large)
  - Breakdown by features (basic vs. premium)
  - 3 example projects with approximate investment levels
  - "Get a detailed quote" CTA
- Add ballpark ranges to product pages
- For commercial: Create ROI calculator tool

**Success Metric:** Contact form submissions from qualified leads increase (not just tire-kickers)

---

#### 4. Build Timeline Planner Tool
**Type:** Interactive Tool  
**Effort:** Medium  
**Impact:** HIGH  
**Personas:** Sarah, Jennifer

**Implementation:**
- Interactive tool: "When do you need it done?"
- Input: Target date, project type, location
- Output: "Yes, we can meet that timeline" OR "We recommend starting by [date]"
- Show project phases with time estimates:
  - Consultation & Design: 1-2 weeks
  - Engineering & Permits: 2-4 weeks (varies by location)
  - Manufacturing: 4-6 weeks
  - Installation: 2-5 days
- Add urgency messaging: "For Memorial Day completion, contract by March 15th"

**Success Metric:** Reduce "timeline" questions in initial consultations by 50%

---

### 🟠 MEDIUM PRIORITY (Do Next)

#### 5. Fix Showroom Page
**Type:** Bug Fix/Content  
**Effort:** Low  
**Impact:** Medium  
**Personas:** Sarah

**Implementation:**
- Replace placeholder images with actual showroom photos
- Add video tour of showroom
- Show working displays in action
- Add map/directions prominently
- Include "Book Showroom Visit" calendar integration

---

#### 6. Create Restaurant Owner's Guide
**Type:** Content Asset  
**Effort:** Medium  
**Impact:** Medium  
**Personas:** Jennifer

**Implementation:**
- Downloadable PDF: "Restaurant Owner's Guide to Patio ROI"
- Include:
  - Detailed case studies (Carmine's, Rosebud, Chicago Winery)
  - Month-by-month revenue projections
  - Financing options
  - Permitting timeline for Chicago
  - Operational considerations
- Create online ROI calculator

---

#### 7. Consolidate Trade Pages
**Type:** Bug Fix/Restructure  
**Effort:** Low  
**Impact:** Medium  
**Personas:** Mike, David

**Implementation:**
- Redirect `/pro` to `/trade-partners`
- Merge best content from both pages
- Keep `/trade-partners` as canonical URL
- Add clear navigation from main menu

---

#### 8. Add Calendar Booking Integration
**Type:** Feature Integration  
**Effort:** Medium  
**Impact:** Medium  
**Personas:** Sarah, Jennifer

**Implementation:**
- Integrate Calendly or similar
- Allow booking specific time slots
- Show consultant availability
- Sync with EDG's calendar system
- Send confirmation and reminder emails

---

### 🟢 LOWER PRIORITY (Do Later)

#### 9. Create Video Content Library
**Type:** Content Creation  
**Effort:** HIGH  
**Impact:** Medium  
**Personas:** Sarah

**Implementation:**
- Project walkthrough videos
- System operation demos (louvers rotating, screens retracting)
- Before/after transformations
- Nighttime ambiance shots
- Client testimonial videos
- "Meet the Team" video

---

#### 10. Add Professional Resources Section
**Type:** Content Addition  
**Effort:** Medium  
**Impact:** Medium  
**Personas:** David

**Implementation:**
- `/resources/architects-designers` page
- CEU lunch-and-learn offering
- Professional references
- Engineering stamps/PE relationships
- CSI-format specifications

---

#### 11. Create Location-Specific Project Highlights
**Type:** Content Addition  
**Effort:** Medium  
**Impact:** Medium  
**Personas:** Mike, Sarah

**Implementation:**
- Add featured projects to each service area page
- Winnetka page: Show 2-3 Winnetka projects
- Barrington page: Show Barrington projects
- Include approximate investment ranges

---

#### 12. Add Comparison Content
**Type:** Content Addition  
**Effort:** Medium  
**Impact:** Low-Medium  
**Personas:** Sarah, David

**Implementation:**
- "EDG vs. DIY Kit: What You Need to Know"
- "Motorized Pergola Brands Compared"
- "Professional Installation vs. Contractor"

---

## Testing Recommendations

### A/B Tests to Run

#### Test 1: Homepage Testimonials
**Hypothesis:** Adding 3 testimonials to homepage will increase contact form submissions.

**Variant A:** Current homepage (no testimonials)  
**Variant B:** Homepage with 3 featured testimonials above the fold

**Duration:** 4 weeks  
**Success Metric:** Contact form conversion rate

---

#### Test 2: Pricing Transparency
**Hypothesis:** Adding price ranges will qualify leads better without reducing volume.

**Variant A:** Current "contact for pricing" approach  
**Variant B:** "Projects typically range from $35K-$95K" with breakdown

**Duration:** 6 weeks  
**Success Metric:** Contact form submissions + consultation close rate

---

#### Test 3: Trade Portal Interest
**Hypothesis:** Builders will register if offered immediate CAD access.

**Test:** Add prominent "Trade Portal: Instant CAD Access" CTA to trade page  
**Measure:** Registration rate vs. current "Contact Us" form submissions

---

### User Testing Scenarios

#### Scenario 1: Sarah's Memorial Day Project
**Task:** "You want a pergola installed by Memorial Day. Find out if EDG can meet your timeline and what it might cost."

**Success Criteria:**
- Can find timeline information
- Can get pricing guidance
- Can easily contact them

**Current State:** FAIL - timeline info buried, no pricing guidance

---

#### Scenario 2: Mike's CAD Needs
**Task:** "You need CAD details for a pergola foundation to include in your drawings. Find and download them."

**Success Criteria:**
- Can find trade resources
- Can download DWG files without calling

**Current State:** FAIL - no self-service CAD access

---

#### Scenario 3: Jennifer's ROI Research
**Task:** "You're considering a $60K patio enclosure. Find case studies from similar Chicago restaurants and calculate potential ROI."

**Success Criteria:**
- Can find restaurant case studies
- Can access ROI data
- Can understand financing options

**Current State:** PARTIAL - commercial page has some ROI, but not restaurant-specific

---

## Implementation Roadmap

### Phase 1: Quick Wins (Week 1-2)
- [ ] Fix showroom page placeholder images
- [ ] Consolidate /pro and /trade-partners pages
- [ ] Add 3 testimonials to homepage
- [ ] Add price range guidance to /price page

### Phase 2: Trust Building (Week 3-4)
- [ ] Create full /testimonials page
- [ ] Add video testimonials if available
- [ ] Add location-specific projects to service area pages
- [ ] Add Google Reviews integration

### Phase 3: Professional Tools (Month 2)
- [ ] Build Timeline Planner tool
- [ ] Create email-gated CAD download page (interim solution)
- [ ] Create Restaurant Owner's Guide PDF
- [ ] Add calendar booking integration

### Phase 4: Portal Development (Month 3)
- [ ] Build full Trade Portal with login
- [ ] Upload complete CAD library
- [ ] Create professional resources section
- [ ] Add CEU/lunch-and-learn offering

---

## Conclusion

The EDG website effectively communicates expertise and local knowledge, which creates initial interest across all personas. However, **the conversion gap is significant** - interested prospects aren't becoming committed leads because:

1. **Trust gap:** No third-party validation (reviews/testimonials)
2. **Resource gap:** No self-service technical access for professionals
3. **Information gap:** No pricing or timeline transparency
4. **Tool gap:** No calculators or planners to help prospects self-qualify

**Priority Focus:** Addressing the top 4 recommendations (testimonials, CAD library, pricing guidance, timeline tool) would likely increase qualified lead conversion by 30-50% based on persona feedback.
