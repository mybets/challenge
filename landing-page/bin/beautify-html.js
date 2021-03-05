// A small helper that will list all files using `glob` lib
// Usage: `node bin/glob-ls.js 'src/**/*.js'`

const glob = require("glob");
const exec = require("child_process").exec;
const path = require("path");

glob("src/**/*.html", {}, (err, files) => exec2(err, files));

function exec2(err, files) {
  if (err) throw err;
  exec(
    `node_modules${path.sep}.bin${path.sep}html-beautify ${files.join(" ")} -r`,
    (error, stdout, stderr) => {
      if (error) {
        process.stdout.write(`exec error:\n ${error}`);
        return;
      }

      if (stderr) {
        process.stdout.write(`stderr:\n ${stderr}`);
      }

      if (stdout) {
        process.stdout.write(`stdout:\n ${stdout}`);
      }
    }
  );
}
