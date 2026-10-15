# Latino Fashion Week Arizona — local website

Three-page static site using the supplied copy, logo, original photography, and black/white/magenta design reference. Foundation is deferred.

## Local preview

Requires Node.js. No package installation needed.

```powershell
npm run dev
```

Open http://127.0.0.1:4173. The server listens only on this computer.
After edits, run `npm run build`, then refresh the browser. `npm run check` verifies source-copy completeness, local links/assets, unique IDs and headings.

## Files

- `src/content.mjs`: all supplied page copy; update here when revised About copy arrives.
- `scripts/build.mjs`: page layouts and shared header/footer; complete source file.
- `public/styles.css`: responsive styles, color/font choices, buttons.
- `public/site.js`: accessible mobile menu.
- `public/assets/`: optimized local WebP copies of all 19 supplied assets.
- `src/assets.json`: original provenance, descriptions, dimensions and local web filenames.
- `dist/`: generated static site, excluded from Git.
- `docs/content-notes.md`: content decisions and outstanding material.

Original resources remain at `C:\Users\mrell\OneDrive\Desktop\COdex\LFW Website\resources`. Originals are unchanged. Asset preparation is optional; it requires Sharp and accepts a resources folder as argument. Set SHARP_MODULE to the installed Sharp module path on other computers. Ordinary build and preview do not require Sharp.

## Current decisions

Local-only implementation; no Wix integration, backend, forms, remote scripts, remote fonts, tracking, pushes, or deployment. Foundation omitted. Ticket buttons intentionally unavailable with an adjacent coming-soon message; no invented ticket URL or event date. Typography uses installed Georgia and system sans-serif for an offline preview. No entrance or scroll animations.

## Later hosting

`dist/` contains standalone HTML/CSS/JS/assets for later Cloudflare static hosting. No Cloudflare resource, account connection, or deployment configuration has been created. Confirm final domain, ticket details, revised About copy and launch approval before deployment; add domain-specific canonical URLs and sitemap then.

## Live hosting
Deployed with user approval on October 13, 2026: https://latino-fashion-week-arizona.mr-ellis1009.workers.dev
Run npm run deploy for future local-to-Cloudflare updates. See docs/CLOUDFLARE.md. The earlier local-only notes describe the initial build phase.
