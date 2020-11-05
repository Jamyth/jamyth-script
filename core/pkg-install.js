const { exec } = require("child-process-promise");

const dependencies = ["react", "react-dom"];

const devDependencies = [
  "@types/react",
  "@types/react-dom",
  "ts-loader",
  "css-loader",
  "html-webpack-plugin",
  "node-sass",
  "sass-loader",
  "source-map-loader",
  "style-loader",
  "typescript",
  "url-loader",
  "file-loader",
  "webpack@4.44.2",
  "webpack-dev-server@3.11.0",
  "webpack-cli@3.3.12",
];

const install = async (project_name) => {
  console.log("Installing Dependencies, please wait...".bold);
  await exec(`cd ${project_name} && yarn add ${dependencies.join(" ")}`).then(
    (result) => {
      const log = result.stdout;
      console.log(log.green);
    }
  );
  console.log("Installing Dev Dependencies, please wait...".bold);
  await exec(
    `cd ${project_name} && yarn add -D ${devDependencies.join(" ")}`
  ).then((result) => {
    const log = result.stdout;
    console.log(log.green);
  });

  console.log("Packaged installed successfully".green);

  console.log(
    "Congratulations, jamyth-script boiler-plate successfully installed\n".blue
  );
  console.log(`   * to start you dream project, run:\n`.blue);
  console.log(`   cd ${project_name}`.blue.bold);
  console.log(`   yarn start\n`.blue.bold);
  console.log(`   * to generate a production build, run:\n`.blue);
  console.log(`   cd ${project_name}`.blue.bold);
  console.log(`   yarn build\n`.blue.bold);
  console.log("Enjoy your time !\n".yellow.bold);
  console.log("You're welcomed to help update this cli.".blue.italic);
  console.log("Check out this link below.".blue.italic);
  console.log("https://github.com/Jamyth/jamyth-script-cli\n\n".green);
};

module.exports = install;
