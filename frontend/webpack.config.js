var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './frontend/index.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }

};
