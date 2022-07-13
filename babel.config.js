module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['import-graphql'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
