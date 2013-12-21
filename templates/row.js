var Element = require('element.js').Element;
var Template = require('../index.js').Template;

var row = new Template();
row.body = new Element('div',{classes: ['row']});
exports.Template = row;
