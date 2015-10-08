var test = require('tape');
var isValidSSN = require('../is-valid-ssn');
var maskSSN = require('../is-valid-ssn').maskSSN;

test('is valid ssn', function (t) {
  t.plan(7);

  t.equal(isValidSSN('457-55-5462'), false);
  t.equal(isValidSSN('457555462'), true);
  t.equal(isValidSSN('457555'), false);
  t.equal(isValidSSN('45755554459'), false);
  t.equal(isValidSSN('000-11-1111'), false);
  t.equal(isValidSSN({}), false);
  t.equal(isValidSSN(3434), false);
});

test('mask ssn', function (t) {
  try {
    maskSSN('457-55-5462');
  } catch (e) {
    t.equal(e.message, 'Invalid Social Security Number');
    t.end();
  }

  t.equal(maskSSN('457555462'), 'XXXXX5462');
});
