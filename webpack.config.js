'use strict'

module.exports = {
  entry: {
    sort: './test/sort.ts',
    toposort: './test/toposort.ts'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.ts']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts',
        exclude: /node_modules/
      }
    ],
  }
}
