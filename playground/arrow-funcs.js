// Minimal syntax to define arrow functions
var square = x => x * x;

// Use es6 syntax on objects
var user = {
  name: 'Miguel',
  sayHiWrong: () => {
    console.log('Arguments: ', arguments);
    console.log(`Hi. I'm ${this.name}`);
  }, 
  sayHi() {
    console.log('Arguments: ', arguments);
    console.log(`Hi. I'm ${this.name}`);
  }, 
  sayHi2: function() {
    console.log('Arguments: ', arguments);
    console.log(`Hi. I'm ${this.name}`);
  }, 
}

// Test the new syntax
console.log(`----- Works:`);
user.sayHi(1, 2, 3);
console.log(`----- Works:`);
user.sayHi2(1, 2, 3);
console.log(`----- Doesn't work:`);
user.sayHiWrong(1, 2, 3);
