const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = [
  new CleanWebpackPlugin(),
  new ForkTsCheckerWebpackPlugin(),
  new webpack.DefinePlugin({
    'process.env.EMUSAK_URL': `'${process.env.EMUSAK_URL}'`,
    'process.env.EMUSAK_CDN': `'${process.env.EMUSAK_CDN}'`,
  })
];
