 var path = require("path")
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const CleanWebpackPlugin = require('clean-webpack-plugin');

 module.exports = {
     entry: './src/index.js',
     output: {
         path: path.join(__dirname, './dist'),
         filename: 'ivalidate.js',
		 libraryTarget: 'umd', // Or 'var' by default
     },
     module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }]
     },
     plugins: [
		 new CleanWebpackPlugin(['dist']),
		 new HtmlWebpackPlugin({
			   title: 'Production'
		 })
     ]
 };
