var Template = require('../index.js').Template;
var e = require('element.js').e;

Template.prototype.setType = function (type) {
	this.body.removeClass([ 'btn-default', 'btn-primary', 'btn-success', 'btn-info', 'btn-warning', 'btn-danger', 'btn-link']);
	this.body.addClass(['btn-',type].join(''));
};

Template.prototype.setSize = function (size) {
	this.body.removeClass([ 'btn-xs', 'btn-sm', 'btn-md', 'btn-lg' ]);
	this.body.addClass(['btn-', size].join(''));
};

Template.prototype.setBlock = function (bool) {
	if (bool) {
		this.body.addClass('btn-block');
	} else {
		this.body.removeClass('btn-block');
	}
};

Template.prototype.setActive = function (bool) {
	if (bool) {
		this.body.addClass('active');
	} else {
		this.body.removeClass('active');
	}
};

Template.prototype.setDisabled = function (bool) {
	if (bool) {
		this.body.attr('disabled', 'disabled');
	} else {
		delete this.body.attrs.disabled
	}
};

Template.prototype.setNavbar = function (bool) {
	if (bool) {
		this.body.addClass('navbar-btn');
	} else {
		this.body.removeClass('navbar-btn');
	}
};

var button = new Template();
button.body = e.button();
button.body.addClass(['btn','btn-default']);
exports.Template = button;

