// map is used to create a new array from existing array
// it could be used to simply duplicate an array.
// can extract portion of an array


const texts = ['hi', 'bye', 'lol', 'hmm'];
const caps = texts.map((t) => {
    return t.toUpperCase();
});

console.log(texts);
console.log(caps); 

const numbers = [5, 10, 15, 20];

const double = numbers.map((number) => {
    return number * 2;
});

// it will do what the map did
const double2 = [];
for(let num of numbers) {
    double2.push(num * 2);
}
//

const test = numbers.map((number) => {
    number * 2;
});

console.log(numbers);
console.log(double);
console.log(double2);
console.log(test); // it will return undefined 4 times in an array. because map puts whatever it gets as returned value.

const numDetail = numbers.map((n) => {
    return {
        value: n,
        isEven: n % 2 === 0
    }
});

console.log(numDetail);

const words = ['asap', 'diy', 'brb'];

const updatedWords = words.map((word) => {
    return word.toUpperCase().split('').join('.');
});

console.log(words);
console.log(updatedWords);

const books = [
    {
        title: 'Good Omens',
        authors: ['Terry Pratchett', 'Neil Gaiman'],
        rating: 4.25
    },
    {
        title: 'Bone: The Complete Edition',
        authors: ['Jeff Smith'],
        rating: 4.42
    },
    {
        title: 'American Gods',
        authors: ['Neil Gaiman'],
        rating: 4.11
    },
    {
        title: 'A Gentleman in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36
    }
];

// I want a new array where author and rating will not be there.

const titles = books.map((book) => {
    return book.title;
});

console.log(titles);