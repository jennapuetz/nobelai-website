import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';
import {NoBelAIPromo} from './NoBelAI/NoBelAIPromo';

const promoProps = {
  tagline: 'Intelligence, built into your business.',
  features: [
    'Automate the busywork',
    'Turn data into decisions',
    'Move faster than ever',
  ],
  outroLine: 'NoBel AI — smarter starts here.',
};

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="NoBelAIPromo"
        component={NoBelAIPromo}
        durationInFrames={450}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={promoProps}
      />
      <Composition
        id="NoBelAIPromoVertical"
        component={NoBelAIPromo}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={promoProps}
      />
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
