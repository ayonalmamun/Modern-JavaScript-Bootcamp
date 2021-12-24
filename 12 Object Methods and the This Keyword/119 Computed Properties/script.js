const role = 'Android Developer';
const person = 'Habu Miya';

const role2 = 'CEO';
const person2 = 'LK';

// const team = {
//     role: person
// }

// console.log(team);

// but it is not checking that what the role is.  It is not checked if it is a variable

// const team = {};
// team[role] = person;
// team[role2] = person2;

// console.log(team);

// we can do this all at once

const team = {
    [role]: person,
    [role2]: person2,
    [1 + 6 + 9]: 'sixteen'
}

console.log(team);


// adding new property

// function addProp(obj, key, val) {
//     const copy = {...obj}; // using spread to copy the object
//     copy[key] = val;
//     return copy;
// }

// const result = addProp(team, 'bossCompany', true);
// console.log(result);


// adding new property using computed property

// const addProp = (obj, key, val) => {
//     return {
//         ...obj,
//         [key]: val
//     }
// };

// const result = addProp(team, 'bossCompany', true);
// console.log(result);

// in one line arrow function, implicit return

const addProp = (obj, key, val) => ({...obj, [key]: val})

const result = addProp(team, 'bossCompany', true);
console.log(result);