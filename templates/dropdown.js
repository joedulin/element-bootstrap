var Template = require('../index.js').Template;
var caret = require('../index.js').widgets.caret;
var e = require('element.js').e;
var uuid = require('node-uuid');

function disable(el, bool) {
	if (bool) {
		el.addClass('disabled');
	} else {
		el.removeClass('disabled');
	}
}

Template.prototype.setType = function (type) {
	switch (type) {
		case 'a':
			this.e.button.tag = 'a';
			this.e.button.removeClass(['btn', 'btn-default', 'btn-primary', 'btn-success', 'btn-warning', 'btn-danger', 'btn-link']);
			this.e.button.removeAttr('type');
			this.e.button.attr('href','#');
			this.body.removeClass('btn-group');
			this.body.addClass('dropdown');
			break;
		case 'button':
			this.e.button.tag = 'button';
			this.e.button.attr('type','button');
			this.e.button.removeAttr('href');
			this.e.button.addClass(['btn','btn-default']);
			this.body.addClass('btn-group');
			this.body.removeClass('dropdown');
			break;
		case 'nav':
			this.body.tag = 'li';
			this.setType('a');
			break;
	}
};

Template.prototype.setLabel = function (text, noCaret) {
	if (noCaret) {
		this.e.button.inner = [ text ];
	} else {
		this.e.button.inner = [ text, caret() ];
	}
};

Template.prototype.setCaret = function (bool) {
	if (bool) {
		this.e.button.inner = [ this.e.button.inner[0], caret() ];
	} else {
		this.e.button.inner = [ this.e.button.inner[0] ];
	}
};

Template.prototype.addItem = function (item, disabled) {
	if (typeof item == 'object') {
		if (item.tag == 'li') {
			item.attr('role','presentation');
			for (var i=0; i<item.inner.length; i++) {
				var el = item.inner[0];
				el.attr('role', 'menuitem');
				el.attr('tabindex', '-1');
			}
			this.e.ul.append(item);
			disable(item, disabled);
		} else {
			var li = e.li();
			li.attr('role', 'presentation');
			item.attr('role','menuitem');
			item.attr('tabindex', '-1');
			li.append(item);
			this.e.ul.append(li);
			disable(li, disabled);
		}
	} else {
		var li = e.li();
		var span = e.span(item);
		li.attr('role', 'presentation');
		span.attr('role','menuitem');
		span.attr('tabindex', '-1');
		li.append(span);
		this.e.ul.append(li);
		disable(li, disabled);
	}
};

Template.prototype.addDivider = function () {
	this.e.ul.append(e.li([], {
		attrs: { role: 'presentation' },
		classes: [ 'divider' ]
	}));
};

Template.prototype.align = function (direction) {
	this.e.ul.removeClass(['pull-left','pull-right']);
	this.e.ul.addClass(['pull-',direction].join(''));
};

Template.prototype.addHeader = function (text) {
	this.e.ul.append(e.li([text], {
		attrs: { role: 'presentation' },
		classes: [ 'dropdown-header' ]
	}));
};

Template.prototype.setId = function (id) {
	this.e.button.attr('id', id);
	this.e.ul.attr('aria-labelledby',id);
};

var dropdown = new Template();
var thisid = uuid.v4();
dropdown.body = e.div([], { classes: ['dropdown'] });
dropdown.e.button = e.button();
dropdown.e.button.addClass([ 'btn', 'dropdown-toggle' ]);
dropdown.e.button.attr({
	type: 'button',
	'data-toggle': 'dropdown',
	id: thisid
});
dropdown.e.ul = e.ul();
dropdown.e.ul.addClass('dropdown-menu');
dropdown.e.ul.attr('role', 'menu');
dropdown.e.ul.attr('aria-labelledby', thisid);
dropdown.body.append([dropdown.e.button, dropdown.e.ul]);

exports.Template = dropdown;
