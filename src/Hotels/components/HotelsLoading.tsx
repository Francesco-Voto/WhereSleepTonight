import {memo} from 'react';
import {StyleSheet} from 'react-native';
import Lottie from 'lottie-react-native';
const loading = require('@wst/assets/loading');

const HotelsLoading = () => (
  <Lottie
    source={loading}
    autoPlay
    loop
    style={styles.loading}
    testID="hotels-loading"
  />
);

const styles = StyleSheet.create({
  loading: {
    alignSelf: 'center',
  },
});

export default memo(HotelsLoading);
