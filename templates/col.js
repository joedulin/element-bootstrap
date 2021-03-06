var Template = require('../index.js').Template;
var e = require('element.js').e;

Template.prototype.setSize = function (size, num) {
	if (typeof size === 'object') {
		for (s in size) {
			this.setSize(s,size[s]);
		}
	} else {
		switch (size) {
			case 'all':
				var remClasses = [];
				for (var i=0; i<this.body.classes.length; i++) {
					if (this.body.classes[i].search(/^col....[0-9]/) > -1) {
						remClasses.push(this.body.classes[i]);
					}
				}
				this.body.removeClass(remClasses);
				this.body.addClass([
					'col-xs-' + num,
					'col-sm-' + num,
					'col-md-' + num,
					'col-lg-' + num
				]);
				break;
			case 'phone':
				var remClasses = [];
				for (var i=0; i<this.body.classes.length; i++) {
					if (this.body.classes[i].search(/^col-[x,s][s,m]-[0-9]/) > -1) {
						remClasses.push(this.body.classes[i]);
					}
				}
				this.body.removeClass(remClasses);
				this.body.addClass([
					'col-xs-' + num,
					'col-sm-' + num
				]);
				break;
			case 'desktop':
				var remClasses = [];
				for (var i=0; i<this.body.classes.length; i++) {
					if (this.body.classes[i].search(/^col-[m,l][d,g]-[0-9]/) > -1) {
						remClasses.push(this.body.classes[i]);
					}
				}
				this.body.removeClass(remClasses);
				this.body.addClass([
					'col-md-' + num,
					'col-lg-' + num
				]);
				break;
			case 'xs':
				var remClasses = [];
				for (var i=0; i<this.body.classes.length; i++) {
					if (this.body.classes[i].search(/^col-xs-[0-9]/) > -1) {
						remClasses.push(this.body.classes[i]);
					}
				}
				this.body.removeClass(remClasses);
				this.body.addClass('col-xs-' + num);
				break;
			case 'sm':
				var remClasses = [];
				for (var i=0; i<this.body.classes.length; i++) {
					if (this.body.classes[i].search(/^col-sm-[0-9]/) > -1) {
						remClasses.push(this.body.classes[i]);
					}
				}
				this.body.removeClass(remClasses);
				this.body.addClass('col-sm-' + num);
				break;
			case 'md':
				var remClasses = [];
				for (var i=0; i<this.body.classes.length; i++) {
					if (this.body.classes[i].search(/^col-md-[0-9]/) > -1) {
						remClasses.push(this.body.classes[i]);
					}
				}
				this.body.removeClass(remClasses);
				this.body.addClass('col-md-' + num);
				break;
			case 'lg':
				var remClasses = [];
				for (var i=0; i<this.body.classes.length; i++) {
					if (this.body.classes[i].search(/^col-md-[0-9]/) > -1) {
						remClasses.push(this.body.classes[i]);
					}
				}
				this.body.removeClass(remClasses);
				this.body.addClass('col-lg-' + num);
				break;
		}
	}
};

Template.prototype.setOffset = function (size, num) {
	if (typeof size === 'object') {
		for (s in size) {
			this.setOffset(s,size[s]);
		}
	} else {
		switch (size) {
			case 'all':
				var remClasses = [];
				for (var i=0; i<this.body.classes.length; i++) {
					if (this.body.classes[i].search(/^col-..-offset-[0-9]/) > -1) {
						remClasses.push(this.body.classes[i]);
					}
				}
				this.body.removeClass(remClasses);
				this.body.addClass([
					'col-xs-offset-' + num,
					'col-sm-offset-' + num,
					'col-md-offset-' + num,
					'col-lg-offset-' + num
				]);
				break;
			case 'phone':
				this.body.addClass([
					'col-xs-offset-' + num,
					'col-sm-offset-' + num
				]);
				break;
			case 'desktop':
				this.body.addClass([
					'col-md-offset-' + num,
					'col-lg-offset-' + num
				]);
				break;
			case 'xs':
				this.body.addClass('col-xs-offset-' + num);
				break;
			case 'sm':
				this.body.addClass('col-sm-offset-' + num);
				break;
			case 'md':
				this.body.addClass('col-md-offset-' + num);
				break;
			case 'lg':
				this.body.addClass('col-lg-offset-' + num);
				break;
			default:
				this.body.addClass('col-md-offset-' + num);
				break;
		}
	}
};

Template.prototype.setPush = function (size, num) {
	if (typeof size === 'object') {
		for (s in size) {
			this.setPush(s,size[s]);
		}
	} else {
		switch (size) {
			case 'all':
				this.body.addClass([
					'col-xs-push-' + num,
					'col-sm-push-' + num,
					'col-md-push-' + num,
					'col-lg-push-' + num
				]);
				break;
			case 'phone':
				this.body.addClass([
					'col-xs-push-' + num,
					'col-sm-push-' + num
				]);
				break;
			case 'desktop':
				this.body.addClass([
					'col-md-push-' + num,
					'col-lg-push-' + num
				]);
				break;
			case 'xs':
				this.body.addClass('col-xs-push-' + num);
				break;
			case 'sm':
				this.body.addClass('col-sm-push-' + num);
				break;
			case 'md':
				this.body.addClass('col-md-push-' + num);
				break;
			case 'lg':
				this.body.addClass('col-lg-push-' + num);
				break;
			default:
				this.body.addClass('col-md-push-' + num);
				break;
		}
	}
};

Template.prototype.setPull = function (size, num) {
	if (typeof size === 'object') {
		for (s in size) {
			this.setPull(s,size[s]);
		}
	} else {
		switch (size) {
			case 'all':
				this.body.addClass([
					'col-xs-pull-' + num,
					'col-sm-pull-' + num,
					'col-md-pull-' + num,
					'col-lg-pull-' + num
				]);
				break;
			case 'phone':
				this.body.addClass([
					'col-xs-pull-' + num,
					'col-sm-pull-' + num
				]);
				break;
			case 'desktop':
				this.body.addClass([
					'col-md-pull-' + num,
					'col-lg-pull-' + num
				]);
				break;
			case 'xs':
				this.body.addClass('col-xs-pull-' + num);
				break;
			case 'sm':
				this.body.addClass('col-sm-pull-' + num);
				break;
			case 'md':
				this.body.addClass('col-md-pull-' + num);
				break;
			case 'lg':
				this.body.addClass('col-lg-pull-' + num);
				break;
			default:
				this.body.addClass('col-md-pull-' + num);
				break;
		}
	}
};

var col = new Template();
col.body = e.div();

exports.Template = col;
