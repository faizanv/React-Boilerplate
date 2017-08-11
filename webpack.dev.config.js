const path = require('path');
const webapck = require('webpack');
const Merge = require('webpack-merge');
const BaseConfig = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PORT = 9000;

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body',
  title: 'Make a Snapcode &bull; Snapchat',
});

module.exports = Merge(BaseConfig, {
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  devtool: '#source-map',
  plugins: [HtmlWebpackPluginConfig],
  devServer: {
    port: PORT,
    stats: 'minimal',
  },
});
