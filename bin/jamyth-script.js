#!/usr/bin/env node
const program = require("commander");
const pkg = require("../package.json");
const { validateProjectName } = require("../helpers/args-validation");

const { createFolder } = require("../core/path");
const createFiles = require("../core/file-write");
const installPkg = require("../core/pkg-install");

require("colors");

program
  .version(pkg.version)
  .option("-p,  --project <project>", "Project Name", "")
  .parse(process.argv);

const projectName = program.project;

validateProjectName(projectName);

createFolder(projectName);
createFiles(projectName);
installPkg(projectName);
