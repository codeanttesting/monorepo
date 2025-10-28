module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.test.{ts,tsx}',
    '!src/**/*.spec.{ts,tsx}',
    '!src/**/__tests__/**'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'json', 'html', 'cobertura'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
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
