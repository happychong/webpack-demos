var path = require('path');
var webpack = require('webpack');

var pathToReact = path.join(__dirname, "./node_modules/react/dist/react.js");
var pathToReactDOM = path.join(__dirname, "./node_modules/react-dom/dist/react-dom.js");

var HtmlWebpackPlugin = require('html-webpack-plugin');
var openBrowserWebpackPlugin = require('open-browser-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        index:[
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:7777',
            path.resolve(__dirname, 'src/index.js'),
        ],
        vendor: ['react', 'react-dom']
    },
    // entry: {
    //     entry1: './src/entry1.js',
    //     entry2: './src/entry2.js'
    // },
    output: {
        path: path.resolve(__dirname, 'build'),
        // filename: '[name].js'
        filename: 'bundle.js?[hash]'
    },
    devServer: {
      publicPath: "/static/",
      stats: { colors: true },
      port: 7777,
      contentBase: 'build',
      inline: true
    //   hot: true
    },
    resolve: {
      extensions: ["", ".js", ".jsx", ".css", ".json"]
    //   这个加上后报错，后续查找资料
    //   alias: {
    //       'react': pathToReact,
    //       'react-dom': pathToReactDOM
    //   }
    },
    devtool: 'cheap-module-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel-loader'],
                exclude: path.resolve(__dirname, 'node_modules')
                // about init.js
                // test: /\.js$/,
                // exclude: /node_modules/,
                // loader: 'babel-loader',
                // query: {
                //     presets: ['es2015', 'react']
                // }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            {
                test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000"
            }
        ],
        noParse: [pathToReact, pathToReactDOM]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("bundle.css?[hash]"),
        new HtmlWebpackPlugin({
            title: 'zhufeng-react',
            tempate: './src/index.html'
        }),
        // new webpack.optimize.CommonsChunkPlugin('init.js'),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js?[hash]'),
        new openBrowserWebpackPlugin({ url: 'http://localhost:7777' })
    ]
}
