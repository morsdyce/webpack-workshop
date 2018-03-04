let failureMessage = `
    There was an error validating your installation.
    Please make sure you are running node version >= 6.11.5 (you can check by running node -v)
    Please make sure that all the modules are installed by running npm install in the project directory
  `;

try {
  const webpack           = require('webpack');
  const path              = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const currentDirectory = path.resolve(__dirname, '..');

  const config = {
    entry: './src/index',
    output: {
      filename: '[name].js',
      path: path.join(__dirname, 'dist'),
      publicPath: "/"
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(currentDirectory, 'index.html')
      })
    ]
  };

  console.log('verifying... please wait');
  webpack(config, (err, stats) => {
    if (err || stats.hasErrors()) {
      console.log(failureMessage);
    } else {
      console.log('Installation verified!');
    }
  });
} catch (err) {
  console.log(failureMessage)
}

