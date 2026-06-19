# GLC Great Lawn Cuts — Premium Redesign

## Problem Statement
Overhaul the visual aesthetic and code quality of the provided HTML for the "GLC Great Lawn Cuts" lawn care site without changing the core structure, narrative content, or adding new functional features. Target an upper-middle-class audience with a premium, elegant, trustworthy aesthetic that bridges "personal local business" and "high-end elite service provider."

## User Choices (verbatim)
- Output format: **Both — single HTML file + integrated React version**
- Typography: **Cormorant Garamond (serif) + Manrope (body) — modern refined**
- Imagery: **Keep using the exact same image URLs from the original HTML**
- Copy: **Keep all the original copy text exactly**

## Architecture
- **Standalone HTML**: `/app/frontend/public/glc-redesigned.html` — Tailwind via CDN, served at `/glc-redesigned.html`
- **React version**: `/app/frontend/src/components/GLCSite.jsx` + `/app/frontend/src/glc.css` — served at `/` via App.js
- **Platform patch**: `/app/frontend/craco.config.js` — patched dev server to strip deprecated `onBeforeSetupMiddleware`/`onAfterSetupMiddleware`/`https` options (incompatibility between react-scripts 5.0.1 and webpack-dev-server 5.x resolution)

## Implemented (2026-06-19)
- Premium palette: deep forest greens (#13231a → #244229 → #3f6e45), warm sand neutrals (#faf7f1 → #e6d8b9), soft charcoal (#1d2124, #2b3033), with refined gold accent (#b08850)
- Typographic hierarchy with Cormorant Garamond display headings + italic emphasis, Manrope body
- Hero with floating quote card, decorative blurs, eyebrow label, 3-stat row, primary pill CTA + ghost CTA
- "Man behind the mower" section with portrait, oversized decorative numeral "01", 3 credential cards
- Forest-green Transparency Philosophy section with grain overlay and 3 principle pillars
- Contact section with floating contact card, hover transitions
- Dark forest footer with logo, copyright, phone, email
- Reveal-on-scroll IntersectionObserver micro-animations
- Smooth `transform`/`opacity` transitions on buttons, images, and links
- Responsive: mobile-first using CSS Grid + Flexbox, breakpoints for md/lg
- Accessibility: semantic HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<dl>`), `aria-label`, `aria-hidden` on decorative elements, focus-visible outlines, contrast-tested colors
- Optimized images: `object-fit: cover` inside `aspect-ratio` containers (4/5), lazy loading
- `data-testid` attributes on all interactive elements (nav links, CTAs, contact phone/email, footer)
- Original Wix CDN image URLs preserved (via static.wixstatic.com)
- Original copy preserved verbatim across hero, story, philosophy, contact, footer

## Backlog / Next
- P1: Add a subtle scroll progress indicator
- P1: Add testimonial/feedback section (within transparency philosophy)
- P2: Open Graph + Twitter Card meta tags for shareability
- P2: Service-area map embed (Central Park, Commerce City)
- P2: Light/dark theme toggle
