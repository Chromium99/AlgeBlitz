const path = require('path')

module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    './jest.setup.js'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|tamagui)'
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
    'packages/ui/src/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/__tests__/**'
  ],
  reporters: ['default', '<rootDir>/customReporter.js'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  testTimeout: 20000,
  moduleNameMapper: {
    '^tamagui$': '<rootDir>/__tests__/__mocks__/tamagui.js',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': path.join(__dirname, 'fileMock.js'),
    '^@/(.*)$': '<rootDir>/src/$1'

    // '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // '\\.(otf|woff|woff2|ttf|eot)$': '<rootDir>/__mocks__/fileMock.js'
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  rootDir: '.'
  // setupFiles: ['./jest.setup.js'],

}
