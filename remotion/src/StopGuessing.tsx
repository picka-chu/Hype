import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';

export const StopGuessing = () => {
  const frame = useCurrentFrame();

  const progress = interpolate(frame, [0, 22], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const opacity = interpolate(progress, [0, 0.2, 0.72, 1], [0, 0.25, 0.92, 1]);
  const y = interpolate(progress, [0, 1], [120, 0]);
  const blur = interpolate(progress, [0, 0.35, 0.72, 1], [18, 9, 2, 0]);
  const scale = interpolate(progress, [0, 1], [0.96, 1], {outputRange: 'normal'} as never);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#080808',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          fontFamily: 'Arial, Helvetica, sans-serif',
          fontSize: 112,
          lineHeight: 0.95,
          fontWeight: 800,
          letterSpacing: '-0.06em',
          color: '#fff',
          textAlign: 'center',
          opacity,
          translate: `0px ${y}px`,
          scale,
          filter: `blur(${blur}px)`,
          whiteSpace: 'nowrap',
        }}
      >
        stop guessing
      </div>
    </AbsoluteFill>
  );
};
