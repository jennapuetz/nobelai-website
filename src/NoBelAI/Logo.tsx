import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {COLORS} from './helpers';

// Animated "NoBel AI" wordmark — each letter springs in with a small stagger.
export const Logo: React.FC<{fontSize: number; delay?: number}> = ({
  fontSize,
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const letters: {char: string; accent: boolean}[] = [
    ...'NoBel'.split('').map((char) => ({char, accent: false})),
    {char: ' ', accent: false},
    ...'AI'.split('').map((char) => ({char, accent: true})),
  ];

  return (
    <div style={{display: 'flex', alignItems: 'baseline'}}>
      {letters.map((letter, i) => {
        const progress = spring({
          frame: frame - delay - i * 3,
          fps,
          config: {damping: 14, mass: 0.6},
        });
        return (
          <span
            key={i}
            style={{
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 700,
              fontSize,
              letterSpacing: '0.01em',
              color: letter.accent ? 'transparent' : COLORS.white,
              backgroundImage: letter.accent
                ? `linear-gradient(120deg, ${COLORS.cyan}, ${COLORS.violet})`
                : undefined,
              backgroundClip: letter.accent ? 'text' : undefined,
              WebkitBackgroundClip: letter.accent ? 'text' : undefined,
              opacity: progress,
              transform: `translateY(${(1 - progress) * fontSize * 0.4}px) scale(${
                0.6 + progress * 0.4
              })`,
              display: 'inline-block',
            }}
          >
            {letter.char}
          </span>
        );
      })}
    </div>
  );
};
