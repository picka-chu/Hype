import {AbsoluteFill, Easing, Img, interpolate, useCurrentFrame} from 'remotion';

const FPS = 30;
const ease = Easing.bezier(0.16, 1, 0.3, 1);

// Replace these with your own local/static image paths when ready.
const IMAGE_1 = '';
const IMAGE_2 = '';
const IMAGE_3 = '';
const IMAGE_4 = '';

const Placeholder = ({src, label = 'REPLACE IMAGE'}: {src: string; label?: string}) => (
  <div style={{width: '100%', height: '100%', background: 'linear-gradient(135deg,#242424,#080808)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
    {src ? <Img src={src} style={{width: '100%', height: '100%', objectFit: 'cover'}} /> : <span style={{color: '#777', fontSize: 18, fontWeight: 700, letterSpacing: 2}}>{label}</span>}
  </div>
);

const FadeUp = ({children, start, end, y = 80}: {children: React.ReactNode; start: number; end: number; y?: number}) => {
  const frame = useCurrentFrame();
  const p = interpolate(frame, [start, end], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease});
  const opacity = interpolate(p, [0, 0.2, 0.7, 1], [0, 0.25, 0.9, 1]);
  const blur = interpolate(p, [0, 0.45, 0.8, 1], [16, 7, 1.5, 0]);
  const translateY = interpolate(p, [0, 1], [y, 0]);
  return <div style={{opacity, transform: `translate3d(0,${translateY}px,0)`, filter: `blur(${blur}px)`}}>{children}</div>;
};

export const StopGuessing = () => {
  const frame = useCurrentFrame();
  const flash = interpolate(frame, [195, 203, 212], [0, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const bgFade = interpolate(frame, [235, 248], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const socialOpacity = interpolate(frame, [235, 250, 275, 285], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease});
  const socialScale = interpolate(frame, [235, 255, 285], [0.72, 1, 1.08], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease});

  return (
    <AbsoluteFill style={{backgroundColor: '#050505', overflow: 'hidden', fontFamily: 'Arial, Helvetica, sans-serif'}}>
      <div style={{position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 45%, #171717 0%, #050505 58%)'}} />

      {/* 0.6s — opening title */}
      <AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
        <FadeUp start={15} end={42}>
          <div style={{color: '#fff', fontSize: 52, lineHeight: 1.04, fontWeight: 500}}>Stop guessing</div>
          <div style={{color: '#fff', fontSize: 67, lineHeight: 0.98, fontWeight: 800, letterSpacing: '-0.055em'}}>what works</div>
        </FadeUp>
      </AbsoluteFill>

      {/* 1.9s — social post */}
      <AbsoluteFill style={{alignItems: 'center', justifyContent: 'center'}}>
        <div style={{position: 'relative', width: 570, transform: `translateY(${interpolate(frame,[54,70,105],[150,0,-12],{extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:ease})}px)`, opacity: interpolate(frame,[50,60,105,116],[0,1,1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:ease}), filter:`blur(${interpolate(frame,[50,64],[10,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})}px)`}}>
          <div style={{color:'#fff',fontSize:16,fontWeight:700,marginBottom:10}}>◉ Motion Designer <span style={{color:'#777'}}>• @ptr.aep</span></div>
          <div style={{height:285,borderRadius:16,overflow:'hidden',border:'1px solid #333'}}><Placeholder src={IMAGE_1} label="IMAGE 1" /></div>
          <div style={{color:'#888',fontSize:14,marginTop:10}}>♡   ↻   ♡   ↗</div>
        </div>
      </AbsoluteFill>

      {/* 3.2s — stacked image cards */}
      <AbsoluteFill style={{alignItems:'center',justifyContent:'center', opacity: interpolate(frame,[92,108,145,158],[0,1,1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:ease})}}>
        <div style={{position:'relative',width:380,height:380,transform:`scale(${interpolate(frame,[94,120,150],[0.55,1,1.08],{extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:ease})}) rotate(${interpolate(frame,[94,130],[10,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:ease})}deg)`}}>
          {[{src:IMAGE_2,r:-10,x:-25,y:18},{src:IMAGE_3,r:3,x:28,y:-8},{src:IMAGE_4,r:11,x:8,y:38}].map((item,i)=><div key={i} style={{position:'absolute',width:230,height:230,left:75+item.x,top:75+item.y,transform:`rotate(${item.r}deg)`,borderRadius:24,overflow:'hidden',border:'3px solid #eee',boxShadow:'0 16px 35px rgba(0,0,0,.45)'}}><Placeholder src={item.src} label={`IMAGE ${i+2}`} /></div>)}
        </div>
      </AbsoluteFill>

      {/* 4.5s — second title */}
      <AbsoluteFill style={{alignItems:'center',justifyContent:'center',textAlign:'center'}}>
        <FadeUp start={142} end={168} y={65}>
          <div style={{color:'#fff',fontSize:50,fontWeight:500}}>Everything</div>
          <div style={{color:'#fff',fontSize:70,fontWeight:800,letterSpacing:'-0.06em'}}>you need.</div>
        </FadeUp>
      </AbsoluteFill>

      {/* 6.0s — X mark */}
      <AbsoluteFill style={{alignItems:'center',justifyContent:'center',opacity:interpolate(frame,[174,184,204],[0,1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:ease}),filter:`blur(${interpolate(frame,[174,184],[8,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})}px)`}}>
        <div style={{color:'#fff',fontSize:96,fontWeight:300,lineHeight:1}}>𝕏</div>
      </AbsoluteFill>

      {/* 6.7s — white flash / emoji beat */}
      <AbsoluteFill style={{backgroundColor:'#fff',opacity:flash,alignItems:'center',justifyContent:'center'}}>
        <div style={{fontSize:72}}>🧑🏽‍💻</div>
      </AbsoluteFill>

      {/* 7.8s onward — Instagram end card */}
      <AbsoluteFill style={{backgroundColor:'#3f3f3f',opacity:bgFade,alignItems:'center',justifyContent:'center'}}>
        <div style={{opacity:socialOpacity,transform:`scale(${socialScale})`,textAlign:'center'}}>
          <div style={{fontSize:92,lineHeight:1,color:'#fff',textShadow:'0 0 1px #fff'}}>◎</div>
          <div style={{color:'#fff',fontSize:18,fontWeight:700,marginTop:12}}>@PTR.AEP</div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
