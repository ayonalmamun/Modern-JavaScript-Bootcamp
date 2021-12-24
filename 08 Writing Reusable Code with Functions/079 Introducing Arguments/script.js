function greet(nickname) {
    console.log(`Hi ${ nickname }`);
}

greet('Habu');
greet(); // Output: Hi undefined

function rollDice() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${ roll }`);
}

function throwDice(numOfRolls) {
    for(let i = 0; i < numOfRolls; i++) {
        rollDice();
    }
}

throwDice(10);