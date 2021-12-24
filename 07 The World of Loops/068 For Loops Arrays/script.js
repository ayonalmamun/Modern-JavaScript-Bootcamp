const bachelors = ['habu', 'arefin', 'nehal', 'shuvo', 'kabila'];

for(let i=0; i<bachelors.length; i++) {
    console.log(bachelors[i]);
}

const myFriends = [
    {
        name: 'Kabila',
        cg: 3.8
    },
    {
        name: 'Habu',
        cg: 3.6
    },
    {
        name: 'Discount',
        cg: 3.5
    },
];

//simple

// for(let i=0; i<myFriends.length; i++) {
//     console.log(myFriends[i].name, myFriends[i].cg);
// }

for(let i=0; i<myFriends.length; i++) {
    let friend = myFriends[i];
    console.log(`${friend.name} scored ${friend.cg}`);
}

// string reverse
const word = 'stressed';
let reversedWord = '';

console.log(word);

for(let i=word.length-1; i>=0; i--) {
    reversedWord += word[i]; 
}

console.log(reversedWord);


// sum & avg

let totalCG = 0;

for(let i=0; i<myFriends.length; i++) {
    totalCG += myFriends[i].cg;
}

console.log(totalCG);
console.log(`Average: ${totalCG/myFriends.length}`);

// how to see two digit after decimal
console.log(`Average: ${(totalCG/myFriends.length).toFixed(2)}`);
