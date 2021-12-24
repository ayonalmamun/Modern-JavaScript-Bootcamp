// const add = (x, y) => x + y; 

// const math = {
//     add
// }

// console.log(math.add(3, 2));

// it is not usual that you define a function and then include it into the object and then call it

// what we will do is

const math = {
    number: [1, 2, 3, 4],
    add: (x, y) => x + y,
    multiply: (x, y) => x * y
}

console.log(math);

console.log(math.multiply(3, 2));