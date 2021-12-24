const city = 'Dhaka';

// city = 'Khulna'; // you cannot do that. city is constant variable.

const food = ['kachchi', 'borhani'];

food.push('pizza');

console.log(food); // ["kachchi", "borhani", "pizza"]

food[0] = 'burger';

console.log(food); // ["burger", "borhani", "pizza"]

// although it is const array, but both of them are valid. as long as you don't reassign it, you can do whatever you like.
// the reason is, if you are not reassigning it, the reference on the memory won't be changed.

// food = ['tehari', 'birani'];  // you cannot reassign const variable.

food.unshift('fry'); // valid

console.log(food); //  ["fry", "burger", "borhani", "pizza"]

food.pop();  // valid

console.log(food); //  ["fry", "burger", "borhani"]