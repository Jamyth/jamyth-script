const fs = require('fs');
const createFolder = (project_name) => {
  if (!fs.existsSync(project_name)) {
    fs.mkdirSync(projectName);
  }
};

module.exports = { createFolder };
