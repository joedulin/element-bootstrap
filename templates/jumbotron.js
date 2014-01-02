var Template = require('../index.js').Template;
var e = require('element.js').e;

var jumbotron = new Template();
jumbotron.body = e.div([], { classes: [ 'jumbotron' ] });
exports.Template = jumbotron;
