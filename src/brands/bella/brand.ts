import type {Brand} from '../types';

// TEMPLATE — every value below is a placeholder. Fill in the real brand values
// and delete this comment. See src/brands/README.md.
export const bella: Brand = {
  slug: 'bella',
  name: 'Bella',

  wordmark: {
    main: 'Bel',
    accent: 'la',
  },

  colors: {
    background: '#fdf7f3', // TODO
    backgroundAlt: '#f6e7de', // TODO
    text: '#2b2320', // TODO
    textMuted: '#8a7a72', // TODO
    accent: '#c98b6b', // TODO
    accentAlt: '#e0b39a', // TODO
  },

  fonts: {
    heading: 'Georgia, serif', // TODO
    body: 'Helvetica, Arial, sans-serif', // TODO
  },

  motion: {
    style: 'calm', // TODO
    allowGradients: false, // TODO
    allowGlow: false, // TODO
  },

  copy: {
    tagline: 'TODO: Bella tagline.',
    features: ['TODO: benefit one', 'TODO: benefit two', 'TODO: benefit three'],
    outroLine: 'TODO: closing line.',
  },

  notes: 'TODO: fill in audience, tone, and hard rules.',
};
