const arr = [
    ['red', 'crimson'],
    ['orange', 'dark orange'],
    [],
    0,
    true
]; // valid

console.log(arr);

const color = [
    ['red', 'crimson'],
    ['orange', 'dark orange'],
    ['green', 'olive'],
];

console.log(color);

console.log(color[2][0]); // if I want to see first element of the 2nd index. (green)

const foodSet = [
    ['kachchi', 'borhani'],
    [ ['pasta', 'coke'], ['pizza', 'coke'] ]
];

console.log(foodSet[1][0][0]); // pasta

foodSet[1][0][0] = 'fry'; // update information

console.log(foodSet[1][0][0]); // fry

console.log(foodSet); // see entire array