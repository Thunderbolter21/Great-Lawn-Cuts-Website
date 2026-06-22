---
name: repo-is-react-not-wix
description: This repo's "Wix export" is actually an Emergent/React app; canonical site now lives in root static files
metadata:
  type: project
---

The Great-Lawn-Cuts-Website repo is **not** a Wix export, despite being described that way. `frontend/public/index.html` is a Create-React-App / Emergent.sh template (empty `#root`, PostHog snippet, `assets.emergent.sh` script, "Made with Emergent" badge). The real business content was rendered client-side by React components in `frontend/src/components/` (`GLCSite.jsx`, `ServicesPage.jsx`, `WorkPage.jsx`, `SiteShell.jsx`).

On 2026-06-19 the site was rebuilt as a clean, self-contained static site at the **project root**: `index.html` (Hero → Story → Philosophy → Contact), `services.html`, `work.html`, `style.css`, `script.js`, plus `images/` with all 16 assets downloaded locally (previously hosted on `static.wixstatic.com` and `customer-assets.emergentagent.com`). The static site is the canonical version going forward. The old `frontend/`/`backend/` React stack is still present but untouched/legacy.

**Why:** Saves re-deriving where the real content lives and avoids treating the React template as the source of truth.
**How to apply:** For content/site edits, work in the root static files, not `frontend/`. See [[glc-business-facts]] for the real business data. Project context doc is `SKILL.md` in the repo root.
