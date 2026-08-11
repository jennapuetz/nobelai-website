import {Composition} from 'remotion';
import {BRANDS} from './brands';
import {BrandPromo} from './compositions/BrandPromo/BrandPromo';
import {HelloWorld} from './HelloWorld';

const PROMO_DURATION = 450; // 15s at 30fps

// One promo per brand, in landscape and vertical. Adding a brand to
// src/brands/index.ts adds its compositions here automatically.
export const RemotionRoot: React.FC = () => {
  return (
    <>
      {BRANDS.map((brand) => (
        <Composition
          key={`${brand.slug}-landscape`}
          id={`Promo-${brand.slug}`}
          component={BrandPromo}
          durationInFrames={PROMO_DURATION}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{brandSlug: brand.slug}}
        />
      ))}
      {BRANDS.map((brand) => (
        <Composition
          key={`${brand.slug}-vertical`}
          id={`Promo-${brand.slug}-vertical`}
          component={BrandPromo}
          durationInFrames={PROMO_DURATION}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{brandSlug: brand.slug}}
        />
      ))}
      <Composition
        id="HelloWorld"
        component={HelloWorld}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          titleText: 'Welcome to Remotion',
          titleColor: '#000000',
        }}
      />
    </>
  );
};
