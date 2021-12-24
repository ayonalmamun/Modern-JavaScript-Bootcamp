// initial value, when to run the loop, how to change value each time

for(let i = 1; i <= 10; i++) {
    console.log('Hi:', i);
}

for(let i = 1; i <= 10; i+= 3) { // i = i + 3
    console.log('Hi:', i);
}

// simple multiplication

// for(let i = 1; i <= 10; i++) {
//     console.log(i + " * " + i + " =", i * i);
// }

// simple multiplication advanced way

for(let i = 1; i <= 10; i++) {
    console.log(`${i} * ${i} = ${i * i}`);
}


for(let i = 200; i >= 0; i-= 25) {
    console.log(i);
}