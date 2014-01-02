var Template = require('../index.js').Template;
var e = require('element.js').e;

var btnToolbar = new Template();
btnToolbar.body = e.div([], { attrs: { role: 'toolbar' }, classes: [ 'btn-toolbar' ]});
exports.Template = btnToolbar;
