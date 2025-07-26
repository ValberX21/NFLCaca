module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-native-community|@react-navigation)/)',
  ],
  moduleNameMapper: {
    '^react-native-linear-gradient$': '<rootDir>/__mocks__/react-native-linear-gradient.js',
  },
};
