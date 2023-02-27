/* eslint-disable */
import 'styled-components';

import { ArTheme } from '../src/styles/theme';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends ArTheme {}
}
