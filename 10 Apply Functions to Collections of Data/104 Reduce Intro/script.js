// accumulator = total 
// accumulator is the zero index of the array at the start
// currentValue = current val or element
// currentValue is the first index of the array at the start
// array.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue
// })

// [3,5,7,9] addition
// cb              accumulator             currentValue        return
// first call      3                       5                   8
// second call     8                       7                   15
// third call      15                      9                   24
// fourth call     24                      11                  35



// another example

const nums = [3, 4, 5, 6, 7];
const product = nums.reduce((total, currentValue) => total * currentValue);
console.log(product);