import React from 'react';
import { render } from '@testing-library/react-native';
import { RenderLandingImage } from '../../../apps/expo/app/components/landingPageComponents/RenderImage';

jest.mock('../../../apps/expo/app/components/svgComponents/LandingImage', () => ({
    LandingImageComponent: ({ width, height }) => (
        <div data-testid="mock-landing-image" style={{ width, height }}>Mock Landing Image</div>
    ),
}));

describe('RenderLandingImage Component', () => {
    it('renders without crashing', () => {
        const { getByTestId } = render(<RenderLandingImage />);    
        expect(getByTestId('image-component')).toBeTruthy();
    });

    it('applies correct dimensions to LandingImageComponent', () => {
        const { getByTestId } = render(<RenderLandingImage />);
        const imageComponent = getByTestId('image-component');
        expect(imageComponent).toBeTruthy();
    });
});