// IIFE: Inmediately-invoked function expression.
// Allows the developer to define public and private methods.
const library = (function () {

  // -- Public Methods --

  /**
   * Returns Hello World. If a string is given as a parameter, 
   * returns Hello World combined with the string.
   * @param {string} userString The string to add.
   * @return {string} Hello World string with an string added.
   */
  function helloWorld (userString) {
    if (userString != null) {
      return "Hello World Definitive Edition: " + userString;
    } else {
      return "Hello World!";
    }
  }

  /**
   * Pushes a number into a given array.
   * @param {Array} array The array to be pushed in.
   * @param {number} addition The number to add.
   */
  function addToArray (array, addition) {
    array.push(addition)
  }


  /**
   * Removes the last element of a given array.
   * @param {Array} array The array to be popped.
   */
  function removeLastFromArray (array) {
    array.pop()
  }

  /**
   * Returns a random number from 0 to 10.
   * @return {number} random number from 0 to 10.
   */
  function getRandomFrom0To10 () {
    return Math.floor(Math.random() * 11);
  } 

  // Public methods, exposed with return statement
  return {
    helloWorld,
    addToArray,
    removeLastFromArray,
    getRandomFrom0To10
  }
})();


