module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.test.ts',
    '!src/**/*.spec.ts',
    '!src/**/__tests__/**'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'json', 'html', 'cobertura'],
  // Coverage thresholds are intentionally low for demo purposes
  // This allows the workflow to pass while showing partial coverage
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 40,
      lines: 40,
      statements: 40
    }
  }
};
