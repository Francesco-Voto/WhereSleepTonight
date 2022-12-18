import {StatusBar, StyleSheet} from 'react-native';
import {QueryClientProvider} from 'react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import queryClient from '@wst/services/queryClient';
import theme, {ThemeProvider} from './theme';
import Hotels from './Hotels';
import Stack from './Stack';
import HotelDetails from './HotelDetails';

const screenOptions = {
  headerShown: false,
};

const App = () => {
  return (
    <GestureHandlerRootView style={styles.rootView}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <>
              <StatusBar barStyle={'dark-content'} />
              <NavigationContainer>
                <Stack.Navigator screenOptions={screenOptions}>
                  <Stack.Screen name="Hotels" component={Hotels} />
                  <Stack.Screen name="HotelDetails" component={HotelDetails} />
                </Stack.Navigator>
              </NavigationContainer>
            </>
          </QueryClientProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
  },
});

export default App;
