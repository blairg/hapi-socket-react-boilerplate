/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */

const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const common = require('./webpack.server.config');

module.exports = env => merge(common(), {
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
  ],
});
