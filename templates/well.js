var Template = require('../index.js').Template;
var e = require('element.js').e;

Template.prototype.setSize = function (size) {
	this.body.removeClass(['well-lg','well-sm']);
	switch (size) {
		case 'lg':
		case 'sm':
			this.body.addClass('well-'+size);
			break;
		default:
			break;
	}
};

var well = new Template();
well.body = e.div([], { classes: [ 'well'] });
exports.Template = well;
