import {SafeAreaView, StatusBar} from 'react-native';
import {QueryClientProvider} from 'react-query';
import queryClient from '@wst/services/queryClient';
import theme, {ThemeProvider} from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaView>
          <StatusBar barStyle={'dark-content'} />
        </SafeAreaView>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
