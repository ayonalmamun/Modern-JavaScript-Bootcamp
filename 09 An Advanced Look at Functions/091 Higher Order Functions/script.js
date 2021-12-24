function add(x, y) {
    return x + y;
}

const substract = function (x, y) {
    return x -y;
}

function multiply(x, y) {
    return x * y;
}

const divide = function (x, y) {
    return x / y;
}

const operations = [add, substract, multiply, divide];

console.log(operations[1]); // substract

console.log(operations[1](100, 5)); // substract(100, 5)

for(let func of operations) {
    console.log(func); // it will print the functions list
}

for(let func of operations) {
    const result = func(30, 5)
    console.log(result);
}

const thing = {
    doSomething: multiply // putting function in an object
};

console.log(thing.doSomething);
console.log(thing.doSomething(3, 4));