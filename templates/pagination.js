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
				this.body.inner.splice(1,0,item);
			} else {
				this.body.inner.splice(1,0,e.li(item));
			}
		} else {
			this.body.inner.splice(1,0,e.li(item));
		}
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
		this.body.inner[this.body.inner.length -1].addClass('disabled');
	} else {
		this.body.inner[this.body.inner.length -1].removeClass('disabled');
	}
};

Template.prototype.setActive = function (index) {
	for (var i=0; i<this.body.inner.length; i++) {
		this.body.inner[i].removeClass('active');
	}
	this.body.inner[index+1].addClass('active');
};

Template.prototype.setSize = function (size) {
	this.body.removeClass([ 'pagination-xs', 'pagination-sm', 'pagination-md', 'pagination-lg' ]);
	this.body.addClass('pagination-'+size);
};

Template.prototype.setLeft = function (href, text) {
	if (typeof text == 'undefined') { text = '&laquo;'; }
	this.e.lefta = e.a(text, href);
	this.e.leftli.inner = [this.e.lefta];
};

Template.prototype.setRight = function (href, text) {
	if (typeof text == 'undefined') { text = '&raquo;'; }
	this.e.righta = e.a(text, href);
	this.e.rightli.inner = [this.e.righta];
};

var pagination = new Template();
pagination.e.lefta = e.a('&laquo;', '#');
pagination.e.leftli = e.li(pagination.e.lefta);
pagination.e.righta = e.a('&raquo;', '#');
pagination.e.rightli = e.li(pagination.e.righta);
pagination.body = e.ul([
	pagination.e.leftli,
	pagination.e.rightli
], {
	classes: ['pagination']
});
exports.Template = pagination;
