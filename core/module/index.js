const fs = require("fs");
const path = require("path");
const { generate } = require("../path");
const { createFile, createComponent } = require("./files");

class Module {
  static run(type, name, option) {
    switch (type) {
      case "component":
        return this.generateComponent(name, option);
      case "module":
        return this.generateModule(name, option);
      default:
        throw new Error("Type is not defined");
    }
  }

  static generateModule(name, option) {
    console.log("Validating src/module directory".blue);
    const src = "src";

    if (!fs.existsSync(`${src}`) || !fs.statSync(`${src}`).isDirectory()) {
      throw new Error("src is not a directory");
    }
    if (
      !fs.existsSync(`${src}/module`) ||
      !fs.statSync(`${src}/module`).isDirectory()
    ) {
      throw new Error("module is not a directory");
    }

    if (fs.existsSync(`${src}/module/${name.replace(/_/g, "-")}`)) {
      throw new Error("module is exist");
    }

    const splitted = name.split("/");
    if (splitted.length > 1) {
      splitted.reduce((prev, curr) => {
        const path = `${prev}/${curr}`;
        generate(`${src}/module/${path}`);
        return path;
      }, "");
    }
    // generate(`${src}/module/${name.replace(/_/g, "-")}`);
    generate(`${src}/module/${name.replace(/_/g, "-")}/component`);

    if (option.asset) {
      generate(`${src}/module/${name.replace(/_/g, "-")}/asset`);
    }

    createFile(name, option);

    console.log(`module ${name} is generated`.green);
  }

  static generateComponent(name, option) {
    console.log("Validating src/component directory".blue);
    const src = "src";

    if (!fs.existsSync(`${src}`) || !fs.statSync(`${src}`).isDirectory()) {
      throw new Error("src is not a directory");
    }

    if (
      !fs.existsSync(`${src}/component`) ||
      !fs.statSync(`${src}/component`).isDirectory()
    ) {
      throw new Error("component is not a directory");
    }

    const folderName = name.replace(/_/g, "-");
    if (fs.existsSync(`${src}/component/${folderName}`)) {
      throw new Error(`component/${folderName} is exist`);
    }

    generate(`${src}/component/${folderName}`);

    if (option.asset) {
      generate(`${src}/component/${folderName}/asset`);
    }

    createComponent(folderName, option);
  }
}

exports.Module = Module;
