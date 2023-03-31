const { https } = require('firebase-functions');
const { default: next } = require('next');
const { join } = require('path');

const dev = process.env.NODE_ENV !== 'production';

const directory = join(__dirname, '..', 'next.config.js');
const nextjsDistDir = join(__dirname, '..', require(directory).distDir);
const nextjsServer = next({
    dev: dev,
    conf: nextjsDistDir,
});
const nextjsHandle = nextjsServer.getRequestHandler();

exports.nextjsFunc = https.onRequest((req, res) => {
    console.log('req: ', req);
    console.log('res: ', res);
    return nextjsServer.prepare().then(() => nextjsHandle(req, res));
});
