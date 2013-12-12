var Template = require('elementfw').Template;
var e = require('element.js').e;

var col = new Template();
col.body = e.div();

col.setSize = function (size, num) {
	if (typeof size === 'object') {
		for (s in size) {
			col.body.setSize(s,size[s]);
		}
	} else {
		switch (size) {
			case 'all':
				col.body.addClass([
					'col-xs-' + num,
					'col-sm-' + num,
					'col-md-' + num,
					'col-lg-' + num
				]);
				break;
			case 'phone':
				col.body.addClass([
					'col-xs-' + num,
					'col-sm-' + num
				]);
				break;
			case 'desktop':
				col.body.addClass([
					'col-md-' + num,
					'col-lg-' + num
				]);
				break;
			case 'xs':
				col.body.addClass('col-xs-' + num);
				break;
			case 'sm':
				col.body.addClass('col-sm-' + num);
				break;
			case 'md':
				col.body.addClass('col-md-' + num);
				break;
			case 'lg':
				col.body.addClass('col-lg-' + num);
				break;
			default:
				col.body.addClass('col-md-' + num);
				break;
		}
	}
};

col.setOffset = function (size, num) {
	if (typeof size === 'object') {
		for (s in size) {
			col.body.setOffset(s,size[s]);
		}
	} else {
		switch (size) {
			case 'all':
				col.body.addClass([
					'col-xs-offset-' + num,
					'col-sm-offset-' + num,
					'col-md-offset-' + num,
					'col-lg-offset-' + num
				]);
				break;
			case 'phone':
				col.body.addClass([
					'col-xs-offset-' + num,
					'col-sm-offset-' + num
				]);
				break;
			case 'desktop':
				col.body.addClass([
					'col-md-offset-' + num,
					'col-lg-offset-' + num
				]);
				break;
			case 'xs':
				col.body.addClass('col-xs-offset-' + num);
				break;
			case 'sm':
				col.body.addClass('col-sm-offset-' + num);
				break;
			case 'md':
				col.body.addClass('col-md-offset-' + num);
				break;
			case 'lg':
				col.body.addClass('col-lg-offset-' + num);
				break;
			default:
				col.body.addClass('col-md-offset-' + num);
				break;
		}
	}
};

col.setPush = function (size, num) {
	if (typeof size === 'object') {
		for (s in size) {
			col.body.setPush(s,size[s]);
		}
	} else {
		switch (size) {
			case 'all':
				col.body.addClass([
					'col-xs-push-' + num,
					'col-sm-push-' + num,
					'col-md-push-' + num,
					'col-lg-push-' + num
				]);
				break;
			case 'phone':
				col.body.addClass([
					'col-xs-push-' + num,
					'col-sm-push-' + num
				]);
				break;
			case 'desktop':
				col.body.addClass([
					'col-md-push-' + num,
					'col-lg-push-' + num
				]);
				break;
			case 'xs':
				col.body.addClass('col-xs-push-' + num);
				break;
			case 'sm':
				col.body.addClass('col-sm-push-' + num);
				break;
			case 'md':
				col.body.addClass('col-md-push-' + num);
				break;
			case 'lg':
				col.body.addClass('col-lg-push-' + num);
				break;
			default:
				col.body.addClass('col-md-push-' + num);
				break;
		}
	}
};

col.setPull = function (size, num) {
	if (typeof size === 'object') {
		for (s in size) {
			col.body.setPull(s,size[s]);
		}
	} else {
		switch (size) {
			case 'all':
				col.body.addClass([
					'col-xs-pull-' + num,
					'col-sm-pull-' + num,
					'col-md-pull-' + num,
					'col-lg-pull-' + num
				]);
				break;
			case 'phone':
				col.body.addClass([
					'col-xs-pull-' + num,
					'col-sm-pull-' + num
				]);
				break;
			case 'desktop':
				col.body.addClass([
					'col-md-pull-' + num,
					'col-lg-pull-' + num
				]);
				break;
			case 'xs':
				col.body.addClass('col-xs-pull-' + num);
				break;
			case 'sm':
				col.body.addClass('col-sm-pull-' + num);
				break;
			case 'md':
				col.body.addClass('col-md-pull-' + num);
				break;
			case 'lg':
				col.body.addClass('col-lg-pull-' + num);
				break;
			default:
				col.body.addClass('col-md-pull-' + num);
				break;
		}
	}
};

exports.Template = col;
