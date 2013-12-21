var Template = require('../index.js').Template;
var e = require('element.js').e;
var clone = require('clone');

Template.prototype.body = e.table();
Template.prototype.vars = {};
Template.prototype.e = {};

Template.prototype.striped = function (bool) {
	if (bool) {
		this.body.addClass('table-striped');
	} else {
		this.body.removeClass('table-striped');
	}
};
Template.prototype.bordered = function (bool) {
	if (bool) {
		this.body.addClass('table-bordered');
	} else {
		this.body.removeClass('table-bordered');
	}
};
Template.prototype.hover = function (bool) {
	if (bool) {
		this.body.addClass('table-hover');
	} else {
		this.body.removeClass('table-hover');
	}
};
Template.prototype.condensed = function (bool) {
	if (bool) {
		this.body.addClass('table-condensed');
	} else {
		this.body.removeClass('table-condensed');
	}
};
Template.prototype.responsive = function (bool) {
	if (bool) {
		this.body.addClass('table-responsive');
	} else {
		this.body.removeClass('table-responsive');
	}
};
Template.prototype.rowContext = function (type, rem) {
	if (!rem) {
		this.e.curRow.addClass(type);
	} else {
		this.e.curRow.removeClass(type);
	}
};
Template.prototype.addTD = function (data) {
	if (typeof data == 'object') {
		this.e.curRow.append(data);
	} else {
		this.e.curRow.append(e.td(data));
	}
};
Template.prototype.nextRow = function () {
	this.e.tbody.append(clone(this.e.curRow));
	this.e.curRow = e.tr();
};
Template.prototype.addTH = function (heading) {
	if (typeof heading == 'object') {
		this.e.thead.append(heading);
	} else {
		this.e.thead.append(e.th(heading));
	}
};

var table = new Template();
table.body = e.table();
table.body.addClass(['table','table-responsive','table-hover']);
table.e.thead = e.thead();
table.e.tbody = e.tbody();
table.body.append(table.e.thead);
table.body.append(table.e.tbody);

table.e.curRow = e.tr();

exports.Template = table;
