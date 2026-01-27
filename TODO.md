# EDG Website Optimization TODO

Task list for implementing the design and performance improvements identified during the January 6, 2026 review.

## [ ] Phase 1: Mobile UI & UX Improvements (High Priority)
- [ ] **Refine Mobile Header Layout**
    - **Context**: On screens < 768px, the "Serving North Chicago to Milwaukee" tag is too close to the logo.
    - **Action**: In `src/components/ui/Navbar.tsx`, either move this text into a new `<AnnouncementBar />` component above the main nav or hide it on smaller viewports and include it inside the hamburger menu instead.
- [ ] **Fix Header Spacing**
    - **Context**: Mobile logo and Icons (Phone/Menu) need more breathing room.
    - **Action**: Add `px-6` or `px-8` padding to the header container in `Navbar.tsx` for mobile breakpoints.

## [ ] Phase 2: Engagement & Visual Polish (Medium Priority)
- [ ] **Add Hover Effects to Project Cards**
    - **Context**: Static images feel less "premium."
    - **Action**: Update `src/components/ui/ProductGallery.tsx` (or the relevant card component). Add a CSS transition: `transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`.
- [ ] **Implement Subtle Fade-ins**
    - **Context**: Layout shifts during scroll can be softened with entry animations.
    - **Action**: Use `framer-motion` (if available) or standard CSS `@keyframes` to add a subtle fade-up to sections in `src/app/page.tsx`.

## [ ] Phase 3: Technical & Accessibility Optimization (Medium Priority)
- [ ] **Audit Link Preloads**
    - **Context**: Console warnings about preloading images that aren't used immediately.
    - **Action**: Check `src/app/layout.tsx` for `<link rel="preload">` tags or `priority` props in `next/image` components that are below the fold (e.g., footer logos or bottom-of-page gallery images). Remove `priority` from these.
- [ ] **Accessibility (ARIA) Cleanup**
    - **Context**: Assistive technologies need labels for icon-only buttons.
    - **Action**: In `src/components/ui/Navbar.tsx` and `src/components/ui/Footer.tsx`, ensure all buttons (like the phone icon and social links) have an `aria-label` attribute (e.g., `<button aria-label="Call EDG Outdoor Living">`).
- [ ] **Image Optimization Check**
    - **Context**: Ensure all new photos are using the `next/image` component for automatic WebP conversion and lazy loading.

## [ ] Phase 4: Content & SEO Strategy
- [ ] **Update Metadata**
    - **Context**: Ensure all subpages have unique titles and meta descriptions.
    - **Action**: Review `src/app/systems/enclosures/page.tsx` and other system pages for proper `metadata` exports.
