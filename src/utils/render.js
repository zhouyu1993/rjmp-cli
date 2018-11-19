const fs = require('fs')

const handlebars = require('handlebars')

module.exports = function render (data) {
  return new Promise((resolve, reject) => {
    const files = [
      `${data.name}/package.json`,
      `${data.name}/README.md`,
      `${data.name}/src/project.config.json`,
      `${data.name}/src/app.json`,
      `${data.name}/src/utils/constants.js`,
      `${data.name}/src/lib/ald/ald-stat-conf.js`,
    ]

    files.forEach(file => {
      if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf-8')
        const result = handlebars.compile(content)(data)

        fs.writeFileSync(file, result, 'utf8')
      }
    })

    resolve()
  })
}
