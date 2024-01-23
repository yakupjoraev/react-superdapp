const path = require("path");

module.exports = {
  entry: "./src/main.jsx",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: "js-loader",
            options: {
              compilerOptions: { noEmit: false },
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".js"],
  },
  output: {
    filename: "content.js",
    path: path.resolve(__dirname, "..", "extension"),
  },
};