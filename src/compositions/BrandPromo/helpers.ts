import {interpolate} from 'remotion';
import type {Brand} from '../../brands';

export const fadeInUp = (
  frame: number,
  start: number,
  duration = 20,
  distance = 40,
) => {
  const progress = interpolate(frame, [start, start + duration], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return {
    opacity: progress,
    transform: `translateY(${(1 - progress) * distance}px)`,
  };
};

export const fadeOut = (frame: number, start: number, duration = 15) =>
  interpolate(frame, [start, start + duration], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

/** Spring config per brand motion style: calm brands settle without bounce. */
export const springConfig = (brand: Brand) =>
  brand.motion.style === 'calm'
    ? {damping: 200, mass: 1}
    : {damping: 14, mass: 0.6};

/** Calm brands stagger wider and move less. */
export const stagger = (brand: Brand) => (brand.motion.style === 'calm' ? 6 : 3);

/**
 * An accent fill that respects the brand's gradient rule: gradient-friendly
 * brands get a two-tone sweep, the rest get a flat accent.
 */
export const accentFill = (brand: Brand) =>
  brand.motion.allowGradients
    ? {
        color: 'transparent',
        backgroundImage: `linear-gradient(120deg, ${brand.colors.accent}, ${brand.colors.accentAlt})`,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
      }
    : {color: brand.colors.accent};

/** Solid or gradient bar, same rule as above. */
export const accentBar = (brand: Brand) =>
  brand.motion.allowGradients
    ? `linear-gradient(90deg, ${brand.colors.accent}, ${brand.colors.accentAlt})`
    : brand.colors.accent;

/** Words visible in one scene, for checking a brand's on-screen word cap. */
export const countWords = (...lines: string[]) =>
  lines.join(' ').trim().split(/\s+/).filter(Boolean).length;
