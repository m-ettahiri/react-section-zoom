const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/Zoom.jsx',
  output: {
    path: path.resolve('lib'),
    filename: 'zoom.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
        resolve : {
            extensions : ['.jsx','.js','.css']
        }
      }, {
        test: /\.css$/i,
        use : ['css-loader']
      }
    ]
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    }
]
}