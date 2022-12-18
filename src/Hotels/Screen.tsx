import {Suspense, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {ErrorBoundary, FallbackProps} from 'react-error-boundary';
import {QueryErrorResetBoundary} from 'react-query';
import {Theme, useTheme} from '@wst/theme';
import List from './List';
import HotelsLoading from './components/HotelsLoading';
import HotelsError from './components/HotelsError';

const fallbackRender = (props: FallbackProps) => {
  return <HotelsError {...props} />;
};

const Hotels = () => {
  const theme = useTheme();
  const styles = useMemo(() => generateStyle(theme), [theme]);
  return (
    <View style={styles.container}>
      <QueryErrorResetBoundary>
        {({reset}) => (
          <ErrorBoundary onReset={reset} fallbackRender={fallbackRender}>
            <Suspense fallback={<HotelsLoading />}>
              <List />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </View>
  );
};

const generateStyle = ({color}: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: color.primary,
      flex: 1,
    },
  });

export default Hotels;
