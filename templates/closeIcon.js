var Template = require('../index.js').Template;
var e = require('element.js').e;

var ci = new Template();
ci.body = e.button('&times;', { attrs: { type: 'button', aria-hidden: 'true' }, classes: ['close'] });
exports.Template = ci;
