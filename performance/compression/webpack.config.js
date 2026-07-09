const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
   module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              [
                "@babel/preset-react",
                {
                  runtime: "automatic",
                },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new CompressionPlugin({
      algorithm: "gzip" // gzip further reduces the size of bundles, but brotli is more efficient and is supported by most of the moderen browsers. 
      // You can also use "brotliCompress" for brotli compression
    }),

    new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html')
    })
  ]
};