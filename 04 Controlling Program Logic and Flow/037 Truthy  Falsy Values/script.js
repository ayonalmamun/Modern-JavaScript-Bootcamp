let mystery1 = 5; // truthy
let mystery2 = 0; // falsy
let mystery3 = NaN; // falsy

if(mystery1) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

if(mystery2) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

if(mystery3) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

// everthing in JS is truthy except false, 0 , "", null, undefined, NaN 

// practical example


// let loggedInUser = 'Habu Chor';
let loggedInUser;
if(loggedInUser) {
    console.log('you are logged in!');
} else {
    console.log('please log in!');
}

// we use this to check if the variable has content which mean it is not null/undefined etc.