import {
  breakpoints,
  colors,
  fontNames,
  fontTypes,
  fontSizes,
  fontWeights,
  lineHeights
} from './values';

export interface ArTheme {
  breakpoints: typeof breakpoints;
  colors: typeof colors;
  fontNames: typeof fontNames;
  fontSizes: typeof fontSizes;
  fontTypes: typeof fontTypes;
  fontWeights: typeof fontWeights;
  lineHeights: typeof lineHeights;
}

const theme: ArTheme = {
  breakpoints,
  colors,
  fontNames,
  fontSizes,
  fontTypes,
  fontWeights,
  lineHeights
};

export default theme;
