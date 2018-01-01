/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */

const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');

const common = require('./webpack.client.config');

module.exports = env => merge(common(), {
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV'], ['SOCKET_URL']),
    new PurifyCSSPlugin({
      purifyOptions: { info: true, minify: true },
      paths: glob.sync(path.join(__dirname, 'public/css/*')),
    }),
  ],
});
