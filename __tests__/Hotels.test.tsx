import {waitFor} from '@testing-library/react-native';
import Hotels from '@wst/Hotels';
import {renderWrapper} from './testUtils';

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
});
