const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  entry: './src/server',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
    publicPath: '/'
  },
  target: 'node',
  mode: process.env.NODE_ENV || 'none',
  externals: nodeExternals(),
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};
