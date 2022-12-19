import {type FC, memo, useCallback, useState} from 'react';
import {FlatList, type ListRenderItem, StyleSheet, View} from 'react-native';
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';
import {type Hotel} from '@wst/services/dataProvider';
import {Theme, useTheme} from '@wst/theme';
import {H2} from '@wst/components/Typography';
import {useGetSortedHotels} from './queries';
import HotelCard from './components/HotelCard';
import HotelsFilter, {
  FilterDirection,
  FilterType,
} from './components/HotelsFilter';

function keyExtractor(movie: Hotel) {
  return `${movie.id}`;
}

const renderItem: ListRenderItem<Hotel> = ({item}) => {
  return <HotelCard hotel={item} />;
};

const Separator = memo(() => {
  const theme = useTheme();
  const styles = StyleSheet.create({separator: {height: theme.spacing.xl}});
  return <View style={styles.separator} />;
});

const Empty = memo(() => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    text: {
      marginTop: theme.spacing.xl,
      alignSelf: 'stretch',
      textAlign: 'center',
    },
  });

  return (
    <H2 style={styles.text} variant="inverse">
      No hotels found
    </H2>
  );
});

const List: FC = () => {
  const [filterType, setFilterType] = useState<FilterType | undefined>();
  const [filterDirection, setFilterDirection] = useState<
    FilterDirection | undefined
  >();

  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const styles = generateStyles(theme, insets);

  const hotels = useGetSortedHotels(filterType, filterDirection);

  const onSelectFilter = useCallback(
    (option?: {type: FilterType; direction: FilterDirection}) => {
      if (!option) {
        setFilterType(undefined);
        setFilterDirection(undefined);
        return;
      }
      const {type, direction} = option;
      setFilterType(type);
      setFilterDirection(direction);
    },
    [],
  );

  const Header = useCallback(
    () => <HotelsFilter onChangeValue={onSelectFilter} />,
    [onSelectFilter],
  );

  return (
    <FlatList<Hotel>
      keyExtractor={keyExtractor}
      data={hotels}
      renderItem={renderItem}
      contentContainerStyle={styles.contenContainer}
      ItemSeparatorComponent={Separator}
      ListEmptyComponent={Empty}
      ListHeaderComponent={Header}
    />
  );
};

const generateStyles = ({spacing}: Theme, {top, bottom}: EdgeInsets) =>
  StyleSheet.create({
    contenContainer: {
      paddingTop: top,
      paddingBottom: spacing.l + bottom,
      paddingHorizontal: spacing.l,
    },
  });

export default List;
