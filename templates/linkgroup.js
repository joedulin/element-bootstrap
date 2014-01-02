var Template = require('../index.js').Template;
var e = require('element.js').e;
var Badge = function () { return e.span([], { classes: ['badge'] }); };

Template.prototype.append = function (item) {
	if (Array.isArray(item)) {
		for (var i=0; i<item.length; i++) {
			this.append(item[i]);
		}
	} else {
		if (typeof item == 'object') {
			item.addClass('list-group-item');
			if (typeof item.inner[0] == 'object' && !item.inner[0].hasClass('badge')) {
				item.prepend(Badge());
			}
			this.body.append(item);
		} else {
			var wrapper = e.span([Badge(), item]);
			wrapper.addClass('list-group-item');
			this.body.append(wrapper);
		}
	}
};

Template.prototype.setBadge = function (index, content) {
	this.body.inner[index].inner[0].inner = (Array.isArray(content)) ? content : [content];
};

Template.prototype.setActive = function (index) {
	for (var i=0; i<this.body.inner.length; i++) {
		this.body.inner[i].removeClass('active');
	}
	this.body.inner[index].addClass('active');
};

var linkgroup = new Template();
linkgroup.body = e.div([], { classes: [ 'list-group' ] });
exports.Template = linkgroup;
