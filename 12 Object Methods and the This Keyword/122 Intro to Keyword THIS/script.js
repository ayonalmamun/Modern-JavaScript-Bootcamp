function sayHi() {
    console.log('Hi');
    console.log(this); // window, global scope of the browser. you can see sayHi() in window.
}

sayHi();

var color = 'red';
console.log(window); // you will see, there is color in window
console.log(window.color);
// you cannot do this with const or let


const greet = () => console.log(this); // referring to window

greet();