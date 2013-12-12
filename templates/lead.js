var Template = require('elementfw').Template;
var e = require('element.js').e;

var lead = new Template();
lead.body = e.p(null,{
	classes: ['lead']
});

exports.Template = lead;
