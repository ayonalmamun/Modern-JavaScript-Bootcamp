const feline = {
    legs: 4,
    family: 'Felidae'
};
  
const canine = {
    family: 'Caninae',
    furry: true,
    legs: 4
};

const dog = {
    ...canine,
    isPet: true,
    adorable: false
};

console.log(canine);
console.log(dog);

const cat = {
    ...feline,
    isGrumpy: true,
    personality: 'unpredictable'
};

console.log(feline);
console.log(cat);

// orders matters here, because those objects have some similar property. so the second object is just replacing value of the similar property.

const catDog = {
    ...canine,
    ...feline
}; 

console.log(catDog); // output: {family: 'Felidae', furry: true, legs: 4}

// a variable(object) which is copy of two objects can be copied by another variable with spread and they will be different references.

const catDogClone = {
    ...catDog
};

console.log(catDogClone);

// what if we spread an object of array

console.log({...[4, 6, 2]}); // {0: 4, 1: 6, 2: 2} Array is broken and indices are now key values of the object.
console.log({...'abcd'}); // {0: 'a', 1: 'b', 2: 'c', 3: 'd'} same output like array.

const random = [...'hello', {
    ...catDog
}];

console.log(random); // index 0 to 4 are string. 5th index is an object


