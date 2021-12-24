let rating = '2';

if(rating === 3) {
    console.log('Average');
} else if(rating === 2) {
    console.log('Bad');
} else if(rating === 1) {
    console.log('Very Bad');
} else {
    console.log('Rating: N/A');
}

// another Example
let highScore = 1400;
// let userScore = 1200;
let userScore = 1600;

if(userScore >= highScore) {
    console.log(`Congrats! you have the new high score of ${userScore}`);
    highScore = userScore;
} else {
    console.log(`Well played! Your score: ${userScore}. Highest Score: ${highScore}`);
}