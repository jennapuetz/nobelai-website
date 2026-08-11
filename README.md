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
- `src/HelloWorld.tsx` — demo composition (animated title)
- `remotion.config.ts` — Remotion CLI configuration

## Adding a new video

1. Create a new component in `src/` that renders your video content.
2. Add a `<Composition>` entry for it in `src/Root.tsx` with an `id`, duration, fps, and dimensions.
3. Preview it with `npm run dev` or render it with `npx remotion render <id> out/<name>.mp4`.

## Rendering in remote/cloud sessions

If Remotion's headless Chrome download is blocked by network policy, render with the
pre-installed Chromium instead:

```bash
npx remotion render HelloWorld out/video.mp4 --browser-executable=/opt/pw-browsers/chromium --chrome-mode=chrome-for-testing
```

## Docs

- [Remotion fundamentals](https://www.remotion.dev/docs/the-fundamentals)
- [API reference](https://www.remotion.dev/docs/api)
