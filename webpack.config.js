const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';
const isProd = env === 'production';

const extractScss = new ExtractTextPlugin({
  filename: 'index.css',
  disable: isDev
});

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      './src/app.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js',
  },
   plugins: [
     extractScss
   ],
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
           presets: ['env', 'stage-0']
        }
    },{
       test: /(\.css|\.scss)$/,
       exclude: /node_modules/,
       use: extractScss.extract({
         use:[
           {loader: 'css-loader'},
           {loader: 'sass-loader'}
         ],
         fallback: 'style-loader'
       })
     }]
  }
}