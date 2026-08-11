# Working in this repo

This is a [Remotion](https://www.remotion.dev/) project: videos are React
components, rendered to MP4 by the Remotion CLI.

## Before building or changing any video

1. Identify the brand. Read **both** `src/brands/<slug>/brand.ts` and
   `src/brands/<slug>/BRAND.md` before writing a frame of it.
2. If a brand also has a Claude skill (YBA does), that skill is authoritative
   for copy and visual rules. The brand folder should follow it.
3. If the brand doesn't exist yet, follow "Adding a brand" in
   `src/brands/README.md` rather than hardcoding values.

## Rules

- **No hardcoded colors, fonts, or copy in composition code.** Everything comes
  from the brand file, so a composition can render in any brand.
- Respect `motion.allowGradients`, `motion.allowGlow`, and `maxWordsPerScreen` —
  they encode real brand rules, not preferences.
- A brand marked provisional or template in its `BRAND.md` still renders, but say
  so when handing over the video, and don't present invented colors as final.
- Type-check with `npx tsc --noEmit` before rendering.

## Rendering

```bash
npx remotion studio                      # interactive preview
npx remotion render Promo-<slug> out/<name>.mp4
```

In this cloud environment, Remotion's own Chrome download is blocked, so add:

```bash
--browser-executable=/opt/pw-browsers/chromium --chrome-mode=chrome-for-testing
```

## Layout

```
src/brands/            Brand definitions — see src/brands/README.md
src/compositions/      Reusable video components, one folder per composition
src/Root.tsx           Composition registry (generated from the brand list)
public/brands/<slug>/  Logos, fonts, and images per brand
```
