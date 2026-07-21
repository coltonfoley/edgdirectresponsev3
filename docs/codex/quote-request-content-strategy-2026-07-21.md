# EDG Website Quote-Request Content Strategy

**Status:** Active owner-approved strategy
**Date:** July 21, 2026
**Applies to:** `https://www.edgpatioshade.com`
**Primary business goal:** Generate qualified quote requests without making visitors learn EDG's internal sales or planning language.

## Executive decision

The website's main conversion action is **Request a Quote**.

EDG should have one standard sales form with four required pieces of information:

1. Full name
2. Email
3. Phone
4. What they are interested in

Visitors may optionally add their city or ZIP code, project information, and photos. Those details should help an interested visitor, not become an intake test they must pass.

The public website should not invent separate conversion products such as a “System Fit Review,” “site review,” “project review,” or “assessment” when the visitor is simply asking EDG to discuss and quote a project.

## What the review found

### The site is technically healthy, but the conversion language is fragmented

A fresh live crawl on July 21 found:

- 90 sitemap URLs, all returning `200`
- 90 indexable pages
- no failed or skipped URLs
- approximately 78,232 words across the 90 pages
- an average of 869 words and a median of 885 words per page

Long pages are not automatically a problem. Product explanations, local relevance, project proof, cost guidance, and permit information can support both buyers and organic search. The problem is that the sales action is buried beneath too many names, processes, and questions.

### One destination is presented as many different actions

The live crawl surfaced 327 links to the contact path and at least 120 distinct CTA labels. The links use nine different intent values:

- `fit-review`
- `consultation`
- `commercial`
- `price`
- `quote`
- `showroom`
- `pro`
- `homeowner`
- no declared type

Examples include:

- Start Project
- Book Consultation
- Request a System Fit Review
- Schedule a Commercial Assessment
- Request a Site Review
- Start Outdoor Room Planning
- Request a Roof Deck Review
- Get a Screen Layout Review
- Start a Screen Quote
- Ask About a Similar Project

These labels describe EDG's internal interpretation of the next step instead of the visitor's simple goal: **I am interested; tell me what this may cost and what happens next.**

### The website has too many sales-form experiences

The current source contains six sales-lead experiences plus one separate guide-download form.

| Experience                       | Current visible intake                                                                                                                              | Main problem                                                                                  |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Homepage hero                    | First name, last name, email, ZIP, project type                                                                                                     | Five required fields, no phone, and a vague “Get Started” button                              |
| Contact page                     | Buyer type selector plus first name, last name, email, phone, ZIP, system interest, details                                                         | Seven fields plus a three-way selector; phone and interest are optional while ZIP is required |
| Pergola budget form              | First name, email, city/ZIP, project goal                                                                                                           | A separate “budget range” conversion product with no phone                                    |
| Pergola System Fit Review        | Contact details, location, customer type, surface, size, budget, timing, 16 feature/concern checkboxes, photo upload, photo links, and project goal | It asks the visitor to do EDG's discovery work before EDG has earned the conversation         |
| Screen fit and budget form       | Contact details, location, problem, opening size, budget, contact preference, and notes                                                             | Another product-specific intake path and another name for requesting help                     |
| Pergola configurator quote modal | Name, email, phone, ZIP, timeline, and budget, in addition to the saved configuration                                                               | Repeats discovery questions even though the configuration already supplies useful context     |
| Planning-guide download          | First name and email                                                                                                                                | This is a resource-delivery form, not a quote form; it can remain a deliberate exception      |

### The copy over-explains EDG's process

The source repeatedly uses internal or industry-facing phrases where plain language would be stronger. Representative source counts include:

- “planning”: 638 matches
- “premium”: 91 matches
- “fit review”: 72 matches
- “consultation”: 72 matches
- “site review”: 30 matches
- “assessment”: 27 matches
- “system direction”: 17 matches
- “system-agnostic”: 16 matches
- “feasibility”: 13 matches

Some of these terms are legitimate in technical guidance or trade-partner copy. The problem is their use in homepage positioning, CTA labels, form names, and homeowner-facing explanations. Repetition makes the site sound like it is selling a methodology instead of pergolas, screens, enclosures, and outdoor spaces.

## Strategy

### 1. Make the offer obvious

EDG sells and installs outdoor living products. The top-level message should say that plainly.

Recommended core message:

> Motorized pergolas, patio screens, and glass enclosures.
>
> EDG helps homeowners and businesses choose the right system, provides a clear quote, and handles installation in our local service area.

Trade-partner and nationwide design-and-supply capabilities can remain, but they should be a separate audience path rather than half of the homeowner hero message.

### 2. Use one primary CTA

The primary CTA across the website should be:

> **Request a Quote**

Use it in the navigation, homepage, product pages, service-area pages, guides, projects, gallery, commercial pages, and footer.

Legitimate secondary actions may use specific language when the action is genuinely different:

- Call EDG
- Visit the Showroom
- Schedule a Showroom Visit
- View Projects
- View Product Details
- Download the Guide

Avoid using these as conversion synonyms:

- Start Project
- Get Started
- Fit Review
- System Review
- Site Review
- Project Review
- Assessment
- Design Consultation
- Planning Session
- System Direction

Do not use “free quote” unless EDG intentionally wants to make and honor that promise everywhere.

### 3. Build one standard quote form

#### Required fields

- **Full name** — one field
- **Email**
- **Phone**
- **I'm interested in** — a “select all that apply” checkbox group

Recommended interest options:

- Motorized pergola
- Motorized patio screens or shades
- Glass enclosure
- Outdoor kitchen or appliances
- Sauna
- Complete outdoor room or multiple products
- Commercial project
- Trade or builder project
- Showroom visit
- Not sure yet

#### Optional details

Place the following beneath a clear optional control such as **Add project details or photos**:

- City or ZIP code
- “Tell us anything else” text area
- Upload up to four photos
  Do not ask visitors to paste a photo or plan link. Direct photo upload is the
  only file-sharing option in the standard form.

The form must remain submittable without opening or completing the optional section. Photos must be visibly labeled optional and must never block the initial request.

#### Information captured without asking the visitor

Keep useful routing and measurement data behind the scenes:

- referring page
- page family
- CTA position
- selected market or location from the page
- product interest prefilled from the CTA
- UTM parameters
- configurator summary
- anonymous submission ID

The visitor should not have to answer questions that the page, CTA, or configurator already answered.

#### Plain success and error language

Recommended success message:

> **Thanks — we received your quote request.**
>
> An EDG team member will contact you to learn more about the project and discuss next steps.

Errors should tell the visitor what failed and allow retrying without losing entered information or optional photos.

### 4. Consolidate the form experiences

- **Homepage:** Use the four-field quote form above the fold, or one prominent Request a Quote button leading to the same form. Do not keep a separate five-field “Request Information” form.
- **Contact page:** Make this the canonical quote page. Remove the Residential / Trade / Commercial selector; capture that through the interest field or CTA prefill.
- **Product and service-area pages:** Use Request a Quote and prefill the relevant interest and location behind the scenes.
- **Pergola and screen specialty forms:** Replace them with the standard quote form. The sales team can collect size, budget, mounting conditions, timing, and technical concerns during follow-up.
- **3D configurator:** Keep the tool, but send the configuration summary automatically into the standard quote request. Do not ask separate budget and timeline questions in the modal.
- **Showroom:** Keep Schedule a Showroom Visit as a real secondary action, but use the same form with “Showroom visit” preselected.
- **Guide download:** Keep a small email-delivery form only if EDG still wants the guide as a lead magnet. It should not be confused with the quote path.

### 5. Simplify copy without stripping useful SEO content

The goal is not to make every page short. The goal is to make every page easy to understand.

#### Homepage

- Lead with the products and service area.
- Replace “System Agnostic,” “Engineering Support,” and similar hero badges with buyer-facing proof or move them lower on the page.
- Replace “Get Started,” “Start Planning,” and “Book Consultation” with Request a Quote.
- Separate homeowner installation from nationwide trade supply so the visitor immediately knows which message applies.

#### Product pages

Use this order:

1. What the product is
2. What problem it solves
3. Representative project photos and proof
4. What affects price
5. What installation generally involves
6. Frequently asked questions
7. Request a Quote

Technical language can remain when it answers a real buyer question. It should not become the name of the conversion process.

#### Service-area pages

- Keep the product and location in the title, H1, metadata, and useful body copy.
- Replace “site review,” “planning path,” “system direction,” and city-specific review names with Request a Quote.
- Do not create a different sales process for every city.

#### Guides

- Answer the searched question directly.
- Keep useful cost, permit, engineering, comparison, and installation detail.
- Use Request a Quote as the sales action.
- Treat “System Fit Review” as internal sales language, not a public content product.

The existing `/guides/pergola-system-fit-review` URL should not be deleted or redirected during the first implementation pass. Preserve the URL and search signals while simplifying the visible page and replacing its form. A redirect decision requires current Search Console evidence and a separate SEO review.

#### Projects and gallery

- Let real work and photos provide the proof.
- Replace “Plan a similar project,” “Review a similar site,” and similar labels with Request a Quote.
- Pass the project name behind the scenes when a visitor comes from a project page.

#### Commercial and trade pages

- Use plain language first: what EDG provides, where EDG works, and how to request a quote.
- Keep specifications, engineering, design-and-supply, and operational language where commercial and trade audiences need it.
- Do not turn every commercial page into a differently named “assessment.”

### 6. Preserve the lead handoff and SEO foundations

Form simplification must not weaken the working lead path:

- all sales forms continue to submit through `/api/leads`
- accepted leads continue into Rainmaker
- optional photos continue to attach to the Rainmaker lead
- failure states do not silently drop a lead
- analytics fires a lead event only after a confirmed accepted submission

Content simplification must preserve unless explicitly approved otherwise:

- existing URLs
- canonicals
- indexability
- sitemap coverage
- structured data
- useful internal links
- product and location relevance
- accurate technical, safety, permit, price, and service-area qualifications

## Implementation order after approval

### Phase 1 — One form and one CTA

1. Create the standard quote-form component.
2. Use it on the homepage and contact page.
3. Change global navigation and footer CTAs to Request a Quote.
4. Preserve source, market, product, and campaign information as hidden metadata.
5. Verify the full `/api/leads` to Rainmaker path, including optional photo attachments.

### Phase 2 — Remove competing intake paths

1. Replace the pergola budget form.
2. Replace the Pergola System Fit Review form.
3. Replace the screen fit and budget form.
4. Simplify the configurator handoff.
5. Keep the guide-download form only as the explicit non-sales exception.

### Phase 3 — Sitewide CTA cleanup

1. Replace the page-specific conversion labels with Request a Quote.
2. Keep product, location, project, commercial, or showroom context in the link data rather than the visible label.
3. Verify every CTA reaches the standard form with the correct interest preselected.

### Phase 4 — Page-family copy cleanup

Work in this order:

1. Homepage
2. Contact page
3. Core pergola, screens, and enclosure pages
4. Highest-value guide pages
5. Service-area and local product pages
6. Commercial and trade pages
7. Project, gallery, showroom, and supporting pages

Each pass should simplify the hero, CTA language, repeated process copy, and form handoff without removing accurate product, location, or technical information that earns trust or search visibility.

## Measurement

The measure of success is not fewer words or more CTA clicks by themselves. It is more accepted, contactable quote requests.

Track:

- Request a Quote clicks
- quote-form starts
- accepted quote submissions
- form-start to accepted-submission rate
- contactable leads with valid phone and email
- optional-detail and optional-photo usage
- spam and validation failures
- Rainmaker receipt and attachment success
- accepted leads by page family and product interest

Use one `form_id` for the standard quote form and preserve the source page separately. Do not recreate multiple forms just to distinguish reporting.

Before comparing conversion performance, reconcile the current uncommitted analytics and lead-submission work in the local branch and confirm which event names are actually live in production.

## Approval standard

Implementation should not begin until the owner approves this plain-language contract:

- One primary CTA: **Request a Quote**
- One standard sales form
- Four required fields: full name, email, phone, interest
- Project details, location, and photos are optional
- One email-only guide form may remain as a non-sales exception
- Technical language stays where it educates; internal process language leaves the CTA and form experience
- Existing SEO routes and the Rainmaker lead path remain protected

## Audit state

This document is the only file added by this review. No website copy, CTA, form, analytics, API, commit, deployment, or live production change was made.
