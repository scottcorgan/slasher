var path = require('path');
var join = path.join;
var normalize = path.normalize;

var slasher = module.exports = function (data) {
  options = arguments[1] || {};
  
  if (typeof data === 'string') return slash(data);
  if (typeof data === 'object') return objectSlash(data, options);
  
  return data;
};

function slash (pathname) {
  return normalize(join('/', pathname));
}

function objectSlash (original, options) {
  var slashed = {};
  
  Object.keys(original).forEach(function (originalKey) {
    var key = (options.key === false) ? originalKey : slash(originalKey);
    var value = original[originalKey];
    
    slashed[key] = (options.value === false) ? value : slash(value);
  });
  
  return slashed;
}

module.exports = slasher;
