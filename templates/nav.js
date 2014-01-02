var Template = require('../index.js').Template;
var e = require('element.js').e;

Template.prototype.setType = function (type) {
	switch (type) {
		case 'tabs':
			this.body.removeClass('nav-pills');
			this.body.addClass('nav-tabs');
			break;
		case 'pills':
			this.body.removeClass('nav-tabs');
			this.body.addClass('nav-pills');
			break;
	}
};

Template.prototype.setNavbar = function (bool) {
	if (bool) {
		this.body.addClass('navbar-nav');
	} else {
		this.body.removeClass('navbar-nav');
	}
};

Template.prototype.setStack = function (bool) {
	if (bool) {
		this.body.addClass('nav-stacked');
	} else {
		this.body.removeClass('nav-stacked');
	}
};

Template.prototype.setJustified = function (bool) {
	if (bool) {
		this.body.addClass('nav-justified');
	} else {
		this.body.removeClass('nav-justified');
	}
};

Template.prototype.addItem = function (item, disabled) {
	if (typeof item == 'object') {
		if (item.tag == 'li') {
			if (disabled) { item.addClass('disabled'); }
			this.body.append(item);
		} else {
			if (disabled) {
				this.body.append(e.li(item, { classes: [ 'disabled' ] }));
			} else {
				this.body.append(e.li(item));
			}
		}
	} else {
		if (disabled) {
			this.body.append(e.li(item, { classes: [ 'disabled' ]}));
		} else {
			this.body.append(e.li(item));
		}
	}
};

Template.prototype.setActive = function (index) {
	this.removeActive();
	this.body.inner[index].addClass('active');
};

Template.prototype.removeActive = function () {
	for (var i=0; i<this.body.inner.length; i++) {
		this.body.inner[i].removeClass('active');
	}
};

var nav = new Template();
nav.body = e.ul([], { classes: [ 'nav', 'nav-pills' ] });
exports.Template = nav;
