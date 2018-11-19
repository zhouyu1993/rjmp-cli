"use strict";

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.promise");

var fs = require('fs');

var handlebars = require('handlebars');

module.exports = function render(data) {
  return new Promise(function (resolve, reject) {
    var files = ["".concat(data.name, "/package.json"), "".concat(data.name, "/README.md"), "".concat(data.name, "/src/project.config.json"), "".concat(data.name, "/src/app.json"), "".concat(data.name, "/src/utils/constants.js"), "".concat(data.name, "/src/lib/ald/ald-stat-conf.js")];
    files.forEach(function (file) {
      if (fs.existsSync(file)) {
        var content = fs.readFileSync(file, 'utf-8');
        var result = handlebars.compile(content)(data);
        fs.writeFileSync(file, result, 'utf8');
      }
    });
    resolve();
  });
};