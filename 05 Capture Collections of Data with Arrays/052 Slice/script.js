let arr = ['cat', 'dog', 'ball', 'goat', 'annabelle'];

let slicedArray = arr.slice(0,2); // cut from index 0 to index 1.

console.log(arr); // ["cat", "dog", "ball", "goat", "annabelle"]

console.log(slicedArray); // ["cat", "dog"]

let slicedArray2 = arr.slice(3);  // cut from index 3 to end.

console.log(slicedArray2); // ["goat", "annabelle"]

let slicedArray3 = arr.slice(-3); // from last, go three elements back of the array. then take all;

console.log(slicedArray3); // ["ball", "goat", "annabelle"]

let slicedArray4 = arr.slice(-3, -1);  // from last, go three elements back of the array. then stop at one element back;

console.log(slicedArray4); // ["ball", "goat"]

let slicedArray5 = arr.slice(); // it will simply copy the entire array.

console.log(slicedArray5); // ["cat", "dog", "ball", "goat", "annabelle"]