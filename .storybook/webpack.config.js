const path = require("path");
module.exports = ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      loader: require.resolve("ts-loader")
    },
    {
      test: /\.styl$/,
      loader: "style-loader!css-loader!stylus-loader"
    }
  );
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
