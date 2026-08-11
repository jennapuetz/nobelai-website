// The shape every brand file must fill in.
// Add a field here only if a composition actually reads it.

export type Brand = {
  /** Folder name / composition suffix. Lowercase, hyphenated. */
  slug: string;
  /** Full legal or display name. */
  name: string;

  /** The wordmark, split so the second half can take the accent treatment. */
  wordmark: {
    main: string;
    accent: string;
  };

  colors: {
    /** Dominant surface. For light brands this is the light tone. */
    background: string;
    /** Second surface, used as the gradient end and for panels. */
    backgroundAlt: string;
    /** Primary text on `background`. Must pass contrast. */
    text: string;
    /** Supporting text, dividers, captions. */
    textMuted: string;
    /** Primary accent. */
    accent: string;
    /** Secondary accent — only used when `motion.allowGradients` is true. */
    accentAlt: string;
  };

  fonts: {
    heading: string;
    body: string;
  };

  motion: {
    /** 'calm' = slower, gentler springs. 'energetic' = snappier, more overlap. */
    style: 'calm' | 'energetic';
    /** False for brands whose guidelines forbid gradient fills. */
    allowGradients: boolean;
    /** False for brands that must stay flat and clean (no blurred glows). */
    allowGlow: boolean;
  };

  copy: {
    tagline: string;
    features: string[];
    outroLine: string;
  };

  /** Hard cap on words shown on screen at once, if the brand sets one. */
  maxWordsPerScreen?: number;

  /**
   * Paths relative to `public/`, loaded with Remotion's staticFile().
   * Leave undefined until a real file is dropped in.
   */
  assets?: {
    logo?: string;
    lifestyleImage?: string;
  };

  /** Anything a human needs to know that code can't express. */
  notes?: string;
};
