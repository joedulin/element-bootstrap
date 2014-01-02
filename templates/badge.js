var Template = require('../index.js').Template;
var e = require('element.js').e;

Template.prototype.setText = function (text) {
	this.body.inner = [];
	this.body.append(text);
};

var badge = new Template();
badge.body = e.span([], { classes: [ 'badge' ] });
exports.Template = badge;
