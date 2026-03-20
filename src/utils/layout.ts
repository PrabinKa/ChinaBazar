/** Centering & layout utilities */

import { ViewStyle } from 'react-native';

export const layout = {
  center: { justifyContent: 'center', alignItems: 'center' },
  centerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerColumn: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spaceBetween: { justifyContent: 'space-between' },
  spaceBetweenRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  spaceAroundRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  fill: { flex: 1 },
  fillCenter: { flex: 1, justifyContent: 'center', alignItems: 'center' },
} satisfies Record<string, ViewStyle>;
