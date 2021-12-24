let people = ['Sam', 'Yasin', 'Napa', 'Ayon', 'Natai'];

console.log(people); // ["Sam", "Yasin", "Napa", "Ayon", "Natai"]

people.sort(); // this time it will sort alphabetically. if you do it on console, you will see that, it will return the sorted array.

console.log(people); // ["Ayon", "Napa", "Natai", "Sam", "Yasin"]

let num = [5000, 20, 10, 40, 83];

console.log(num.sort()); // [10, 20, 40, 5000, 83]

// it is not sorted properly. because sort() converts everything to string and compare the sequences of UTF-16 code units values.

