"use strict";

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.promise");

var path = require('path');

var spawn = require('child_process').spawn;

var chalk = require('chalk');

var logSymbols = require('log-symbols');

var log = console.log;
/**
 * Spawns a child process and runs the specified command
 * By default, runs in the CWD and inherits stdio
 * Options are the same as node's child_process.spawn
 * @param {string} cmd
 * @param {array<string>} args
 * @param {object} options
 */

function runCommand(cmd, args, options) {
  return new Promise(function (resolve, reject) {
    var spwan = spawn(cmd, args, Object.assign({
      cwd: process.cwd(),
      stdio: 'inherit',
      shell: true
    }, options));
    spwan.on('error', function (e) {
      log(chalk.red('Error:'), e);
      resolve();
    });
    spwan.on('exit', function (code) {
      resolve();
    });
  });
}
/**
 * Runs `npm install` in the project directory
 * @param {string} cwd Path of the created project directory
 * @param {object} data Data from questionnaire
 */


function installDependencies(cwd) {
  var executable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'npm';
  var color = arguments.length > 2 ? arguments[2] : undefined;
  log("\n# ".concat(color('Installing project dependencies ...')));
  log('# ==================================\n');
  return runCommand(executable, ['install'], {
    cwd: cwd
  });
}
/**
 * Prints the final message with instructions of necessary next steps.
 * @param {Object} data Data from questionnaire.
 */


function printMessage(data, _ref) {
  var green = _ref.green,
      yellow = _ref.yellow;
  log(logSymbols.success, green('Project initialization finished!'));
  var message = "\n# ==================================\nTo get started:\n\n".concat(yellow("cd ".concat(data.name, "\n").concat(data.autoInstall ? '' : 'npm install (or if using yarn: yarn)\n', "npm run dev")), "\n\nDocumentation can be found at https://zhouyu1993.github.io\n");
  log(message);
}

module.exports = function install(data) {
  var cwd = path.join(process.cwd(), data.name);

  if (data.autoInstall) {
    installDependencies(cwd, data.autoInstall, chalk.green).then(function () {
      printMessage(data, chalk);
    }).catch(function (e) {
      log(chalk.red('Error:'), e);
    });
  } else {
    printMessage(data, chalk);
  }
};