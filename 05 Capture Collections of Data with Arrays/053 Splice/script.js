 // add, replace, remove element from array

 let food = ['kachchi', 'burger', 'pasta', 'pizza', 'moglai'];
 console.log(food); //  ["kachchi", "burger", "pasta", "pizza", "moglai"]

 // first perameter: where to start, second perameter: how many items to delete, third and all next perameter: what to add.
 food.splice(1, 0, 'borhani'); // splice only returns removed item. if you do not remove anything, it will return empty array. 

 console.log(food); //  ["kachchi", "borhani", "burger", "pasta", "pizza", "moglai"]

 food.splice(2, 2); // start from index 2, then remove 2 items. here, burger and pasta was removed.
 // if you do it on console, you will see, it will return burger and pasta.

 console.log(food); // ["kachchi", "borhani", "pizza", "moglai"]

 food.splice(2, 0, 'burger', 'pasta');  // start from index 2, then remove 0 items. then add burger and pasta.

 console.log(food); // ["kachchi", "borhani", "burger", "pasta", "pizza", "moglai"]

 food.splice(1, 2, 'coke', 'nasta'); // start from index 1, remove 2 items (here, borhani and burger), then add(replace) coke and nasta. 

 console.log(food); // ["kachchi", "coke", "nasta", "pasta", "pizza", "moglai"]