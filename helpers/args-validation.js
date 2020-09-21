const validateProjectName = (project_name) => {
  if (!project_name) {
    console.log('You need to provide a Project Name.\n'.red);
    console.log('Usage:\n'.red);
    console.log('jamyth-script -p <your_project_name>'.red.bold);
    process.exit(1);
  }
  if (project_name.toLowerCase() !== project_name) {
    console.log(
      `Cannot create a project named `.red +
        `"${project_name}"`.yellow +
        ` because of npm naming restrictions\n`.red
    );
    console.log(`   * name can no longer contain capital letters\n`.red);
    console.log('Please choose a different project name.'.red);
    process.exit(1);
  }
};

module.exports = { validateProjectName };
