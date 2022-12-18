import {Brand} from '@wst/brand';
import {get} from './httpClient';

type Time = Brand<string, 'time'>;

type Location = {
  address: string;
  city: string;
  latitude: number;
  longitude: number;
};

type Times = {
  from: Time;
  to: Time;
};

type Hotel = {
  id: number;
  name: string;
  location: Location;
  stars: number;
  checkIn: Times;
  checkOut: Times;
  contact: {
    phoneNumber: string;
    email: string;
  };
  gallery: string[];
  userRating: number;
  price: number;
  currency: string;
};

type GetHotelsResponse = Hotel[];

export async function fetchMovies() {
  const {data} = await get<GetHotelsResponse>('');

  return data;
}
