const path = require("path");
const config = require("./package.json");

const webpack = require("webpack");
require("dotenv").config();

const PROD = process.env.NODE_ENV === "production";

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, config.main),
  devtool: "source-map",
  output: {
    library: process.env.NAME,
    libraryTarget: process.env.TARGET,
    path: __dirname,
    filename: PROD
      ? "dist/expression-rules-builder.min.js"
      : "dist/expression-rules-builder.js",
  },
  module: {
    rules: [
      { test: /\.es6?$/, exclude: /node_modules/, loader: "babel-loader" },
    ],
  },
  devServer: {
    compress: true,
    port: 9000,
  },
  optimization: {
    minimize: PROD, //Update this to true or false
  },
};
