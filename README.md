# Prototype Body Shop

The idea of this lab is to get you comfortable with Object Oriented Programming (OOP) and introduce you to Test Driven Development (TDD) in JavaScript. By the end you should be comfortable working with objects and writing prototypes.

All of the tests have been written for you, so all you'll need to do is run them. No need to create any Car objects, because the tests will do that for you.

If any of the tests errors are unclear, take a look at what the test is running within `test/carTest.js`

## Getting Started

* Fork and clone this repository
* Run `npm install` to install dependencies
* `npm test` - run test suite
* `npm run lint:js` - lint JS

## Submission

To submit, create a pull request as before. Additionally, your submission will be checked automatically using a [continuous integration](https://en.wikipedia.org/wiki/Continuous_integration) service called Travis CI. Travis CI will do the following to check your code:

* Run `npm install` on Travis's servers
* Run `npm run lint:js` to check your code styling
* Run `npm test` to check if your tests pass

Make sure to **run these commands locally first** to verify your correctness. You can see the progress of the Travis CI check by going to your pull request, or looking at the [Travis CI build page for this repo](https://travis-ci.org/WDI-SEA/oop-prototype-car/pull_requests)

##Requirements

We need a prototype for a car. Can you help us with your sweet JavaScript skills?

### Phase I

Your `Car` should meet the following requirements:

* Must have the following constructor parameters:
  * `make`
  * `model`
  * `year`
  * `color`
  * `seats`
* By default, a new `Car` should have the following values **initialized** in the constructor:
  * `previousOwners`
    * should be initialized to an empty array, `[]`.
  * `owner`
    * should be initialized to `manufacturer`.
  * `running`
    * should be initialized to `false`.
* We should be able to do the following with our car:
  * `Car.sell(newOwner)`
    * We should able to sell a car to someone, which should update the `owner` and `previousOwners` array.
    * This takes 1 string parameter for the new owner's name.
    * The old owner should be pushed to the end of the `previousOwners` array.
    * The new `owner` should be set to the parameter passed in.
  * `Car.paint(newColor)`
    * We should be able to paint the car a new color
    * This takes 1 string parameter for the new color's name
    * This should update the color of the car to the new color.

### Phase II

Implement and test the following methods:

* `Car.start()`
  * Should change the running value of the car to `true`.
* `Car.off()`
  * Should change the running value to `false`.
* `Car.driveTo(destination)`
  * Should `console.log` `"driving to <destination>"`, but only if the car is running.
  * Should return true if it is successful and false if it is not.
* `Car.park()`
  * Only if the car is not running, you should console.log `parked!!`.
  * Should return true if it is successful and false if it is not.


### Phase III

Add the following property as a parameter to the **constructor**:

* `passengers`
  * Should be optional and default to an empty array if not specified.

Implement the following methods:

* `Car.pickUp(name)`
  * Should take a `name` and `console.log` that you are `"driving to pick up <name>"`, but only if the `car` is running AND there are enough seats available.
  * Should also update the `passengers` array to include the new passenger.
  * Should also return true on success and false on failure.
  * The newly picked up passenger should be `pushed` to the end of the array.
* `Car.dropOff(name)`
  * Should take a `name` and remove them from the `passengers` array, but only if they are in the array.
  * Should also only drop them off if the car is `on`.
  * Should also output `"driving to drop off <name>"` and return true on success and false on failure.
* `Car.passengerCount()`
  * Should return the number (integer) of passengers currently in the car.

**NOTE:** When deciding if there are enough seats available, remember that the driver takes up 1 seat, but is NOT counted as a passenger in passengerCount(). You can assume the driver is the owner.


#Bodyshop Part 2

Cars are great and all, but now it's time to extend this system and make it handle more types of vehicles.

Remember TDD? This time, you'll have to make your own tests for each feature. In many work environments, **you** will be the one writing tests. As a reminder, here's the workflow:

1. Read each feature below and think about what it's asking for.
2. Create a test (in test.js) to test the feature
3. Run the test
4. Write / revise code (in Motorcycle.js/Truck.js) to pass test, if necessary
5. Repeat 3 and 4 until you pass all tests
6. Move on to the next feature (start back at step 1)

##Getting Started

* Fork and clone the repository
* Run `npm install` to install dependencies
  * `npm run lint:js` - lint JS
  * `npm test` - run test suite

## Writing Tests

In order to write tests, it's recommended that you look back at the tests for `Car.js` and start following some of the examples in order to get a feel for how to structure tests. Take advantage of the following functions:

* `assert.strictEqual(val1, val2, 'msg')` - strictly compares two primitive values
* `assert.deepEqual(val1, val2, 'msg')` - strictly compares the properties of two objects or arrays
* `instanceof` - compares an object and a constructor, and sees if the object is an instance of the constructor
* `success()` - a helper method defined in `test/helpers/success.js` that provided a success message after test units

## Submission

After you submit via pull request, make sure your Travis CI build passes. Note that since we did not provide you the tests, it's *your* responsibility to write correct tests and correct code.

## Requirements

###Part 1 -- Trucks

Create a new constructor called `Truck` that inherits `Car`.

This should be done in the file called `Truck.js`, which requires `Car.js` for you to use. Additionally your `truckTest.js` will need to require `Truck.js` (already done for you).

Your `Truck` constructor should meet the following requirements. There should be at least one test for each bullet point below.

* Must be an instance of `Truck`
* Must be an instance of `Car`.
* Must have the following constructor parameters:
  * make
  * model
  * year
  * color
  * passengers
* Must default to 3 seats.

There should be tests for each one of the bullet points above.

###Part 2 -- Motorcycles

Create a new constructor called `Motorcycle` that inherits your `Car` constructor.

This should be done in the file called `Motorcycle.js`, which requires `Car.js` for you to use. Additionally your `motorcycleTest.js` will need to require `Motorcycle.js` (already done for you).

Your `Motorcycle` constructor should meet the following requirements. There should be at least one test for each bullet point below.

* Must be an instance of a `Motorcycle`
* Must be an instance of a `Car`
* Must have the following parameters
  * make
  * model
  * year
  * color
  * passengers
* Must default to 2 seats
* Must be able to do a wheelie by calling `wheelie()`, but only if running.
  * If the wheelie is successful, return true and `console.log` the following: `"Doing a sick wheelie!!"`. Otherwise return false.
  * This function should be attached to `Motorcycle.prototype`.

---

## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
