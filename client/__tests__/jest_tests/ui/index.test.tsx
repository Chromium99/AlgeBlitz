import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../../../apps/expo/app/index';
import { router } from 'expo-router';

jest.mock('expo-router', () => ({
  router: {
    push: jest.fn(),
    back: jest.fn(),
  },
}));

describe('Home Component', () => {
  it('should render critical UI components', async () => {
    const { getByText } = render(
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    );

    expect(getByText('Some Random Text')).toBeTruthy();
    expect(getByText('main-tab')).toBeTruthy();
    expect(getByText('settings-tab')).toBeTruthy();
  });

  it('should navigate to main screens when buttons are pressed', async () => {
    const { getByText } = render(
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    );

    const mainTabButton = getByText('main-tab');
    fireEvent.press(mainTabButton);
    expect(router.push).toHaveBeenCalledWith('(tabs)/');

    const settingsTabButton = getByText('settings-tab');
    fireEvent.press(settingsTabButton);
    expect(router.push).toHaveBeenCalledWith('(tabs)/settings');
  });
});