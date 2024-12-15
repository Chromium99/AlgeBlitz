const path = require('path')

module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|tamagui|@expo/vector-icons)'
  ],
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json'
    }
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['<rootDir>/__tests__/jest_tests/**/*.test.[jt]s?(x)'],
  collectCoverage: true,
  collectCoverageFrom: [
    'apps/expo/app/**/*.{js,jsx,ts,tsx}',
    // 'packages/ui/src/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/__tests__/**'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg)$': path.join(__dirname, 'fileMock.js'),
    '^@/(.*)$': '<rootDir>/src/$1',
    '^tamagui$': '<rootDir>/__tests__/__mocks__/tamagui.js',
    '\\.svg$': '<rootDir>/__mocks__/svgMock.js',
    '^app/(.*)$': '<rootDir>/packages/app/$1',
    '^@my/ui/(.*)$': '<rootDir>/packages/ui/$1'
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  rootDir: '.'
}
