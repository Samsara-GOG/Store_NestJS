module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
      'src/*.ts',
      'src/**/*.ts',
      '!src/config/**',
      '!src/controllers/**',
      '!src/dto/**',
      '!src/mapper/**',
      '!**/node_modules/**',
    ],
    coverageDirectory: './coverage',
    coveragePathIgnorePatterns: [
      '<rootDir>/node_modules'
    ],
    coverageThreshold: {
      global: {
        branches: 98,
        functions: 98,
        lines: 98,
        statements: 98,
      },
    },
    moduleFileExtensions: [
      'js',
      'json',
      'ts',
      'tsx'
    ],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    testEnvironment: 'node',
    testMatch: [
      '**/test/unit/**/*.spec.(js|jsx|ts|tsx)|**/__test__/*.(js|jsx|ts|tsx)',
    ],
    transform: {
      '^.+\\.ts$': 'ts-jest'
    },
    transformIgnorePatterns: [
      '/node_modules/',
    ],
    roots: [
      '<rootDir>/test'
    ],
  };