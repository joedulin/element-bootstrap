var Template = require('../index.js').Template;
var e = require('element.js').e;

Template.prototype.setText = function (text) {
	this.body.inner = [];
	this.body.append(text);
};

Template.prototype.setType = function (type) {
	this.body.removeClass([ 'label-default', 'label-primary', 'label-success', 'label-info', 'label-warning', 'label-danger' ]);
	this.body.addClass('label-'+type);
};

var label = new Template();
label.body = e.span([], { classes: [ 'label', 'label-default' ]});
exports.Template = label;
