const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
   mode: 'development',
   entry: {
      vendor: './src/js/vendor.js',
      main: './src/js/index.js'
   },
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js'
   },
   module: {
      rules: [
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
         },
         {
            test: /\.(scss|sass)$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/index.html'
      })
   ],
   devServer: {
      inline: true,
      port: 3000
   }
};
