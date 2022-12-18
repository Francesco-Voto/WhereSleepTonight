import {FC, useCallback} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Lottie from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {Hotel} from '@wst/services/dataProvider';
import {H1, H2, H3} from '@wst/components/Typography';
import {Theme, useTheme} from '@wst/theme';
import {CurrencyToSymbol} from '@wst/utils';
import ImageWithError from '@wst/components/ImageWithError';
import {StackParamList} from '@wst/Stack';
const star = require('@wst/assets/star.json');

interface Props {
  hotel: Hotel;
}

type HotelsScreenNavigationProp = NativeStackNavigationProp<
  StackParamList,
  'Hotels'
>;

const HotelCard: FC<Props> = ({hotel}) => {
  const theme = useTheme();
  const styles = generateStyles(theme);

  const {navigate} = useNavigation<HotelsScreenNavigationProp>();

  const onPress = useCallback(() => {
    navigate('HotelDetails', {
      hotel,
    });
  }, [hotel, navigate]);

  return (
    <Pressable style={styles.cardRoot} onPress={onPress}>
      <ImageWithError
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: hotel.gallery[0],
        }}
      />
      <View style={styles.bodyContainer}>
        <View style={styles.labelContainer}>
          <H2>{hotel.name}</H2>
          <View style={styles.starContainer}>
            <Lottie source={star} autoPlay loop style={styles.star} />
            <H3>{hotel.stars}</H3>
          </View>
        </View>
        <H1 style={styles.price} variant="title">
          {hotel.price}
          <H2 variant="title">{CurrencyToSymbol[hotel.currency]}</H2>
        </H1>
      </View>
    </Pressable>
  );
};

const generateStyles = ({color, spacing}: Theme) =>
  StyleSheet.create({
    cardRoot: {
      alignSelf: 'stretch',
      backgroundColor: color.white,
      overflow: 'hidden',
      borderRadius: 8,
    },
    bodyContainer: {
      padding: spacing.m,
    },
    labelContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    image: {
      height: 200,
    },
    star: {
      height: 32,
      width: 32,
    },
    starContainer: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    price: {
      alignSelf: 'flex-end',
    },
  });

export default HotelCard;
