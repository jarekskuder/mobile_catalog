const { createProxyMiddleware } = require('http-proxy-middleware');
/**
 *
 * This is for development environemnt ONLY used with "react-scripts start".
 */
module.exports = app => {
    app.use(
        createProxyMiddleware('/.api', {
            target: 'https://www.telia.se',
            followRedirects: true,
            changeOrigin: true,
            logLevel: 'debug'
        })
    );
};
