let nums = [1,2,3];
let mystery = [1,2,3];

if(nums === mystery) {
    console.log(true);
} else {
    console.log(false);
}

// it doesn't work this way. As array is reference type. It doesn't store the values, it stores address.
// when we compare two arrays with == or ===, we are comparing the addresses.


let moreNums = nums;
if(nums === moreNums) {
    console.log(true);
} else {
    console.log(false);
}
// it will return true as they are refering to the same address.


const user = {
    username : 'habu',
    email : 'habumiya@gmail.com',
    notification: []
};

if(user.notification === []) {
    console.log(true);
} else {
    console.log(false);
}

// it won't return true as empty arrays are individually references of different addresses too!

// we can check if the array is empty by doing this:
if(!user.notification.length) {
    console.log('Empty');
} else {
    console.log('Not Empty');
}
//simplify
if(user.notification.length === 0) {
    console.log('Empty');
} else {
    console.log('Not Empty');
}

// object equality
const test = {
    name : 'kabila'
};

const test2 = test;

if(test === test2) {
    console.log(true);
} else {
    console.log(false);
}

// it will return true as those two are refering to the same address