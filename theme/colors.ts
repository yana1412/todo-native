export const light = {
  text: 'hsl(0, 0%, 0%)',
  white: 'hsl(0, 0%, 100%)',
  black: 'hsl(0, 0%, 0%)',
  blueBright: 'hsl(219, 92%, 58%)',
  blue1: 'hsl(219, 50%, 23%)',
  blue2: 'hsl(219, 57%, 15%)',
  blue3: 'hsl(220, 62%, 11%)',
  blue4: 'hsl(219, 67%, 12%)',
  blue5: 'hsl(222, 70%, 9%)',
  gray: 'hsl(217, 14%, 60%)',
  gray1: 'hsl(219, 11%, 46%)',
  grayBright: 'hsl(0, 0%, 77%)',
  redSated: '#fff',
  redUnsated: 'hsl(354, 85%, 69%)',
  greenBright: 'hsl(108, 72%, 65%)',
  greenMint: 'hsl(135, 55%, 60%)',
  greenPale: 'hsl(108, 71%, 65%)',
  yellowBright: 'hsl(45, 100%, 60%)',
};

export const dark = {
  text: 'hsl(0, 0%, 100%)',
  white: 'hsl(0, 0%, 100%)',
  black: 'hsl(0, 0%, 0%)',
  blueBright: 'hsl(219, 92%, 58%)',
  blueLink: 'hsl(219, 100%, 60%)',
  blue1: 'hsl(219, 50%, 23%)',
  blue2: 'hsl(219, 57%, 15%)',
  blue3: 'hsl(220, 62%, 11%)',
  blue4: 'hsl(219, 67%, 12%)',
  blue5: 'hsl(222, 70%, 9%)',
  gray: 'hsl(217, 14%, 60%)',
  gray1: 'hsl(219, 11%, 46%)',
  grayBright: 'hsl(0, 0%, 77%)',
  redSated: 'hsl(354, 82%, 61%)',
  redUnsated: 'hsl(354, 85%, 69%)',
  greenBright: 'hsl(108, 72%, 65%)',
  greenMint: 'hsl(135, 55%, 60%)',
  greenPale: 'hsl(108, 71%, 65%)',
  yellowBright: 'hsl(45, 100%, 60%)',
};

export const darkColorsPostfixed = Object.fromEntries(
  // Dark
  Object.entries(dark).map(([k, v]) => [`${k}Dark`, v]),
) as {
  [key in `${keyof typeof dark}Dark`]: string;
};

export type ColorNamesLight = keyof typeof light;
export type ColorNamesDark = keyof typeof dark;

export const colorNamesLight = Object.keys(light) as ColorNamesLight[];
export const colorNamesDark = Object.keys(dark) as ColorNamesDark[];
