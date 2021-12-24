// normal function

// function greet() {
//     return 'hello';
// }

// const greetings = greet();
// console.log(greetings);


// async function

async function greet() {
    return 'hello';
}

// const greetings = greet();
// console.log(greetings); // it will return a promise which is fullfilled/resolved

const greetings = greet().then((val) => console.log(val));

// with async

async function add(x, y) {
    if(typeof(x) !== 'number' || typeof(y) !== 'number') throw 'X & Y must be numbers!';
    return x + y;
}

// without async

// function add(x, y) {
//     return new Promise((resolve, reject) => {
//         if(typeof(x) !== 'number' || typeof(y) !== 'number') reject('X & Y must be numbers!');
//         resolve(x + y);
//     })
// }

const sum = add('e', 5).then((val) => {
    console.log(val);
}).catch((err) => {
    console.log(`Error: ${err}`); // Uncaught X & Y must be numbers!
});

