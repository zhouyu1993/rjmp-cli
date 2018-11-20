const fs = require('fs')

const commander = require('commander')
const downloadGitPepo = require('download-git-repo')
const inquirer = require('inquirer')

const chalk = require('chalk')
const logSymbols = require('log-symbols')
const ora = require('ora')

const render = require('./utils/render')
const install = require('./utils/install')

const log = console.log

const pkg = require('../package.json')

commander.version(pkg.version, '-v, --version')
.command('init <name> [repository]')
.action((name, repository) => {
  console.log(repository)
  if (!/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/.test(name)) {
    log(logSymbols.error, chalk.red('Name contains illegal characters'))

    return
  }

  if(fs.existsSync(name)){
    log(logSymbols.error, chalk.red(`Destination path '${data.name}' already exists.`))
  } else {
    inquirer.prompt([
      /* Pass your questions in here */
      {
        type: 'string',
        name: 'name',
        message: 'Project name',
        default: name,
        validate (name) {
          // Declare function as asynchronous, and save the done callback
          var done = this.async()

          // Do async stuff
          setTimeout(() => {
            if (!/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/.test(name)) {
              // Pass the return value in the done callback
              done('Name contains illegal characters')

              return
            }

            // Pass the return value in the done callback
            done(null, true)
          }, 300)
        },
      },
      {
        type: 'string',
        name: 'description',
        message: 'Project description',
        default: 'A wx-miniprogram project',
      },
      {
        type: 'string',
        name: 'author',
        message: 'Author',
        default: 'RainJoy <1490079545@qq.com>',
      },
      {
        type: 'string',
        name: 'app_id',
        message: 'app_id',
        default: 'wxb82b5f0a6f566730',
      },
      {
        type: 'string',
        name: 'app_secret',
        message: 'app_secret',
        default: '',
      },
      {
        type: 'string',
        name: 'ald_app_key',
        message: 'ald_app_key',
        default: '',
      },
      {
        type: 'list',
        name: 'autoInstall',
        message: 'Should we run `npm install` for you after the project has been created? (recommended)',
        choices: [
          {
            name: 'Yes, use NPM',
            value: 'npm',
            short: 'npm',
          },
          {
            name: 'Yes, use Yarn',
            value: 'yarn',
            short: 'yarn',
          },
          {
            name: 'Yes, use cnpm',
            value: 'cnpm',
            short: 'cnpm',
          },
          {
            name: 'No, I will handle that myself',
            value: false,
            short: 'no',
          },
        ],
      },
    ]).then((data) => {
      // Use user feedback for... whatever!!

      const spinner = ora('Downloading templates...')
      spinner.start()

      downloadGitPepo(repository || 'zhouyu1993/rjmp-template', data.name, { clone: false, }, (err) => {
        if (err) {
          spinner.fail()

          log(logSymbols.error, chalk.red(err))
        } else {
          spinner.succeed()

          render(data).then((e) => {
            install(data)
          })
        }
      })
    })
  }
})

commander.parse(process.argv)
