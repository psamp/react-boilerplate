var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.join(__dirname, 'app/index.html'),
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        'webpack-hot-middleware/client?path=http://localhost:8080/__webpack_hmr',
        './app/index.js'
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: 'index.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel']
            }, {
                test: /\.css$/,
                loaders: ['style', 'css']
            }, {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [new webpack.HotModuleReplacementPlugin(), HtmlWebpackPluginConfig]
};
