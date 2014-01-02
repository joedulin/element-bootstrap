var Template = require('../index.js').Template;
var e = require('element.js').e;

function ia (arr) { return Array.isArray(arr); }

Template.prototype.append = function (item) {
	if (ia(item)) {
		for (var i=0; i<item.length; i++) {
			this.append(item[i]);
		}
	} else {
		if (typeof item == 'object') {
			if (item.tag == 'li') {
				this.body.append(item);
			} else {
				this.body.append(e.li(item));
			}
		} else {
			this.body.append(e.li(item));
		}
	}
};

Template.prototype.setActive = function (index) {
	for (var i=0; i<this.body.inner.length; i++) {
		this.body.inner[i].removeClass('active');
	}
	this.body.inner[index].addClass('active');
};

var breadcrumb = new Template();
breadcrumb.body = e.ol([], { classes: [ 'breadcrumb' ] });
exports.Template = breadcrumb;
