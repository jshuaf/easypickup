require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'src/client/public');
const APP_DIR = path.resolve(__dirname, 'src/client/app');

const config = {
  entry: `${APP_DIR}/components/index.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loader: 'babel',
      },
      {
        test: /\.css?$/,
        include: APP_DIR,
        loaders: ['style', 'css', 'sass'],
      },
    ],
  },
};

module.exports = config;
