const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const clientConfig = {
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
  // plugins: [ //TODO: Move this into a production webpack config
  //     // build optimization plugins
  //     new webpack.optimize.UglifyJsPlugin({
  //         compress: {
  //         warnings: false,
  //         drop_console: false,
  //         }
  //     }),
  // ]
};

const serverConfig = {
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
};

module.exports = [clientConfig, serverConfig];
