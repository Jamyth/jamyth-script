#!/usr/bin/env node
const program = require("commander");
const pkg = require("../package.json");
const { validateProjectName } = require("../helpers/args-validation");

const { createFolder } = require("../core/path");
const createFiles = require("../core/file-write");
const installPkg = require("../core/pkg-install");

const { Module } = require("../core/module");

require("colors");

program.version(pkg.version);

program
  .command("new <project_name>")
  .description("Create a new React Typescript Project")
  .action((project_name) => {
    validateProjectName(project_name);
    createFolder(project_name);
    createFiles(project_name);
    installPkg(project_name);
  });

program
  .command("generate <module> <name>")
  .alias("g")
  .option("-a, --asset")
  .option("-s, --state")
  .description("Generate Module for webapp")
  .action((module, name, option) => {
    Module.run(module, name, option);
  });

program.parse(process.argv);
