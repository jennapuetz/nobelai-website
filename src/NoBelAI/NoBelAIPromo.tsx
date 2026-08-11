import {
  AbsoluteFill,
  Sequence,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {Background} from './Background';
import {Logo} from './Logo';
import {COLORS, fadeInUp, fadeOut} from './helpers';

export type NoBelAIPromoProps = {
  tagline: string;
  features: string[];
  outroLine: string;
};

const Centered: React.FC<{children: React.ReactNode}> = ({children}) => (
  <AbsoluteFill
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}
  >
    {children}
  </AbsoluteFill>
);

const SCENES = {
  logo: {from: 0, duration: 105},
  tagline: {from: 100, duration: 110},
  features: {from: 205, duration: 125},
  outro: {from: 325, duration: 125},
};

const LogoScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {width} = useVideoConfig();
  const opacity = fadeOut(frame, SCENES.logo.duration - 15);
  return (
    <Centered>
      <div style={{opacity}}>
        <Logo fontSize={width * 0.09} delay={5} />
      </div>
    </Centered>
  );
};

const TaglineScene: React.FC<{tagline: string}> = ({tagline}) => {
  const frame = useCurrentFrame();
  const {width} = useVideoConfig();
  const opacity = fadeOut(frame, SCENES.tagline.duration - 15);
  return (
    <Centered>
      <div style={{opacity, textAlign: 'center', padding: '0 8%'}}>
        <div
          style={{
            ...fadeInUp(frame, 5),
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 700,
            fontSize: width * 0.045,
            color: COLORS.white,
            lineHeight: 1.2,
          }}
        >
          {tagline}
        </div>
        <div
          style={{
            ...fadeInUp(frame, 20),
            marginTop: width * 0.015,
            height: 6,
            width: width * 0.08,
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: 3,
            background: `linear-gradient(90deg, ${COLORS.cyan}, ${COLORS.violet})`,
          }}
        />
      </div>
    </Centered>
  );
};

const FeaturesScene: React.FC<{features: string[]}> = ({features}) => {
  const frame = useCurrentFrame();
  const {width} = useVideoConfig();
  const opacity = fadeOut(frame, SCENES.features.duration - 15);
  return (
    <Centered>
      <div style={{opacity, display: 'flex', flexDirection: 'column', gap: width * 0.025}}>
        {features.map((feature, i) => (
          <div
            key={feature}
            style={{
              ...fadeInUp(frame, 8 + i * 18),
              display: 'flex',
              alignItems: 'center',
              gap: width * 0.018,
            }}
          >
            <div
              style={{
                width: width * 0.012,
                height: width * 0.012,
                borderRadius: '50%',
                background: `linear-gradient(120deg, ${COLORS.cyan}, ${COLORS.violet})`,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 500,
                fontSize: width * 0.032,
                color: COLORS.white,
              }}
            >
              {feature}
            </span>
          </div>
        ))}
      </div>
    </Centered>
  );
};

const OutroScene: React.FC<{outroLine: string}> = ({outroLine}) => {
  const frame = useCurrentFrame();
  const {width} = useVideoConfig();
  return (
    <Centered>
      <Logo fontSize={width * 0.065} delay={3} />
      <div
        style={{
          ...fadeInUp(frame, 25),
          marginTop: width * 0.02,
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 400,
          fontSize: width * 0.022,
          color: COLORS.dim,
          letterSpacing: '0.04em',
        }}
      >
        {outroLine}
      </div>
    </Centered>
  );
};

export const NoBelAIPromo: React.FC<NoBelAIPromoProps> = ({
  tagline,
  features,
  outroLine,
}) => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();

  const globalFade = interpolate(
    frame,
    [durationInFrames - 20, durationInFrames - 2],
    [1, 0],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
  );

  return (
    <AbsoluteFill style={{opacity: globalFade}}>
      <Background />
      <Sequence from={SCENES.logo.from} durationInFrames={SCENES.logo.duration}>
        <LogoScene />
      </Sequence>
      <Sequence from={SCENES.tagline.from} durationInFrames={SCENES.tagline.duration}>
        <TaglineScene tagline={tagline} />
      </Sequence>
      <Sequence from={SCENES.features.from} durationInFrames={SCENES.features.duration}>
        <FeaturesScene features={features} />
      </Sequence>
      <Sequence from={SCENES.outro.from}>
        <OutroScene outroLine={outroLine} />
      </Sequence>
    </AbsoluteFill>
  );
};
