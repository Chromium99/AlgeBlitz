import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../../../apps/expo/app/_layout';
import { useFonts } from 'expo-font';

jest.mock('expo-font', () => ({
  useFonts: jest.fn(),
}));

jest.mock('expo-router', () => ({
  SplashScreen: {
    preventAutoHideAsync: jest.fn(),
    hideAsync: jest.fn(),
  },
  Stack: {
    Screen: () => null,
  },
}));

jest.mock('tamagui', () => ({
  createTamagui: jest.fn(),
  ThemeProvider: ({ children }) => <>{children}</>,
}));

jest.mock('app/provider', () => ({
  Provider: ({ children }) => <>{children}</>,
}));

describe('App Component', () => {
  it('renders null when fonts are not loaded', () => {
    (useFonts as jest.Mock).mockReturnValue([false, null]);
    const { queryByText } = render(<App />);
    expect(queryByText('Home')).toBeNull();
  });

  it('renders RootLayoutNav when fonts are loaded', () => {
    (useFonts as jest.Mock).mockReturnValue([true, null]);
    const { getByText } = render(<App />);
    expect(getByText('Home')).toBeTruthy();
  });
});