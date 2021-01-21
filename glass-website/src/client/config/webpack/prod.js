const path = require("path");
const SRC_DIR = path.join(__dirname, "../../src/index.tsx");
const DIST_DIR = path.join(__dirname, "../../public");

module.exports = {
  mode: "production",
  entry: SRC_DIR,
  devtool: "source-map",
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};
