/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const bundleExtractPlugin = new ExtractTextPlugin({
  filename: 'css/bundle.css',
});

const vendorsExtractPlugin = new ExtractTextPlugin({
  filename: 'css/vendors.css',
});

const styleSheetOptions = {
  url: false,
  minimize: false,
  sourceMap: true,
};

module.exports = (env) => {
  return {
    name: 'client',
    target: 'web',
    entry: ['./src/client/app.jsx'],
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'js/bundle.js',
    },
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
                  browsers: ['last 2 versions', 'safari >= 7'],
                },
              }],
              ['@babel/preset-es2015'],
              ['@babel/preset-stage-0'],
              ['@babel/preset-react'],
            ],
          },
        },
        {
          test: /\.scss$/,
          exclude: [/node_modules/],
          use: bundleExtractPlugin.extract({
            use: [{
              loader: 'css-loader',
              options: styleSheetOptions,
            }, {
              loader: 'sass-loader',
              options: styleSheetOptions,
            }, {
              loader: 'postcss-loader?parser=postcss-scss',
            }],
          }),
        },
        {
          test: /\.css$/,
          exclude: [/node_modules/],
          use: vendorsExtractPlugin.extract({
            use: [{
              loader: 'css-loader',
              options: styleSheetOptions,
            }],
          }),
        },
      ],
    },
    stats: {
      colors: true,
    },
    performance: {
      hints: 'warning',
    },
    devtool: 'source-map',
    plugins: [
      new webpack.DefinePlugin({
        SOCKET_URL: JSON.stringify(process.env.SOCKET_URL ? process.env.SOCKET_URL : 'wss://localhost:3000'),
      }),
      bundleExtractPlugin,
      vendorsExtractPlugin,
    ],
  };
};
