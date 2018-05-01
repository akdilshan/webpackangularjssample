

const path = require("path");
var webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


module.exports = {
context: __dirname + '/app',
entry: {
app: './app.js',
vendor: ['angular']
},
output: {
path: __dirname + '/js',
filename: 'app.bundle.js'
},
mode: 'development',
 
 optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          test: path.resolve(__dirname, "node_modules"),
          name: "vendor",
          enforce: true
        }
      }
    }
  },
  plugins: [
    new UglifyJsPlugin({
        cache: true
    })
  ]

};