var Template = require('../index.js').Template;
var e = require('element.js').e;

Template.prototype.setRounded = function (bool) {
	if (bool) {
		this.body.addClass('img-rounded');
	} else {
		this.body.removeClass('img-rounded');
	}
};

Template.prototype.setCircle = function (bool) {
	if (bool) {
		this.body.addClass('img-circle');
	} else {
		this.body.removeClass('img-circle');
	}
};

Template.prototype.setThumbnail = function (bool) {
	if (bool) {
		this.body.addClass('img-thumbnail');
	} else {
		this.body.removeClass('img-thumbnail');
	}
};

Template.prototype.setResponsive = function (bool) {
	if (bool) {
		this.body.addClass('img-responsive');
	} else {
		this.body.removeClass('img-responsive');
	}
};

var image = new Template();
image.body = e.img();
image.setResponsive(true);
exports.Template = image;
