import type {FC} from 'react';
import {StyleSheet} from 'react-native';
import ImageWithError from '@wst/components/ImageWithError';

interface Props {
  photoUri: string;
}

const CarouselItem: FC<Props> = ({photoUri}) => {
  return <ImageWithError source={{uri: photoUri}} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

export default CarouselItem;
