// const person = {
//     first: 'redwan',
//     last: 'sharafat',
//     nickName: 'habu',
//     fullName () {
//         console.log(this);
//     } 
// };

// person.fullName(); // it is logging the whole person object

// const person = {
//     first: 'redwan',
//     last: 'sharafat',
//     nickName: 'habu',
//     fullName () {
//         console.log(this.nickName);
//     } 
// };

// person.fullName(); // it is logging the person's nickname


// const person = {
//     first: 'redwan',
//     last: 'sharafat',
//     nickName: 'habu',
//     fullName () {
//         console.log(`${this.first} ${this.last} AKA ${this.nickName}`);
//     } 
// };

// person.fullName(); // log full name


// destructure

// const person = {
//     first: 'redwan',
//     last: 'sharafat',
//     nickName: 'habu',
//     fullName () {
//         const {first, last, nickName} = this
//         console.log(`${first} ${last} AKA ${nickName}`);
//     } 
// };

// person.fullName();

// person.nickName = 'habu miya'

// person.fullName();


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
        const fullName = this.fullName(); // accessing the fullName method. we cannot do it without 'this'
        console.log(`${fullName} is a boss android dev`);
    }
};

person.fullName();

person.printBio();

person.nickName = 'habu miya'

person.fullName();