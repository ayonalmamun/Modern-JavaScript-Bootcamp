const numbers = [500, 100, 55.25, 125, 200, 13.5];

// for ascending
// if a - b > 0,  b before a. else if a - b < 0, a before b. else if a - b = 0, then no change.
//  a                       b           a-b         so
//  500                     100         400         if(+) b before a
//  55.25                   125         -69.75      if(-) a before b
// for descending, it will be b-a > 0, b before a. else if b - a < 0, a before b. else if b - a = 0, then no change.
//  a                       b           b-a         so
//  500                     100         -400        if(-) a before b
//  55.25                   125         69.75       if(+) b before a

// const ascSort = numbers.sort((a, b) => a - b);
// console.log(ascSort);
// const descSort = numbers.sort((a, b) => b - a);
// console.log(descSort);

// at the end of the day, if you go to console and type:
// ascSort or descSort or numbers, you will get the same output
// because all of them are pointing to the same array, sort method just mutates the array.


// solve: use slice() to copy the array

const ascSort = numbers.slice().sort((a, b) => a - b);
console.log(ascSort);
const descSort = numbers.slice().sort((a, b) => b - a);
console.log(descSort);



const books = [
    {
        title: 'Good Omens',
        authors: ['Terry Pratchett', 'Neil Gaiman'],
        rating: 4.25,
        genres: ['fiction', 'fantasy']
    },
    {
        title: 'Changing My Mind',
        authors: ['Zadie Smith'],
        rating: 3.83,
        genres: ['nonfiction', 'essays']
    },
    {
        title: 'Bone: The Complete Edition',
        authors: ['Jeff Smith'],
        rating: 4.42,
        genres: ['fiction', 'graphic novel', 'fantasy']
    },
    {
        title: 'American Gods',
        authors: ['Neil Gaiman'],
        rating: 4.11,
        genres: ['fiction', 'fantasy']
    },
    {
        title: 'A Gentleman in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36,
        genres: ['fiction', 'historical fiction']
    },
    {
        title: 'The Name of the Wind',
        authors: ['Patrick Rothfuss'],
        rating: 4.54,
        genres: ['fiction', 'fantasy']
    },
    {
        title: 'The Overstory',
        authors: ['Richard Powers'],
        rating: 4.19,
        genres: ['fiction', 'short stories']
    },
    {
        title: 'The Way of Kings',
        authors: ['Brandon Sanderson'],
        rating: 4.65,
        genres: ['fantasy', 'epic']
    },
    {
        title: 'Lord of the flies',
        authors: ['William Golding'],
        rating: 3.67,
        genres: ['fiction']
    }
];


// books.sort((a, b) => a.rating - b.rating); // if you want lowest rated books first.

books.sort((a, b) => b.rating - a.rating); // if you want highest rated books first.

console.log(books);