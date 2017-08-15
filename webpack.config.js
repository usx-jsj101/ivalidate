 var path = require("path")
 var flowWebpackPlugin = require('flow-webpack-plugin');

 module.exports = {
     entry: './src/IValidate.js',
     output: {
         path: path.join(__dirname, './dist'),
         filename: 'ivalidate.js'
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
         new flowWebpackPlugin()
     ]
 };