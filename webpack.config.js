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
            // Use can only include required modules. Also install the package.
            // for example: npm install --save-dev assert
            url: require.resolve('url'),
            fs: require.resolve('fs'),
            assert: require.resolve('assert'),
            buffer: require.resolve('buffer'),
            stream: require.resolve('stream-browserify')
        }
    }
};
