import {
  AbsoluteFill,
  Sequence,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {getBrand} from '../../brands';
import {Background} from './Background';
import {Wordmark} from './Wordmark';
import {accentBar, countWords, fadeInUp, fadeOut} from './helpers';

export type BrandPromoProps = {
  /** Which brand in src/brands to render. */
  brandSlug: string;
  /** Optional per-video copy overrides; anything omitted comes from the brand. */
  tagline?: string;
  features?: string[];
  outroLine?: string;
};

const SCENES = {
  logo: {from: 0, duration: 105},
  tagline: {from: 100, duration: 110},
  features: {from: 205, duration: 125},
  outro: {from: 325},
};

const Centered: React.FC<{children: React.ReactNode}> = ({children}) => (
  <AbsoluteFill
    style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
  >
    {children}
  </AbsoluteFill>
);

type Brand = ReturnType<typeof getBrand>;

const LogoScene: React.FC<{brand: Brand}> = ({brand}) => {
  const frame = useCurrentFrame();
  const {width} = useVideoConfig();
  return (
    <Centered>
      <div style={{opacity: fadeOut(frame, SCENES.logo.duration - 15)}}>
        <Wordmark brand={brand} fontSize={width * 0.09} delay={5} />
      </div>
    </Centered>
  );
};

const TaglineScene: React.FC<{brand: Brand; tagline: string}> = ({brand, tagline}) => {
  const frame = useCurrentFrame();
  const {width} = useVideoConfig();
  return (
    <Centered>
      <div
        style={{
          opacity: fadeOut(frame, SCENES.tagline.duration - 15),
          textAlign: 'center',
          padding: '0 8%',
        }}
      >
        <div
          style={{
            ...fadeInUp(frame, 5),
            fontFamily: brand.fonts.heading,
            fontWeight: 700,
            fontSize: width * 0.045,
            color: brand.colors.text,
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
            background: accentBar(brand),
          }}
        />
      </div>
    </Centered>
  );
};

const FeaturesScene: React.FC<{brand: Brand; features: string[]}> = ({
  brand,
  features,
}) => {
  const frame = useCurrentFrame();
  const {width} = useVideoConfig();
  return (
    <Centered>
      <div
        style={{
          opacity: fadeOut(frame, SCENES.features.duration - 15),
          display: 'flex',
          flexDirection: 'column',
          gap: width * 0.025,
        }}
      >
        {features.map((feature, i) => (
          <div
            key={feature}
            style={{
              ...fadeInUp(frame, 8 + i * (brand.motion.style === 'calm' ? 24 : 18)),
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
                background: accentBar(brand),
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: brand.fonts.body,
                fontWeight: 500,
                fontSize: width * 0.032,
                color: brand.colors.text,
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

const OutroScene: React.FC<{brand: Brand; outroLine: string}> = ({brand, outroLine}) => {
  const frame = useCurrentFrame();
  const {width} = useVideoConfig();
  return (
    <Centered>
      <Wordmark brand={brand} fontSize={width * 0.065} delay={3} />
      <div
        style={{
          ...fadeInUp(frame, 25),
          marginTop: width * 0.02,
          fontFamily: brand.fonts.body,
          fontWeight: 400,
          fontSize: width * 0.022,
          color: brand.colors.textMuted,
          letterSpacing: '0.04em',
          textAlign: 'center',
          padding: '0 8%',
        }}
      >
        {outroLine}
      </div>
    </Centered>
  );
};

export const BrandPromo: React.FC<BrandPromoProps> = ({
  brandSlug,
  tagline,
  features,
  outroLine,
}) => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const brand = getBrand(brandSlug);

  const copy = {
    tagline: tagline ?? brand.copy.tagline,
    features: features ?? brand.copy.features,
    outroLine: outroLine ?? brand.copy.outroLine,
  };

  // Surface on-screen word-cap breaches in the Studio console instead of
  // letting them ship silently.
  const cap = brand.maxWordsPerScreen;
  if (cap) {
    const scenes: [string, number][] = [
      ['tagline', countWords(copy.tagline)],
      ['features', countWords(...copy.features)],
      ['outro', countWords(brand.name, copy.outroLine)],
    ];
    for (const [scene, words] of scenes) {
      if (words > cap) {
        console.warn(
          `[${brand.slug}] "${scene}" scene shows ${words} words; brand cap is ${cap}.`,
        );
      }
    }
  }

  const globalFade = interpolate(
    frame,
    [durationInFrames - 20, durationInFrames - 2],
    [1, 0],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
  );

  return (
    <AbsoluteFill style={{opacity: globalFade}}>
      <Background brand={brand} />
      <Sequence from={SCENES.logo.from} durationInFrames={SCENES.logo.duration}>
        <LogoScene brand={brand} />
      </Sequence>
      <Sequence from={SCENES.tagline.from} durationInFrames={SCENES.tagline.duration}>
        <TaglineScene brand={brand} tagline={copy.tagline} />
      </Sequence>
      <Sequence from={SCENES.features.from} durationInFrames={SCENES.features.duration}>
        <FeaturesScene brand={brand} features={copy.features} />
      </Sequence>
      <Sequence from={SCENES.outro.from}>
        <OutroScene brand={brand} outroLine={copy.outroLine} />
      </Sequence>
    </AbsoluteFill>
  );
};
