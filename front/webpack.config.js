const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'static')
    },
    module: {
        rules: [
        {
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
           loader : "css-loader",options:{importLoaders:1}
          },
            'postcss-loader'
        ]
      }

        ]
    },
    mode: 'development'
};