var path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  optimization: {
    minimize: false, //Update this to true or false
  },
});
