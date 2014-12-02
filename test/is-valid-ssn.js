var test = require('tape');
var isValidSSN = require('../is-valid-ssn');

test('is valid ssn', function (t) {
  t.plan(7);

  t.equal(isValidSSN('457-55-5462'), true);
  t.equal(isValidSSN('457555462'), true);
  t.equal(isValidSSN('457555'), false);
  t.equal(isValidSSN('45755554459'), false);
  t.equal(isValidSSN('000-11-1111'), false);
  t.equal(isValidSSN({}), false);
  t.equal(isValidSSN(3434), false);
});
