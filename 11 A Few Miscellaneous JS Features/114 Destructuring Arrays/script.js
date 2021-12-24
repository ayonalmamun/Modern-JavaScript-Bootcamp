const raceResults = [
    'Eliud Kipchoge',
    'Feyisa Lelisa',
    'Galen Rupp',
    'Ghirmay Ghebreslassie',
    'Alphonce Simbu',
    'Jared Ward'
];

// const gold = raceResults[0];
// const silver = raceResults[1];
// const bronze = raceResults[2];
// console.log(gold, silver, bronze);

// destructure array

const [gold, silver, bronze] = raceResults; // index wise gold, silver, bronze
console.log(gold, silver, bronze);

// if we want to skip index

const [first, , , fourth] = raceResults;
console.log(first, fourth); // number of extra comma means how much index we want to skip 

// we can use rest in destructure

const [winner, ...others] = raceResults;
console.log(winner);
console.log(others);

// if we want to skip index in rest

// const [winner, , ...others] = raceResults;
// console.log(winner);
// console.log(others);