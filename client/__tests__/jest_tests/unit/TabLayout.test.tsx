import React from 'react';
import { render } from '@testing-library/react-native';
import TabLayout from '../../../apps/expo/app/(tabs)/_layout';
import { ErrorBoundary } from '../ErrorBoundary';

jest.mock('expo-router', () => ({
    useSegments: jest.fn().mockReturnValue([]),
    Tabs: {
    Screen: jest.fn().mockImplementation(({ name, options }) => (
        <div>{options.title}</div>
    )),
    },
}));  

jest.mock('@expo/vector-icons/FontAwesome', () => 'FontAwesome');

describe('TabLayout', () => {
    it('renders correctly', () => {
        const { getByText } = render(
            <ErrorBoundary>
            <TabLayout />
            </ErrorBoundary>
        );
        expect(getByText('Home')).toBeTruthy();
        expect(getByText('Settings')).toBeTruthy();
    });
  
    it('sets correct titles for tab screens', () => {
        const { getAllByText } = render(
            <ErrorBoundary>
            <TabLayout />
            </ErrorBoundary>
        );
        const homeTab = getAllByText('Home')[0];
        const settingsTab = getAllByText('Settings')[0];
        expect(homeTab).toBeTruthy();
        expect(settingsTab).toBeTruthy();
    });
});