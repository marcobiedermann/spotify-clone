/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');

module.exports = merge(baseConfig, {
  devServer: {
    contentBase: 'client',
    historyApiFallback: true,
  },
  devtool: 'cheap-module-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[local]',
              modules: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.html',
    }),
  ],
});
