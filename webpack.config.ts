import Dotenv from 'dotenv-webpack';
import { resolve } from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
  entry: {
    main: [resolve(__dirname, 'client/assets/js/index')],
  },
  output: {
    filename: 'assets/js/[name].[contenthash:8].js',
    path: resolve(__dirname, 'server/public'),
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

export default config;
