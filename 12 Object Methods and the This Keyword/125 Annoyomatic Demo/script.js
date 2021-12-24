// const annoyer = {
//     phrases: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't Stop, Won't Stop"],
//     pickPhrase() {
//         const {
//             phrases
//         } = this;
//         const idx = Math.floor(Math.random() * phrases.length);
//         return phrases[idx];
//     },
//     start() {
//         console.log(this.pickPhrase()); // it will work

//         // setInterval(func, 3000) // function, interval
//         setInterval(function() {
//             console.log(this); // referring to window, because it is called by setInterval, it has a new 'this' which is window
//             console.log(this.pickPhrase()) // Uncaught TypeError: this.pickPhrase is not a function
//         }, 2000)
//     },
//     stop() {

//     }
// };

// annoyer.start();


// solve

// use arrow function and it will work because arrow function doesn't have his own this. so it will refer to the nearest object.

// const annoyer = {
//     phrases: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't Stop, Won't Stop"],
//     pickPhrase() {
//         const {
//             phrases
//         } = this;
//         const idx = Math.floor(Math.random() * phrases.length);
//         return phrases[idx];
//     },
//     start() {
//         setInterval(() => {
//             console.log(this.pickPhrase()) 
//         }, 2000)
//     },
//     stop() {
        
//     }
// };

// annoyer.start();


// stop the start()

const annoyer = {
    phrases: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't Stop, Won't Stop"],
    pickPhrase() {
        const {
            phrases
        } = this;
        const idx = Math.floor(Math.random() * phrases.length);
        return phrases[idx];
    },
    start() {
        this.timerId = setInterval(() => {
            console.log(this.pickPhrase()) 
        }, 2000)
    },
    stop() {
        clearInterval(this.timerId);
        console.log('THANKS!')
    }
};

console.log(annoyer); // you can see there is a timerId

annoyer.start();

// annoyer.stop(); // use it on browser console
