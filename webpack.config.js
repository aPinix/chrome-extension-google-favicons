const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const tsRule = {
  test: /\.(ts|tsx)?$/,
  exclude: /node_modules/,
  use: {
    loader: 'ts-loader'
  }
};

const cssRule = {
  test: /\.(css|scss|sass)$/i,
  use: [
    MiniCssExtractPlugin.loader,
    { loader: 'css-loader', options: { importLoaders: 2 } },
    { loader: 'postcss-loader' },
    { loader: 'sass-loader' }
  ]
};

const plugins = [
  // new HtmlWebpackPlugin({
  //   template: './src/popup.html',
  //   filename: 'popup.html',
  //   chunks: ['popup']
  // }),
  new CopyWebpackPlugin({
    patterns: [{ from: 'public', to: '.' }]
  }),
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: 'styles.css',
    chunkFilename: '[id].[contenthash].css'
  })
];

module.exports = {
  entry: {
    // popup: './src/popup.tsx',
    contentscript: './src/contentscript.ts'
    // serviceworker: './src/serviceworker.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [tsRule, cssRule]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  plugins
};
