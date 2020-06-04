// Babel config for the react-native bundle

module.exports = {
  presets: [`module:metro-react-native-babel-preset`],
  plugins: [
    `@babel/plugin-proposal-export-default-from`,
    `@babel/plugin-proposal-export-namespace-from`,
    `@babel/plugin-proposal-optional-chaining`,
  ],
};
