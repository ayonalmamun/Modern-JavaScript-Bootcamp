function square(num) {
    console.log(num * num);
}

function sum(x, y) {
    console.log(x + y);
}

function divide(a, b) {
    console.log(a / b);
}

square(4);
sum(5,2);
divide(1,4)
divide('s',4) // NaN
divide(10) // NaN as b is not defined. and if a number is divided by undefined, the output will be NaN.