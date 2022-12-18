import {StatusBar} from 'react-native';
import {QueryClientProvider} from 'react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
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
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <>
            <StatusBar barStyle={'dark-content'} />
            <NavigationContainer>
              <Stack.Navigator screenOptions={screenOptions}>
                <Stack.Screen
                  name="HotelDetails"
                  component={HotelDetails}
                  initialParams={{
                    hotel: {
                      id: 12321,
                      name: 'Park Plaza London Waterloo',
                      location: {
                        address: '6 Hercules Road',
                        city: 'London',
                        latitude: 51.49845,
                        longitude: -0.11343,
                      },
                      stars: 4,
                      checkIn: {
                        from: '14:00',
                        to: '20:00',
                      },
                      checkOut: {
                        from: '07:00',
                        to: '10:00',
                      },
                      contact: {
                        phoneNumber: '+39 24322342',
                        email: 'park_plaza@gmail.com',
                      },
                      gallery: [
                        'https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1499779963/Swindon_yjsrwz.jpg',
                      ],
                      userRating: 9.8,
                      price: 120,
                      currency: 'EUR',
                    },
                  }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </>
        </QueryClientProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
