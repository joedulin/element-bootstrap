var Template = require('../index.js').Template;
var e = require('element.js').e;

Template.prototype.addItem = function (item) {
	this.e.pbody.append(item);
};

Template.prototype.setTitle = function (text) {
	this.e.phead.inner = [];
	this.e.phead.append(text);
};

Template.prototype.setFooter = function (text) {
	if (typeof this.e.pfoot == 'undefined') {
		this.e.pfoot = e.div([], { classes: [ 'panel-footer' ] });
	}
	this.e.pfoot.inner = [];
	this.e.pfoot.append(text);
};

Template.prototype.setType = function (type) {
	this.body.removeClass([ 'panel-default', 'panel-primary', 'panel-success', 'panel-info', 'panel-warning', 'panel-danger' ]);
	this.body.addClass('panel-'+type);
};

var panel = new Template();
panel.e.phead = e.div([], { classes: [ 'panel-heading' ] });
panel.e.pbody = e.div([], { classes: [ 'panel-body' ] });
//panel.e.pfoot = e.div([], { classes: [ 'panel-footer' ] });
panel.body = e.div([
	panel.e.phead,
	panel.e.pbody,
	panel.e.pfoot
], { classes: [ 'panel', 'panel-default' ] });
exports.Template = panel;
