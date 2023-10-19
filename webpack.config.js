const path = require('path');
module.exports = {
    entry: './renderer.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'webpack.dist.js'
    },
    resolve: {
        alias: {
            'node_modules': path.join(__dirname, 'node_modules'),
        },
        fallback: {
            "fs": false,
            "tls": false,
            "net": false,
            "path": false,
            "zlib": false,
            "http": false,
            "https": false,
            "stream": false,
            "crypto": false
        }
    }
};
