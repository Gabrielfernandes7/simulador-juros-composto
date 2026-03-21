import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['**/*.test.ts'],
  collectCoverageFrom: ['src/lib/**/*.ts', '!src/**/*.d.ts'],
}

export default createJestConfig(customJestConfig)
