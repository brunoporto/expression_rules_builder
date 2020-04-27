module.exports = {
  entry: {
    index: "./src/index.js",
    "expression-rules-builder": "./src/expression-rules-builder.js",
  },
  devtool: "source-map",
  output: {
    library: "ExpressionRulesBuilder",
    libraryTarget: "umd",
    filename: "[name].min.js",
    path: __dirname,
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
