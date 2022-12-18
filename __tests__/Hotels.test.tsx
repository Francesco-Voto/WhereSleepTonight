import {fireEvent, waitFor} from '@testing-library/react-native';
import Hotels from '@wst/Hotels';
import {renderWrapper} from './testUtils';

const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn().mockImplementation(() => ({
    navigate: mockNavigate,
  })),
}));

describe('Given a component to show the list of hotels', () => {
  it('should show a loading state at first fetch', () => {
    const {getByTestId} = renderWrapper(<Hotels />);
    expect(getByTestId('hotels-loading')).toBeDefined();
  });

  it('should the list of hotels', async () => {
    const {getByText} = renderWrapper(<Hotels />);

    await waitFor(() => {
      expect(getByText('Park Plaza London Waterloo')).toBeDefined();
      expect(getByText('Belgrave House Hotel')).toBeDefined();
    });
  });

  it('should navigate to the details screen of selected movie', async () => {
    const {getByText} = renderWrapper(<Hotels />);

    await waitFor(() => {
      expect(getByText('Park Plaza London Waterloo')).toBeDefined();
    });

    fireEvent.press(getByText('Park Plaza London Waterloo'));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith('HotelDetails', {
        hotel: {
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
        },
      });
    });
  });
});
