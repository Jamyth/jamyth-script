const fs = require("fs");
const createFolder = (project_name) => {
  console.log("Checking Folder...");
  if (!fs.existsSync(project_name)) {
    console.log("Folder is not exist, creating...".blue);
    fs.mkdirSync(project_name);
    console.log(`Folder ${project_name} is created\n`.green);
  }

  console.log("Checking src folder...");
  if (!fs.existsSync(`${project_name}/src`)) {
    console.log("Folder src is not exist, creating...".blue);
    fs.mkdirSync(`${project_name}/src`);
    console.log(`Folder src is created\n`.green);
  }
  console.log("Folder Checking Completed\n".bold.green);
};

module.exports = { createFolder };
