import {Composition} from 'remotion';
import {StopGuessing} from './StopGuessing';

export const RemotionRoot = () => {
  return (
    <Composition
      id="StopGuessing"
      component={StopGuessing}
      durationInFrames={90}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
