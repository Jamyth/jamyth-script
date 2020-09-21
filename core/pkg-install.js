const yarn = require('yarn-programmatic');

const dependencies = ['react', 'react-dom'];

const devDependencies = [
  'webpack',
  'webpack-dev-server',
  'webpack-cli',
  'typescript',
  'awesome-typescript-loader',
  '@types/react',
  '@types/react-dom',
  'html-webpack-plugin',
  'source-map-loader',
  'extract-text-webpack-plugin',
  'css-loader',
  'sass-loader',
  'node-sass',
];

const install = () => {
  yarn.add(dependencies, { dev: false });
  yarn.add(devDependencies, { dev: true });
};

module.exports = install;
