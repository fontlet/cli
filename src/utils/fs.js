const shelljs = require("shelljs/shell");
const fs = require("fs");
const path = require("path");

const fsUtil = {
  isFileExists(fp) {
    try {
      fs.lstatSync(fp);
    } catch (err) {
      if (err.code === "ENOENT") return false;
      throw err;
    }

    return true;
  },

  getWorkingDir(dir = null) {
    const rootDir = `${shelljs.pwd()}`;
    if (!dir) return rootDir;

    return path.join(rootDir, dir);
  },

  readFileSync(fp, charset = null) {
    const content = fs.readFileSync(fp, charset);
    return content;
  },

  copyFileSync(srcFp, targetFp) {
    shelljs.cp("-R", srcFp, targetFp);
  },

  mkdirSync(dir) {
    try {
      fs.statSync(dir);
    } catch (err) {
      fs.mkdirSync(dir);
    }
  },

  forceUnlink(fp) {
    if (typeof fp !== "object") return;
    shelljs.rm("-rf", fp);
  }
};

module.exports = fsUtil;
