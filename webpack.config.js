const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: "./src/index",
  output: {
    filename: "bundle.js",
    path: `${__dirname}/dist`
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader", exclude: ["node_modules"] },
      {
        test: /\.css/,
        loader: ExtractTextWebpackPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "vendor-[hash].js"
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new ExtractTextWebpackPlugin('styles.css')
  ]
};
