// client/src/animations/ParticleLoader.jsx
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';

const ParticleLoader = () => {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));
  
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down });
  });

  return (
    <animated.div
      {...bind()}
      style={{
        x,
        y,
        background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
        scale: x.to(x => 1 + Math.abs(x) / 100),
        rotate: x.to(x => `${x}deg`)
      }}
      className="particle-loader"
    />
  );
};
