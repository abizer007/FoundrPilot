// src/components/FunComponents.jsx
import { useSpring, animated } from '@react-spring/web';

export const ConfettiButton = ({ children, onClick }) => {
  const [props, set] = useSpring(() => ({ scale: 1 }));

  return (
    <animated.button
      style={props}
      onHover={() => set({ scale: 1.1 })}
      onClick={onClick}
      className="confetti-button"
    >
      {children}
      <span className="sparkles">✨</span>
    </animated.button>
  );
};
