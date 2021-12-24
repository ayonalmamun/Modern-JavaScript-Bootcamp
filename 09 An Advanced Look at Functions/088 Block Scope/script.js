if(true) {
    let animal = 'yay';
    console.log(animal);
}

// console.log(animal); // it will give error as animal is not defined


// but

if(true) {
    var animal = 'yay';
    console.log(animal);
}

console.log(animal); // it will work inside and outside of the block. we will have access to it

// let animals = ['tiger', 'lion', 'deer'];
// var i = 10;
// for(var i = 0; i < animals.length; i++) {
//     console.log(i, animals[i]);
// }
// console.log(i); // i will be 3, not 10 because var works in both inside and outside the block.

// let animals = ['tiger', 'lion', 'deer'];
// let i = 10;
// for(var i = 0; i < animals.length; i++) { // it will give error that i is already decleared
//     console.log(i, animals[i]);
// }
// console.log(i); 

// let animals = ['tiger', 'lion', 'deer'];
// var i = 10;
// for(let i = 0; i < animals.length; i++) { 
//     console.log(i, animals[i]);
// }
// console.log(i);  // it will be 10 this time. because "let i" only works inside the scope.

// let animals = ['tiger', 'lion', 'deer'];
// var i = 10;
// for(const i = 0; i < animals.length; i++) { // error: you cannot use const as it will be incremented
//     console.log(i, animals[i]);
// }
// console.log(i); 

// let animals = ['tiger', 'lion', 'deer'];
// let i = 10;
// for(let i = 0; i < animals.length; i++) {
//     console.log(i, animals[i]);
// }
// console.log(i);  // it will work and output will be 10 as those two "i" are in different scope

// var age = 45;
// console.log(age);
// var age = 20;
// console.log(age);
// you can redeclare with var

// let number = 45;
// console.log(number);
// let number = 20;
// console.log(number);
// you cannot redeclare a variable in the same scope if you use let.

function doubleArr(arr) {
    const result = [];
    for(let num of arr) {
        let double = num * 2;
        // var double = num * 2;
        result.push(double);
    }
    // console.log(double); // it will not work as it is outside of the scope. but it will work if the double was "var" instead of "let".
    return result;
}

// function doubleArr(arr) {
//     const result = [];
//     let double;
//     for(let num of arr) {
//         double = num * 2;
//         result.push(double);
//     }
//     console.log(double); // it will work as double is in this scope
//     return result;
// }

const arr = [1, 3, 5];
const result = doubleArr(arr);
console.log(arr);
console.log(result);