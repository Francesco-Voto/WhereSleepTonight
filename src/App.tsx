import {StatusBar} from 'react-native';
import {QueryClientProvider} from 'react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import queryClient from '@wst/services/queryClient';
import theme, {ThemeProvider} from './theme';
import Hotels from './Hotels';
import Stack from './Stack';

const screenOptions = {
  headerShown: false,
};

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <>
            <StatusBar barStyle={'dark-content'} />
            <NavigationContainer>
              <Stack.Navigator screenOptions={screenOptions}>
                <Stack.Screen name="Hotels" component={Hotels} />
              </Stack.Navigator>
            </NavigationContainer>
          </>
        </QueryClientProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
