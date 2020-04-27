const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
    "expression-rules-builder": "./src/expression-rules-builder.js",
  },
  devtool: "source-map",
  output: {
    filename: "[name].min.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
