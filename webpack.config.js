const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.mjs',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'index.mjs'
  },
  devServer: {
    contentBase: './docs'
  },
  plugins: [
    new CopyPlugin([
      { from: 'src/index.html', to: './' },
      // { from: 'src/style.css', to: './' },
    ]),
  ],
};