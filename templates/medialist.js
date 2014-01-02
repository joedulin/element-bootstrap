var Template = require('../index.js').Template;
var Media = require('../index.js').widgets.media;
var e = require('element.js').e;

Template.prototype.addItem = function (item) {
	if (Array.isArray(item)) {
		for (var i=0; i<item.length; i++) {
			this.append(item[i]);
		}
	} else {
		if (typeof item == 'object' && item.hasClass('media')) {
			if (typeof item.tag !== 'undefined') {
				item.tag = 'li';
			} else {
				item.body.tag = 'li';
			}
			this.body.append(item);
		} else {
			var wrapper = Media();
			wrapper.addContent(item);
			wrapper.body.tag = 'li';
			this.body.append(wrapper);
		}
	}
};

var medialist = new Template();
medialist.body = e.ul([], { classes: [ 'media-list' ] });
exports.Template = medialist;
