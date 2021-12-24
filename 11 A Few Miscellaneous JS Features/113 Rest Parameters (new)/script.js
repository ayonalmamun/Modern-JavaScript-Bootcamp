function sumAll(...nums) {
    return nums.reduce((sum, currentVal) => sum + currentVal, 0)
}

const calculation = sumAll(1, 5, 2, 5);
console.log(calculation);

// can collect remaining arguments which doesn't match with parameters

function fullName(first, last, ...restName) {
    console.log(first);
    console.log(last);
    console.log(restName);
}

fullName('habu', 'miya', 'chor', 'ase');

// notes: rest parameter must be the last parameter

// you can use it in array function

const multiply = ((...nums)  => nums.reduce((accumulator, currentVal) => accumulator * currentVal)
);

const cal = multiply(5, 4, 3, 2);

console.log(cal);