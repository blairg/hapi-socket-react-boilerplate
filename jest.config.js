module.exports = {
  bail: true,
  silent: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    'src/**/**/*.{js,jsx}',
    '!node_modules/**',
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
};
