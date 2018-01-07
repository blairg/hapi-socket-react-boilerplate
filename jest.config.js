module.exports = {
  bail: true,
  silent: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    'src/**/**/*.{js,jsx}',
    '!node_modules/**',
    '!stories/**',
    '!.storybook/**',
    '!test/**',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: [
    'json',
    'lcov',
    'text',
  ],
  coveragePathIgnorePatterns: [
    'server/index.js',
    'client/app.jsx',
    'client/subscribers/*',
    'client/reducers/*',
  ],
  transform: {
    '^.+\\.js|jsx$': './jest.transform.js',
  },
};
