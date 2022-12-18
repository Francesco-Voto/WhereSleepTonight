import {StatusBar} from 'react-native';
import {QueryClientProvider} from 'react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import queryClient from '@wst/services/queryClient';
import theme, {ThemeProvider} from './theme';
import Hotels from './Hotels';

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <>
            <StatusBar barStyle={'dark-content'} />
            <Hotels />
          </>
        </QueryClientProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
