// const willGetYouKachchi = new Promise((resolve, reject) => {

// })

// console.log(willGetYouKachchi); // will get a promise which is pending

// const willGetYouKachchi = new Promise((resolve, reject) => {
//     reject(); // will get an error: Uncaught (in promise) undefined
// })

// console.log(willGetYouKachchi); // will get a promise which is rejected

// const willGetYouKachchi = new Promise((resolve, reject) => {
//     resolve();
// })

// console.log(willGetYouKachchi); // will get a promise which is fulfilled



// const willGetYouKachchi = new Promise((resolve, reject) => {
//     const random = Math.random();
//     console.log(random);
//     if(random >= 0.5) resolve();
//     else reject();
// })

// console.log(willGetYouKachchi); // will get a promise which is rejected



// how do I run code if a promise is fullfilled or rejected
// ans: then

const willGetYouKachchi = new Promise((resolve, reject) => {
    const random = Math.random();
    if(random >= 0.5) resolve();
    else reject();
});

// then will work when the promise is resolved

willGetYouKachchi.then(() => {
    console.log('Yay Kachchi Paisi');
});

// catch will work when the promise is rejected

willGetYouKachchi.catch(() => {
    console.log('No Kachchi for you');
});
    