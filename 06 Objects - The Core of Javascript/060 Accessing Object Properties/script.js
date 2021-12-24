const number = {
    100 : 'one hundred',
    16 : 'sixteen',
    '21 Guns' : 'good song!'
};

console.log(number[100]); // the way to access property which is a number. During object creation all keys are converted to strings.

console.log(number['100']); // we will get the same result.

console.log(number['21 Guns']);

// you cannot access these properties with dot(.)

const palette = {
    red : '#eb4d4b',
    yellow: '#f9ca24',
    blue: '#30336b'
};

console.log(palette['yellow']);
// or
console.log(palette.yellow);

// another way
console.log(palette["yell" + "ow"]);
//

let mysteryColor = 'blue';

console.log(palette[mysteryColor]); // it will not work using dot(.)

