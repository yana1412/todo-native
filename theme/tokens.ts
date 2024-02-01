import { darkColorsPostfixed, light } from './colors';

const size = {
  0: 0,
  1: 4,
  2: 8,
  3: 14,
  4: 18,
  5: 20,
  6: 22,
  7: 24,
  8: 26,
  9: 5,
  10: 7,
  11: 22,
  12: 24,
  true: 20,
};

const space = {
  ...size,
  '-0': -0,
  '-1': -5,
  '-2': -10,
  '-3': -15,
  '-4': -20,
  '-5': -25,
  '-6': -30,
  '-7': -40,
  '-8': -50,
  '-9': -75,
  '-10': -100,
};

export const tokens = {
  size,
  space,
  zIndex: {
    0: 0,
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
  },
  color: {
    ...light,
    ...darkColorsPostfixed,
  },
  radius: {
    0: 0,
    1: 3,
    2: 5,
    3: 7,
    4: 9,
    5: 10,
    6: 12,
    7: 15,
    8: 16,
    9: 20,
    10: 25,
  },
};
