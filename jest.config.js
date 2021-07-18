module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {},
  },
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\js$': 'babel-jest',
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,vue}', '!<rootDir>/src/config.ts'],
  moduleFileExtensions: ['vue', 'ts', 'js', 'json', 'node'],
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  modulePaths: ['<rootDir>'],
  moduleNameMapper: {
    '^@/(.+)': '<rootDir>/src/$1',
  },
}
