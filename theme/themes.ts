import { tokens } from './tokens';

export type MyTheme = typeof light;
export type MyThemes = typeof themes;

const lightColors = Object.fromEntries(Object.entries(tokens.color).filter(([k]) => !k.endsWith('Dark')));
const darkColors = Object.fromEntries(
  Object.entries(tokens.color)
    .filter(([k]) => k.endsWith('Dark'))
    .map(([k, v]) => [k.replace('Dark', ''), v]),
);
const light = {
  ...lightColors,
};

const dark = {
  ...darkColors,
};

export const themes = {
  dark,
  light,
} as const;
