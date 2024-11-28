import '@testing-library/jest-native/extend-expect';
import 'react-native-gesture-handler/jestSetup';

jest.mock('expo-constants', () => ({
    manifest: {},
    executionEnvironment: 'StoreClient',
}));

jest.mock('expo-modules-core', () => ({
    ExecutionEnvironment: {
        StoreClient: 'StoreClient',
    },
    requireOptionalNativeModule: jest.fn(),
}));




global.window = global;
global.document = {
  createElement: jest.fn(() => ({
    style: {},
    setAttribute: jest.fn(),
    appendChild: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  })),
};

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  })
});

global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({}) }));


jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native-reanimated', () => {
    const Reanimated = require('react-native-reanimated/mock');
    Reanimated.default.call = () => {};
    return Reanimated;
});

jest.mock('expo-router', () => ({
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      back: jest.fn(),
    }),
    useSegments: jest.fn(),
    useRootNavigationState: jest.fn(),
}));

jest.mock('expo-router/testing-library', () => ({
    renderRouter: jest.fn(),
    screen: {
      getByTestId: jest.fn(),
      getByText: jest.fn(),
    },
}));

jest.mock('@expo/vector-icons', () => ({
    AntDesign: 'AntDesign',
}));

jest.mock('react-native-svg', () => {
    const React = require('react');
    const { View } = require('react-native');
    
    const createComponent = (name) => {
        return React.forwardRef((props, ref) => {
          return React.createElement(View, { ...props, ref, testID: name });
        });
    };
  
    return {
      Svg: createComponent('Svg'),
      Circle: createComponent('Circle'),
      Rect: createComponent('Rect'),
      Path: createComponent('Path'),
      Line: createComponent('Line'),
      G: createComponent('G'),
      Defs: createComponent('Defs'),
    };
});

jest.mock('@react-navigation/native', () => ({
    useNavigation: jest.fn(),
    useTheme: jest.fn(),
    DefaultTheme: {},
    DarkTheme: {},
}));
  