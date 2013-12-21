var Template = require('../index.js').Template;
var e = require('element.js').e;

var caret = new Template();
caret.body = e.span('', { classes: ['caret'] });
exports.Template = caret;
