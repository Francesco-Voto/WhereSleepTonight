module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@wst': './src',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
