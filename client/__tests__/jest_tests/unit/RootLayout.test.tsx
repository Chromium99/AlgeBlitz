import React from 'react';
import { render } from '@testing-library/react-native';
import { RootLayoutNav } from '../../../apps/expo/app/components/RootLayout';
import { ErrorBoundary } from '../ErrorBoundary';

jest.mock('@react-navigation/native', () => ({
    useNavigation: jest.fn(),
    useTheme: jest.fn(),
    DefaultTheme: {},
    DarkTheme: {},
}));

jest.mock('expo-router', () => ({
    Stack: ({ children }) => <>{children}</>,
}));

describe('RootLayoutNav Component', () => {
    const renderWithErrorBoundary = (ui) => {
        return render(<ErrorBoundary>{ui}</ErrorBoundary>);
    };

    beforeEach(() => {
        jest.resetModules();
        jest.clearAllMocks();
    });

    it('renders without crashing', () => {
        const { getByText } = renderWithErrorBoundary(<RootLayoutNav />);
        expect(getByText('Home')).toBeTruthy();
    });

    it('renders NativeToast component when not in Expo StoreClient environment', () => {
        jest.mock('expo-constants', () => ({
            manifest: {},
            executionEnvironment: 'otherEnvironment',
        }));

        const { getByTestId } = renderWithErrorBoundary(<RootLayoutNav />);
        expect(getByTestId('native-toast')).toBeTruthy();
    });
});