// const square = n => {
//     return n * n;
// }

// refactor the code:

// const square = n => (
//     n * n
// );

// console.log(square(4));


// refactor the code:

const square = n => n * n; // implicit return

console.log(square(3));


const numbers = [1, 2, 3, 4, 5];

const double = numbers.map((number) => {
    return number * 2;
});

console.log(double);

// refactor the code:

const double3 = numbers.map(n => n * 2);

console.log(double3);


// const parityList = numbers.map((n) => {
//     if(n % 2 == 0) return 'even';
//     return 'odd';
// });

// console.log(parityList);

// refactor the code:

// const parityList = numbers.map((n) => (
//     n % 2 == 0 ? 'even' : 'odd'
// ));

// console.log(parityList);


// refactor the code:

const parityList = numbers.map(n => n % 2 == 0 ? 'even' : 'odd');

console.log(parityList);
