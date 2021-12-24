let food = ['burger', 'pasta', 'coke', 'pizza'];

console.log(food.includes('pasta')); // search for 'pasta'. if found then return true, otherwise false.

console.log(food.includes('kachchi')); // search for 'kachchi'. if found then return true, otherwise false.

console.log(food.includes('pasta', 2)); // search for 'pasta' from 2nd index. if found then return true, otherwise false.

if(food.includes('coke')) {
    console.log('I want dew!');
}

console.log(food.indexOf('pizza')); // search for 'pasta'. if found then return the index number, otherwise -1.

console.log(food.indexOf('kachchi')); // search for 'kachchi'. if found then return the index number, otherwise -1.


console.log(food.indexOf('pasta', 1)); // search for 'pasta' from index 1. if found then return the index number, otherwise -1.

console.log(food.indexOf('pasta', 2)); // search for 'pasta' from index 2. if found then return the index number, otherwise -1.