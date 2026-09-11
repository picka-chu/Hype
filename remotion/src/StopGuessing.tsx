import {AbsoluteFill, Easing, Img, interpolate, useCurrentFrame} from 'remotion';

// Reference: 720x720, 30fps, ~11.9s.
// The timing below is aligned to the supplied reference frame-by-frame.
const ease = Easing.bezier(0.22, 1, 0.36, 1);

// Replace these with your own local/static image paths when ready.
const IMAGE_1 = '';
const IMAGE_2 = '';
const IMAGE_3 = '';
const IMAGE_4 = '';

const Placeholder = ({src, label = 'REPLACE IMAGE'}: {src: string; label?: string}) => (
  <div style={{width: '100%', height: '100%', background: 'linear-gradient(135deg,#242424,#080808)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
    {src ? <Img src={src} style={{width: '100%', height: '100%', objectFit: 'cover'}} /> : <span style={{color: '#777', fontSize: 13, fontWeight: 700, letterSpacing: 1.5}}>{label}</span>}
  </div>
);

const MotionText = ({children, start, end, y = 48, blur = 16}: {children: React.ReactNode; start: number; end: number; y?: number; blur?: number}) => {
  const frame = useCurrentFrame();
  const p = interpolate(frame, [start, end], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ease,
  });
  const opacity = interpolate(p, [0, 0.35, 0.78, 1], [0, 0.38, 0.92, 1]);
  const translateY = interpolate(p, [0, 1], [y, 0]);
  const b = interpolate(p, [0, 0.35, 0.8, 1], [blur, blur * 0.42, 1, 0]);
  return <div style={{opacity, transform: `translate3d(0, ${translateY}px, 0)`, filter: `blur(${b}px)`}}>{children}</div>;
};

const Watermark = () => (
  <>
    <div style={{position: 'absolute', right: 20, top: 82, color: '#eee', fontSize: 20, opacity: 0.9}}>◎</div>
    <div style={{position: 'absolute', right: 20, top: 108, color: '#eee', fontSize: 8, fontWeight: 700}}>@PTR.AEP</div>
  </>
);

export const StopGuessing = () => {
  const frame = useCurrentFrame();

  // Reference transitions: X ends at frame 181, white/emoji scene runs to frame 240.
  const xOpacity = interpolate(frame, [168, 174, 181], [0, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease});
  const xScale = interpolate(frame, [168, 176, 181], [0.82, 1, 1.03], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease});
  const emojiOpacity = interpolate(frame, [181, 184], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease});
  const grayOpacity = interpolate(frame, [238, 248], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease});
  const instagramOpacity = interpolate(frame, [238, 250, 275, 292], [0, 1, 1, 0.96], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease});
  const instagramScale = interpolate(frame, [238, 252, 292], [0.88, 1, 1.04], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease});
  const instagramHue = interpolate(frame, [248, 275, 305, 335], [0, 1, 2, 3], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill style={{backgroundColor: '#050505', overflow: 'hidden', fontFamily: 'Arial, Helvetica, sans-serif'}}>
      <div style={{position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 45%, #171717 0%, #050505 58%)'}} />

      {/* Opening: frame 0-47. The reference title settles around frame 24. */}
      <AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
        <div style={{transform: 'translateY(4px)'}}>
          <MotionText start={7} end={27} y={42} blur={18}>
            <div style={{color: '#fff', fontSize: 27, lineHeight: 1.08, fontWeight: 500}}>Stop guessing</div>
          </MotionText>
          <MotionText start={12} end={30} y={48} blur={16}>
            <div style={{color: '#fff', fontSize: 37, lineHeight: 0.98, fontWeight: 800, letterSpacing: '-0.055em'}}>what works</div>
          </MotionText>
        </div>
      </AbsoluteFill>
      <Watermark />

      {/* Social post: frame 47-94. Reference bounds are ~430x238 around x149,y241. */}
      <AbsoluteFill style={{alignItems: 'center', justifyContent: 'center'}}>
        <div style={{
          position: 'relative',
          width: 430,
          transform: `translate3d(0, ${interpolate(frame, [47, 61, 92], [155, 0, -8], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease})}px)`,
          opacity: interpolate(frame, [46, 54, 89, 96], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease}),
          filter: `blur(${interpolate(frame, [46, 58], [11, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease})}px)`,
        }}>
          <div style={{color: '#fff', fontSize: 12, fontWeight: 700, height: 63, display: 'flex', alignItems: 'center', gap: 5}}>◉ Motion Designer <span style={{color: '#777'}}>• @ptr.aep</span></div>
          <div style={{height: 169, borderRadius: 12, overflow: 'hidden', border: '1px solid #333'}}><Placeholder src={IMAGE_1} label="IMAGE 1" /></div>
          <div style={{color: '#888', fontSize: 11, marginTop: 7}}>♡   ↻   ♡   ↗</div>
        </div>
      </AbsoluteFill>
      <Watermark />

      {/* Stacked cards: frame 94-133. */}
      <AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', opacity: interpolate(frame, [93, 102, 130, 137], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease})}}>
        <div style={{position: 'relative', width: 500, height: 410, transform: `scale(${interpolate(frame, [94, 111, 133], [0.74, 1, 1.04], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease})}) rotate(${interpolate(frame, [94, 113], [8, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease})}deg)`}}>
          {[
            {src: IMAGE_2, r: -10, x: -38, y: 18},
            {src: IMAGE_3, r: 4, x: 34, y: -10},
            {src: IMAGE_4, r: 11, x: 6, y: 45},
          ].map((item, i) => (
            <div key={i} style={{position: 'absolute', width: 240, height: 240, left: 130 + item.x, top: 82 + item.y, transform: `rotate(${item.r}deg)`, borderRadius: 23, overflow: 'hidden', border: '3px solid #eee', boxShadow: '0 16px 35px rgba(0,0,0,.45)'}}>
              <Placeholder src={item.src} label={`IMAGE ${i + 2}`} />
            </div>
          ))}
        </div>
      </AbsoluteFill>
      <Watermark />

      {/* Everything you need: frame 133-168, with the second line staggered. */}
      <AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
        <div style={{transform: 'translateY(1px)'}}>
          <MotionText start={133} end={151} y={42} blur={14}>
            <div style={{color: '#fff', fontSize: 25, fontWeight: 500, lineHeight: 1.05}}>Everything</div>
          </MotionText>
          <MotionText start={149} end={166} y={38} blur={13}>
            <div style={{color: '#fff', fontSize: 37, fontWeight: 800, letterSpacing: '-0.06em', lineHeight: 0.98}}>you need.</div>
          </MotionText>
        </div>
      </AbsoluteFill>
      <Watermark />

      {/* X: frame 168-181. */}
      <AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', opacity: xOpacity, transform: `scale(${xScale})`, filter: `blur(${interpolate(frame, [168, 174, 181], [7, 0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease})}px)`}}>
        <div style={{color: '#fff', fontSize: 68, fontWeight: 300, lineHeight: 1}}>𝕏</div>
      </AbsoluteFill>
      <Watermark />

      {/* White/emoji scene: frame 181-240. */}
      <AbsoluteFill style={{backgroundColor: '#fff', opacity: emojiOpacity, alignItems: 'center', justifyContent: 'center'}}>
        <div style={{fontSize: 48, transform: `translateY(${interpolate(frame, [181, 188, 240], [10, 0, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease})}px) scale(${interpolate(frame, [181, 188], [0.88, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease})})`}}>🧑🏽‍💻</div>
      </AbsoluteFill>
      <div style={{position: 'absolute', right: 20, top: 82, color: '#ddd', fontSize: 20, opacity: emojiOpacity}}>◎</div>
      <div style={{position: 'absolute', right: 20, top: 108, color: '#ddd', fontSize: 8, fontWeight: 700, opacity: emojiOpacity}}>@PTR.AEP</div>

      {/* Instagram end card: frame 240 onward. */}
      <AbsoluteFill style={{backgroundColor: '#3f3f3f', opacity: grayOpacity, alignItems: 'center', justifyContent: 'center'}}>
        <div style={{opacity: instagramOpacity, transform: `scale(${instagramScale})`, textAlign: 'center'}}>
          <div style={{fontSize: 74, lineHeight: 1, color: '#fff', filter: `hue-rotate(${instagramHue * 8}deg)`, textShadow: '0 0 1px #fff'}}>◎</div>
          <div style={{color: '#fff', fontSize: 13, fontWeight: 700, marginTop: 8}}>@PTR.AEP</div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
