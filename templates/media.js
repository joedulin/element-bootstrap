var Template = require('../index.js').Template;
var e = require('element.js').e;

Template.prototype.setMedia = function (item) {
	if (typeof item == 'object') {
		item.addClass('media-object');
	} else {
		item = e.p(item, { classes: [ 'media-object' ]});
	}
	this.e.media.inner = [ item ];
};

Template.prototype.setHeading = function (text) {
	this.e.heading.inner = [ text ];
};

Template.prototype.addContent = function (item) {
	if (Array.isArray(item)) {
		for (var i=0; i<item.length; i++) {
			this.addContent(item[i]);
		}
	} else {
		this.e.content.append(item);
	}
};

Template.prototype.mediaLeft = function (bool) {
	if (bool) {
		this.e.media.removeClass('pull-right');
		this.e.media.addClass('pull-left');
	} else {
		this.e.media.addClass('pull-right');
		this.e.media.removeClass('pull-left');
	}
};

Template.prototype.mediaRight = function (bool) {
	if (bool) {
		this.mediaLeft(false);
	} else {
		this.mediaRight(true);
	}
};

var media = new Template();
media.e.heading = e.h4([], { classes: [ 'media-heading' ] });
media.e.content = e.div([media.e.heading], { classes: [ 'media-body' ] });
media.e.media = e.a([],'#', { classes: [ 'pull-left' ] });
media.body = e.div([
	media.e.media,
	media.e.content
], { classes: [ 'media' ] });
exports.Template = media;
