/*! identitymanager v1.0.0 | Create a person, name it and give it an age. Javascript library example using ES Modules. | Copyright 2023 | MIT license */
'use strict';

// This version of the library uses ES Modules to allow loading only the
// those modules required by the webpage.

// -- Public Methods --

function Constructor (name, age, options = {}) {

  // As long as the user doesn't specify any options, we will
  // assign the default ones.
  let defaultSettings = Object.assign ({
    lang: "EN"
  }, options);
  Object.freeze(defaultSettings); // Prevents them from being modified onwards

  // We define each property of the prperty and set their writability (false by default)
  Object.defineProperties(this, {
    name: {
      value: new String(name),
      writable: true
    }, 
    age: {
      value: new Number(age),
      writable: true
    }, 
    settings: {
      value: defaultSettings,
    },
  });

  console.log("He creado a la persona " + this.name + ", de edad " + this.age + ". Opciones de configuración: ");
  console.log(this.settings);
}

Constructor.prototype.getName = function () {
  return this.name;
};

Constructor.prototype.getAge = function () {
  return this.age;
};

/**
* Setter for name.
* @param {Number} comparisonAge The age integer to compare with the stored Age.
* @return {string} A string detailing the result of the comparison (higher, lower, or same).
*/
Constructor.prototype.setName = function (newName) {
  this.name = newName;
  return this;
};

/**
* Setter for age.
* @param {Integer} comparisonAge The age integer to compare with the stored Age.
* @return {string} A string detailing the result of the comparison (higher, lower, or same).
*/
Constructor.prototype.setAge = function (newAge) {
  this.age = newAge;
  return this;
};

/**
* Checks if the given age is bigger, smaller, or the same as the one stored
* @param {Integer} comparisonAge The age integer to compare with the stored Age.
* @return {string} A string detailing the result of the comparison (higher, lower, or same).
*/
Constructor.prototype.olderOrYounger = function (comparisonAge) {
  if (comparisonAge > this.age) {
    return "The given age is older than " + this.name + "'s age";
  } else if (comparisonAge < this.age)  {
    return "The given age is younger than " + this.name + "'s age";
  } else {
    return "They are both the same age!"
  }
};

module.exports = Constructor;
