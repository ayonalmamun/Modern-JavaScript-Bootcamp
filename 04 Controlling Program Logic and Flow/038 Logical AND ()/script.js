// and operation
// console.log(true && true) // true
// console.log(true && false) // false
// console.log(false && true) // false
// console.log(false && false) // false

// console.log(1 <=5  && 5 === 5) // true

// practical example 1

let password = 'PokemonBad';
// let password = 'Pokemon Bad';
// let password = 'Bad';

if(password.length >= 6 && password.indexOf(' ') === -1) { // -1 means not found
    console.log('Valid Password'); 
} else {
    console.log('Password must be longer');
}

// practical example 2

let num = 5;
// let num = 15;

if(num >=1 && num <= 10) {
    console.log('Between 1 and 10');
} else {
    console.log('not between 1 and 10');
}