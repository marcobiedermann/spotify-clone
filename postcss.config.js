module.exports = ({ env, options }) => ({
  plugins: {
    'postcss-preset-env': options.postcssPresetEnv ? options.postcssPresetEnv : false,
    cssnano: env === 'production' ? options.cssnano : false,
  },
});
