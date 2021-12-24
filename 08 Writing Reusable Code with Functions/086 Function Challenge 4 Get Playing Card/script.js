function pick(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function getCard() {
   const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
   const suits = ['spades', 'hearts', 'diamonds', 'clubs'];
   
   return { value: pick(values), suit: pick(suits) };
}

const card = getCard();
console.log(card);