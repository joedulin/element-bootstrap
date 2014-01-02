var Template = require('../index.js').Template;
var e = require('element.js').e;
var Badge = function () { return e.span([], { classes: ['badge'] }); };

Template.prototype.append = function (item) {
	if (Array.isArray(item)) {
		for (var i=0; i<item.length; i++) {
			this.append(item[i]);
		}
	} else {
		if (typeof item == 'object' && item.tag == 'li') {
			item.addClass('list-group-item');
			if (item.inner.length == 1) {
				if (typeof item.inner[0] == 'object' && !item.inner[0].hasClass('badge')) {
					item.prepend(Badge());
				}
				if (typeof item.inner[0] != 'object') {
					item.prepend(Badge());
				}
			}
			this.body.append(item);
		} else {
			var wrapper = e.li([Badge(), item], { classes: [ 'list-group-item' ] });
			this.body.append(wrapper);
		}
	}
};

Template.prototype.setBadge = function (index, content) {
	this.body.inner[index].inner[0].inner = (Array.isArray(content)) ? content : [content];
};

var listgroup = new Template();
listgroup.body = e.ul([], { classes: [ 'list-group' ] });
exports.Template = listgroup;
