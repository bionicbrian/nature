const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = env => ({
  entry: path.resolve(__dirname, 'packages/' + env.project + '/src/ts/index.ts'),
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'packages/' + env.project + '/public/js')
  },
  plugins: [
    new UglifyJSPlugin()
  ]
});
