var Template = require('../index.js').Template;
var e = require('element.js').e;

Template.prototype.setType = function (type) {
	this.e.bar.removeClass([ 'progress-bar-success', 'progress-bar-info', 'progress-bar-warning', 'progress-bar-danger' ]);
	this.e.bar.addClass('progress-bar-'+type);
	switch (type) {
		case 'success':
			this.e.extra = ' (success)';
			break;
		case 'warning':
			this.e.extra = ' (warning)';
			break;
		case 'danger':
			this.e.extra = ' (danger)';
			break;
		default:
			this.e.extra = '';
			break;
	}
	this.e.sronly.inner = [ this.e.bar.css('width') + '%' + this.e.extra ];
};

Template.prototype.setPerc = function (num) {
	this.e.bar.css('width',num+'%');
	this.e.bar.attr('aria-valuenow',num);
	this.e.sronly.inner = [ num + '%' + this.e.extra ];
};

Template.prototype.setStriped = function (bool) {
	if (bool) {
		this.body.addClass('progress-striped');
	} else {
		this.body.removeClass('progress-striped');
	}
};

Template.prototype.setActive = function (bool) {
	if (bool) {
		this.setStriped(true);
		this.body.addClass('active');
	} else {
		this.body.removeClass('active');
	}
};

var progressbar = new Template();
progressbar.e.sronly = e.span('0%', { classes: [ 'sr-only' ] });
progressbar.e.bar = e.div([progressbar.e.sronly], {
	attrs: {
		role: 'progressbar',
		'aria-valuenow': '0',
		'aria-valuemin': '0',
		'aria-valuemax': '100'
	},
	classes: [ 'progress-bar', 'progress-bar-info' ],
	styles: { width: '0%' }
});
progressbar.body = e.div([progressbar.e.bar], { classes: [ 'progress' ] });
exports.Template = progressbar;
