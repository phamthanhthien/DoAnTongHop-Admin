const CircularDependencyPlugin = require(`circular-dependency-plugin`);

module.exports = {
  babel: {
    plugins: [
      [`@babel/plugin-proposal-decorators`, { legacy: true }],
      [`@babel/plugin-proposal-class-properties`, { loose: true }],
      `@babel/plugin-proposal-optional-chaining`,
      `@babel/plugin-proposal-throw-expressions`,
      `@babel/plugin-transform-flow-strip-types`,
      `@babel/plugin-transform-react-jsx`,
      `@babel/plugin-proposal-export-default-from`,
      `@babel/plugin-proposal-export-namespace-from`,
    ],
  },
  webpack: {
    alias: {
      'react-native': `react-native-web`,
      'react-native-maps': `react-native-web-maps`,
      'react-native-linear-gradient': `react-native-web-linear-gradient`,
      'react-native-svg': `react-native-svg-web`,
    },
    plugins: [
      new CircularDependencyPlugin({
        exclude: /node_modules/,
      }),
    ],
  },
};
