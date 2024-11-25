import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../../apps/expo/app/index';
import { router } from 'expo-router';

jest.mock('expo-router', () => ({
  router: {
    push: jest.fn(),
    back: jest.fn(),
  },
}));

jest.setTimeout(30000); // global timeout = 30 seconds

describe('Heartbeat UI Test', () => {
  let totalTests = 0;
  let passedTests = 0;

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should render critical UI components and remain responsive over time', () => {
    totalTests++;

    const { getByText } = render(
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    );

    expect(getByText('Some Random Text')).toBeTruthy();
    expect(getByText('main-tab')).toBeTruthy();
    expect(getByText('settings-tab')).toBeTruthy();

    for (let i = 0; i < 10; i++) {
      act(() => {
        jest.advanceTimersByTime(1000);
      });
      
      expect(getByText('Some Random Text')).toBeTruthy();
      expect(getByText('main-tab')).toBeTruthy();
      expect(getByText('settings-tab')).toBeTruthy();
      
      // console.log(`Heartbeat signal sent at ${i + 1} seconds`);
    }

    passedTests++;
  });

  it('should navigate to main screens when buttons are pressed', () => {
    totalTests++;

    const { getByText } = render(
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    );

    fireEvent.press(getByText('main-tab'));
    expect(router.push).toHaveBeenCalledWith('(tabs)/');

    fireEvent.press(getByText('settings-tab'));
    expect(router.push).toHaveBeenCalledWith('(tabs)/settings');

    passedTests++;
  });

});