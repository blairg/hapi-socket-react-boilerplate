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
          plugins: [
            ['@babel/plugin-transform-runtime'],
          ],
          presets: [
            ['@babel/preset-env', {
              targets: {
                node: '8.9.4',
              },
            }],
            ['@babel/preset-es2015'],
            ['@babel/preset-es2017'],
            ['@babel/preset-stage-0'],
            ['@babel/preset-react'],
          ],
        },
      },
    ],
  },
  performance: {
    hints: 'warning',
  },
  stats: {
    colors: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
});
