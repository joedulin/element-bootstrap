var element = require('element.js');
var Element = element.Element;
var e = element.e;
var getTemplate = require('elementfw').getTemplate;
var Template = require('elementfw').Template;
var clone = require('clone');

function defaults (a, b) {
	if (typeof a === 'undefined') {
		return b;
	}
	return a;
}
function initTemplate (t) {
	t.body = defaults(t.body, {});
	t.vars = defaults(t.vars, {});
	t.e = defaults(t.e, {});
}
function isset(v) { 
	return (typeof v !== 'undefined'); 
}
function load(v, fullpath) {
	if (!isset.v) { 
		v = getTemplate(fullpath);
		initTemplate(v);
	}
	var opts = clone(v);
	var t = new Template();
	t.body = opts.body;
	t.vars = opts.vars;
	t.e = opts.e;
	return t;
}
function setOpts(obj, t) {
	var opts = clone(obj);
	t.body = opts.body;
	t.vars = opts.vars;
	t.e = opts.e;
}

//Modify Element to make it more Bootstrap friendly

//Any element can be hidden at different sizes
Element.prototype.setHidden = function (size, bool) {
	switch (size) {
		case 'xs':
			(bool) ? this.addClass('hidden-xs') : this.removeClass('hidden-xs');
			break;
		case 'sm':
			(bool) ? this.addClass('hidden-sm') : this.removeClass('hidden-sm');
			break;
		case 'md':
			(bool) ? this.addClass('hidden-md') : this.removeClass('hidden-md');
			break;
		case 'lg':
			(bool) ? this.addClass('hidden-lg') : this.removeClass('hidden-lg');
			break;
	}
};

//Align text
Element.prototype.align = function (direction) {
	switch (direction) {
		case 'left':
			this.addClass('text-left');
			break;
		case 'center':
			this.addClass('text-center');
			break;
		case 'right':
			this.addClass('text-right');
			break;
	}
};

var w = {};

//Define the widgets
var widgets = {
	row: function () {
		return load(w.row, __dirname + '/templates/row.js');
	},
	col: function () { 
		return clone(getTemplate(__dirname + '/templates/col.js')); 
	},
	lead: function () { 
		return load(w.lead, __dirname + '/templates/lead.js'); 
	}
}

exports.Element = Element;
exports.e = e;
exports.widgets = widgets;
