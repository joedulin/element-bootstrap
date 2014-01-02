var Template = require('../index.js').Template;
var e = require('element.js').e;

function ia(arr) { return Array.isArray(arr); }

Template.prototype.setType = function (type) {
	this.body.removeClass([ 'alert-success', 'alert-info', 'alert-warning', 'alert-danger' ]);
	this.body.addClass('alert-'+type);
};

Template.prototype.setDismissable = function (bool) {
	if (bool) {
		this.body.addClass('alert-dismissable');
	} else {
		this.body.removeClass('alert-dismissable');
	}
};

Template.prototype.append = function (item) {
	if (ia(item)) {
		for (var i=0; i<item.length; i++) {
			this.append(item[i]);
		}
	} else {
		if (typeof item == 'object' && item.tag == 'a') {
			item.addClass('alert-link');
		}
		this.body.append(item);
	}
};

var alert = new Template();
alert.body = e.div([], { classes: [ 'alert', 'alert-info' ] });
exports.Template = alert;
