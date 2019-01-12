const path = require('path');
const SRC_DIR = path.join(__dirname, '/react-client/src');
const DIST_DIR = path.join(__dirname, '/react-client/dist');
const webpack = require('webpack');

module.exports = {
  mode: "development",
  entry: `${SRC_DIR}/index.js`,
  output: {
    path: DIST_DIR,
    filename: 'js/bundle.js',
  },
  module : {
    rules : [
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[name]___[local]___[hash:base64:5]"
            }
          },
          {
            loader: "less-loader"
          }
        ]
      },
      {
        test: /\.(pdf|gif|png|jpe?g|svg)$/,
        loader: 'file-loader',
        options: {
          localIdentName: "[path][name].[ext]"
        }
      },
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',      
        query: {
          presets: ['react', 'env']
       }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};