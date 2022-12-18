import {SafeAreaView, StatusBar} from 'react-native';
import {QueryClientProvider} from 'react-query';
import queryClient from '@wst/services/queryClient';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView>
        <StatusBar barStyle={'dark-content'} />
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default App;
