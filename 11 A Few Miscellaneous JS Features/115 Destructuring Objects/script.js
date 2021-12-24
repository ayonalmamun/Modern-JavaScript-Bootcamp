const runner = {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
    title: "Elder of the Order of the Golden Heart of Kenya"
};

// const {first, last} = runner;

// console.log(first);
// console.log(last);

// we can also make new variable while destructuring

// const {
//     first,
//     last,
//     // time
//     time = 5
// } = runner;

// console.log(first);
// console.log(last);
// console.log(time); // undefined for the commented one, 5 for the uncommented one

const {
    country: nation, // destructure and naming the new country variable name as nation
    title: honorific // destructure and naming the new title variable name as honorific
} = runner;

console.log(nation);
console.log(honorific);
// console.log(country); // Uncaught ReferenceError: country is not defined

// we can also use rest

const {
    first, 
    last,
    ...others
} = runner;

console.log(first);
console.log(last);
console.log(others);