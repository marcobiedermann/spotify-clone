const path = require('path');

module.exports = {
  devServer: {
    contentBase: 'client',
    historyApiFallback: true,
  },
  entry: {
    main: [
      path.resolve(__dirname, 'client/assets/js/index'),
    ],
  },
  output: {
    filename: 'assets/js/[name].js',
    path: path.resolve(__dirname, 'server/public'),
  },
  mode: 'development',
};
