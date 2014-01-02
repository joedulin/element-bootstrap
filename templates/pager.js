var Template = require('../index.js').Template;
var e = require('element.js').e;

Template.prototype.setLeft = function (link, text) {
	if (typeof text == 'undefined') { text = 'Previous'; }
	this.body.inner[0].inner = [ e.a(text, link) ];
};

Template.prototype.setRight = function (link, text) {
	if (typeof text == 'undefined') { text = 'Next'; }
	this.body.inner[1].inner = [ e.a(text, link) ];
};

Template.prototype.align = function (bool) {
	if (bool) {
		this.body.inner[0].addClass('previous');
		this.body.inner[1].addClass('next');
	} else {
		this.body.inner[0].removeClass('previous');
		this.body.inner[1].removeClass('next');
	}
};

Template.prototype.disableLeft = function (bool) {
	if (bool) {
		this.body.inner[0].addClass('disabled');
	} else {
		this.body.inner[0].removeClass('disabled');
	}
};

Template.prototype.disableRight = function (bool) {
	if (bool) {
		this.body.inner[1].addClass('disabled');
	} else {
		this.body.inner[1].removeClass('disabled');
	}
};

var pager = new Template();
pager.body = e.ul([
	e.li(e.a('Previous','#')),
	e.li(e.a('Next','#'))
], {
	classes: [ 'pager' ]
});
exports.Template = pager;
