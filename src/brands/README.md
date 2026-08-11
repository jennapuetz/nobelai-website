# Brand system

Every video in this repo is driven by a brand file, so the same composition can
render in any brand's colors, fonts, motion, and voice.

## Where things live

```
src/brands/<slug>/brand.ts    Typed values the video code imports (colors, fonts, motion, copy)
src/brands/<slug>/BRAND.md    The human brief: rules, tone, audience, TODOs
public/brands/<slug>/         Real files — logos, fonts, photos (loaded with staticFile())
src/brands/index.ts           The registry. A brand must be listed here to render.
```

The split matters: `brand.ts` is for anything code needs to *compute* with, and
`BRAND.md` is for judgment calls code can't make. Both get read before a video
is built.

## Current brands

| Slug | Brand | Status |
|---|---|---|
| `nobel-ai` | NoBel AI | Provisional — invented colors, needs real guidelines |
| `yba` | Your Best Address | Real colors and rules, from the `yba-brand-system` skill |
| `moveology` | Moveology | Template — needs everything |
| `bella` | Bella | Template — needs everything |

## Adding a brand

1. Copy any existing folder: `cp -r src/brands/bella src/brands/<new-slug>`
2. Rename the export in `brand.ts` and set `slug` to match the folder name.
3. Fill in colors, fonts, motion, and copy. Fill in `BRAND.md`.
4. Register it in `src/brands/index.ts` (import it, add it to `BRANDS`).
5. Create `public/brands/<new-slug>/` and drop in the logo and fonts.

Compositions are generated from the registry, so step 4 is what makes
`Promo-<slug>` and `Promo-<slug>-vertical` appear in the Studio.

## How the brand controls the video

- `colors` — every surface and text color. No hex codes live in composition code.
- `motion.style` — `calm` gives slow, non-bouncy springs and wider stagger;
  `energetic` gives snappier springs and tighter overlap.
- `motion.allowGradients` — when false, accents render as flat color instead of
  a two-tone sweep.
- `motion.allowGlow` — when false, the background is a flat brand color with no
  drifting blurred light.
- `maxWordsPerScreen` — when set, a scene exceeding it logs a warning in the
  Studio console.
- `copy` — the default tagline, features, and outro. Any composition can
  override them per video via props without touching the brand file.

## Using real fonts and logos

Drop the files in `public/brands/<slug>/`, then reference them:

```ts
import {staticFile} from 'remotion';
// in brand.ts
assets: {logo: 'brands/yba/logo.svg'}
// in a component
<Img src={staticFile(brand.assets.logo)} />
```

For fonts, add an `@font-face` pointing at `staticFile('brands/<slug>/fonts/…')`
and set `fonts.heading` to that family name.

## Relationship to the Claude skills

The `yba-brand-system`, `yba-write-content`, and `yba-social-director` skills
govern YBA copy and social graphics. This folder governs *video*. Where both
speak, the skills win — `src/brands/yba/` should be updated to match them, not
the other way around.
