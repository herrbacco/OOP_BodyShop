// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

// Your tests will go below here
console.log('Testing Truck Constructor');
var myTruck = new Truck('Ford', 'F-150', 2003, 'Black', ['pass1', 'pass2']);
assert.strictEqual(myTruck instanceof Truck, true, 'Constructor did not instantiate a Truck.');
assert.strictEqual(myTruck instanceof Car, true, 'Constructor did not instantiate a Car.');
assert.strictEqual(myTruck.make, 'Ford', 'Constructor did not set make.');
assert.strictEqual(myTruck.model, 'F-150', 'Constructor did not set model.');
assert.strictEqual(myTruck.year, 2003, 'Constructor did not set year.');
assert.strictEqual(myTruck.color, 'Black', 'Constructor did not set color.');
assert.strictEqual(myTruck.seats, 3, 'Constructor did not set seats.');
assert.deepEqual(myTruck.passengers, ['pass1', 'pass2'], 'Constructor did not set passengers.');
success('Truck works!');
