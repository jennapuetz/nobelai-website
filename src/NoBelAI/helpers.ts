import {interpolate} from 'remotion';

export const COLORS = {
  bgTop: '#070b1f',
  bgBottom: '#101735',
  white: '#f4f6ff',
  dim: '#9aa3c7',
  cyan: '#22d3ee',
  violet: '#8b5cf6',
};

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
