import {useQuery} from 'react-query';
import {fetchHotels, Hotel} from '@wst/services/dataProvider';
import {FilterDirection, FilterType} from './components/HotelsFilter';

export function useGetHotels() {
  const {data} = useQuery(['hotels'], async () => await fetchHotels());

  return data;
}

const OrderHandler: Record<
  FilterType,
  (direction: FilterDirection) => (a: Hotel, b: Hotel) => number
> = {
  Name: (direction: FilterDirection) => {
    return (a: Hotel, b: Hotel) => {
      if (a.name > b.name) {
        return direction === 'up' ? 1 : -1;
      }

      return direction === 'up' ? -1 : 1;
    };
  },
  Stars: (direction: FilterDirection) => {
    return (a: Hotel, b: Hotel) => {
      if (a.stars > b.stars) {
        return direction === 'up' ? 1 : -1;
      }

      return direction === 'up' ? -1 : 1;
    };
  },
  Price: (direction: FilterDirection) => {
    return (a: Hotel, b: Hotel) => {
      if (a.price > b.price) {
        return direction === 'up' ? 1 : -1;
      }

      return direction === 'up' ? -1 : 1;
    };
  },
};

export function useGetSortedHotels(
  type?: FilterType,
  direction?: FilterDirection,
) {
  const data = useGetHotels();

  if (!type || !direction) {
    return data;
  }
  return data?.sort(OrderHandler[type](direction));
}
