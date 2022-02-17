
const path = require("path")


module.exports = {
  entry: './src/index.js',
  output:{
    path: path.join(__dirname,"./static/frontend"),
    filename: 'main.js'
  },
        module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: "defaults" }]
              ],
              plugins: ['@babel/plugin-proposal-class-properties']
            }
          }
        }
      ]
    },
  module: {
    rules: [
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

}