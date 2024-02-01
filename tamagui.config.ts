
import { shorthands } from '@tamagui/shorthands';
import { createTamagui } from 'tamagui';


const tamaguiConfig = {
  defaultTheme: 'dark',
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
};

const config = createTamagui(tamaguiConfig);

export const configForJest = createTamagui({
  ...tamaguiConfig,
});

export type AppConfig = typeof config;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}

  interface TypeOverride {
    groupNames(): 'a' | 'b' | 'c';
  }
}

export default config;