import {Composition} from 'remotion';
import {StopGuessing} from './StopGuessing';

export const RemotionRoot = () => {
  return (
    <Composition
      id="StopGuessing"
      component={StopGuessing}
      durationInFrames={360}
      fps={30}
      width={720}
      height={720}
    />
  );
};
