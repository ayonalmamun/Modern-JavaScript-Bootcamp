const student = {
    firstName: 'David',
    lastName: 'Jones',
    strengths: ['attentive', 'math'],
    exams: {
        midterm: 85,
        final: 82
    }
};

let average = (student.exams.midterm + student.exams.final) / 2;

console.log(average);

console.log(student.strengths[1]);



// array of objects
const shoppingCart = [
    {
        product : 'Resident Evil Village',
        price : 59.99,
        quantity : 1
    },
    {
        product : 'Elder Scrolls Online',
        price : 84.99,
        quantity : 3
    },
    {
        product : 'Scarlet Nexus',
        price : 49.99,
        quantity : 2
    }
];

// array of arrays
let tickTackToe = [
    ['0', null, 'X'],
    ['X', '0', 'X'],
    [null, '0', 'X']
];

// object 
const game = {
    player1 : {
        name: 'Habu',
        playingAs : 'X'
    },
    player2 : {
        name: 'Kabila',
        playingAs : '0'
    },
    board : [
        ['0', null, 'X'],
        ['X', '0', 'X'],
        [null, '0', 'X']
    ]
};