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
Template.prototype.setHidden = function (size, bool) {
	switch (size) {
		case 'xs':
			(bool) ? this.body.addClass('hidden-xs') : this.body.removeClass('hidden-xs');
			break;
		case 'sm':
			(bool) ? this.body.addClass('hidden-sm') : this.body.removeClass('hidden-sm');
			break;
		case 'md':
			(bool) ? this.body.addClass('hidden-md') : this.body.removeClass('hidden-md');
			break;
		case 'lg':
			(bool) ? this.body.addClass('hidden-lg') : this.body.removeClass('hidden-lg');
			break;
	}
};

//Align text
Template.prototype.align = function (direction) {
	this.body.removeClass(['text-left','text-right','text-center']);
	switch (direction) {
		case 'left':
			this.body.addClass('text-left');
			break;
		case 'center':
			this.body.addClass('text-center');
			break;
		case 'right':
			this.body.addClass('text-right');
			break;
	}
};

Template.prototype.float = function (direction) {
	this.body.removeClass(['pull-left','pull-right']);
	this.body.addClass(['pull-', direction].join(''));
};

Template.prototype.setCenter = function (bool) {
	if (bool) {
		this.body.addClass('center-block');
	} else {
		this.body.removeClass('center-block');
	}
};

Template.prototype.sronly = function (bool) {
	if (bool) {
		this.body.addClass('sr-only');
	} else {
		this.body.removeClass('sr-only');
	}
};

Template.prototype.hiddenPrint = function (bool) {
	if (bool) {
		this.body.addClass('hidden-print');
	} else {
		this.body.removeClass('hidden-print');
	}
};

Template.prototype.prepend = function (element) {
	return this.body.prepend(element);
};

Template.prototype.append = function (element) {
	return this.body.append(element);
};

Template.prototype.addClass = function(c) {
	return this.body.addClass(c);
};

Template.prototype.attr = function(attr,value) {
	return this.body.attr(attr,value);
};

Template.prototype.css = function(style,value) {
	return this.body.css(style,value);
};

Template.prototype.find = function(query) {
	return this.body.find(query);
};

Template.prototype.hasClass = function(c) {
	return this.body.hasClass(c);
};

Template.prototype.removeAttr = function(attr) {
	return this.body.removeAttr(attr);
};

Template.prototype.removeClass = function(c) {
	return this.body.removeClass(c);
};

Template.prototype.wrap = function(wrapper) {
	return this.body.wrap(wrapper);
};

var w = {};

//Define the widgets
var widgets = {
	row: function (inner) {
		var r = load(w.row, __dirname + '/templates/row.js');
		inner = defaults(inner, []);
		r.append(inner);
		return r;
	},
	col: function (inner, size, offset) {
		var c = load(w.col, __dirname + '/templates/col.js');
		size = defaults(size, null);
		offset = defaults(offset, null);
		inner = defaults(inner, []);
		if (size !== null) {
			c.setSize(size);
		}
		if (offset !== null) {
			c.setOffset(offset);
		}
		c.append(inner);
		return c;
	},
	lead: function (text) {
		var l = load(w.lead, __dirname + '/templates/lead.js');
		text = defaults(text, []);
		l.append(text);
		return l;
	},
	table: function () {
		return load(w.table, __dirname + '/templates/table.js');
	},
	form: function () {
		return load(w.form, __dirname + '/templates/form.js');
	},
	button: function (text, type) {
		var btn = load(w.button, __dirname + '/templates/button.js');
		text = defaults(text, []);
		type = defaults(type, 'default');
		btn.append(text);
		btn.setType(type);
		return btn;
	},
	image: function (src) {
		var img = load(w.button, __dirname + '/templates/image.js');
		src = defaults(src, '');
		alt = defaults(alt, '');
		img.attr('src',src);
	},
	closeIcon: function () {
		return load(w.closeIcon, __dirname + '/templates/closeIcon.js');
	},
	caret: function () {
		return load(w.caret, __dirname + '/templates/caret.js');
	},
	clearfix: function () {
		return load(w.clearfix, __dirname + '/templates/clearfix.js');
	},
	icon: function (name) {
		var i = load(w.icon, __dirname + '/templates/icon.js');
		name = defaults(name, 'warning-sign');
		i.setIcon(name);
		return i;
	},
	dropdown: function () {
		return load(w.dropdown, __dirname + '/templates/dropdown.js');
	},
	btnGroup: function () {
		return load(w.btnGroup, __dirname + '/templates/btnGroup.js');
	},
	btnToolbar: function () {
		return load(w.btnToolbar, __dirname + '/templates/btnToolbar.js');
	},
	inputGroup: function () {
		return load(w.inputGroup, __dirname + '/templates/inputGroup.js');
	},
	nav: function () {
		return load(w.nav, __dirname + '/templates/nav.js');
	},
	navbar: function () {
		return load(w.navbar, __dirname + '/templates/navbar.js');
	},
	breadcrumb: function () {
		return load(w.breadcrumb, __dirname + '/templates/breadcrumb.js');
	},
	pagination: function () {
		return load(w.pagination, __dirname + '/templates/pagination.js');
	},
	pager: function () {
		return load(w.pager, __dirname + '/templates/pager.js');
	},
	label: function (inner, type) {
		var l = load(w.label, __dirname + '/templates/label.js');
		inner = defaults(inner, []);
		type = defaults(type, 'default');
		l.setText(inner);
		l.setType(type);
		return l
	},
	badge: function (inner) {
		var b = load(w.badge, __dirname + '/templates/badge.js');
		inner = defaults(inner, []);
		b.append(inner);
		return b;
	},
	pageheader: function () {
		return load(w.pageheader, __dirname + '/templates/pageheader.js');
	},
	thumbnail: function () {
		return load(w.thumbnail, __dirname + '/templates/thumbnail.js');
	},
	alert: function () {
		return load(w.alert, __dirname + '/templates/alert.js');
	},
	progressbar: function () {
		return load(w.progressbar, __dirname + '/templates/progressbar.js');
	},
	media: function () {
		return load(w.media, __dirname + '/templates/media.js');
	},
	medialist: function () {
		return load(w.medialist, __dirname + '/templates/medialist.js');
	},
	listgroup: function () {
		return load(w.listgroup, __dirname + '/templates/listgroup.js');
	},
	linkgroup: function () {
		return load(w.linkgroup, __dirname + '/templates/linkgroup.js');
	},
	panel: function () {
		return load(w.panel, __dirname + '/templates/panel.js');
	},
	well: function () {
		return load(w.well, __dirname + '/templates/well.js');
	},
	modal: function () {
		return load(w.modal, __dirname + '/templates/modal.js');
	},
	carousel: function () {
		return load(w.carousel, __dirname + '/templates/carousel.js');
	},
};

var icon = function (name) {
	var icon = new Template();
	icon.body = e.span();
	icon.addClass('glyphicon');
	icon.addClass(['glyphicon-', name].join(''));
	return icon;
};

exports.Element = Element;
exports.e = e;
exports.Template = Template;
exports.icon = icon;
exports.widgets = widgets;
