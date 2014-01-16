var slash = require('../');
var test = require('tape');

test('prefixes the path that does not already have a slash', function (t) {
	t.equal(slash('pathname'), '/pathname', 'added slash');
	t.end();
});

test('does not add a leading slash to a path that already has a leading slash', function (t) {
  t.equal(slash('/pathname'), '/pathname', 'no slash added');
  t.end();
});
