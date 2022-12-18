import {fireEvent, waitFor} from '@testing-library/react-native';
import HotelDetails from '@wst/HotelDetails';
import {renderWrapper} from './testUtils';

const hotel = {
  id: 12321,
  name: 'Park Plaza London Waterloo',
  location: {
    address: '6 Hercules Road',
    city: 'London',
    latitude: 51.49845,
    longitude: -0.11343,
  },
  stars: 4,
  checkIn: {
    from: '14:00',
    to: '20:00',
  },
  checkOut: {
    from: '07:00',
    to: '10:00',
  },
  contact: {
    phoneNumber: '+39 24322342',
    email: 'park_plaza@gmail.com',
  },
  gallery: [
    'https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1499779963/Swindon_yjsrwz.jpg',
  ],
  userRating: 9.8,
  price: 120,
  currency: 'EUR',
};

const mockGoBack = jest.fn();

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn().mockImplementation(() => ({
    goBack: mockGoBack,
  })),
  useRoute: jest.fn().mockImplementation(() => ({
    params: {hotel},
  })),
}));

describe('Given a component to show the details of a hotel', () => {
  it('should the list of hotels', async () => {
    const {getByText} = renderWrapper(<HotelDetails />);

    await waitFor(() => {
      expect(getByText('Park Plaza London Waterloo')).toBeDefined();
      expect(getByText('1 / 1')).toBeDefined();
    });
  });

  it('shouldgo back when bak button is pressed', async () => {
    const {getByTestId} = renderWrapper(<HotelDetails />);

    await waitFor(() => {
      expect(getByTestId('back-button')).toBeDefined();
    });

    fireEvent.press(getByTestId('back-button'));
    await waitFor(() => {
      expect(mockGoBack).toHaveBeenCalledTimes(1);
    });
  });
});
