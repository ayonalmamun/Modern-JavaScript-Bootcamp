function add(x, y) {
    return x + y;
}

let result = add(5, 7);
console.log(result);

const sum = function(x, y) { // this is an anonymous function, function expression is used to create anonymous function
    return x + y;
}

result = sum(10, 10);
console.log(result);
console.dir(sum); // it will print out the underlying object
console.dir(add); // it will print out the underlying object

const product = function multiply(x, y) { // this is function expression. but named function expression.
    return x * y;
} 

result = product(10, 5);
// result = multiply(10, 5); // error: multiply is not defined
console.log(result);