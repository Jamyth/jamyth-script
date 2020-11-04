const fs = require("fs");
/**
 *
 * @param {string} name
 */
exports.createFile = (name, option) => {
  const moduleName = name
    .split(/ |_/g)
    .map((_) => _[0].toUpperCase() + _.slice(1))
    .join("");

  const index_ts = `
export { ${moduleName} as Main } from './component/Main';
    `;
  const main_tsx = `
import React from 'react';
import './index.scss';
    
interface Props {}

export const ${moduleName} = React.memo(({}: Props) => {
  return <div id='${name}'/>
})
    `;

  const type_ts = `
export interface State {}
`;

  const index_scss = `
#${name} {}    
`;

  const PATH_PREFIX = `src/module/${name}`;
  const index_ts_path = `${PATH_PREFIX}/index.ts`;
  const main_tsx_path = `${PATH_PREFIX}/component/Main.tsx`;
  const index_scss_path = `${PATH_PREFIX}/component/index.scss`;
  const type_ts_path = `${PATH_PREFIX}/type.ts`;

  const paths = [index_ts_path, main_tsx_path, index_scss_path].concat(
    option.state ? [type_ts_path] : []
  );
  const content = [index_ts, main_tsx, index_scss, type_ts];

  paths.forEach((path, index) => {
    console.log(`creating ${path}...`);
    fs.writeFileSync(path, content[index]);
    console.log(`${path} is created successfully\n`.green);
  });

  console.log("Files Generation Completed\n");
};

exports.createComponent = (name) => {
  const moduleName = name
    .split(/ |_/g)
    .map((_) => _[0].toUpperCase() + _.slice(1))
    .join("");

  const index_tsx = `
import React from 'react';
import './index.scss';

interface Props {}

export const ${moduleName} = React.memo(({}: Props) => {
  return <div id='${moduleName.toLowerCase()}'/>
})
`;

  const index_scss = `
#${moduleName.toLowerCase()} {}
`;

  const PATH_PREFIX = `src/component/${name}`;
  const index_tsx_path = `${PATH_PREFIX}/index.tsx`;
  const index_scss_path = `${PATH_PREFIX}/index.scss`;

  const paths = [index_tsx_path, index_scss_path];
  const content = [index_tsx, index_scss];

  paths.forEach((path, index) => {
    console.log(`creating ${path}...`);
    fs.writeFileSync(path, content[index]);
    console.log(`${path} is created successfully\n`.green);
  });

  console.log("Files Generation Completed\n");
};
