const path = require('path');
const outputPath = path.resolve(__dirname, './dist');
const htmlContentPath = path.resolve(__dirname, './dist/html');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: outputPath,
  },
  module: {
    rules: [
      {
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  devServer: {
    contentBase: htmlContentPath
  },
};