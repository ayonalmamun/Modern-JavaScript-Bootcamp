// my version

function average(numbers) {
    let sum = 0;
    numbers.forEach(number => {
        sum += number;
    });
    return sum / numbers.length;
}

// colt version

// function avg(arr) {
//     let total = 0;
//     for(let num of arr) {
//         total += num;
//     }
//    return total / arr.length;
// }

const arrayOfNumbers = [10, 20, 30, 1];
const result = average(arrayOfNumbers); // for mine
// const result = avg(arrayOfNumbers); // for colt
console.log(result);