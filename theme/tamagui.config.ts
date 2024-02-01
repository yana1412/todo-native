import { createAnimations } from '@tamagui/animations-react-native';
import { createMedia } from '@tamagui/react-native-media-driver';
import { shorthands } from '@tamagui/shorthands';
import { createTokens as createTokensForJest } from '@tamagui/web';
import { createTamagui, createTokens } from 'tamagui';

import { animations } from './animations';
import { ManropeFont } from './fonts';
import { media } from './media';
import { themes } from './themes';
import { tokens } from './tokens';

const tamaguiConfig = {
  animations: createAnimations(animations),
  defaultTheme: 'dark',
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: false,
  shorthands,
  fonts: {
    heading: ManropeFont,
    body: ManropeFont,
    Manrope: ManropeFont,
  },
  themes,
  tokens: createTokens(tokens),
  media: createMedia(media),
};

const config = createTamagui(tamaguiConfig);

export const configForJest = createTamagui({
  ...tamaguiConfig,
  tokens: createTokensForJest(tokens),
});

export type AppConfig = typeof config;

declare module 'tamagui' {
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  interface TamaguiCustomConfig extends AppConfig {}

  interface TypeOverride {
    groupNames(): 'a' | 'b' | 'c';
  }
}

export default config;
