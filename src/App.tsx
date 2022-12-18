import {SafeAreaView, StatusBar} from 'react-native';
import {QueryClientProvider} from 'react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import queryClient from '@wst/services/queryClient';
import theme, {ThemeProvider} from './theme';

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <SafeAreaView>
            <StatusBar barStyle={'dark-content'} />
          </SafeAreaView>
        </QueryClientProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
