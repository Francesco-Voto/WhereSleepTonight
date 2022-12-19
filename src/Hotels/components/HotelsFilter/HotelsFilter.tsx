import {FC, memo, useCallback, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Lottie from 'lottie-react-native';
import {useTheme} from '@wst/theme';
import {H4} from '@wst/components/Typography';
import {
  FilterType,
  HotelsFilterContext,
  Option,
  useFilterContext,
} from './HotelsFilterContext';
import FilterSelector from './FilterSelector';
const filter = require('@wst/assets/filter');

const HotelsFilterIcon: FC<{onPress: () => void}> = memo(({onPress}) => {
  const {currentValue} = useFilterContext();

  const {spacing, color} = useTheme();
  const styles = StyleSheet.create({
    filterContainer: {
      height: 48,
      width: 48,
      marginVertical: spacing.m,
      justifyContent: 'center',
      alignItems: 'center',
    },
    filterIcon: {
      height: 32,
      width: 32,
    },
    check: {
      position: 'absolute',
      bottom: 8,
      right: 2,
      fontSize: 12,
      fontWeight: 'bold',
      color: color.white,
    },
  });

  return (
    <Pressable style={styles.filterContainer} onPress={onPress}>
      <Lottie
        source={filter}
        style={styles.filterIcon}
        autoPlay
        loop
        testID="hotels-filter"
      />
      {currentValue ? <Text style={styles.check}>✓</Text> : null}
    </Pressable>
  );
});

interface Props {
  onChangeValue: (value?: Option) => void;
}

const HotelsFilter: FC<Props> = ({onChangeValue}) => {
  const [showFilters, setShowFilters] = useState(false);
  const [value, setValue] = useState<Option | undefined>();

  const onPressShowFilter = useCallback(() => {
    setShowFilters(oldValue => !oldValue);
  }, []);

  const onChange = useCallback(
    (newValue: Option) => {
      setValue(newValue);
      onChangeValue(newValue);
    },
    [onChangeValue],
  );

  const onReset = useCallback(() => {
    setValue(undefined);
    onChangeValue(undefined);
  }, [onChangeValue]);

  const contextValue: HotelsFilterContext = {
    currentValue: value,
    onChange,
  };

  return (
    <HotelsFilterContext.Provider value={contextValue as any}>
      <View style={styles.root}>
        <HotelsFilterIcon onPress={onPressShowFilter} />
        {showFilters ? (
          <View style={styles.filterContainer}>
            {Object.keys(FilterType).map(filterType => (
              <FilterSelector
                key={filterType}
                filter={filterType as FilterType}
              />
            ))}
            <H4 onPress={onReset} variant="inverse">
              Clear
            </H4>
          </View>
        ) : null}
      </View>
    </HotelsFilterContext.Provider>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  filterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default HotelsFilter;
