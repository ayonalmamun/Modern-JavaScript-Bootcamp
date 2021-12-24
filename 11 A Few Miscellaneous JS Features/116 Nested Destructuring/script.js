const results = [
    {
        first: "Eliud",
        last: "Kipchoge",
        country: "Kenya",
    },
    {
        first: 'Feyisa',
        last: 'Lilesa',
        country: 'Ethiopia'
    },
    {
        first: 'Galen',
        last: 'Rupp',
        country: 'United States'
    }
];

const [, {country} ] = results; // used comma to skip zero index, then destructure the country of first index

console.log(country);

const [{first: goldWinner}, {country: countryOf1stIndex}] = results;

console.log(goldWinner);
console.log(countryOf1stIndex);

// instead of going complex, nested stuff

const [, silverMedal] = results; // destructuring first index
const {country: countryOfSilverMedalist} = silverMedal; // destructuring objects of the first index

console.log(countryOfSilverMedalist);

