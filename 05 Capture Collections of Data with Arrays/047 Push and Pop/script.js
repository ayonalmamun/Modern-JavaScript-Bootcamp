let songList = [
    'Careless Whisper', 
    'The Call',
    'Season in the Sun'
];

console.log(songList);

songList.push('Numb'); // add a new item at the end of the array

console.log(songList);

songList.push(true); // this is valid. if we do it on console, it will return the new length of the array.

console.log(songList);

songList.pop(); // removes last item of the array. if we do it on console, it will return the value which was popped.

console.log(songList);

let removedItem = songList.pop(); // stores what was popped from the array.

console.log(removedItem);
console.log(songList);
