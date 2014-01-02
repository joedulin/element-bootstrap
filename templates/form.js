var Template = require('../index.js').Template;
var e = require('element.js').e;
var uuid = require('node-uuid');

Template.prototype.addFI = function (label, input) {
	if (typeof label == 'object') {
		if (typeof label.attr('for') == 'undefined') {
			if (typeof input.attr('id') == 'undefined') {
				var id = uuid.v4();
				label.attr('for',id);
				input.attr('id',id);
			} else {
				label.attr('for',input.attr('id'));
			}
		}
	} else {
		label = e.label(label);
		if (typeof input.attr('id') == 'undefined') {
			var id = uuid.v4();
			label.attr('for',id);
			input.attr('id',id);
		} else {
			label.attr('for',input.attr('id'));
		}
	}
	if (typeof input == 'object') {
		if (input.tag = 'input') {
			input.addClass('form-control');
		} else {
			var list = input.find({'type':'input'});
			for (var i=0, e; e=list[i]; i++) {
				e.addClass('form-control');
			}
		}
	}
	if (input.type == 'checkbox' || input.type == 'radio') {
		label.inner = [input, label.inner[0]];
		this.body.append(e.div(label, { classes: ['form-group'] }));
	} else {
		this.body.append(e.div([ label, input ], { classes: ['form-group'] }));
	}
};

Template.prototype.setHorizontal = function (bool) {
	if (bool) {
		this.body.addClass('form-horizontal');
	} else {
		this.body.removeClass('form-horizontal');
	}
};

Template.prototype.setInline = function (bool) {
	if (bool) {
		this.body.addClass('form-inline');
	} else {
		this.body.removeClass('form-inline');
	}
};

Template.prototype.setNavbar = function (bool, direction) {
	defaults(direction, 'left');
	if (bool) {
		this.body.addClass([ 'navbar-form', 'navbar-'+direction ]);
	} else {
		this.body.removeClass([ 'navbar-form', 'navbar-left', 'navbar-right' ]);
	}
};

var form = new Template();
form.body = e.form({attrs: {role: 'form'}});
exports.Template = form;
