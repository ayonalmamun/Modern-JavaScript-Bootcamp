// console.log(animal); // output will be undefined
// var animal = 'tiger';

// but if I comment the line #2, 

// console.log(animal); // Uncaught ReferenceError: animal is not defined

// hoisting works like:

// hoisting declares the variable at the beginning but it will not initialize the value. for line #1,#2 it worked like this:

// var animal;
// console.log(animal);
// animal = 'tiger';


// console.log(simp); // for let, the case is different. Uncaught ReferenceError: Cannot access 'simp' before initialization
// let simp = 'napa';

// for const, it will behave same as let


howl();

function howl() {
    console.log('AWOOO');
}

// howl was called before howl function was initialized. but it is working perfectly as it was hoisted.


// chikorita(); // Uncaught TypeError: chikorita is not a function. it is not working because it is not hoisted.
// console.log(chikorita); // it is hoisted. it will show undefined as it is a var.

// var chikorita = function() {
//     console.log('chikaaaaa'); 
// }


// chikorita(); // Uncaught ReferenceError: Cannot access 'chikorita' before initialization. Let is not hoisted.
let chikorita = function() {
    console.log('chikaaaaa'); 
}