var Template = require('../index.js').Template;
var e = require('element.js').e;

Template.prototype.setType = function (type) {
	switch (type) {
		case 'button':
			this.e.pre.removeClass('input-group-addon');
			this.e.pre.addClass('input-group-btn');
			this.e.post.removeClass('input-group-addon');
			this.e.post.addClass('input-group-btn');
			break;
		case 'button-dropdown':
			this.e.pre.tag = 'div';
			this.e.post.tag = 'div';
			this.setType('button');
			break;
		case 'none':
		default:
			this.e.pre.tag = 'span';
			this.e.post.tag = 'span';
			this.e.pre.removeClass('input-group-btn');
			this.e.post.removeClass('input-group-btn');
			this.e.pre.addClass('input-group-addon');
			this.e.post.addClass('input-group-addon');
			break;
	}
};

Template.prototype.setPre = function (element) {
	if (Array.isArray(element)) {
		this.e.pre.inner = element;
	} else {
		this.e.pre.inner = [ element ];
	}
};

Template.prototype.setPost = function (element) {
	if (Array.isArray(element)) {
		this.e.post.inner = element;
	} else {
		this.e.post.inner = [ element ];
	}
};

Template.prototype.setInput = function (element) {
	element.addClass('form-control');
	this.e.input = element;
};

Template.prototype.setSize = function (size) {
	this.body.removeClass([ 'input-group-xs', 'input-group-sm', 'input-group-md', 'input-group-lg' ]);
	this.body.addClass(['input-group-', size].join(''));
};

var inputGroup = new Template();
inputGroup.body = e.div([], { classes: [ 'input-group' ]});
inputGroup.e.pre = e.span([], { classes: [ 'input-group-addon' ]});
inputGroup.e.post = e.span([], { classes: [ 'input-group-addon' ]});
inputGroup.e.input = e.input('text');
inputGroup.body.inner = [ inputGroup.e.pre, inputGroup.e.input, inputGroup.e.post ];
exports.Template = inputGroup;
