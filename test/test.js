// Bring in tape as our test function
var test = require('tape');
// Bring in your module you want to test against
var capitalize = require('../models/recipe');

// This is a test instance using test()
test('Should capitalize first letter of a string', function (t) {
    t.is(capitalize('test'), 'Test')});

test('Capitalizes multi word strings', t => {
  t.is(capitalize('small brown cow'), 'Small brown cow')
})

test('Handles empty strings', t => {
  t.is(capitalize(''), '')
})

test('Type Error thrown when trying to use numbers', t => {
  const err = t.throws(() => {
    capitalize(1)
})

  t.is(err.message, 'str.charAt is not a function')
})