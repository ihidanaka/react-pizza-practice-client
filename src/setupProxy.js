const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://5.187.0.127:4000',
            changeOrigin: true,
        })
    );
};