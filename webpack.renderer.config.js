const rules = require("./webpack.rules");
const plugins = require("./webpack.plugins");
const HtmlWebpackPlugin = require('html-webpack-plugin');

rules.push({
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }],
});

rules.push({
  test: /\.(png|jpe?g|gif)$/i,
  use: [
    {
      loader: "file-loader",
    },
  ],
});

module.exports = {
  "entry": {
    "js": "./src/renderer.ts",
  },
  output: {
    filename: 'index.js',
    path: __dirname + '/renderer',
    publicPath: '',
  },
  module: {
    rules,
  },
  plugins: [
    ...plugins,
    new HtmlWebpackPlugin({ template: "./src/index.html" })
  ],
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"]
  },
  target: "electron-renderer",
};
