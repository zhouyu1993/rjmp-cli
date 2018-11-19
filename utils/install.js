const path = require('path')
const spawn = require('child_process').spawn

const chalk = require('chalk')
const logSymbols = require('log-symbols')

const log = console.log

/**
 * Spawns a child process and runs the specified command
 * By default, runs in the CWD and inherits stdio
 * Options are the same as node's child_process.spawn
 * @param {string} cmd
 * @param {array<string>} args
 * @param {object} options
 */
function runCommand (cmd, args, options) {
  return new Promise((resolve, reject) => {
    const spwan = spawn(
      cmd,
      args,
      Object.assign(
        {
          cwd: process.cwd(),
          stdio: 'inherit',
          shell: true,
        },
        options,
      )
    )

    spwan.on('error', (e) => {
      log(chalk.red('Error:'), e)

      resolve()
    })

    spwan.on('exit', (code) => {
      resolve()
    })
  })
}

/**
 * Runs `npm install` in the project directory
 * @param {string} cwd Path of the created project directory
 * @param {object} data Data from questionnaire
 */

function installDependencies (
  cwd,
  executable = 'npm',
  color
) {
  log(`\n# ${color('Installing project dependencies ...')}`)
  log('# ==================================\n')

  return runCommand(executable, ['install'], {
    cwd,
  })
}

/**
 * Prints the final message with instructions of necessary next steps.
 * @param {Object} data Data from questionnaire.
 */
function printMessage (data, { green, yellow }) {
  log(logSymbols.success, green('Project initialization finished!'))

  const message = `
# ==================================
To get started:

${yellow(`cd ${data.name}\n${data.autoInstall ? '' : 'npm install (or if using yarn: yarn)\n'}npm run dev`)}

Documentation can be found at https://zhouyu1993.github.io
`

  log(message)
}

module.exports = function install (data) {
  const cwd = path.join(process.cwd(), data.name)

  if (data.autoInstall) {
    installDependencies(cwd, data.autoInstall, chalk.green)
      .then(() => {
        printMessage(data, chalk)
      })
      .catch(e => {
        log(chalk.red('Error:'), e)
      })
  } else {
    printMessage(data, chalk)
  }
}
