// Bring in tape as our test function
var test = require('tape');
// Bring in your module you want to test against
var capitalize = require('../test/capitalize.js');

// This is a test instance using test()
try {
test('Should capitalize first letter of a string', function (t) 
{
    t.is(capitalize('test'), 'Test')});
}
catch (err) {
  console.log("Error capitalizing Error logged. Continuing...");
}
