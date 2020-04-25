const chalk = require("chalk");

module.exports = ({ dir, options, config }) => {
  console.log(`Init... ${chalk.green(workingDir)}`, dir, options, config);
};
