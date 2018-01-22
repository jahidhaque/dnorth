/*
|----------------------------------------------
| setting up webpack for the application
| @author: jahid haque <jahid.haque@yahoo.com>
| @copyright: 19dnorth, 2018
|----------------------------------------------
*/
var path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {      
        welcome: ["./public/_components/welcome.jsx"]
    },
    target: 'web',
    output: {
        path: __dirname + "/public/js",
        filename: '[name].js',
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    plugins: ['transform-runtime'],
                	presets: ['es2015', 'stage-0', 'react']
                }
            }
        ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin(),
    ],

    externals: {
        // Use external version of React and ReactDOM
        "react": "React",
        "react-dom": "ReactDOM"
    },
    watch: true
};