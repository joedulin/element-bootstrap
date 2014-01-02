var Template = require('../index.js').Template;
var e = require('element.js').e;

Template.prototype.setSize = function (size) {
	this.body.removeClass([ 'btn-group-xs', 'btn-group-sm', 'btn-group-md', 'btn-group-lg' ]);
	this.body.addClass(['btn-group-',size].join(''));
};

Template.prototype.setVertical = function (bool) {
	if (bool) {
		this.body.addClass('btn-group-vertical');
	} else {
		this.body.removeClass('btn-group-vertical');
	}
};

Template.prototype.setJustified = function (bool) {
	if (bool) {
		this.body.addClass('btn-group-justified');
	} else {
		this.body.removeClass('btn-group-justified');
	}
};

var btnGroup = new Template();
btnGroup.body = e.div([], { classes: [ 'btn-group' ] });
exports.Template = btnGroup;
