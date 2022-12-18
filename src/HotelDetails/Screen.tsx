import {useCallback, useState} from 'react';
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Lottie from 'lottie-react-native';
import {
  type RouteProp,
  useRoute,
  useNavigation,
} from '@react-navigation/native';
import {
  type EdgeInsets,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Carousel from 'react-native-reanimated-carousel';
import {type NativeStackNavigationProp} from '@react-navigation/native-stack';
import {H1, H2, H3} from '@wst/components/Typography';
import {useTheme, type Theme} from '@wst/theme';
import {type StackParamList} from '@wst/Stack';
import {CurrencyToSymbol} from '@wst/utils';
import CarouselItem from './components/CarouselItem';
const image = require('@wst/assets/image-picture');
const star = require('@wst/assets/star.json');

type DetailsScreenRouteProp = RouteProp<StackParamList, 'HotelDetails'>;
type DetailsScreenNavigationProp = NativeStackNavigationProp<
  StackParamList,
  'HotelDetails'
>;
const {width: screenWidth} = Dimensions.get('window');

const HotelDetails = () => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const styles = generateStyles(theme, insets);
  const [currentIndex, setCurrentIndex] = useState(1);

  const {goBack} = useNavigation<DetailsScreenNavigationProp>();

  const {
    params: {hotel},
  } = useRoute<DetailsScreenRouteProp>();

  const {
    gallery,
    location,
    price,
    currency,
    stars,
    userRating,
    checkIn,
    checkOut,
    contact,
  } = hotel;

  const renderItem = useCallback(({item}: {item: string}) => {
    return <CarouselItem photoUri={item} />;
  }, []);

  const onSnapToItem = useCallback((index: number) => {
    setCurrentIndex(index + 1);
  }, []);

  return (
    <>
      <ScrollView>
        <Carousel<string>
          scrollAnimationDuration={400}
          width={screenWidth}
          height={350}
          autoPlay={false}
          data={gallery}
          renderItem={renderItem}
          onSnapToItem={onSnapToItem}
        />
        <View style={styles.imageCounter}>
          <H3>
            {currentIndex} / {gallery.length}
          </H3>
          <Lottie source={image} autoPlay loop style={styles.imagePicture} />
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.titleContainer}>
            <H2>{hotel.name}</H2>
            <H3>
              {location.address} {location.city}
            </H3>
            <H1 style={styles.price} variant="title">
              {price}
              <H2 variant="title">{CurrencyToSymbol[currency]}</H2>
            </H1>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.singleInfoContainer}>
              <Lottie source={star} autoPlay loop style={styles.star} />
              <H3>{stars}</H3>
            </View>
            <View style={styles.ratingContainer}>
              <H3 style={styles.rating} variant="inverse">
                {userRating}
              </H3>
            </View>
          </View>
          <View style={styles.hotelInfoContainer}>
            <View style={styles.hotelInfoElement}>
              <H3>Check in: </H3>
              <H2>
                {checkIn.from} - {checkIn.to}
              </H2>
            </View>
            <View style={styles.hotelInfoElement}>
              <H3>Check out: </H3>
              <H2>
                {checkOut.from} - {checkOut.to}
              </H2>
            </View>
          </View>
          <View style={styles.hotelInfoContainer}>
            <View style={styles.hotelInfoElement}>
              <H3>Phone: </H3>
              <H2>{contact.phoneNumber}</H2>
            </View>
            <View style={styles.hotelInfoElement}>
              <H3>Email: </H3>
              <H2>{contact.email}</H2>
            </View>
          </View>
        </View>
      </ScrollView>
      <Pressable style={styles.fab} onPress={goBack} testID="back-button">
        <Text style={styles.fabArrow}>←</Text>
      </Pressable>
    </>
  );
};

const generateStyles = ({spacing, color}: Theme, {bottom}: EdgeInsets) =>
  StyleSheet.create({
    image: {
      height: 320,
      alignSelf: 'stretch',
    },
    titleContainer: {
      paddingVertical: spacing.l,
    },
    bodyContainer: {
      paddingHorizontal: spacing.l,
      paddingBottom: bottom + spacing.m,
    },
    infoContainer: {
      flexDirection: 'row',
      paddingVertical: spacing.l,
      borderColor: color.primary,
      borderTopWidth: 1,
      borderBottomWidth: 1,
    },
    singleInfoContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    star: {
      height: 32,
      width: 32,
    },
    fab: {
      position: 'absolute',
      right: spacing.l,
      bottom: bottom + spacing.xl,
      backgroundColor: color.primary,
      height: 64,
      width: 64,
      borderRadius: 32,
      justifyContent: 'center',
      alignItems: 'center',
    },
    fabArrow: {
      fontSize: 24,
      color: color.white,
    },
    imageCounter: {
      height: 80,
      width: 80,
      borderRadius: 40,
      backgroundColor: color.white,
      position: 'absolute',
      top: 310,
      right: spacing.m,
      alignItems: 'center',
      justifyContent: 'center',
    },
    imagePicture: {
      height: 32,
      width: 32,
    },
    price: {
      marginTop: spacing.m,
      alignSelf: 'flex-end',
    },
    ratingContainer: {
      padding: spacing.m,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      backgroundColor: color.secondary,
    },
    rating: {
      fontWeight: 'bold',
    },
    hotelInfoContainer: {
      marginVertical: spacing.l,
    },
    hotelInfoElement: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });

export default HotelDetails;
