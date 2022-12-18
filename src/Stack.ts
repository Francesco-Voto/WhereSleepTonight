import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Hotel} from './services/dataProvider';

export type StackParamList = {
  Hotels: undefined;
  HotelDetails: {hotel: Hotel};
};

const Stack = createNativeStackNavigator<StackParamList>();

export default Stack;
