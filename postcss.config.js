module.exports = ({ env, options }) => ({
  plugins: {
    'postcss-cssnext': options.cssnext ? options.cssnext : false,
    cssnano: env === 'production' ? options.cssnano : false,
  },
});
