const numbers = [20, 21, 22, 23];

numbers.forEach(number => {
    console.log(number);
});

function printTriple(n) {
    console.log(n * 3);
}

numbers.forEach(printTriple);


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

books.forEach((book) => {
    console.log(book.title.toUpperCase());
}); // here an anonymous function was used

// for(let book of books) {
//     console.log(book.title.toUpperCase());
// } // this is just a console.log

// for(let i = 0; i < books.length; i++) {
//     console.log(books[i].title.toUpperCase());
// } // here I have to use "i", books length etc.


const values = [5, 10, 15, 20];

values.forEach((value, idx) => { // second parameter is the index
    console.log(value, idx);
})