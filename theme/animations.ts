export const animations = {
  bouncy: {
    type: 'spring',
    damping: 20,
    mass: 1.2,
    stiffness: 200,
  },
  lazy: {
    type: 'spring',
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  quick: {
    type: 'spring',
    damping: 20,
    stiffness: 100,
  },
} as const;
