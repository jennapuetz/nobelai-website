import type {Brand} from '../types';

// PROVISIONAL: colors and copy below were chosen as a modern-AI placeholder,
// not from real NoBel AI guidelines. Replace them with the real brand values.
export const nobelAi: Brand = {
  slug: 'nobel-ai',
  name: 'NoBel AI',

  wordmark: {
    main: 'NoBel ',
    accent: 'AI',
  },

  colors: {
    background: '#070b1f',
    backgroundAlt: '#101735',
    text: '#f4f6ff',
    textMuted: '#9aa3c7',
    accent: '#22d3ee',
    accentAlt: '#8b5cf6',
  },

  fonts: {
    heading: 'Helvetica, Arial, sans-serif',
    body: 'Helvetica, Arial, sans-serif',
  },

  motion: {
    style: 'energetic',
    allowGradients: true,
    allowGlow: true,
  },

  copy: {
    tagline: 'Intelligence, built into your business.',
    features: [
      'Automate the busywork',
      'Turn data into decisions',
      'Move faster than ever',
    ],
    outroLine: 'NoBel AI — smarter starts here.',
  },

  notes:
    'TODO: confirm real brand colors, fonts, logo, and tagline. Work appears to center on AI automation and GoHighLevel dashboards.',
};
