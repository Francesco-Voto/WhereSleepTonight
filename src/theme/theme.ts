import {type ColorValue} from 'react-native';

export interface SpacingTheme {
  s: number;
  m: number;
  l: number;
  xl: number;
}

const Spacing: SpacingTheme = {
  s: 4,
  m: 8,
  l: 16,
  xl: 32,
};

export interface ColorTheme {
  primary: ColorValue;
  secondary: ColorValue;
  dark: ColorValue;
  white: ColorValue;
  error: ColorValue;
}

const Color: ColorTheme = {
  primary: '#DE307C',
  secondary: '#40256C',
  error: '#E53935',
  dark: '#16181C',
  white: '#FFFFFF',
};

export interface Theme {
  color: ColorTheme;
  spacing: SpacingTheme;
}

const theme: Theme = {
  color: Color,
  spacing: Spacing,
};

export default theme;
