let evolution = ['chikorita', 'bayleef', 'meganium'];

evolution.reverse(); // array reverse. it reverses it permanently.

console.log(evolution);

let letters = ['a', 'b', 'c', 'd', 'e'];

console.log(letters.reverse().join('.')); // array reverse, then join all array elements by dot.

console.log(letters.join(',')); // array elements join by comma.

console.log(letters.join('-')); // array elements join by dash.

// join can be done by anything like: , - . $ # everthing. if you don't set anything, the default is comma .

console.log(letters.join());

console.log(letters.join(' => '));