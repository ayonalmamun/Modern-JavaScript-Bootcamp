let dishes = ['pizza', 'pasta'];

console.log(dishes);

dishes.unshift('burger'); // add an item at the beginning of the array

console.log(dishes);

dishes.shift(); // removes an item from the beginning of the array

console.log(dishes);

// unshifting multiple items at a time work differently.

dishes.unshift('kachchi', 'borhani'); // it will add kachchi at the beginning. then after kachchi, borhani will be added!

console.log(dishes);

dishes.push('nasta', 'coke'); // it will add nasta and coke sequentially. and push inserts an item at the end of an array. So no complexity.

console.log(dishes);