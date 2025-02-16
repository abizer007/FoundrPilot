// src/theme.js
export const cyberpunkTheme = {
  colors: {
    primary: '#ff34ff',
    secondary: '#00f3ff',
    background: '#0a0829',
    neonText: '#fffb96',
  },
  fonts: {
    header: '"Roboto Mono", monospace',
    body: '"Oxanium", cursive',
  },
  effects: {
    glow: (color) => `0 0 15px ${color}, 0 0 30px ${color}`,
    scanline: `repeating-linear-gradient(
      0deg,
      rgba(0, 255, 255, 0.1) 0px,
      rgba(0, 255, 255, 0.1) 1px,
      transparent 1px,
      transparent 2px
    )`,
  },
};
