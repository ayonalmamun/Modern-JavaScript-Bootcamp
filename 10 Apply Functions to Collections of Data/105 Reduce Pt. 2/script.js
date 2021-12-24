const grades = [87, 64, 96, 92, 88, 99, 74];

// const maxGrade = grades.reduce((max, currentValue) => {
//     if(currentValue > max) return currentValue;
//     return max;
// });

// console.log(maxGrade);

// refactor

const maxGrade = grades.reduce((max, currentValue) => {
    return(Math.max(max, currentValue));
});

console.log(maxGrade);


// ******
const arr = [10, 20, 30, 40, 50];
const sum = arr.reduce((sum, currentValue) => {
    return sum + currentValue;
}, 100);
// specifying this "100" means accumulator will be 100 at the beginning and currentValue is the zero index of the array at the start
console.log(sum);
// ******