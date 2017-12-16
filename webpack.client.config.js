/* eslint-disable */

const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
  return {
    name: 'client',
    target: 'web',
    entry: ['./src/client/app.jsx'],
    output: {
      path: path.resolve(__dirname, 'public/js'),
      filename: 'bundle.js',
    },
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
    devtool: 'source-map',
    plugins: [
      new webpack.DefinePlugin({
        SOCKET_URL: JSON.stringify(env.SOCKET_URL ? env.SOCKET_URL : 'wss://localhost:3000'),
      }),
    ],
  };
};

