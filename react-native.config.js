module.exports = {
  project: {
    ios: {},
    android: {},
  },
  env: {
    node: true,
  },
  assets: ['./src/assets/fonts'],
  dependencies: {
    ...(process.env.NO_FLIPPER
      ? { 'react-native-flipper': { platforms: { ios: null } } }
      : {}),
  },
};


