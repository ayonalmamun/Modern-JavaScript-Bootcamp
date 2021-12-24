const userReviews = {};

// you can add property with both dot or square
userReviews['queenBee49'] = 4.0;
userReviews.mrSmith = 3.6;

console.log(userReviews);

console.log(userReviews.mrSmith);

// modify property with dot
userReviews.mrSmith = 2.5;

console.log(userReviews);

// modify property with square

userReviews['mrSmith'] += 1; // we can use ++, += etc everything

console.log(userReviews);


userReviews.mrSmith++;

console.log(userReviews);