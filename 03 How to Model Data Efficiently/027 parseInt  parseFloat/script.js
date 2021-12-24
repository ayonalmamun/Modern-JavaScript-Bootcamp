let val1 = "423";
let val2 = "505.7";

let op1 = parseInt(val1);
console.log(op1);
console.log(parseInt(val2)); // direct

console.log(val1 + 1); // 4231
console.log(parseInt(val1) + 1); // 424

let val3 = "21.5";
let val4 = "25";
let val5 = "I ate 5.5 plate Kachchi"

console.log(parseFloat(val3));
console.log(parseFloat(val4));
console.log(parseFloat(val5)); // NaN
// but
console.log(parseFloat("99 cents")); // the function will go on if it detects a number at the beginning // output: 99

// it will be okay too if it finds space at the beginning
console.log(parseFloat("   500 Taha")); // 500

// it will stop until it finds a non-numeric value
console.log(parseFloat("50-0 Taha")); // 50