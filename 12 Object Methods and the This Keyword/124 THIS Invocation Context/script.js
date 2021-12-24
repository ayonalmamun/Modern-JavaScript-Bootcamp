const person = {
    first: 'redwan',
    last: 'sharafat',
    nickName: 'habu',
    fullName () {
        const {
            first,
            last,
            nickName
        } = this;
        return `${first} ${last} AKA ${nickName}`;
    },
    printBio() {
        console.log(this);
        const fullName = this.fullName();
        console.log(`${fullName} is a boss android dev`);
        // return `${fullName} is a boss android dev`; // for line 24, 25
    },
    laugh: () => {
        console.log(this); // window
        console.log(`${this.nickName} says Hahaha`); // undefined  says Hahaha
        // it happens because of arrow function
        // this is why we don't use arrow function as method in an object
    }
};

// const printBio = person.printBio;
// printBio(); // Uncaught TypeError: this.fullName is not a function. because this is set to the global execution scope, the window

// const printBio = person.printBio();
// console.log(printBio);

person.printBio();
person.laugh(); 