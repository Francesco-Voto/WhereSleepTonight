import {type FC, useState, memo} from 'react';
import {
  Image,
  ImageErrorEventData,
  NativeSyntheticEvent,
  StyleSheet,
  type ImageProps,
} from 'react-native';
import Lottie from 'lottie-react-native';
const imageError = require('@wst/assets/image-not-found');

interface Props extends ImageProps {}

const ImageWithError: FC<Props> = props => {
  const [hasError, setHasError] = useState(false);

  const onError = (error: NativeSyntheticEvent<ImageErrorEventData>) => {
    setHasError(true);
    props.onError && props.onError(error);
  };

  return hasError ? (
    <Lottie
      source={imageError}
      autoPlay
      loop
      style={[props.style, styles.error]}
    />
  ) : (
    <Image {...props} onError={onError} />
  );
};

const styles = StyleSheet.create({
  error: {
    alignSelf: 'center',
  },
});

export default memo(ImageWithError);
