import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {COLORS} from './helpers';

export const Background: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height, durationInFrames} = useVideoConfig();

  const glowX = interpolate(frame, [0, durationInFrames], [width * 0.2, width * 0.8]);
  const glowY = interpolate(frame, [0, durationInFrames], [height * 0.7, height * 0.25]);
  const glow2X = interpolate(frame, [0, durationInFrames], [width * 0.85, width * 0.15]);
  const glow2Y = interpolate(frame, [0, durationInFrames], [height * 0.2, height * 0.75]);
  const glowSize = Math.max(width, height) * 0.55;

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(160deg, ${COLORS.bgTop} 0%, ${COLORS.bgBottom} 100%)`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: glowSize,
          height: glowSize,
          left: glowX - glowSize / 2,
          top: glowY - glowSize / 2,
          borderRadius: '50%',
          background: COLORS.violet,
          opacity: 0.18,
          filter: 'blur(180px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: glowSize,
          height: glowSize,
          left: glow2X - glowSize / 2,
          top: glow2Y - glowSize / 2,
          borderRadius: '50%',
          background: COLORS.cyan,
          opacity: 0.14,
          filter: 'blur(180px)',
        }}
      />
    </AbsoluteFill>
  );
};
