# GLC — Great Lawn Cuts · Project Context

> **Read me at the start of each session** for full context before working on this site.
> Ask: *"Read SKILL.md"* and I'll load everything below.

---

## 1. What this project is

A clean, **self-contained static website** for **GLC — Great Lawn Cuts**, a one-person
lawn-mowing business in Central Park, Commerce City, CO, owned by **Matt Robbins**.

The site is plain **HTML + Tailwind (CDN) + a little vanilla JS** — no build step, no
framework, no builder-platform runtime. You can open the files directly or serve the
folder with any static server.

## 2. ⚠️ Important history — it is NOT a Wix export

The repo was described as a "Wix export," but it is actually an **Emergent.sh / Create-React-App**
project. The original content was rendered by React components in `frontend/src/components/`.

On **2026-06-19** the site was rebuilt from scratch as static files at the **project root**.
**Those root files are now the canonical site.** The `frontend/` and `backend/` folders are
legacy and untouched — do not treat them as the source of truth.

## 3. Canonical files (edit these)

| File | Purpose |
|------|---------|
| `index.html`    | Home — Hero → Story → Philosophy → Contact (live Google Map embed) |
| `services.html` | Services & pricing (Tier 01 + Tier 02) and "How to book" |
| `work.html`     | Portfolio gallery (13 projects) + accessible lightbox |
| `style.css`     | Color palette (CSS custom properties) + design-system components |
| `script.js`     | Mobile nav toggle, scroll-reveal, gallery lightbox (vanilla JS) |
| `images/`       | All 16 image assets, downloaded locally (no external CDN) |

## 4. Business facts (preserve exactly)

- **Owner:** Matt Robbins (Univ. of Alabama accounting student; aspiring entrepreneur)
- **Phone (text or call):** (720) 434-0934
- **Email:** glcgreatlawncuts@gmail.com
- **Service area:** Central Park, Commerce City, CO · **Response:** same day
- **Positioning:** affordable, reliable, honest — a "transparency portal," not a booking site

**Pricing**
- *Tier 01 — lawns under 600 sq ft (residential):* Complete Package **$40** (best value) ·
  Front or Back Yard Mow **$20** · Edging & Trimming **$10** · Weeding **"Depends on scale"**
- *Tier 02 — lawns over 600 sq ft (company / big house):* Lawn Mow **$60** ·
  Weed Pulling **"Depends on lot size"** · Edging **$30**

## 5. Design system

- **Fonts:** Cormorant Garamond (serif/display) + Manrope (body), via Google Fonts.
- **Palette (earthy/muted, upscale):** cream `#faf7f1` / `#f3ecdc`; forest greens
  `#13231a` / `#1c3320` / `#244229`; gold/wheat accents `#b08850` / `#d6bf8e` / `#e6d8b9`;
  ink text `#1d2124` / `#2b3033`. All defined as `--glc-*` custom properties in `style.css`.
- **Reusable classes:** `.glc-display`, `.glc-serif`, `.glc-eyebrow`, `.glc-frame`,
  `.glc-btn-primary`, `.glc-btn-ghost`, `.glc-reveal`, `.glc-shadow-card/soft`, `.glc-grain`.
- **Responsive:** mobile-first; verified breakpoints 375 / 768 / 1280px. Mobile hamburger nav.
- **A11y:** semantic landmarks, `prefers-reduced-motion` support, `no-js` fallback so
  reveal-on-scroll content is never left hidden.

## 6. Conventions / rules

- **No builder-platform or framework dependencies** — nothing may point back to Wix,
  Parastorage, Emergent, PostHog, or a React runtime. Keep it standard web tech.
- Allowed external hosts: Tailwind CDN, Google Fonts, Google Maps embed.
- Keep all images **local** in `images/`. If adding work photos, name them `work-NN.jpeg`
  and add a matching `<button data-gallery-item data-index="NN">` block in `work.html`,
  then update the "N projects and counting" count in the Work hero.
- Section order on the home page must stay: **Hero → Story → Philosophy → Contact**.

## 7. How to preview locally

From the project root:
```bash
python -m http.server 8000
# then open http://localhost:8000
```

---
*Persistent memory for this repo also lives in `memory/` (see `memory/MEMORY.md`).*
