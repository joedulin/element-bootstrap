var Template = require('../index.js').Template;
var e = require('element.js').e;

Template.prototype.setHeader = function (text) {
	this.e.header.inner = [];
	this.e.header.append([ text, this.e.sub ]);
};

Template.prototype.setSubheader = function (text) {
	this.e.sub.inner = [];
	this.e.sub.append(text);
};

var pageheader = new Template();
pageheader.e.sub = e.small();
pageheader.e.header = e.h1(pageheader.e.sub);
pageheader.body = e.div([pageheader.e.header], { classes: [ 'page-header' ] });
exports.Template = pageheader;
