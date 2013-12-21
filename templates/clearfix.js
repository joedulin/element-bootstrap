var Template = require('../index.js').Template;
var e = require('element.js').e;

var cf = new Template();
cf.body = e.div([], { classes: ['clearfix'] });
exports.Template = cf;
