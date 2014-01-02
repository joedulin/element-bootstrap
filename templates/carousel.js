var Template = require('../index.js').Template;
var e = require('element.js').e;
var uuid = require('node-uuid');
var id = uuid.v4();

Template.prototype.addSlide = function (item) {
	this.e.slides.append(e.div(item, { classes: [ 'item' ] }));
	this.e.list.append(e.li([], { attrs: { 'data-target': '#'+id } }));
	for (var i=0, slide; slide=this.e.list.inner[i]; i++) {
		slide.attr('data-slide-to', i);
	}
};

Template.prototype.setActive = function (index) {
	for (var i=0; i<this.e.list.inner.length; i++) {
		this.e.list.inner[i].removeClass('active');
		this.e.slides.inner[i].removeClass('active');
	}
	this.e.list.inner[index].addClass('active');
	this.e.slides.inner[index].addClass('active');
};

Template.prototype.setCaption = function (index, text) {
	var caption = this.e.slides.inner[index].find('.carousel-caption');
	if (caption.length == 0) {
		var div = e.div([], { classes: [ 'carousel-caption' ] });
		div.append(text);
		this.e.slides.inner[index].append(div);
	} else {
		caption[0].inner = [];
		caption[0].append(text);
	}
};

var carousel = new Template();
carousel.e.list = e.ol([], { classes: [ 'carousel-indicators' ] });
carousel.e.slides = e.div([], { classes: [ 'carousel-inner' ] });
carousel.e.controlL = e.a(
	e.span([], { classes: [ 'glyphicon', 'glyphicon-chevron-left' ] }),
	'#'+id,
	{ attrs: { 'data-slide': 'prev' }, classes: [ 'left', 'carousel-control' ] }
);
carousel.e.controlR = e.a(
	e.span([], { classes: [ 'glyphicon', 'glyphicon-chevron-right' ] }),
	'#'+id,
	{ attrs: { 'data-slide': 'next' }, classes: [ 'right', 'carousel-control' ] }
);
carousel.body = e.div([
	carousel.e.list,
	carousel.e.slides,
	carousel.e.controlL,
	carousel.e.controlR
], {
	attrs: {
		'id': id,
		'data-ride': 'carousel'
	},
	classes: [ 'carousel', 'slide' ]
});
exports.Template = carousel;
