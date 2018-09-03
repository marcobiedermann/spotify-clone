module.exports = ({ options }) => ({
  plugins: {
    'postcss-cssnext': options.cssnext ? options.cssnext : false,
  },
});
