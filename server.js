const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const devConfig = require('./webpack.config');

const port = (process.env.port || 8080);
const app = express();
const isDeveloping = process.env.NODE_ENV !== 'production';

if (isDeveloping) {
    const compiler = webpack(devConfig);
    let middleware = webpackDevMiddleware(compiler);

    app.use(webpackHotMiddleware(compiler));
    app.use(middleware);

    app.get('*', (_, res) => {
        res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '/dist/index.html')));
        res.end();
    });

} else {
    let indexPath = path.join(__dirname, '/dist/index.html');
    let publicPath = express.static(path.join(__dirname, '/dist'));

    app.use('/dist', publicPath);
    app.get('*', (_, res) => {
        res.sendFile(indexPath);
    });

}

app.listen(port);
console.log(`💁🏾 Rockin' and rollin' at http://localhost:${port}`);
