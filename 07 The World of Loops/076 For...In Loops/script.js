const shakib = {
    runsInOdi : 7000,
    wicketsInOdi : 300,
    runsInTest : 5000,
    wicketsInTest : 200,
};

for(let prop in shakib) {
    console.log(prop);
    console.log(shakib[prop]);
}

let total = 0;

for(let prop in shakib) {
    total += shakib[prop];
}

console.log(total);

for(let k in [88, 89, 66, 77]) {
    console.log(k); // it will print the array index numbers
}

console.log(shakib['runsInTest']);