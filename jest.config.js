module.exports = {
    rootDir: __dirname,
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.server.json',
        },
    },
    moduleFileExtensions: ['ts', 'js', 'json'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    testMatch: ['<rootDir>/test/**/*.test.ts'],
    testEnvironment: 'node',
    modulePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/dist/'],
    moduleNameMapper: {
        '^root(.*)$': '<rootDir>/server$1',
    },
    setupFilesAfterEnv: ['./test/jest-setup.ts'],
    globalTeardown: './test/test-teardown-globals.ts',
};
