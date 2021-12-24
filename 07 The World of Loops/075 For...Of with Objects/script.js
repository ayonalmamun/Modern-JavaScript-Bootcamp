const movieReviews = {
    Arrival : 8.5,
    Alien : 9,
    'In Bruges' : 7.5,
    'Kill Bill' : 8,
    Matrix: 9.5
};

// you cannot do this way, you will get error

// for(let keys of movieReviews) {
//     console.log(keys);
// }

//

console.log(Object.keys(movieReviews)); // print the movie names(keys)
console.log(Object.values(movieReviews)); // print the movie ratings(values)

for(let movie of Object.keys(movieReviews)) {
    console.log(movie); // print the movie names
}

for(let movie of Object.keys(movieReviews)) {
    console.log(movie, movieReviews[movie]); // print the movie names & ratings
}

const ratings = Object.values(movieReviews); // get all the movies ratings
let total = 0;

for(let rating of ratings) {
    total += rating;
}

let avg = total /= ratings.length;
console.log(avg);

console.log(Object.keys(movieReviews)[2]); 