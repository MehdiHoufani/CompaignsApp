var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var PATH = require('path');
var APP_DIR = PATH.resolve(__dirname, 'src');

var config = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath:'/'
    },
    module : {
        rules: [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel-loader',
                exclude : /node_modules/
            },
            {
                test: /\.(png|svg|jpg|gif|)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    resolveLoader: {
        moduleExtensions: ['-loader']
    },
    devtool : 'inline-source-map',
    externals:{
        React: 'react',
        ReactDom: 'react-dom'
    },
    devServer:{
        contentBase: './public',
        hot: true
    },
    plugins : [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'CampaignsApp',
            template: 'public/index.html'
        })
    ],

};

module.exports = config;