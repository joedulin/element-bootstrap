var Template = require('../index.js').Template;
var e = require('element.js').e;
var uuid = require('node-uuid');
var close = function () {
	return e.button('&times;', {
		attrs: {
			'data-dismiss': 'modal',
			'aria-hidden': 'true',
			'type': 'button'
		}, classes: [ 'close' ]
	});
};

Template.prototype.setTitle = function (text) {
	this.e.mtitle.inner = [];
	this.e.mtitle.append(text);
};

Template.prototype.append = function (item) {
	this.e.mbody.append(item);
};

Template.prototype.setFooter = function (item) {
	this.e.mfoot.inner = [];
	this.e.mfoot.append(item);
};

Template.prototype.removeClose = function () {
	this.e.mhead.inner.shift();
};

var modal = new Template();
var h4id = uuid.v4();
modal.e.mtitle = e.h4([], { attrs: { id: h4id }, classes: [ 'modal-title' ] });
modal.e.mhead = e.div([close(), modal.e.mtitle], { classes: [ ' modal-header' ] });
modal.e.mbody = e.div([], { classes: [ 'modal-body' ] });
modal.e.mfoot = e.div([], { classes: [ 'modal-footer' ] });
modal.body =
	e.div([
		e.div([
			e.div([
				modal.e.mhead,
				modal.e.mbody,
				modal.e.mfoot
			], { classes: [ 'modal-content' ] })
		], { classes: [ 'modal-dialog' ] })
	], { attrs: {
		tabindex: '-1',
		role: 'dialog',
		'aria-labelledby': h4id,
		'aria-hidden': 'true'
	}, classes: [ 'modal', 'fade' ] });
exports.Template = modal;
