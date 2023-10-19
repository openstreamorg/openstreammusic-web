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
            "fs": require.resolve("fs"),
            "tls": require.resolve("tls"),
            "net": require.resolve("net"),
            "path": require.resolve("path"),
            "zlib": require.resolve("zlib"),
            "http": require.resolve("http"),
            "https": require.resolve("https"),
            "stream": require.resolve("stream"),
            "crypto": require.resolve("crypto"),
            "util": require.resolve("util"),
            "buffer": require.resolve("buffer"),
            "querystring": require.resolve("querystring-es3"),
            "timers": require.resolve("timers-browserify"),
            "vm": require.resolve("vm-browserify")
        }
    },
    mode: 'development'
};
