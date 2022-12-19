import {FC, memo} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Lottie from 'lottie-react-native';
import {H4} from '@wst/components/Typography';
import {Theme, useTheme} from '@wst/theme';
import {FilterType, useFilterContext} from './HotelsFilterContext';
const arrow = require('@wst/assets/arrow-up');
interface Props {
  filter: FilterType;
}

const FilterNameHandler: Record<FilterType, string> = {
  [FilterType.Name]: 'A-Z',
  [FilterType.Price]: 'Price',
  [FilterType.Stars]: 'Rating',
};

const FilterSelector: FC<Props> = ({filter}) => {
  const {currentValue, onChange} = useFilterContext();

  const theme = useTheme();
  const styles = generateStyle(theme, filter === currentValue?.type);

  const onChangeValue = () => {
    if (filter === currentValue?.type) {
      onChange({
        type: filter,
        direction: currentValue?.direction === 'up' ? 'down' : 'up',
      });
      return;
    }
    onChange({type: filter, direction: 'up'});
  };

  return (
    <Pressable style={styles.root} onPress={onChangeValue}>
      <H4 variant="inverse">{FilterNameHandler[filter]}</H4>
      <View
        style={[
          styles.arrowIcon,
          {
            transform: [
              {
                rotate:
                  currentValue?.type === filter &&
                  currentValue?.direction === 'down'
                    ? '180deg'
                    : '0deg',
              },
            ],
          },
        ]}>
        <Lottie source={arrow} autoPlay loop />
      </View>
    </Pressable>
  );
};

const generateStyle = ({spacing, color}: Theme, isActive: boolean) =>
  StyleSheet.create({
    root: {
      padding: spacing.m,
      backgroundColor: isActive ? color.secondary : 'transparent',
      borderRadius: 4,
      borderWidth: 1,
      borderColor: isActive ? color.secondary : color.white,
      alignSelf: 'flex-start',
      flexDirection: 'row',
      alignItems: 'center',
    },
    arrowIcon: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 32,
      height: 32,
    },
  });

export default memo(FilterSelector);
