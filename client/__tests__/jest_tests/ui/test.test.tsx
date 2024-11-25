import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { router } from 'expo-router';
import Test from '../../../apps/expo/app/test';

jest.mock('expo-router', () => ({
  router: {
    push: jest.fn(),
  },
}));

jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');
  return {
    ...RN,
    SafeAreaView: ({ children }) => <>{children}</>,
  };
});

describe('Test Component', () => {
  it('renders a button with correct title', () => {
    const { getByText } = render(<Test />);
    expect(getByText('test-link')).toBeTruthy();
  });

  it('navigates to the correct route when button is pressed', () => {
    const { getByText } = render(<Test />);
    const button = getByText('test-link');
    fireEvent.press(button);
    expect(router.push).toHaveBeenCalledWith('../app/(root)/(tabs)/(settings)/settings');
  });
});