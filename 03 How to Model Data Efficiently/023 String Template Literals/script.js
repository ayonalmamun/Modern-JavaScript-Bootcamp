let str = `he said, "lol"`;
console.log(str);
// here the output will be: he said, "lol"
// so it was not needed to use \ here

// we can embed information in template literal(`)
// `${}` is the syntax
let tst = `${1+5}` // 1+5 will be executed first. Output will be 6, then it will be converted into string
console.log(tst);
console.log(typeof(tst)); // check if it is number or string. Definitely it is a string.

let tst2 = `you should give me ${10 * 5} Taka for 5 Nasta`;
console.log(tst2);
// note: it will not work in normal string

let animal = "cow";
let sound = "hamba";

let op = `${animal} says ${sound}`;
console.log(op);

// template literal is the new alternative of string concatenation
console.log(animal + " says " + sound); // alternative is: console.log(op);

// we can use method in those back-ticks also
let op2 = `${animal} says ${sound.toUpperCase()}`;
console.log(op2);

// another example
let item = "cucumbers";
let price = 1.99;
let quantity = 4;

let display = `You have bought ${quantity} ${item}, total price: ${price * quantity} TK`;
console.log(display);

// another example 
const minAge = 18;
const yourAge = 15;

const errMsg = `You must be atleast ${minAge} to open an account in our bank. Come back after ${minAge - yourAge} years.`;
console.log(errMsg);