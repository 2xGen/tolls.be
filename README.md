# Tolls.be — Belgium Vignette 2027

An independent, government-style information portal about Belgium's upcoming
**digital road vignette (2027)**: prices, requirements, exemptions, validity
periods and enforcement.

Built to feel like an official public transport information service — calm,
authoritative and fast — not a commercial startup landing page.

## Tech stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS**
- No CMS, no database, no runtime data dependencies
- Deployable on **Vercel** with zero configuration

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The root path redirects to a
locale (e.g. `/en`) based on the browser's `Accept-Language` header.

### Production build

```bash
npm run build
npm start
```

## Project structure

```
app/
  [lang]/
    layout.tsx          # Root layout, fonts, SEO metadata (per locale)
    page.tsx            # The one-page site, assembled from components
    opengraph-image.tsx # Dynamic Open Graph / Twitter image
  icon.tsx              # Favicon
  robots.ts             # robots.txt (generated)
  sitemap.ts            # sitemap.xml (generated, locale-aware)
  globals.css           # Tailwind layers + design-system utilities
components/              # Header, Hero, InfoBox, PricingTable, RequirementCards,
                         # Timeline, FAQ, Newsletter, Footer, LanguageSelector, …
dictionaries/           # en.ts (full) + nl / fr / de (translation-ready)
lib/
  i18n/                 # locale config, typed Dictionary, dictionary loader
  site.ts               # site-wide constants (name, url, contact)
middleware.ts           # locale detection & redirect
```

## Internationalisation

The architecture is multilingual from day one:

- Routes: `/en`, `/nl`, `/fr`, `/de`, `/pl`, `/es`, `/cs` (statically generated)
- All copy lives in typed dictionaries under `dictionaries/`
- Every locale file is fully translated; the shared `Dictionary` type
  guarantees they stay in sync. Edit a single file to change the wording for
  one language.
- To add another language: add its code to `i18n.locales` in
  `lib/i18n/config.ts` (plus `localeNames` and the OG-locale map in the
  layout), then create a matching `dictionaries/<code>.ts`.

`<html lang>`, canonical tags, `hreflang` alternates, Open Graph locale and the
sitemap are all locale-aware automatically.

## SEO

- Per-locale `<title>` / description, canonical + `hreflang` alternates
- Open Graph + Twitter Card metadata with a generated OG image
- JSON-LD structured data: `Organization`, `WebSite`, `WebPage`,
  `BreadcrumbList` and `FAQPage`
- `robots.txt` and `sitemap.xml` generated at build time

## Configuration

Set the deployment URL (used for canonical URLs, OG, sitemap and robots):

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://tolls.be
```

## Notes

Content on this site is provisional. The Belgium vignette system is still being
finalised; figures and dates should be reviewed against official Belgian
government sources before launch.
