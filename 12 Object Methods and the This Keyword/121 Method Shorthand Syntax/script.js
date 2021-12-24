// shorthand syntax to write method in object
// you cannot use arrow function if you use shorthand syntax

const math = {
    add(x, y) {
        return x + y
    },
    multiply(x, y) {
        return x * y
    }
}

console.log(math);

console.log(math.multiply(3, 2));