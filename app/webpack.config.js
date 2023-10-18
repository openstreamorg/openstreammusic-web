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
        }
      }
    };
