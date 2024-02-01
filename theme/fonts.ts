import { createFont } from 'tamagui';

export const ManropeFont = createFont({
  family: 'Manrope',
  size: {
    0: 9,
    1: 11,
    2: 13,
    3: 14,
    4: 20,
    5: 22,
    6: 50,
    true: 20,
  },
  lineHeight: {
    0: 0,
    1: 16.5,
    2: 19.5,
    3: 20.8,
    4: 22.4,
    5: 24.14,
    6: 27.5,
    7: 60.3,
  },
  weight: {
    3: '300',
    4: '400',
    5: '500',
    6: '600',
    7: '700',
    8: '800',
    9: '900',
  },
  letterSpacing: {
    0: 0,
    1: -1.5,
    2: 0.3,
    3: 0.39,
    4: 0.33,
  },
  face: {
    500: { normal: 'Manrope-Medium' },
    600: { normal: 'Manrope-SemiBold' },
    700: { normal: 'Manrope-Bold' },
  },
});
