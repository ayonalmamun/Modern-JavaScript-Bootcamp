let num = 6;

// v1:

// if(num === 7) {
//     console.log('Lucky');
// } else {
//     console.log('Not Lucky');
// }

// v2 ternary operator:

num === 7 ? console.log('Lucky') : console.log('Not Lucky');

// condition ? if true : if false


// another example:

let status = 'offline';

// version1

// let color;

// if(status === 'offline') {
//     color = 'red';
// } else {
//     color = 'green';
// }

// console.log(color);

// version2: ternary operator

let color = status === 'offline' ? 'red' : 'green';
// you can assign a value of a variable using ternary variable
console.log(color);
