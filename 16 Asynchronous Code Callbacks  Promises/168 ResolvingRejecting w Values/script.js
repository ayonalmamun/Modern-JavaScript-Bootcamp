// const fakeRequest = (url) => {
//     return new Promise((resolve, reject)=> {
//         setTimeout(() => {
//             const random = Math.random();
//             if(random < 0.3) reject({status: 400})
//             else resolve({status: 200});
//         }, 3000);
//     });
// };

// fakeRequest()
//     .then((res) => {
//         console.log(res.status);
//         console.log('Request Worked');
//     })
//     .catch((res) => {
//         console.log(res.status);
//         console.log('Request Failed');
//     });


// more fake data

// const fakeRequest = (url) => {
//     return new Promise((resolve, reject)=> {
//         setTimeout(() => {
//             const random = Math.random();
//             if(random < 0.3) reject({status: 400})
//             else {
//                 const pages = {
//                     '/users': [
//                         {
//                             id: 8737,
//                             name: 'Habu Miya'
//                         },
//                         {
//                             id: 9085,
//                             name: 'Kabila'
//                         }
//                     ],
//                     '/about': 'developed by Ayon'
//                 }
//                 const data = pages[url];
//                 resolve({status: 200, data});
//             }
//         }, 3000);
//     });
// };

// fakeRequest('/about')
//     .then((res) => {
//         console.log(res.status);
//         console.log(res.data);
//         console.log('Request Worked');
//     })
//     .catch((res) => {
//         console.log(res.status);
//         console.log('Request Failed');
//     });


// much more realistic fake data

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pages = {
                '/users': [
                    {
                        id: 8737,
                        name: 'Habu Miya'
                    },
                    {
                        id: 9085,
                        name: 'Kabila'
                    }
                ],
                '/about': 'developed by Ayon'
            }
            const data = pages[url];
            if(data) resolve({status: 200, data});
            else reject({status: 404})
        }, 3000);
    });
};

fakeRequest('/users')
    .then((res) => {
        console.log(res.status);
        console.log(res.data);
        console.log('Request Worked');
    })
    .catch((res) => {
        console.log(res.status);
        console.log('Request Failed');
    });


fakeRequest('/aaa')
    .then((res) => {
        console.log(res.status);
        console.log(res.data);
        console.log('Request Worked');
    })
    .catch((res) => {
        console.log(res.status);
        console.log('Request Failed');
    });