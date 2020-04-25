const program = require("commander");
const pkg = require("../package.json");

program.version(pkg.version, "-v, --version");

program
  .command("init [dir]")
  .option("-f, --force", "Overwrites existing files, if have.")
  .option("-y, --yes", "Skip user inputs")
  .description("wp init [dir] -f -y")
  .action((dir, options) => {
    console.log(dir, options);
  });

// TODO: Put all other commands here.

program.parse(process.argv);
