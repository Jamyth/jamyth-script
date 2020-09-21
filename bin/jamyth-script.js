#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json');
const { validateProjectName } = require('../helpers/args-validation');
require('colors');

program
  .version(pkg.version)
  .option('-p,  --project <project>', 'Project Name', '')
  .parse(process.argv);

const projectName = program.project;

validateProjectName(projectName);

console.log(projectName);
