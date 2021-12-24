// function callThreeTimes(func) {
//     func();
//     func();
//     func();
// }

// function laugh() {
//     console.log('hahaha')
// };

// callThreeTimes(laugh);

function callNTimes(action, num) {
    for(let i = 0; i < num; i++) {
        action();
    }
}

function laugh() {
    console.log('hahaha');
};

function cry() {
    console.log('baa baa baa');
};

callNTimes(laugh, 5);

function pickOne(f1, f2) {
    let random = Math.random();
    console.log(random);
    if(random < 0.5) f1();
    else f2();
}

pickOne(laugh, cry);