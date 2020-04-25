const chalk = require("chalk");

module.exports = ({ dir, options, config }) => {
  console.log(`${chalk.green("Init...")}`, dir, options, config);
};
