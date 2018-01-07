// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require('path');
const webpack = require('webpack');

// load the default config generator.
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  // Extend it as you need.

  // For example, add typescript loader:
  // config.module.rules.push({
  //   test: /\.(ts|tsx)$/,
  //   include: path.resolve(__dirname, '../src'),
  //   loader: require.resolve('ts-loader')
  // });
  // config.resolve.extensions.push('.ts', '.tsx');

  const updatedRules = [];

  config.module.rules.map((rule) => {
    const ruleTest = rule.test.toString().replace('/', '').replace('?$/', '').replace('\\.', '');

    if (ruleTest !== 'jsx') {
      updatedRules.push(rule);
    }
  });

  updatedRules.unshift({
    test: [/\.js$|.jsx$/],
    exclude: [/node_modules|public/],
    loader: 'babel-loader',
    options: {
      presets: [
        ['@babel/preset-env'],
      ],
    },
  });

  config.module.rules = updatedRules;

  config.plugins.push(new webpack.DefinePlugin({
    SOCKET_URL: JSON.stringify(process.env.SOCKET_URL ? process.env.SOCKET_URL : 'wss://localhost:3000'),
  }));

  return config;
};
