// collects things down in an array
// opposite of spread

function sum() {
    const argsArr = [...arguments]; // using spread to create array from arguments. Arguments looks like array like object, but not really array.
    return argsArr.reduce((total, currentVal) => total + currentVal, 0);
}

const calculation = sum(1, 2, 3, 4, 5);
console.log(calculation);

function fullName(first, last) {
    console.log(arguments); // I can send unlimited function arguments.
    console.log(first);
}

fullName('tom', 'jones', 'order of the phoenix', 'jones');


// arguments object does not work in arrow function

const multiply = () => console.log(arguments); // Uncaught ReferenceError: arguments is not defined

multiply(5, 3, 2);