var Template = require('../index.js').Template;
var e = require('element.js').e;

Template.prototype.setIcon = function (name) {
	this.body.classes = [ 'glyphicon', 'glyphicon-'+name ];
};

var icon = new Template();
icon.body = e.span([], { classes: [ 'glyphicon', 'glyphicon-warning-sign' ] });
exports.Template = icon;
