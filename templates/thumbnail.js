var Template = require('../index.js').Template;
var e = require('element.js').e;

Template.prototype.append = function (item) {
	this.e.caption.append(item);
};

var thumbnail = new Template();
thumbnail.e.caption = e.div([], { classes: [ 'caption' ] });
thumbnail.body = e.div([thumbnail.e.caption], { classes: [ 'thumbnail' ] });
exports.Template = thumbnail;
