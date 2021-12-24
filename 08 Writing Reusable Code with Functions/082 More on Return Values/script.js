// function isPurple(color) { 
//     if(color.toLowerCase() === 'purple') return true;
//     return false;
// }


// simplified coding

function isPurple(color) { 
    return (color.toLowerCase() === 'purple') ;
}

const color = 'Red';
// const color = 'PurPle';

const validation = isPurple(color);
console.log(validation);

// another example

function containsPurple(colors) {
    for(let color of colors) {
        if(color === 'purple' || color === 'magenta') return true;
    }
    return false;
}

const arrayOfColors = ['red', 'blue', 'magenta'];
const checker = containsPurple(arrayOfColors);
console.log(checker);

