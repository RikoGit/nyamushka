const { join } = require("path");

const isDev = process.env.NODE_ENV === "development";

const rootDir = join(__dirname, "..");
const staticDir = join(rootDir, ".");

module.exports = {
  entry: "./index.jsx",
  mode: isDev ? "development" : "production",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { importLoaders: 1, modules: true, sourceMap: isDev },
          },
        ],
      },
    ],
  },
  output: {
    filename: "index.js",
    path: join(staticDir, "build"),
    publicPath: "/",
  },
};
