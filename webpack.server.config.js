const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = [ {
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
}];
