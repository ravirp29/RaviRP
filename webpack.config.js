const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/main.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },
   devServer: {
      inline: true,
      port: 8001
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
            
         },
         {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          },
          {
            test: /\.scss?$/,
            loaders: ['style', 'css', 'sass']
          }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './public/index.html'
      })
   ]
}