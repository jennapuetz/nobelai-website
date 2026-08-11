# NoBel AI — Remotion Video Project

A [Remotion](https://www.remotion.dev/) environment for creating videos programmatically with React.

## Commands

Install dependencies:

```bash
npm install
```

Start the Remotion Studio (interactive preview/editor):

```bash
npm run dev
```

Render the demo video:

```bash
npm run render
```

Render any composition:

```bash
npx remotion render <composition-id> out/video.mp4
```

Type-check the project:

```bash
npm run lint
```

Upgrade Remotion to the latest version:

```bash
npm run upgrade
```

## Project structure

- `src/index.ts` — entry point, registers the Remotion root
- `src/Root.tsx` — declares all compositions (videos) in the project
- `src/brands/` — one folder per brand: colors, fonts, motion, copy, and rules
- `src/compositions/` — reusable video components
- `public/brands/<slug>/` — logos, fonts, and images per brand
- `remotion.config.ts` — Remotion CLI configuration

## Brands

Videos are brand-driven: the same composition renders in any brand's look by
reading `src/brands/<slug>/`. See [`src/brands/README.md`](src/brands/README.md)
for how to add a brand or fill one in.

Each registered brand automatically gets two compositions:

```bash
npx remotion render Promo-yba out/yba.mp4              # 1920x1080
npx remotion render Promo-yba-vertical out/yba-9x16.mp4 # 1080x1920
```

## Adding a new video

1. Create a component under `src/compositions/` that takes a brand and renders your content.
2. Register it in `src/Root.tsx` with an `id`, duration, fps, and dimensions.
3. Preview it with `npm run dev` or render it with `npx remotion render <id> out/<name>.mp4`.

Read colors, fonts, and copy from the brand file — never hardcode them.

## Rendering in remote/cloud sessions

If Remotion's headless Chrome download is blocked by network policy, render with the
pre-installed Chromium instead:

```bash
npx remotion render HelloWorld out/video.mp4 --browser-executable=/opt/pw-browsers/chromium --chrome-mode=chrome-for-testing
```

## Docs

- [Remotion fundamentals](https://www.remotion.dev/docs/the-fundamentals)
- [API reference](https://www.remotion.dev/docs/api)
