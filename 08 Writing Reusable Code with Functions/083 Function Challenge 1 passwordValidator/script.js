// style 1

// function isValidPassword(password, username) {
//     if (password.length < 8) return false;
//     if (password.indexOf(' ') !== -1) return false;
//     if (password.indexOf(username) !== -1) return false;
//     return true;
// }

// style 2

// function isValidPassword(password, username) {
//     if (password.length < 8 || password.indexOf(' ') !== -1 || password.indexOf(username) !== -1) return false;
//     return true;
// }

// style 3

// function isValidPassword(password, username) {
//     const tooShort = password.length < 8;
//     const hasSpace = password.indexOf(' ') !== -1;
//     const tooSimilar = password.indexOf(username) !== -1;
//     if (tooShort || hasSpace || tooSimilar) return false;
//     return true;
// }

// style 3 v2

// function isValidPassword(password, username) {
//     const tooShort = password.length < 8;
//     const hasSpace = password.indexOf(' ') !== -1;
//     const tooSimilar = password.indexOf(username) !== -1;
//     if (!tooShort && !hasSpace && !tooSimilar) return true;
//     return false;
// }

// style 4

function isValidPassword(password, username) {
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const tooSimilar = password.indexOf(username) !== -1;
    return !tooShort && !hasSpace && !tooSimilar;
}

const username = 'habumiya';
// const password = 'habu'; // smaller than 8 digit
// const password = 'habu iya'; // with space
// const password = 'habumiya'; // same as username
const password = 'habuchor';  // valid
const checker = isValidPassword(password, username);
console.log(checker);


