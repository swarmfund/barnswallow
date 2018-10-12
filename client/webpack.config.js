const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({  // Also generate a test.html
  title: "Swarm Barnswallow",
  template: path.join(__dirname, "src/assets/test.html"),
  filename: "./test.html"
});

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin(), // Generates default index.html
    htmlWebpackPlugin,
    // Ignore native modules
    new webpack.IgnorePlugin(/ed25519/)
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    port: 3001
  }

};

/*
module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: (filePath) => filePath.endsWith('.js') && !filePath.endsWith('.spec.js'),
        exclude: /(node_modules)|(src\/test)/,
        use: { loader: 'babel-loader' }
      }
    ]
  },
  output: {
    library: 'Sdk',
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // Ignore native modules
    new webpack.IgnorePlugin(/ed25519/)
  ]
}
*/

