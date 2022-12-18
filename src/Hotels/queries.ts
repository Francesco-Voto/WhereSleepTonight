import {useQuery} from 'react-query';
import {fetchHotels} from '@wst/services/dataProvider';

export function useGetHotels() {
  const {data} = useQuery(['hotels'], async () => await fetchHotels());

  return data;
}
