import React from 'react';
import { render } from '@testing-library/react-native';
import Home from '../../../apps/expo/app/index';
import { Text } from 'react-native';

jest.mock('../../../apps/expo/app/components/landingPageComponents/RenderImage', () => {
    return {
        RenderLandingImage: () => {
            return <MockedRenderLandingImage />;
        },
    };
});
  
const MockedRenderLandingImage = () => (
    <Text data-testid="mock-render-landing-image">
        Mock RenderLandingImage
    </Text>
);

describe('Heartbeat UI Test', () => {
    it('checks if the main page loads correctly', () => {
        const { getByText } = render(<Home />);

        expect(getByText('ALGEBLITZ')).toBeTruthy();

        expect(getByText(/enhance your knowledge/i)).toBeTruthy();
    });
});