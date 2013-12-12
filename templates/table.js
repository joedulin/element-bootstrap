var Template = require('elementfw').Template;
var e = require('element.js').e;

var table = new Template();
table.body = e.table(null,{
	classes: ['table']
});

exports.Template = table;
