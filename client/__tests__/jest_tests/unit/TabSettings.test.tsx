import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Tab from '../../../apps/expo/app/(tabs)/settings';
import { ErrorBoundary } from '../ErrorBoundary';

jest.mock('expo-router', () => ({
    router: {
        back: jest.fn(),
    },
}));

describe('Settings Tab', () => {
    it('renders correctly', () => {
        const { getByText } = render(
        <ErrorBoundary>
            <Tab />
        </ErrorBoundary>
        );
        expect(getByText('Tab [Home|Settings]')).toBeTruthy();
        expect(getByText('go back')).toBeTruthy();
    });

    it('calls router.back when go back button is pressed', () => {
        const { getByText } = render(
        <ErrorBoundary>
            <Tab />
        </ErrorBoundary>
        );
        const backButton = getByText('go back');
        fireEvent.press(backButton);
        expect(require('expo-router').router.back).toHaveBeenCalled();
    });
});
