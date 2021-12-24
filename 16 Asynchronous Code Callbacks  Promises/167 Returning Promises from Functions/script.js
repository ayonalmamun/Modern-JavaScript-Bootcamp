// const willGetYouKachchi = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const random = Math.random();
//         if(random >= 0.5) resolve();
//         else reject();
//     }, 3000)
// });

// // then will work when the promise is resolved

// willGetYouKachchi.then(() => {
//     console.log('Yay Kachchi Paisi');
// });

// // catch will work when the promise is rejected

// willGetYouKachchi.catch(() => {
//     console.log('No Kachchi for you');
// });
    

// you can check the promise status before 3 sec by typing in chrome console:

// willGetYouKachchi

// you can also check the promise status after 3 sec by typing the same thing in chrome console


// writing function that returns promise

const willGetYouKachchi = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.random();
            if(random >= 0.5) resolve();
            else reject();
        }, 3000);
    });
};

willGetYouKachchi()
    .then(() => {
        console.log('Yay Kachchi Paisi');
    })
    .catch(() => {
        console.log('No Kachchi for you');
    });