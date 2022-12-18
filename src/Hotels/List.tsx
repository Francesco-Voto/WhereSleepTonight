import {type FC, memo} from 'react';
import {FlatList, type ListRenderItem, StyleSheet, View} from 'react-native';
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';
import {type Hotel} from '@wst/services/dataProvider';
import {Theme, useTheme} from '@wst/theme';
import {H2} from '@wst/components/Typography';
import {useGetHotels} from './queries';
import HotelCard from './components/HotelCard';

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
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const styles = generateStyles(theme, insets);

  const hotels = useGetHotels();
  return (
    <FlatList<Hotel>
      keyExtractor={keyExtractor}
      data={hotels}
      renderItem={renderItem}
      contentContainerStyle={styles.contenContainer}
      ItemSeparatorComponent={Separator}
      ListEmptyComponent={Empty}
    />
  );
};

const generateStyles = ({spacing}: Theme, {top, bottom}: EdgeInsets) =>
  StyleSheet.create({
    contenContainer: {
      paddingTop: top + spacing.l,
      paddingBottom: spacing.l + bottom,
      paddingHorizontal: spacing.l,
    },
  });

export default List;
