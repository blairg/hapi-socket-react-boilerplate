/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */

const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = (env) => ({
  name: 'server',
  target: 'node',
  entry: ['./src/server/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
  },
  externals: [nodeExternals()],
  module: {
    loaders: [
      {
        test: [/\.js$|.jsx$/],
        exclude: [/node_modules/],
        loader: 'babel-loader',
        options: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react'],
        },
      },
    ],
  },
  stats: {
    colors: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
});
