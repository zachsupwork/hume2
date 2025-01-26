// Purpose: Webpack configuration file for the widget.

const path = require('path');

module.exports = {
  entry: './widget/index.js', // Entry point for the widget.
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Widget',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};