var path = require('path');
var join = path.join;
var normalize = path.normalize;

var slasher  = function (pathname) {
  return normalize(join('/', pathname));
};

module.exports = slasher;
