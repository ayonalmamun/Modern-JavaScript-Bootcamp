// indexOf

// function isPangram(sentence) {
//     let lowerCased = sentence.toLowerCase();
//     for(let char of 'abcdefghijklmnopqrstuvwxyz') {
//         if(lowerCased.indexOf(char) === -1) return false;
//     }
//     return true;
// }

// includes 

function isPangram(sentence) {
    let lowerCased = sentence.toLowerCase();
    for(let char of 'abcdefghijklmnopqrstuvwxyz') {
        if(!lowerCased.includes(char)) return false;
    }
    return true;
}

// const checker = isPangram('hi'); // false case
const checker = isPangram('The five boxing wizards jump quicklY'); // true case
console.log(checker);