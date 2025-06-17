const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'otel-api.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'OpenTelemetry',
    libraryTarget: 'umd'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,       // For JS files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: {
                  ie: '11'     // Target IE11 and other older browsers
                },
                useBuiltIns: 'entry',
                corejs: 3
              }]
            ]
          }
        }
      }
    ]
  }
};
