// function makeDeck() {
//     const deck = [];
//     const suits = ['spades', 'hearts', 'diamonds', 'clubs'];
//     const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';

//     for(let value of values.split(',')) {
//         for(let suit of suits) {
//             deck.push({
//                 value,
//                 suit
//             });
//         }
//     }
//     return deck;
// };

// function drawCard(deck) {
//     return deck.pop(); // it will pop the last element of the array. A of Clubs
// }

// const myDeck = makeDeck();

// const card1 = drawCard(myDeck);

// console.log(card1);

// console.log(myDeck); // we will see, we have 51 cards. As one of the card was drawn. 'A' of 'Clubs'

const myDeck = {
    deck: [],
    drawnCard: [],
    suits: ['spades', 'hearts', 'diamonds', 'clubs'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    initializeDeck() {
        const {suits,
            values,
            deck
        } = this;
        for(let value of values.split(',')) {
            for(let suit of suits) {
                deck.push({
                    value,
                    suit
                });
            }
        }
    },
    drawCard() {
        const card = this.deck.pop();
        this.drawnCard.push(card);
        return card;
    },
    drawMultiple(numCards) {
        const cards = [];
        for(let i = 0; i < numCards; i ++) cards.push(this.drawCard());
        return cards;
    }
}

myDeck.initializeDeck();

// console.log(myDeck);
// console.log(myDeck.deck); // it will show 52 card if you comment line #70, otherwise it will show 50 cards. Because array is reference.

myDeck.drawCard(); // draw a card
myDeck.drawCard(); // draw a card
myDeck.drawMultiple(4); // draw 4 cards
const cards = myDeck.drawnCard;
console.log(cards);
console.log(myDeck.deck);