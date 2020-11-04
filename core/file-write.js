const fs = require("fs");

const WEBPACK_CONFIG = `
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      module: path.resolve(__dirname, 'src/module'),
      component: path.resolve(__dirname, 'src/component'),
      asset: path.resolve(__dirname, 'src/asset'),
      util: path.resolve(__dirname, 'src/util'),
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        sideEffects: true
      },
      {
        test: /\.(png|jpg|jepg|gif|svg|woff|swoff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              esModule: false,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'static/img/[name].[hash:8].[ext]',
                  esModule: false
                }
              }
            }
          }
        ]
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./static/index.html",
    }),
  ],
  devtool: "source-map",
};
`;

const INDEX_HTML = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Jamyth Page</title>
  </head>
  <body>
    <div id="_jamyth_"></div>
  </body>
</html>

`;

const INDEX_TSX = `
import React from "react";
import ReactDOM from "react-dom";
import { Main } from "module/main";

const ROOT = document.getElementById("_jamyth_");

ReactDOM.render(<Main />, ROOT);

`;

const TSCONFIG = `{
    "compilerOptions": {
      "esModuleInterop": true,
      "allowSyntheticDefaultImports": true,
      "jsx": "react",
      "module": "commonjs",
      "noImplicitAny": true,
      "outDir": "./build/",
      "preserveConstEnums": true,
      "removeComments": true,
      "sourceMap": true,
      "target": "es5",
      "baseUrl": "./src",
      "paths": {
        "module/*": ["module/*"],
        "component/*": ["component/*"],
        "asset/*": ["asset/*"],
        "util/*": ["util/*"]
      }
    },
    "include": ["./src/**/*"]
  }
  `;

const INDEX_SCSS = `
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #2b3a42;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
`;

const INDEX_APP_TS = `
export { App as Main } from './component/Main';
`;
const APP_TSX = `
import React from 'react';
import "./index.scss";

export const App = React.memo(() => {
  return (
    <div>
      <h1>Hello Jamyth!</h1>
    </div>
  );
});
`;

const writeFile = (project_name) => {
  const PACKAGE_JSON_PATH = `${project_name}/package.json`;
  const WEBPACK_CONFIG_PATH = `${project_name}/webpack.config.js`;
  const INDEX_HTML_PATH = `${project_name}/static/index.html`;
  const TSCONFIG_PATH = `${project_name}/tsconfig.json`;
  const INDEX_TSX_PATH = `${project_name}/src/index.tsx`;
  const APP_TSX_PATH = `${project_name}/src/module/main/component/Main.tsx`;
  const INDEX_APP_TS_PATH = `${project_name}/src/module/main/index.ts`;
  const INDEX_SCSS_PATH = `${project_name}/src/module/main/component/index.scss`;

  const PACKAGE_JSON = `
{
  "name": "${project_name}",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "start": "webpack-dev-server --progress --color --watch --display-error-details",
    "build": "rm -rf build && webpack --mode=production --config webpack.config.js"
  }
}
`;

  const paths = [
    PACKAGE_JSON_PATH,
    WEBPACK_CONFIG_PATH,
    INDEX_HTML_PATH,
    TSCONFIG_PATH,
    INDEX_TSX_PATH,
    APP_TSX_PATH,
    INDEX_APP_TS_PATH,
    INDEX_SCSS_PATH,
  ];

  const content = [
    PACKAGE_JSON,
    WEBPACK_CONFIG,
    INDEX_HTML,
    TSCONFIG,
    INDEX_TSX,
    APP_TSX,
    INDEX_APP_TS,
    INDEX_SCSS,
  ];

  if (!fs.existsSync(project_name)) {
    console.log("Project Path is not found.".red);
    process.exit(1);
  }

  paths.forEach((path, index) => {
    console.log(`Creating ${path}...`);
    fs.writeFileSync(path, content[index], (err) => {
      if (err) {
        throw err;
      }
    });
    console.log(`${path} is created successfully\n`.green);
  });

  console.log("Files Generation Completed\n");
};

module.exports = writeFile;
