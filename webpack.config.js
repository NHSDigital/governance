// External dependencies
const path = require('path');

// Local dependencies
const config = require('./app/config');

module.exports = {
  mode: config.env,
  entry: {
    main: './app/scripts/main.js',
  },
  output: {
    filename: 'main.bundle.min.js',
    path: path.resolve(__dirname, 'public/js'),
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    }],
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  devtool: 'source-map',
};
