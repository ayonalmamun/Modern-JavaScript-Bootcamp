console.log(Math.max(33, 4, 5, 7, 44, 13, 20));

const arr = [33, 4, 5, 7, 44, 13, 20];
console.log(Math.max(arr)); // NaN because Math.max() expects number, not array

// *** spread ***
console.log(Math.max(...arr));



function giveMeFour(a, b, c, d) {
    console.log('a', a);
    console.log('b', b);
    console.log('c', c);
    console.log('d', d);
}

giveMeFour(4, 5, 6, 7);

const color = ['red', 'green', 'blue', 'yellow'];
// giveMeFour(color);
// output
// a (4) ['red', 'green', 'blue', 'yellow']
// b undefined
// c undefined
// d undefined
// output

// if we use spread
giveMeFour(...color);

// another example: spread in string
const str = 'LM10';
giveMeFour(...str);


