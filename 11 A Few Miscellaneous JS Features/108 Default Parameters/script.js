// function multiply(x, y) {
//     return x * y;
// };

// const calculation = multiply(5, 2);

// what if we don't define the value of 2nd parameter? then the output will be NaN

// const calculation = multiply(5);

// console.log(calculation);

// setting default value for y

// function multiply(x, y) {
//     if(typeof y === 'undefined') y = 1; // setting default value for y
//     return x * y;
// };

// refactor

// function multiply(x, y) {
//     y = typeof y === 'undefined' ? 1 : y // setting default value for y
//     return x * y;
// };

// *** default parameter syntax ***

function multiply(x, y = 1) { // setting default value for y
    return x * y;
};

// *** default parameter syntax ***

// const calculation = multiply(5, 2);

const calculation = multiply(5);

console.log(calculation);

// another example

const greet = (person, greeting = 'hi') => console.log(`${greeting}, ${person}`);

const greetHabu = greet('habu', 'yo');
const greetKabila = greet('Kabila'); // it will use default greeting value

// use array as default value example 

const arr = (x, y = [1, 2, 3]) => console.log(`x: ${x}, y: ${y}`);

const arrVal1 = arr(5, 3);
const arrVal2 = arr(5);

// example with three parameter

const greetV2 = (person, greeting = 'hi', punctuation = '!') => console.log(`${greeting}, ${person}${punctuation}`);

const greetHabuV2 = greetV2('habu', 'yo', '!');
const greetKabilaV2 = greetV2('Kabila'); // it will use default greeting, punctuation value

// default parameters has to come at the end of the parameter. otherwise there will problem
// suppose I want to greet: person: 'kabila', greeting: default value, punctutation: '.'
// it is not possible for greetV2
// const greetKabilaV3 = greetV2('Kabila', '?', '.'); // what I will do with the second params?