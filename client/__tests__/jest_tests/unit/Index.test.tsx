import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Home from '../../../apps/expo/app/index';
import { ErrorBoundary } from '../ErrorBoundary';
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

jest.mock('expo-router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
  }),
}));

describe('Home Component', () => {
  const renderWithErrorBoundary = (ui) => {
    return render(<ErrorBoundary>{ui}</ErrorBoundary>);
  };

  it('renders ALGEBLITZ text', () => {
    const { getByText } = renderWithErrorBoundary(<Home />);
    expect(getByText('ALGEBLITZ')).toBeTruthy();
  });

  it('renders Get Started button', () => {
    const { getByText } = renderWithErrorBoundary(<Home />);
    expect(getByText('Get Started')).toBeTruthy();
  });

  // it('changes button text on press', () => {
  //   const { getByText } = renderWithErrorBoundary(<Home />);
  //   const button = getByText('Get Started');
  //   fireEvent.press(button);
  //   expect(getByText('Continue')).toBeTruthy();
  // });

  it('renders RenderLandingImage component', () => {
    const { getByText } = renderWithErrorBoundary(<Home />);
    expect(getByText('Mock RenderLandingImage')).toBeTruthy();
  });
});