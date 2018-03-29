// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here
console.log('Testing Motorcycle Constructor');
var myMotorcycle = new Motorcycle('Honda', 'CB400', 1978, 'Red', ['only-pass']);
assert.strictEqual(myMotorcycle instanceof Motorcycle, true, 'Constructor did not instantiate a Truck.');
assert.strictEqual(myMotorcycle instanceof Car, true, 'Constructor did not instantiate a Car.');
assert.strictEqual(myMotorcycle.make, 'Honda', 'Constructor did not set make.');
assert.strictEqual(myMotorcycle.model, 'CB400', 'Constructor did not set model.');
assert.strictEqual(myMotorcycle.year, 1978, 'Constructor did not set year.');
assert.strictEqual(myMotorcycle.color, 'Red', 'Constructor did not set color.');
assert.strictEqual(myMotorcycle.seats, 2, 'Constructor did not set seats.');
assert.deepEqual(myMotorcycle.passengers, ['only-pass'], 'Constructor did not set passengers.');

assert.equal(typeof(myMotorcycle.wheelie), 'function', 'there is no wheelie function.');
assert.strictEqual(typeof(myMotorcycle.wheelie()), 'boolean', 'wheelie function did not return a boolean value.');
assert.strictEqual(myMotorcycle.wheelie(), false, 'Motorcycle allowed to wheelie while NOT running.');
myMotorcycle.start();
assert.strictEqual(myMotorcycle.wheelie(), true, 'Motorcycle not allowed to wheelie while running.');

success('Motorcycle works!');
