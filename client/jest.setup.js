import '@testing-library/jest-native/extend-expect'

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
          dispatchEvent: jest.fn(),
        }),
      });
      
    
    
    // import 'react-native-gesture-handler/jestSetup'
    
    // jest.mock('react-native-reanimated', () => {
    //   const Reanimated = require('react-native-reanimated/mock')
    //   Reanimated.default.call = () => {}
    //   return Reanimated
    // })
    
    // jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')
    
    
    // jest.mock('expo-router', () => ({
    //   router: {
    //     push: jest.fn(),
    //     back: jest.fn(),
    //   },
    //   useRouter: () => ({
    //     push: jest.fn(),
    //     back: jest.fn(),
    //   }),
    // }))
    
    // jest.mock('react-native/Libraries/Components/SafeAreaView/SafeAreaView', () => 
    //   ({ children }) => children
    // )