 var path = require("path")

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
     ]
 };
