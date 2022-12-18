import {type FC, memo} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {FallbackProps} from 'react-error-boundary';
import {Theme, useTheme} from '@wst/theme';
import {H4} from '@wst/components/Typography';

// No break space unicode https://www.fileformat.info/info/unicode/char/A0/index.htm
const GENERIC_ERROR_MESSAGE = 'An error occured. Please\u00A0try\u00A0again!';

interface Props extends FallbackProps {}

const HotelsError: FC<Props> = ({error, resetErrorBoundary}) => {
  const theme = useTheme();
  const styles = generateStyle(theme);
  return (
    <Pressable
      onPress={resetErrorBoundary}
      testID="hotels-error"
      style={styles.root}>
      <H4 style={styles.textError} variant="error">
        {error.message || GENERIC_ERROR_MESSAGE}
      </H4>
    </Pressable>
  );
};

const generateStyle = ({spacing}: Theme) =>
  StyleSheet.create({
    root: {
      alignItem: 'center',
      justifyContent: 'center',
      margin: spacing.l,
    },
    textError: {textAlign: 'center'},
  });

export default memo(HotelsError);
