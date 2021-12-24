const words = ['dog', 'dog', 'bag', 'lol'];

// every

const all3Letters = words.every(word => word.length === 3);
console.log(all3Letters);

const allEndInG = words.every(word => {
    const last = word.length - 1;
    return word[last] === 'g';
});

console.log(allEndInG);

// every

// some

const startsWithB = words.some(word => word[0] === 'b');
console.log(startsWithB);
const startsWithA = words.some(word => word[0] === 'a');
console.log(startsWithA);

// some

// example

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

const allAverageBook = books.every(book => book.rating > 3.5);
console.log(allAverageBook);
const allGoodBook = books.every(book => book.rating > 4.5);
console.log(allGoodBook);

const any2Authors = books.some(book => book.authors.length === 2); // if any book has 2 authors, it will return true
console.log(any2Authors);

// example