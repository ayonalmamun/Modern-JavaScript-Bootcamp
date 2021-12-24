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
				'/users/8737'      : {
					id        : 8737,
					username  : 'Habu Miya',
					cg        : 3.6,
					city      : 'Barishal',
					postId : 454321
				},
				'/users/9085'      : {
					id       : 9085,
					username : 'Kabila',
					cg       : 3.8,
					city     : 'Comilla'
				},
				'/posts/454321' : {
					id    : 454321,
					title :
						'Habu ar Kabila chor.'
				},
                '/about': 'developed by Ayon'
            }
            const data = pages[url];
            if(data) resolve({status: 200, data});
            else reject({status: 404})
        }, 1000);
    });
};

// promise chaining v1

// fakeRequest('/users').then((res) => {
//     // console.log(res.data[0].id);
//     fakeRequest(`/users/${res.data[0].id}`).then((res) => {
//         // console.log(res);
//         const postId = res.data.postId;
//         console.log(postId);
//         fakeRequest(`/posts/${postId}`).then((res) => {
//             console.log(res);
//         }).catch((err) => {
//             console.log(err);
//             console.log('Request Failed');
//         });
//     }).catch((err) => {
//         console.log(err);
//         console.log('Request Failed');
//     });
// }).catch((err) => {
//     console.log(err);
//     console.log('Request Failed');
// });


// promise chaining v2

// fakeRequest('/ausers') // err
fakeRequest('/users')
    .then((res) => {
        console.log(res);
        const id = res.data[0].id;
        // return fakeRequest(`/ausers/${id}`) // err
        return fakeRequest(`/users/${id}`)
    })
    .then((res) => {
        console.log(res);
        const postId = res.data.postId;
        // return fakeRequest(`/posts/${postId}`) // err
        return fakeRequest(`/posts/${postId}`)
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
        console.log('Request Failed');
    });