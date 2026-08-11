import type {Brand} from '../types';

// Source of truth for colors and rules: the `yba-brand-system` skill.
// Keep this file in sync with that skill — the skill wins on any conflict.
export const yba: Brand = {
  slug: 'yba',
  name: 'Your Best Address',

  wordmark: {
    main: 'Your Best ',
    accent: 'Address',
  },

  colors: {
    background: '#53655c', // must stay dominant in every YBA visual
    backgroundAlt: '#e5e8eb',
    text: '#e5e8eb',
    textMuted: '#a3aeb1',
    accent: '#b09f95', // warm accent — sparingly
    accentAlt: '#a3aeb1',
  },

  fonts: {
    heading: 'Helvetica, Arial, sans-serif',
    body: 'Helvetica, Arial, sans-serif',
  },

  motion: {
    style: 'calm',
    allowGradients: false, // brand rule: no gradients unless very subtle
    allowGlow: false, // brand rule: clean and calm, no loud effects
  },

  copy: {
    // Kept short on purpose: all three features share one screen, and YBA
    // allows a maximum of 10 words on screen at once.
    tagline: 'A real address, wherever life takes you.',
    features: ['Mail scanned daily', 'Privacy by default', 'Built for movement'],
    outroLine: 'Happy to walk you through it.',
  },

  maxWordsPerScreen: 10,

  notes:
    'Never dark or black as the dominant surface. Tone is knowledgeable friend, not vendor — explain, do not sell. No urgency or pressure language.',
};
