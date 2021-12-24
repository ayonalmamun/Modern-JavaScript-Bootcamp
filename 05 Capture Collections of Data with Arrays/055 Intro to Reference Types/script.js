let fruit = 'orange';
let color = fruit;

console.log(fruit); // orange
console.log(color); // orange

fruit = 'watermelon';

console.log(fruit); // watermelon
console.log(color); // orange

// above, fruit was replaced. but color remained the same.

// but for array, it is different.

let num = [1, 2, 3, 4];

let newNum = num;

console.log(num); // [1, 2, 3, 4]
console.log(newNum); // [1, 2, 3, 4]

num.push(5);

console.log(num); // [1, 2, 3, 4, 5]
console.log(newNum); // [1, 2, 3, 4, 5]
// we see, both num & newNum was updated. because they are in the same reference of the memory.

newNum.push(6);

console.log(num); // [1, 2, 3, 4, 5, 6]
console.log(newNum); // [1, 2, 3, 4, 5, 6]

// as they are in the same reference, both of them will be updated.