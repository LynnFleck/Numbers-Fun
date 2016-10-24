const path = require('path');

module.exports = {
  devtool: 'source-map',  /// makes the errors readable back to the original files
  entry: path.join(__dirname, 'src', 'index.js'), //where the entry point is
  devServer: {
    contentBase: path.join(__dirname, 'src', 'static'),
    inline: true,
    port: 7000,
  },
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    filename: 'bundle.js',  // this is the compiled file
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node-modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
}
