import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import type {Brand} from '../../brands';
import {accentFill, springConfig, stagger} from './helpers';

/** The brand name, animated letter by letter, accent half styled per brand. */
export const Wordmark: React.FC<{
  brand: Brand;
  fontSize: number;
  delay?: number;
}> = ({brand, fontSize, delay = 0}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const letters = [
    ...brand.wordmark.main.split('').map((char) => ({char, accent: false})),
    ...brand.wordmark.accent.split('').map((char) => ({char, accent: true})),
  ];

  const config = springConfig(brand);
  const step = stagger(brand);
  const accent = accentFill(brand);

  return (
    <div style={{display: 'flex', alignItems: 'baseline'}}>
      {letters.map((letter, i) => {
        const progress = spring({
          frame: frame - delay - i * step,
          fps,
          config,
        });
        return (
          <span
            key={i}
            style={{
              fontFamily: brand.fonts.heading,
              fontWeight: 700,
              fontSize,
              letterSpacing: '0.01em',
              ...(letter.accent ? accent : {color: brand.colors.text}),
              opacity: progress,
              transform: `translateY(${(1 - progress) * fontSize * 0.4}px) scale(${
                0.6 + progress * 0.4
              })`,
              display: 'inline-block',
              whiteSpace: 'pre',
            }}
          >
            {letter.char}
          </span>
        );
      })}
    </div>
  );
};
