const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  entry: {
    main: [path.resolve(__dirname, 'client/assets/js/index')],
  },
  output: {
    filename: 'assets/js/[name].[contenthash:8].js',
    path: path.resolve(__dirname, 'server/public'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  plugins: [new Dotenv()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};
