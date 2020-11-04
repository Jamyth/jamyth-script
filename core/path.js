const fs = require("fs");
const createFolder = (project_name) => {
  console.log("Checking Folder...");

  generate(`${project_name}`);
  generate(`${project_name}/static`);
  generate(`${project_name}/src`);
  generate(`${project_name}/src/module`);
  generate(`${project_name}/src/module/main`);
  generate(`${project_name}/src/module/main/component`);
  generate(`${project_name}/src/component`);
  generate(`${project_name}/src/asset`);
  generate(`${project_name}/src/util`);

  console.log("Folder Checking Completed\n".bold.green);
};

const generate = (dir) => {
  console.log(`Checking ${dir} folder...`);
  if (!fs.existsSync(dir)) {
    console.log(`Folder ${dir} is not exist, creating...`.blue);
    fs.mkdirSync(dir);
  }
  console.log(`${dir} resolved...`.grey);
};

module.exports = { createFolder, generate };
