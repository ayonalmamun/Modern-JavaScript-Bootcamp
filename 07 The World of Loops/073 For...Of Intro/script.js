// for (variable of iterable) {
//     statement
// }

let team = [ 'hinata', 'kageyama', 'daichi', 'nishinoya'];

// for loop

console.log('  for loop');

for(let i = 0; i < team.length; i++) {
    console.log(team[i]);
}

// for of

console.log('  for of');

for(let members of team) {
    console.log(members);
}

// another example of for of

for(let char of 'hello ayon') {
    console.log(char.toUpperCase());
}