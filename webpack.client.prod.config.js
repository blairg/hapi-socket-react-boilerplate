const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const common = require('./webpack.client.config');

module.exports = env => merge(common(), {
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV'], ['SOCKET_URL']),
  ],
});
