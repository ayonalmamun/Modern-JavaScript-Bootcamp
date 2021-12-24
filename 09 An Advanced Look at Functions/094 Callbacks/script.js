// if we pass a function to another function and it is executed in that function, it is called callback.

// function greeting() {
//     alert('hi');
// };

// setTimeout(greeting, 5000); // execute this function after 5 seconds

setTimeout(() => { // anonymous function, arrow function and callback.
    alert('yo');
}, 5000);

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    alert('why did you click?');
});