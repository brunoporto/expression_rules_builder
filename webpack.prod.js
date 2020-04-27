const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimize: true, //Update this to true or false
  },
});
