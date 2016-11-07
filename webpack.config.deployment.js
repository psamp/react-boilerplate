var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.join(__dirname, 'app/index.html'),
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    devtool: 'source-map',
    entry: ['./app/index.js'],
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
                loader: 'babel'
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
    plugins: [HtmlWebpackPluginConfig]
};
