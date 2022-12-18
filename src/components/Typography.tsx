import {forwardRef, memo} from 'react';
import {
  type TextProps,
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
  ColorValue,
} from 'react-native';
import {useTheme, type Theme} from '@wst/theme';

type TypographyVariant = 'base' | 'inverse' | 'error' | 'title';

interface TypographyProps extends TextProps {
  variant?: TypographyVariant;
  styleVariant: keyof typeof styles;
}

const BaseTypography = forwardRef<Text, TypographyProps>(
  ({styleVariant, variant = 'base', style, ...props}, ref) => {
    const theme = useTheme();
    const generatedSyle = stylesHandler(theme, variant, style, styleVariant);

    return <Text {...props} ref={ref} style={generatedSyle} />;
  },
);

export const H1 = memo(
  forwardRef<Text, Omit<TypographyProps, 'styleVariant'>>((props, ref) => (
    <BaseTypography ref={ref} {...props} styleVariant="h1" />
  )),
);

export const H2 = memo(
  forwardRef<Text, Omit<TypographyProps, 'styleVariant'>>((props, ref) => (
    <BaseTypography {...props} styleVariant="h2" ref={ref} />
  )),
);

export const H3 = memo(
  forwardRef<Text, Omit<TypographyProps, 'styleVariant'>>((props, ref) => (
    <BaseTypography {...props} styleVariant="h3" ref={ref} />
  )),
);

export const H4 = memo(
  forwardRef<Text, Omit<TypographyProps, 'styleVariant'>>((props, ref) => (
    <BaseTypography {...props} styleVariant="h4" ref={ref} />
  )),
);

const styles = StyleSheet.create({
  h1: {
    fontSize: 32,
    lineHeight: 40,
  },
  h2: {
    fontSize: 20,
    lineHeight: 24,
  },
  h3: {
    fontSize: 16,
    lineHeight: 20,
  },
  h4: {
    fontSize: 12,
    lineHeight: 16,
  },
});

const TypographyColorVariantHandler: Record<
  TypographyVariant,
  (theme: Theme) => ColorValue
> = {
  base: theme => theme.color.dark,
  inverse: theme => theme.color.white,
  error: theme => theme.color.error,
  title: theme => theme.color.primary,
};

function stylesHandler(
  theme: Theme,
  variant: TypographyVariant,
  style: StyleProp<TextStyle>,
  defaultStyle: keyof typeof styles,
) {
  return StyleSheet.flatten([
    style,
    {color: TypographyColorVariantHandler[variant](theme)},
    styles[defaultStyle],
  ]);
}
