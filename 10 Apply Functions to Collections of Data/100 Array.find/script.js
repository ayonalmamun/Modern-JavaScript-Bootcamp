let movies = [
    'The Fantastic Mr. Fox',
    'Mr. and Mrs. Smith',
    'Mrs. Doubtfire',
    'Mr. deeds'
];

const movie = movies.find(movie => movie.includes('Mrs'));

console.log(movie);

// if any movie includes 'Mrs.', it will return true and find method will return the movie name. and the find method will be terminated(will stop after the first match).

const movie2 = movies.find(movie => movie.indexOf('Mrs') === 0);

console.log(movie2);

// this will return the movie name which has 'Mrs' at the beginning of the name.
// Note: find method stops after the first match


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

const goodBook = books.find(book => book.rating >= 4.3);
console.log (goodBook);

const neilBook = books.find(book => book.authors.includes('Neil Gaiman'));
console.log (neilBook);