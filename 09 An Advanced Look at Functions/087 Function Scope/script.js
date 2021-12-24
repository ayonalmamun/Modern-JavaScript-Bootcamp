function lol() {
    let person = 'Tom';
    const age = 45;
    var color = 'red';
    console.log(age);
}
// console.log(person); // error: person is not defined

function changeColor() {
    let color = 'purple';
    const age = 19;
    console.log(age);
}

lol();
changeColor();

// we can see, we got unique value of age from two different functions.


let bird = 'habu';

function birdWatch() {
    let bird = 'kabila';
    console.log(bird);
}

birdWatch();
console.log(bird);

// we can see we can define variables with same name(one in global and one in local(function)).
// in this example, let, const and var will act in the same way.