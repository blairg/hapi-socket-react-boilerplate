// Custom Jest transform implementation that wraps babel-jest and injects our
// babel presets, so we don't have to use .babelrc.

/* eslint-disable import/no-extraneous-dependencies */

module.exports = require('babel-jest').createTransformer({
  presets: ['es2015', 'react'],
});
