const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];

const mollusca = [...cephalopods, ...gastropods] // create new array by merging these two array using spread
console.log(mollusca);

// we can also add elements and also use spread to copy arrays in the new array

const random = ['habu', ...cephalopods, ...gastropods];
console.log(random);

const inverts = [...cnidaria, ...gastropods, ...cephalopods] // merge three array into one new array using spread

// btw concat works as the same. for example 

const mollusca2 = cephalopods.concat(gastropods);
console.log(mollusca2);
console.log(cephalopods);

// but it is easier in spread because of shorter syntax and easy to reorder.

// use of spread is copy an array

const cephCopy = [...cephalopods]; // cline the array and whole new reference.
console.log(cephCopy === cephalopods); // it will be false as they are not the same reference.

const refCopy = cephalopods;
console.log(refCopy === cephalopods); // it will be true as they are pointing at the same reference of the memory.

// another example

const letters = 'abcdefgh';
console.log(letters.split('')); // output: (8) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

// with spread
console.log([...letters]); // output: (8) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

const mixUp = [...'abc', ...'def', 'hello'];
console.log(mixUp); // output: (7) ['a', 'b', 'c', 'd', 'e', 'f', 'hello']