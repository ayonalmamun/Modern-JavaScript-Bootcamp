// console.log(!null); // output: true. because null is a falsy value.
// console.log(!0); // output: true. because 0 is a falsy value.
// console.log(!""); // output: true. because "" is a falsy value.
// console.log(!45); // output: false. because 45 is numeric, truthy value.

// example 1
let loggedInUser;

if(!loggedInUser) {
    console.log('Please log in!');
}

// example 2

let flavor = 'grape';

// version1:
if(flavor !== 'grape' && flavor !== 'cherry') {
    console.log('Not available!');
}

// version2:
if(!(flavor === 'grape' || flavor === 'cherry')) { 
    console.log('Not available!');
}