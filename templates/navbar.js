var Template = require('../index.js').Template;
var e = require('element.js').e;
var uuid = require('node-uuid');

function ia (item) {
	return Array.isArray(item);
}
function navbarify (item) {
	switch (item.tag) {
		case 'p':
		case 'span':
			item.tag = 'p';
			item.addClass('navbar-text');
			break;
		case 'button':
			item.addClass('navbar-btn');
			break;
		case 'a':
			item.addClass('navbar-link');
		case 'ul':
			if (item.hasClass('nav')) {
				item.setNavbar(true);
			}
			break;
		case 'form':
			if (!item.hasClass('navbar-form')) {
				item.setNavbar(true);
			}
			break;
	}
	return item;
}

Template.prototype.setBrand = function (brand) {
	this.e.brand.inner = [];
	this.e.brand.append(brand);
};

Template.prototype.setId = function (id) {
	this.e.hotdogs.attr('data-target', '#'+id);
	this.e.collapse.attr('id', id);
};

Template.prototype.append = function (item) {
	if (ia(item)) {
		for (var i=0; i<item.length; i++) {
			if (typeof item == 'object') {
				item = navbarify(item);
			}
		}
	} else if (typeof item == 'object') {
		item = navbarify(item);
	}
	this.e.collapse.append(item);
};



var navbar = new Template();
var id = uuid.v4();
navbar.body = e.nav({
	attrs: { role: 'navigation' },
	classes: [ 'navbar', 'navbar-default' ]
});

navbar.e.header = e.div([], { classes: ['navbar-header'] });

navbar.e.brand = e.a([],'#', { classes: ['navbar-brand'] });

navbar.e.hotdogs = e.button([
	e.span('Toggle Navigation', { classes: ['sr-only'] }),
	e.span([], { classes: ['icon-bar'] }),
	e.span([], { classes: ['icon-bar'] }),
	e.span([], { classes: ['icon-bar'] }),
], {
	attrs: {
		type: 'button',
		'data-toggle': 'collapse',
		'data-target': '#'+id,
	},
	classes: [ 'navbar-toggle' ]
});

navbar.e.header.append([ navbar.e.hotdogs, navbar.e.brand ]);

navbar.e.collapse = e.div([], {
	attrs: { id: id },
	classes: [ 'collapse navbar-collapse' ]
});

navbar.body.append([ navbar.e.header, navbar.e.collapse ]);
exports.Template = navbar;
