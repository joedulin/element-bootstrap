var element = require('element.js');
var Element = element.Element;
var e = element.e;
var getTemplate = require('elementfw').getTemplate;
var Template = require('elementfw').Template;

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
function isset(v) { return (typeof v !== 'undefined'); }

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
	r: function () {
		if (!isset(w.r)) {
			w.r = getTemplate(__dirname + '/templates/row.js');
			initTemplate(w.r);
		}
		var t = new Template();
		var opts = clone(w.r);
		t.body = opts.body;
		t.vars = opts.vars;
		t.e = opts.e;
		return t;
	}
	row: function () { return getTemplate(__dirname + '/templates/row.js') },
	col: function () { return getTemplate(__dirname + '/templates/col.js') },
	lead: function () { return getTemplate(__dirname + '/templates/lead.js') }
}

exports.Element = Element;
exports.e = e;
exports.widgets = widgets;
