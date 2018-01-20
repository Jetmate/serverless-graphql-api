const path = require('path')
const nodeExternals = require('webpack-node-externals')
const slsw = require('serverless-webpack')

const entries = Object.assign({}, slsw.lib.entries)

Object.keys(entries).forEach(key => {
  entries[key] = ['babel-polyfill', entries[key]]
})


module.exports = {
  entry: entries,
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [{
      test: /\.js$/,
      use: [
        'imports-loader?graphql',
        {
          loader: 'babel-loader',
        },
      ],
    }],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      src: path.resolve('src')
    }
  },
}
