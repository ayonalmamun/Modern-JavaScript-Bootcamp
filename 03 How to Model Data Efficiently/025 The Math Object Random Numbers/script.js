let step1 = Math.random();
console.log(step1);
let step2 = step1 * 10;
console.log(step2);
let step3 = Math.floor(step2);
console.log(step3);
let step4 = step3 + 1;
console.log(step4);

// another example - dice roll (doing all steps in a single line)
let diceRoll = Math.floor(Math.random() * 6) + 1;
console.log(`Number of Dice: ${diceRoll}`);