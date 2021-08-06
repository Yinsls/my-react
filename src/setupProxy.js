const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(createProxyMiddleware('/api', {
    target: 'http://1.15.84.173',
    changeOrigin: true,
    ws: true,
  }));

  app.use(createProxyMiddleware('/getApi', {
    target: 'http://1.15.84.173',
    changeOrigin: true,
    ws: true,
    pathRewrite: {
      '^/getApi': ''
    }
  }));
};